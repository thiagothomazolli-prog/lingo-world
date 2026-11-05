import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { sound } from './audio';
import { createHeroLingo, createWordPortal, createCollectibleCrystal, createSpaceObstacle } from './models';
import { Volume2, VolumeX, Pause, Play, RotateCcw, X, Sparkles, Trophy, Heart } from 'lucide-react';

interface LingoGameViewProps {
  onClose: () => void;
  onAwardGameRewards: (xp: number, gems: number) => void;
}

type GameState = 'title' | 'playing' | 'paused' | 'gameover' | 'victory';

interface WordChallenge {
  promptPt: string;
  correctEn: string;
  distractorEn: string;
}

const VOCAB_CHALLENGES: WordChallenge[] = [
  { promptPt: 'Obrigado', correctEn: 'THANK YOU', distractorEn: 'SORRY' },
  { promptPt: 'Por favor', correctEn: 'PLEASE', distractorEn: 'EXCUSE ME' },
  { promptPt: 'Bom dia', correctEn: 'GOOD MORNING', distractorEn: 'GOOD NIGHT' },
  { promptPt: 'Amigo', correctEn: 'FRIEND', distractorEn: 'STRANGER' },
  { promptPt: 'Água', correctEn: 'WATER', distractorEn: 'FIRE' },
  { promptPt: 'Aprender', correctEn: 'LEARN', distractorEn: 'FORGET' },
  { promptPt: 'Mundo', correctEn: 'WORLD', distractorEn: 'STREET' },
  { promptPt: 'Conquista', correctEn: 'ACHIEVEMENT', distractorEn: 'PROBLEM' },
];

