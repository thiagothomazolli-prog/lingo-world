import * as THREE from 'three';

// 1. Procedural 12-part composite 3D Mascot Hero: "Lingo"
export function createHeroLingo(): {
  group: THREE.Group;
  leftWing: THREE.Mesh;
  rightWing: THREE.Mesh;
  thrusterLight: THREE.PointLight;
} {
  const group = new THREE.Group();

  // Shared PBR Materials
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x4f46e5, // Royal Indigo
    roughness: 0.35,
    metalness: 0.15,
  });

  const chestMat = new THREE.MeshStandardMaterial({
    color: 0xfdba74, // Peach harness
    roughness: 0.65,
    metalness: 0.05,
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b, // Gold metallic
    roughness: 0.2,
    metalness: 0.85,
  });

  const visorMat = new THREE.MeshPhysicalMaterial({
    color: 0x1e1b4b,
    roughness: 0.1,
    metalness: 0.9,
    clearcoat: 1.0,
  });

  const cyanGlowMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
  });

  const eyeWhiteMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
  });

  const pupilMat = new THREE.MeshBasicMaterial({
    color: 0x0f172a,
  });

  // Part 1: Main Body Silhouette (Egg / Torso)
  const bodyGeo = new THREE.SphereGeometry(0.7, 24, 24);
  bodyGeo.scale(1.0, 1.15, 0.95);
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  bodyMesh.position.y = 0.8;
  bodyMesh.castShadow = true;
  group.add(bodyMesh);

  // Part 2: Chest Plate / Harness
  const chestGeo = new THREE.SphereGeometry(0.55, 16, 16, 0, Math.PI);
  chestGeo.scale(0.85, 0.9, 0.4);
  const chestMesh = new THREE.Mesh(chestGeo, chestMat);
  chestMesh.position.set(0, 0.72, 0.45);
  chestMesh.rotation.y = Math.PI / 2;
  group.add(chestMesh);

  // Part 3: Visor Hologram Headpiece
  const visorGeo = new THREE.TorusGeometry(0.48, 0.06, 12, 24);
  const visorMesh = new THREE.Mesh(visorGeo, visorMat);
  visorMesh.position.set(0, 1.02, 0.35);
  visorMesh.rotation.x = 0.1;
  group.add(visorMesh);

  // Parts 4 & 5: Big Expressive Eyes
  const eyeGeo = new THREE.SphereGeometry(0.16, 16, 16);
  const pupilGeo = new THREE.SphereGeometry(0.08, 12, 12);

  // Left Eye
  const leftEye = new THREE.Mesh(eyeGeo, eyeWhiteMat);
  leftEye.position.set(-0.24, 1.05, 0.54);
  const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
  leftPupil.position.set(-0.24, 1.05, 0.67);
  group.add(leftEye, leftPupil);

  // Right Eye
  const rightEye = new THREE.Mesh(eyeGeo, eyeWhiteMat);
  rightEye.position.set(0.24, 1.05, 0.54);
  const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
  rightPupil.position.set(0.24, 1.05, 0.67);
  group.add(rightEye, rightPupil);

  // Part 6: Golden Beak
  const beakGeo = new THREE.ConeGeometry(0.14, 0.3, 4);
  const beakMesh = new THREE.Mesh(beakGeo, goldMat);
  beakMesh.position.set(0, 0.88, 0.72);
  beakMesh.rotation.x = Math.PI / 2 + 0.15;
  group.add(beakMesh);

  // Parts 7 & 8: Left & Right Wings (Articulated)
  const wingGeo = new THREE.BoxGeometry(0.12, 0.6, 0.35);
  wingGeo.translate(0, -0.25, 0);

  const leftWing = new THREE.Mesh(wingGeo, bodyMat);
  leftWing.position.set(-0.72, 0.95, 0);
  leftWing.rotation.z = 0.3;
  group.add(leftWing);

  const rightWing = new THREE.Mesh(wingGeo, bodyMat);
  rightWing.position.set(0.72, 0.95, 0);
  rightWing.rotation.z = -0.3;
  group.add(rightWing);

  // Parts 9 & 10: Cosmic Antennas with Glowing Energy Beacon Orbs
  const antennaStemGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.35, 8);
  const tipGeo = new THREE.SphereGeometry(0.07, 12, 12);

  const leftAntenna = new THREE.Mesh(antennaStemGeo, bodyMat);
  leftAntenna.position.set(-0.35, 1.62, 0);
  leftAntenna.rotation.z = 0.25;
  const leftTip = new THREE.Mesh(tipGeo, goldMat);
  leftTip.position.set(-0.42, 1.8, 0);
  group.add(leftAntenna, leftTip);

  const rightAntenna = new THREE.Mesh(antennaStemGeo, bodyMat);
  rightAntenna.position.set(0.35, 1.62, 0);
  rightAntenna.rotation.z = -0.25;
  const rightTip = new THREE.Mesh(tipGeo, goldMat);
  rightTip.position.set(0.42, 1.8, 0);
  group.add(rightAntenna, rightTip);

  // Part 11: Cosmic Jetpack Backpack
  const packGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.6, 16);
  const packMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.2,
    metalness: 0.9,
  });
  const packMesh = new THREE.Mesh(packGeo, packMat);
  packMesh.position.set(0, 0.85, -0.55);
  packMesh.rotation.x = 0.1;
  group.add(packMesh);

  // Part 12: Dual Thruster Exhausts
  const nozzleGeo = new THREE.CylinderGeometry(0.09, 0.13, 0.2, 12);
  const leftNozzle = new THREE.Mesh(nozzleGeo, packMat);
  leftNozzle.position.set(-0.14, 0.5, -0.55);
  const rightNozzle = new THREE.Mesh(nozzleGeo, packMat);
  rightNozzle.position.set(0.14, 0.5, -0.55);

  const leftFlame = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.35, 8), cyanGlowMat);
  leftFlame.position.set(-0.14, 0.3, -0.55);
  leftFlame.rotation.x = Math.PI;

  const rightFlame = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.35, 8), cyanGlowMat);
  rightFlame.position.set(0.14, 0.3, -0.55);
  rightFlame.rotation.x = Math.PI;

  group.add(leftNozzle, rightNozzle, leftFlame, rightFlame);

  // Thruster Light
  const thrusterLight = new THREE.PointLight(0x38bdf8, 1.5, 3.5);
  thrusterLight.position.set(0, 0.4, -0.6);
  group.add(thrusterLight);

  return { group, leftWing, rightWing, thrusterLight };
}

