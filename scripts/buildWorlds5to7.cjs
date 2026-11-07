const fs = require('fs');
const { writeWorldFile } = require('./worldsHelper.cjs');

// Pedagogical topic generator for advanced worlds
function buildWorldFromTitles(worldId, cefrLevel, titlesFile) {
  const titles = JSON.parse(fs.readFileSync(titlesFile, 'utf8'));

  const phases = titles.map(t => {
    const isChest = t.num === 10 || t.num === 20;
    const isBoss = t.num === 30;
    const isReview = t.num === 29;
    const count = isBoss ? 15 : isReview ? 12 : isChest ? 11 : 10;
    const phaseType = isBoss ? 'boss' : isChest ? 'chest' : isReview ? 'review' : 'lesson';
    const icon = isBoss ? 'crown' : isChest ? 'award' : isReview ? 'check-circle' : 'book-open';

    const items = [];
    for (let i = 1; i <= count; i++) {
      if (i === 1) {
        items.push({
          type: 'multiple-choice',
          visualEmoji: isBoss ? '👑' : isChest ? '🏆' : worldId === 7 ? '🌟' : worldId === 6 ? '🎯' : '💡',
          prompt: `[${t.title}] Identifique a aplicação contextual correta e natural em inglês:`,
          options: [
            `${t.title}: Aplicação avançada com precisão sintática e naturalidade.`,
            `Construção incorreta com omissão de termo essencial.`,
            `Opção com erro comum de concordância ou tempo verbal.`,
            `Tradução mecânica e artificial fora do contexto nativo.`
          ],
          ans: `${t.title}: Aplicação avançada com precisão sintática e naturalidade.`,
          exp: `Excelente! Dominou o conceito de ${t.title} (${t.sub}).`
        });
      } else if (i === 2) {
        items.push({
          type: 'word-order',
          prompt: `Ordene as palavras para estruturar a frase de ${t.title}:`,
          options: ['English', 'fluency', 'practice', 'to', 'We', 'achieve', 'every', 'day.'],
          ans: 'We practice English every day to achieve fluency.',
          exp: 'A ordem natural segue Sujeito + Verbo + Objeto + Complemento.'
        });
      } else if (i === 3) {
        items.push({
          type: 'listening',
          prompt: `Ouça o áudio da lição ${t.title}:`,
          audio: `This is an essential advanced lesson about ${t.title}.`,
          options: [
            `This is an essential advanced lesson about ${t.title}.`,
            `We are mastering complex communication structures today.`,
            `How would you express your perspective in this situation?`,
            `Effective fluency comes from consistent listening and practice.`
          ],
          ans: `This is an essential advanced lesson about ${t.title}.`,
          exp: 'Ótima assimilação auditiva!'
        });
      } else if (i === 4) {
        items.push({
          type: 'fill-blank',
          prompt: `Complete a sentença de acordo com o padrão de ${t.title}:`,
          options: ['accurately', 'accurate', 'accuracy', 'accurateness'],
          ans: 'accurately',
          exp: 'O advérbio "accurately" modifica o verbo trazendo precisão à oração.'
        });
      } else if (i === 5) {
        items.push({
          type: 'translate',
          prompt: `Traduza para o inglês com naturalidade: "A prática diária leva à excelência linguística."`,
          options: [
            'Daily practice leads to linguistic excellence.',
            'The daily practice lead to excellence language.',
            'Practice of day makes the language good.',
            'Everyday practice is leading to great english.'
          ],
          ans: 'Daily practice leads to linguistic excellence.',
          exp: 'Daily practice leads to linguistic excellence.'
        });
      } else if (i === 6) {
        items.push({
          type: 'multiple-choice',
          prompt: `Qual alternativa demonstra melhor clareza e elegância em ${t.title}?`,
          options: [
            'Expressing ideas with nuance, precision and confidence.',
            'Translating each word literally from Portuguese.',
            'Avoiding complex vocabulary and using basic phrases.',
            'Ignoring grammatical nuances and prepositions.'
          ],
          ans: 'Expressing ideas with nuance, precision and confidence.',
          exp: 'Fluência nativa envolve clareza, nuance e precisão sintática.'
        });
      } else if (i === 7) {
        items.push({
          type: 'word-order',
          prompt: `Organize a formulação interrogativa:`,
          options: ['perspective', 'could', 'explain', 'you', 'your', 'How', 'clearly?'],
          ans: 'How could you explain your perspective clearly?',
          exp: 'How could you explain your perspective clearly?'
        });
      } else if (i === 8) {
        items.push({
          type: 'listening',
          prompt: `Ouça o enunciado com atenção:`,
          audio: `Nuance and context define true mastery of the English language.`,
          options: [
            `Nuance and context define true mastery of the English language.`,
            `Grammar rules are more important than cultural context in speech.`,
            `Vocabulary size is the only metric that matters in conversation.`,
            `Pronunciation should be identical across all global accents.`
          ],
          ans: `Nuance and context define true mastery of the English language.`,
          exp: 'Compreensão auditiva impecável!'
        });
      } else if (i === 9) {
        items.push({
          type: 'speaking-repeat',
          prompt: `Fale no microfone a frase de maestria de ${t.title}:`,
          audio: `I speak English with precision and confidence`,
          ans: `I speak English with precision and confidence`,
          hint: `/aɪ spiːk ˈɪŋ.ɡlɪʃ wɪð prɪˈsɪʒ.ən ənd ˈkɑːn.fə.dəns/`,
          exp: 'Pronúncia excelente, firme e confiante!'
        });
      } else if (i === 10) {
        items.push({
          type: 'multiple-choice',
          prompt: `Qual é o takeaway pedagógico essencial de ${t.title}?`,
          options: [
            `Integrar o conhecimento em situações comunicativas espontâneas`,
            `Apenas memorizar regras sem aplicá-las na fala`,
            `Depender de legendas em português para sempre`,
            `Evitar conversas com nativos até atingir a perfeição`
          ],
          ans: `Integrar o conhecimento em situações comunicativas espontâneas`,
          exp: 'A comunicação autêntica floresce na prática contextual.'
        });
      } else {
        items.push({
          type: 'multiple-choice',
          prompt: `[Desafio de Maestria ${i}] ${t.title}:`,
          options: [
            `Aplicar o idioma de forma autônoma, natural e persuasiva`,
            `Opção com inadequação estilística`,
            `Construção com interferência do idioma materno`,
            `Frase sem concordância adequada`
          ],
          ans: `Aplicar o idioma de forma autônoma, natural e persuasiva`,
          exp: 'Parabéns pelo domínio pleno da competência!'
        });
      }
    }

    return {
      num: t.num,
      title: t.title,
      subtitle: t.sub,
      obj: `Consolidar o domínio de ${t.title} (${t.sub}).`,
      type: phaseType,
      icon: icon,
      theory: [
        `Tópico essencial: ${t.title} — ${t.sub}.`,
        `Foco no nível ${cefrLevel}: refinamento gramatical, expansão lexical e precisão natural.`,
        `Pratique cada exercício atentando para a entonação, contexto e pronúncia.`
      ],
      items: items
    };
  });

  writeWorldFile(worldId, cefrLevel, phases);
}

// Generate Worlds 5, 6, 7
buildWorldFromTitles(5, 'B2', 'scripts/w5_titles.json');
buildWorldFromTitles(6, 'C1', 'scripts/w6_titles.json');
buildWorldFromTitles(7, 'C2', 'scripts/w7_titles.json');

console.log('All worlds generated successfully!');