export const LingoGameView: React.FC<LingoGameViewProps> = ({
  onClose,
  onAwardGameRewards,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // High-level React Game State
  const [gameState, setGameState] = useState<GameState>('title');
  const [score, setScore] = useState(0);
  const [gemsCollected, setGemsCollected] = useState(0);
  const [streak, setStreak] = useState(0);
  const [shields, setShields] = useState(3);
  const [currentChallenge, setCurrentChallenge] = useState<WordChallenge>(VOCAB_CHALLENGES[0]);
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [hitFlash, setHitFlash] = useState(false);

  // Mutable Game Loop references (Never trigger React re-renders in 60fps loop)
  const gameRef = useRef({
    state: 'title' as GameState,
    score: 0,
    gemsCollected: 0,
    streak: 0,
    shields: 3,
    challengeIndex: 0,
    playerLane: 0, // -1: Left, 0: Center, 1: Right
    targetX: 0,
    playerX: 0,
    playerY: 0,
    isJumping: false,
    jumpVelocity: 0,
    speed: 18,
    distanceTravelled: 0,
    cameraShake: 0,
    hitstopFrames: 0,
    keys: {
      left: false,
      right: false,
      jump: false,
    },
    // Spawned entities
    portals: [] as {
      group: THREE.Group;
      z: number;
      lane: number;
      isCorrect: boolean;
      checked: boolean;
    }[],
    crystalItems: [] as {
      group: THREE.Group;
      mesh: THREE.Mesh;
      z: number;
      lane: number;
      collected: boolean;
    }[],
    obstacles: [] as {
      mesh: THREE.Mesh;
      z: number;
      lane: number;
      hit: boolean;
    }[],
  });

  // Toggle Mute
  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  // Start Playing
  const handleStartGame = () => {
    sound.startAmbient();
    const g = gameRef.current;
    g.state = 'playing';
    g.score = 0;
    g.gemsCollected = 0;
    g.streak = 0;
    g.shields = 3;
    g.distanceTravelled = 0;
    g.challengeIndex = 0;
    g.speed = 20;

    setScore(0);
    setGemsCollected(0);
    setStreak(0);
    setShields(3);
    setCurrentChallenge(VOCAB_CHALLENGES[0]);
    setGameState('playing');
  };

  const handlePauseToggle = () => {
    if (gameState === 'playing') {
      gameRef.current.state = 'paused';
      setGameState('paused');
    } else if (gameState === 'paused') {
      gameRef.current.state = 'playing';
      setGameState('playing');
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Detect software WebGL guard
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // 1. Scene, Camera, Renderer
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a); // Deep slate space
    scene.fog = new THREE.FogExp2(0x0f172a, 0.018);

    const camera = new THREE.PerspectiveCamera(58, width / height, 0.1, 200);
    camera.position.set(0, 4.2, 7.5);
    camera.lookAt(0, 1.5, -4);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    mountRef.current.appendChild(renderer.domElement);

    // 2. Studio Environment & Lighting
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    const keyLight = new THREE.DirectionalLight(0xffedd5, 2.2); // Warm key
    keyLight.position.set(10, 20, 15);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const hemiLight = new THREE.HemisphereLight(0x818cf8, 0x0f172a, 0.85); // Cool sky + dark ground
    scene.add(hemiLight);

    // 3. Cosmic Highway / Floating Pathway
    const trackWidth = 8.5;
    const trackLength = 220;

    const trackGeo = new THREE.PlaneGeometry(trackWidth, trackLength, 1, 64);
    const trackMat = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b, // Cosmic navy
      roughness: 0.4,
      metalness: 0.6,
    });
    const trackMesh = new THREE.Mesh(trackGeo, trackMat);
    trackMesh.rotation.x = -Math.PI / 2;
    trackMesh.position.set(0, 0, -trackLength / 2 + 10);
    trackMesh.receiveShadow = true;
    scene.add(trackMesh);

    // Lane dividing glowing lines
    [-1.4, 1.4].forEach((lineX) => {
      const lineGeo = new THREE.PlaneGeometry(0.12, trackLength);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0x6366f1 });
      const lineMesh = new THREE.Mesh(lineGeo, lineMat);
      lineMesh.rotation.x = -Math.PI / 2;
      lineMesh.position.set(lineX, 0.02, -trackLength / 2 + 10);
      scene.add(lineMesh);
    });

    // 4. Hero Lingo Model
    const heroData = createHeroLingo();
    const hero = heroData.group;
    hero.position.set(0, 0, 0);
    scene.add(hero);

    // Contact shadow beneath Lingo
    const shadowGeo = new THREE.PlaneGeometry(1.6, 1.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.4,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = 0.01;
    scene.add(shadowMesh);

    // 5. Procedural Starfield Particle Cloud
    const starCount = 350;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 80;
      starPositions[i + 1] = Math.random() * 30 + 1;
      starPositions[i + 2] = -Math.random() * 180 + 20;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.4,
      transparent: true,
      opacity: 0.75,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 6. Spawn Encounter Track (Word gates, crystals, and obstacles)
    const laneXCoordinates = [-2.8, 0, 2.8]; // Left, Center, Right lanes

    const spawnTrackEntities = () => {
      // Clear old
      gameRef.current.portals.forEach((p) => scene.remove(p.group));
      gameRef.current.crystalItems.forEach((g) => scene.remove(g.group));
      gameRef.current.obstacles.forEach((o) => scene.remove(o.mesh));
      gameRef.current.portals = [];
      gameRef.current.crystalItems = [];
      gameRef.current.obstacles = [];

      let spawnZ = -25;
      VOCAB_CHALLENGES.forEach((challenge) => {
        // Create dual portals: one correct, one distractor
        const correctOnLeft = Math.random() > 0.5;
        const leftLane = -1;
        const rightLane = 1;

        const leftPortal = createWordPortal(
          correctOnLeft ? challenge.correctEn : challenge.distractorEn,
          correctOnLeft
        );
        leftPortal.group.position.set(laneXCoordinates[0], 0, spawnZ);
        scene.add(leftPortal.group);

        const rightPortal = createWordPortal(
          !correctOnLeft ? challenge.correctEn : challenge.distractorEn,
          !correctOnLeft
        );
        rightPortal.group.position.set(laneXCoordinates[2], 0, spawnZ);
        scene.add(rightPortal.group);

        gameRef.current.portals.push(
          {
            group: leftPortal.group,
            z: spawnZ,
            lane: leftLane,
            isCorrect: correctOnLeft,
            checked: false,
          },
          {
            group: rightPortal.group,
            z: spawnZ,
            lane: rightLane,
            isCorrect: !correctOnLeft,
            checked: false,
          }
        );

        // Put crystals and obstacle along the way
        const gem = createCollectibleCrystal();
        gem.group.position.set(laneXCoordinates[1], 0, spawnZ + 12);
        scene.add(gem.group);
        gameRef.current.crystalItems.push({
          group: gem.group,
          mesh: gem.gemMesh,
          z: spawnZ + 12,
          lane: 0,
          collected: false,
        });

        // Obstacle
        const obs = createSpaceObstacle();
        const obsLane = Math.random() > 0.5 ? 0 : correctOnLeft ? 2 : 0;
        obs.position.set(laneXCoordinates[obsLane], 0, spawnZ + 6);
        scene.add(obs);
        gameRef.current.obstacles.push({
          mesh: obs,
          z: spawnZ + 6,
          lane: obsLane - 1,
          hit: false,
        });

        spawnZ -= 38; // Next encounter
      });
    };

    spawnTrackEntities();

    // 7. Keyboard Input Handling
    const handleKeyDown = (e: KeyboardEvent) => {
      const g = gameRef.current;
      if (e.code === 'Space' || e.code === 'Enter') {
        if (g.state === 'title') {
          handleStartGame();
          return;
        }
      }

      if (e.code === 'Escape') {
        if (g.state === 'playing') {
          g.state = 'paused';
          setGameState('paused');
        } else if (g.state === 'paused') {
          g.state = 'playing';
          setGameState('playing');
        }
        return;
      }

      if (g.state !== 'playing') return;

      if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        if (g.playerLane > -1) {
          g.playerLane -= 1;
          g.targetX = laneXCoordinates[g.playerLane + 1];
        }
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        if (g.playerLane < 1) {
          g.playerLane += 1;
          g.targetX = laneXCoordinates[g.playerLane + 1];
        }
      } else if ((e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') && !g.isJumping) {
        g.isJumping = true;
        g.jumpVelocity = 11;
        sound.playJump();
      }
    };

    const handleWindowBlur = () => {
      const g = gameRef.current;
      g.keys.left = false;
      g.keys.right = false;
      g.keys.jump = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleWindowBlur);

    // 8. 60fps Clamped Simulation Loop
    const clock = new THREE.Clock();
    let frameId = 0;

    const tick = () => {
      const rawDt = clock.getDelta();
      const dt = Math.min(rawDt, 0.05); // Clamp dt to prevent tunneling
      const g = gameRef.current;

      // Handle hitstop pause on impact
      if (g.hitstopFrames > 0) {
        g.hitstopFrames--;
        renderer.render(scene, camera);
        frameId = requestAnimationFrame(tick);
        return;
      }

      const time = clock.getElapsedTime();

      // Wing flapping and idle breathing animation
      heroData.leftWing.rotation.z = 0.2 + Math.sin(time * 8) * 0.15;
      heroData.rightWing.rotation.z = -0.2 - Math.sin(time * 8) * 0.15;

      if (g.state === 'title') {
        // Atmospheric camera orbit
        camera.position.x = Math.sin(time * 0.4) * 3;
        camera.position.z = 7 + Math.cos(time * 0.4) * 1.5;
        camera.lookAt(0, 1.2, 0);
      } else if (g.state === 'playing') {
        // Advance progress forward
        const moveDist = g.speed * dt;
        g.distanceTravelled += moveDist;

        // Player lane smooth horizontal damping
        g.playerX += (g.targetX - g.playerX) * (1 - Math.exp(-14 * dt));
        hero.position.x = g.playerX;
        shadowMesh.position.x = g.playerX;

        // Player bank/tilt while changing lanes
        const rollTarget = (g.targetX - g.playerX) * -0.2;
        hero.rotation.z += (rollTarget - hero.rotation.z) * 0.15;

        // Player Jump Physics
        if (g.isJumping) {
          g.playerY += g.jumpVelocity * dt;
          g.jumpVelocity -= 26 * dt; // Gravity
          if (g.playerY <= 0) {
            g.playerY = 0;
            g.isJumping = false;
            g.jumpVelocity = 0;
          }
        }
        hero.position.y = g.playerY;
        shadowMesh.scale.setScalar(Math.max(0.4, 1 - g.playerY * 0.3));

        // Advance all track entities towards player
        gameRef.current.portals.forEach((p) => {
          p.group.position.z += moveDist;

          // Check passing through portal
          if (!p.checked && p.group.position.z >= -0.5 && p.group.position.z <= 2.5) {
            if (p.lane === g.playerLane) {
              p.checked = true;
              if (p.isCorrect) {
                // Correct word choice!
                g.score += 50;
                g.streak += 1;
                g.challengeIndex = (g.challengeIndex + 1) % VOCAB_CHALLENGES.length;
                sound.playCorrectWord();
                setScore(g.score);
                setStreak(g.streak);
                setCurrentChallenge(VOCAB_CHALLENGES[g.challengeIndex]);
              } else {
                // Wrong portal choice!
                g.shields--;
                g.streak = 0;
                g.cameraShake = 0.35;
                g.hitstopFrames = 3;
                sound.playHit();
                setShields(g.shields);
                setStreak(0);
                setHitFlash(true);
                setTimeout(() => setHitFlash(false), 200);

                if (g.shields <= 0) {
                  g.state = 'gameover';
                  setGameState('gameover');
                  onAwardGameRewards(g.score, g.gemsCollected);
                }
              }
            }
          }
        });

        // Gem collection check
        gameRef.current.crystalItems.forEach((gem) => {
          gem.group.position.z += moveDist;
          gem.mesh.rotation.y += 3.5 * dt;

          if (!gem.collected && Math.abs(gem.group.position.z) < 1.4 && gem.lane === g.playerLane) {
            gem.collected = true;
            gem.group.visible = false;
            g.gemsCollected += 2;
            g.score += 20;
            sound.playCollect();
            setGemsCollected(g.gemsCollected);
            setScore(g.score);
          }
        });

        // Obstacle collision check
        gameRef.current.obstacles.forEach((obs) => {
          obs.mesh.position.z += moveDist;
          obs.mesh.rotation.x += 1.5 * dt;

          if (
            !obs.hit &&
            Math.abs(obs.mesh.position.z) < 1.2 &&
            obs.lane === g.playerLane &&
            g.playerY < 0.6 // Can jump over low obstacle!
          ) {
            obs.hit = true;
            g.shields--;
            g.cameraShake = 0.45;
            g.hitstopFrames = 4;
            sound.playHit();
            setShields(g.shields);
            setHitFlash(true);
            setTimeout(() => setHitFlash(false), 200);

            if (g.shields <= 0) {
              g.state = 'gameover';
              setGameState('gameover');
              onAwardGameRewards(g.score, g.gemsCollected);
            }
          }
        });

        // Check Victory after all challenges
        const lastPortal = gameRef.current.portals[gameRef.current.portals.length - 1];
        if (lastPortal && lastPortal.group.position.z > 5 && g.shields > 0) {
          g.state = 'victory';
          setGameState('victory');
          onAwardGameRewards(g.score + 100, g.gemsCollected + 20);
        }

        // Camera follow with subtle shake
        let shakeOffset = 0;
        if (g.cameraShake > 0) {
          shakeOffset = (Math.random() - 0.5) * g.cameraShake;
          g.cameraShake *= 0.88;
        }

        camera.position.x = g.playerX * 0.45 + shakeOffset;
        camera.position.y = 4.2 + g.playerY * 0.3 + shakeOffset;
        camera.position.z = 7.5;
        camera.lookAt(g.playerX * 0.3, 1.4, -6);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    // Resize Handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('resize', handleResize);
      sound.stopAmbient();
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black select-none overflow-hidden font-sans">
      {/* 3D WebGL Canvas Mount Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Hit flash visual overlay */}
      {hitFlash && (
        <div className="absolute inset-0 bg-rose-600/30 pointer-events-none transition-opacity duration-150" />
      )}

      {/* 1. TITLE SCREEN SHELL */}
      {gameState === 'title' && (
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 pointer-events-none z-10">
          {/* Top Lockup Bar */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                3D
              </span>
              <span className="text-white font-extrabold tracking-wider text-xs uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                Lingo World • Modo Aventura
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleMute}
                className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors cursor-pointer"
                title="Ativar/Desativar Som"
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors cursor-pointer"
                title="Sair do Jogo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central Title Lockup over 35% negative space */}
          <div className="text-center max-w-xl mx-auto space-y-4">
            <div className="inline-block">
              {/* Bespoke inline SVG Title */}
              <svg viewBox="0 0 460 70" className="w-full max-w-md mx-auto drop-shadow-xl">
                <defs>
                  <linearGradient id="title-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#F43F5E" />
                  </linearGradient>
                </defs>
                <text
                  x="230"
                  y="50"
                  textAnchor="middle"
                  fill="url(#title-grad)"
                  fontSize="48"
                  fontWeight="900"
                  letterSpacing="2"
                  fontFamily="system-ui, sans-serif"
                >
                  LINGO RUNNER 3D
                </text>
              </svg>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-medium max-w-md mx-auto">
              Voe com o mascote Lingo pela rodovia cósmica, atravesse os portais corretos de vocabulário e colete gemas estelares!
            </p>

            <div className="pt-2">
              <button
                onClick={handleStartGame}
                className="pointer-events-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 hover:from-indigo-600 hover:to-teal-500 text-white font-black text-lg rounded-2xl shadow-2xl transition-transform active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <Play className="w-6 h-6 fill-white" />
                <span>INICIAR MISSÃO CÓSMICA</span>
              </button>
            </div>
          </div>

          {/* Bottom Flat Control Hint Line */}
          <div className="text-center text-xs text-slate-400 font-mono tracking-wider">
            [A / D] Mover Faixas &nbsp;•&nbsp; [ESPAÇO / W] Pular Obstáculos &nbsp;•&nbsp; [ESC] Pausar
          </div>
        </div>
      )}

      {/* 2. IN-GAME LOW-OCCLUSION HUD (85%+ playfield unobstructed) */}
      {gameState === 'playing' && (
        <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between z-10">
          {/* Top Status Cluster */}
          <div className="flex items-start justify-between">
            {/* Target Vocabulary Word Box */}
            <div className="bg-slate-900/85 border border-indigo-500/40 rounded-2xl p-3.5 shadow-xl text-white max-w-xs pointer-events-auto">
              <span className="text-[10px] font-black uppercase text-indigo-400 tracking-wider block">
                Atravesse o Portal Correto:
              </span>
              <div className="text-base sm:text-lg font-black text-amber-300">
                "{currentChallenge.promptPt}"
              </div>
            </div>

            {/* Score & Health Cluster */}
            <div className="flex items-center gap-3 pointer-events-auto">
              <div className="bg-slate-900/85 border border-slate-700/60 rounded-2xl px-4 py-2 text-white flex items-center gap-3 shadow-md">
                {/* Shields */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((s) => (
                    <Heart
                      key={s}
                      className={`w-4 h-4 ${
                        s <= shields ? 'text-rose-500 fill-rose-500' : 'text-slate-600 fill-slate-800'
                      }`}
                    />
                  ))}
                </div>

                <div className="h-4 w-px bg-slate-700" />

                {/* Score */}
                <div className="text-xs font-mono font-black tabular-nums text-sky-400">
                  {score.toString().padStart(4, '0')} <span className="text-slate-400 text-[10px]">PTS</span>
                </div>

                {/* Gems */}
                <div className="text-xs font-mono font-black tabular-nums text-amber-400">
                  💎 {gemsCollected}
                </div>
              </div>

              {/* Pause & Mute controls */}
              <button
                onClick={handlePauseToggle}
                className="p-2.5 rounded-2xl bg-slate-900/85 hover:bg-slate-800 border border-slate-700/60 text-white transition-colors cursor-pointer"
              >
                <Pause className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* On-screen touch buttons for mobile */}
          <div className="flex justify-between items-center sm:hidden pointer-events-auto pb-4">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const g = gameRef.current;
                  if (g.playerLane > -1) {
                    g.playerLane -= 1;
                    g.targetX = [-2.8, 0, 2.8][g.playerLane + 1];
                  }
                }}
                className="w-14 h-14 rounded-2xl bg-white/20 active:bg-white/40 text-white font-bold text-lg flex items-center justify-center backdrop-blur-xs"
              >
                ◀
              </button>
              <button
                onClick={() => {
                  const g = gameRef.current;
                  if (g.playerLane < 1) {
                    g.playerLane += 1;
                    g.targetX = [-2.8, 0, 2.8][g.playerLane + 1];
                  }
                }}
                className="w-14 h-14 rounded-2xl bg-white/20 active:bg-white/40 text-white font-bold text-lg flex items-center justify-center backdrop-blur-xs"
              >
                ▶
              </button>
            </div>

            <button
              onClick={() => {
                const g = gameRef.current;
                if (!g.isJumping) {
                  g.isJumping = true;
                  g.jumpVelocity = 11;
                  sound.playJump();
                }
              }}
              className="w-16 h-14 rounded-2xl bg-indigo-600/80 active:bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-lg"
            >
              PULAR
            </button>
          </div>
        </div>
      )}

      {/* 3. PAUSE MODAL */}
      {gameState === 'paused' && (
        <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center p-4 z-20">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl text-white">
            <h3 className="text-2xl font-black">MISSÃO EM PAUSA</h3>
            <p className="text-xs text-slate-400">
              Descanse a mente. O mundo e seu vocabulário aguardam você!
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handlePauseToggle}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl cursor-pointer"
              >
                Continuar Voo
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm rounded-xl cursor-pointer"
              >
                Sair para o Lingo World
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. GAME OVER MODAL */}
      {gameState === 'gameover' && (
        <div className="absolute inset-0 bg-slate-950/85 flex items-center justify-center p-4 z-20">
          <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl text-white">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto text-2xl">
              💥
            </div>
            <h3 className="text-2xl font-black text-rose-400">Escudos Esgotados!</h3>
            <p className="text-xs text-slate-400">
              Você marcou <strong className="text-white">{score} pontos</strong> e coletou{' '}
              <strong className="text-amber-300">{gemsCollected} Gemas</strong>!
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleStartGame}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Tentar Novamente</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm rounded-xl cursor-pointer"
              >
                Salvar Recompensas e Sair
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. VICTORY MODAL */}
      {gameState === 'victory' && (
        <div className="absolute inset-0 bg-slate-950/85 flex items-center justify-center p-4 z-20">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl text-white">
            <Trophy className="w-14 h-14 text-amber-400 mx-auto animate-bounce" />
            <h3 className="text-2xl font-black text-emerald-400">VITÓRIA CÓSMICA!</h3>
            <p className="text-xs text-slate-300">
              Você dominou todos os portais de vocabulário e conquistou a rodovia estelar!
            </p>
            <div className="p-3 bg-slate-800 rounded-2xl text-xs font-mono text-emerald-300 flex justify-around">
              <span>⚡ +{score + 100} XP</span>
              <span>💎 +{gemsCollected + 20} Gemas</span>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onClose}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 text-white font-extrabold text-sm rounded-xl cursor-pointer"
              >
                Coletar e Voltar à Jornada
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