// 2. Procedural Word Gate with Canvas-generated Text Texture
export function createWordPortal(wordText: string, isCorrectTarget: boolean): {
  group: THREE.Group;
  glowMesh: THREE.Mesh;
} {
  const group = new THREE.Group();

  // Frame columns
  const colGeo = new THREE.BoxGeometry(0.25, 3.2, 0.25);
  const frameMat = new THREE.MeshStandardMaterial({
    color: isCorrectTarget ? 0x10b981 : 0x6366f1,
    roughness: 0.3,
    metalness: 0.6,
  });

  const leftCol = new THREE.Mesh(colGeo, frameMat);
  leftCol.position.set(-1.3, 1.6, 0);
  const rightCol = new THREE.Mesh(colGeo, frameMat);
  rightCol.position.set(1.3, 1.6, 0);

  const archGeo = new THREE.BoxGeometry(2.85, 0.35, 0.35);
  const arch = new THREE.Mesh(archGeo, frameMat);
  arch.position.set(0, 3.1, 0);

  // Glowing energy barrier inside arch
  const planeGeo = new THREE.PlaneGeometry(2.4, 2.8);
  const glowMat = new THREE.MeshBasicMaterial({
    color: isCorrectTarget ? 0x34d399 : 0x818cf8,
    transparent: true,
    opacity: 0.45,
    side: THREE.DoubleSide,
  });
  const glowMesh = new THREE.Mesh(planeGeo, glowMat);
  glowMesh.position.set(0, 1.5, 0);

  // Create High-resolution Canvas Texture for English word
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  // Background banner
  ctx.fillStyle = isCorrectTarget ? 'rgba(6, 78, 59, 0.88)' : 'rgba(30, 27, 75, 0.88)';
  ctx.roundRect(16, 32, 480, 192, 32);
  ctx.fill();

  ctx.strokeStyle = isCorrectTarget ? '#34d399' : '#a5b4fc';
  ctx.lineWidth = 10;
  ctx.stroke();

  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 54px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(wordText, 256, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  const signGeo = new THREE.PlaneGeometry(2.1, 1.0);
  const signMat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide,
  });
  const signMesh = new THREE.Mesh(signGeo, signMat);
  signMesh.position.set(0, 2.2, 0.05);

  group.add(leftCol, rightCol, arch, glowMesh, signMesh);
  return { group, glowMesh };
}

// 3. Floating Collectible Star / Gem
export function createCollectibleCrystal(): {
  group: THREE.Group;
  gemMesh: THREE.Mesh;
} {
  const group = new THREE.Group();

  const gemGeo = new THREE.OctahedronGeometry(0.35, 0);
  const gemMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    roughness: 0.1,
    metalness: 0.8,
    emissive: 0x0284c7,
    emissiveIntensity: 0.4,
  });

  const gemMesh = new THREE.Mesh(gemGeo, gemMat);
  gemMesh.position.y = 0.6;
  group.add(gemMesh);

  // Orbital ring
  const ringGeo = new THREE.TorusGeometry(0.5, 0.03, 8, 24);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xfacc15,
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.position.y = 0.6;
  ringMesh.rotation.x = Math.PI / 3;
  group.add(ringMesh);

  return { group, gemMesh };
}

// 4. Procedural Obstacle: Space Monolith / Meteor
export function createSpaceObstacle(): THREE.Mesh {
  const geo = new THREE.DodecahedronGeometry(0.55, 1);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xe11d48, // Rose Hazard
    roughness: 0.7,
    metalness: 0.3,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = 0.55;
  mesh.castShadow = true;
  return mesh;
}
