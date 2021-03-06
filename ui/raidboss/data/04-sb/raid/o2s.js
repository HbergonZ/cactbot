'use strict';

// O2S - Deltascape 2.0 Savage
[{
  zoneRegex: {
    en: /^Deltascape V2\.0 \(Savage\)$/,
    cn: /^欧米茄零式时空狭缝 \(德尔塔幻境2\)$/,
  },
  zoneId: ZoneId.DeltascapeV20Savage,
  timelineNeedsFixing: true,
  timelineFile: 'o2s.txt',
  timelineTriggers: [
    {
      id: 'O2S Double Stack',
      regex: /Double Stack/,
      beforeSeconds: 6,
      alertText: {
        en: 'DPS: Levitate',
        de: 'DDs hoch',
        cn: 'DPS浮空',
      },
    },
  ],
  triggers: [
    {
      id: 'O2S Phase Probe Tracker',
      regex: Regexes.startsUsing({ id: '235A', source: 'Catastrophe', capture: false }),
      regexDe: Regexes.startsUsing({ id: '235A', source: 'Katastroph', capture: false }),
      regexFr: Regexes.startsUsing({ id: '235A', source: 'Catastrophe', capture: false }),
      regexJa: Regexes.startsUsing({ id: '235A', source: 'カタストロフィー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '235A', source: '灾变者', capture: false }),
      regexKo: Regexes.startsUsing({ id: '235A', source: '카타스트로피', capture: false }),
      run: function(data) {
        data.probeCount = (data.probeCount || 0) + 1;
        data.dpsProbe = data.probeCount == 2 || data.probeCount == 4;
        data.myProbe = data.dpsProbe == data.role.startsWith('dps');
      },
    },
    {
      id: 'O2S Levitation Gain',
      regex: Regexes.gainsEffect({ effect: 'Levitation' }),
      regexDe: Regexes.gainsEffect({ effect: 'Levitation' }),
      regexFr: Regexes.gainsEffect({ effect: 'Lévitation' }),
      regexJa: Regexes.gainsEffect({ effect: 'レビテト' }),
      regexCn: Regexes.gainsEffect({ effect: '浮空' }),
      regexKo: Regexes.gainsEffect({ effect: '레비테트' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      run: function(data) {
        data.levitating = true;
      },
    },
    {
      id: 'O2S Levitation Lose',
      regex: Regexes.losesEffect({ effect: 'Levitation' }),
      regexDe: Regexes.losesEffect({ effect: 'Levitation' }),
      regexFr: Regexes.losesEffect({ effect: 'Lévitation' }),
      regexJa: Regexes.losesEffect({ effect: 'レビテト' }),
      regexCn: Regexes.losesEffect({ effect: '浮空' }),
      regexKo: Regexes.losesEffect({ effect: '레비테트' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      run: function(data) {
        data.levitating = false;
      },
    },
    {
      id: 'O2S -100Gs',
      regex: Regexes.startsUsing({ id: '235E', source: 'Catastrophe', capture: false }),
      regexDe: Regexes.startsUsing({ id: '235E', source: 'Katastroph', capture: false }),
      regexFr: Regexes.startsUsing({ id: '235E', source: 'Catastrophe', capture: false }),
      regexJa: Regexes.startsUsing({ id: '235E', source: 'カタストロフィー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '235E', source: '灾变者', capture: false }),
      regexKo: Regexes.startsUsing({ id: '235E', source: '카타스트로피', capture: false }),
      infoText: {
        en: '-100 Gs: Go north/south and look away',
        de: '-100G: Nach Norden/Süden und wegschauen',
        cn: '前往南边/北边并背对boss',
      },
      tts: {
        en: '100 gs',
        de: '-100 G',
        cn: '重力负100',
      },
    },
    {
      id: 'O2S Death\'s Gaze',
      regex: Regexes.startsUsing({ id: '236F', source: 'Catastrophe', capture: false }),
      regexDe: Regexes.startsUsing({ id: '236F', source: 'Katastroph', capture: false }),
      regexFr: Regexes.startsUsing({ id: '236F', source: 'Catastrophe', capture: false }),
      regexJa: Regexes.startsUsing({ id: '236F', source: 'カタストロフィー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '236F', source: '灾变者', capture: false }),
      regexKo: Regexes.startsUsing({ id: '236F', source: '카타스트로피', capture: false }),
      response: Responses.lookAway(),
    },
    {
      id: 'O2S Earthquake',
      regex: Regexes.startsUsing({ id: '2374', source: 'Catastrophe', capture: false }),
      regexDe: Regexes.startsUsing({ id: '2374', source: 'Katastroph', capture: false }),
      regexFr: Regexes.startsUsing({ id: '2374', source: 'Catastrophe', capture: false }),
      regexJa: Regexes.startsUsing({ id: '2374', source: 'カタストロフィー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '2374', source: '灾变者', capture: false }),
      regexKo: Regexes.startsUsing({ id: '2374', source: '카타스트로피', capture: false }),
      alertText: function(data) {
        if (!data.levitating) {
          return {
            en: 'Earthquake: Levitate',
            de: 'Erdbeben: Schweben',
            cn: '地震：漂浮',
          };
        }
      },
      infoText: function(data) {
        if (data.levitating) {
          return {
            en: 'Earthquake',
            de: 'Erdbeben',
            cn: '地震',
          };
        }
      },
      tts: function(data) {
        if (!data.levitating) {
          return {
            en: 'levitate',
            de: 'schweben',
            cn: '漂浮',
          };
        }
      },
    },
    {
      id: 'O2S Elevated',
      regex: Regexes.gainsEffect({ effect: 'Elevated', capture: false }),
      regexDe: Regexes.gainsEffect({ effect: 'Erhöht', capture: false }),
      regexFr: Regexes.gainsEffect({ effect: 'Élévation', capture: false }),
      regexJa: Regexes.gainsEffect({ effect: '高度固定：高', capture: false }),
      regexCn: Regexes.gainsEffect({ effect: '固定高位', capture: false }),
      regexKo: Regexes.gainsEffect({ effect: '고도 고정: 위', capture: false }),
      alarmText: function(data) {
        if (data.role.startsWith('dps') && !data.levitating) {
          return {
            en: 'DPS: Levitate',
            de: 'DDs: Schweben',
            cn: 'DPS浮空',
          };
        }
      },
      infoText: function(data) {
        if (!data.role.startsWith('dps')) {
          return {
            en: 'DPS up, T/H down',
            de: 'DDs hoch, T/H runter',
            cn: 'DPS升起，T奶下降',
          };
        }
      },
      tts: {
        en: 'dps up',
        de: 'dee dees hoch',
        cn: 'DPS升起',
      },
    },
    {
      id: 'O2S Gravitational Wave',
      regex: Regexes.startsUsing({ id: '2372', source: 'Catastrophe', capture: false }),
      regexDe: Regexes.startsUsing({ id: '2372', source: 'Katastroph', capture: false }),
      regexFr: Regexes.startsUsing({ id: '2372', source: 'Catastrophe', capture: false }),
      regexJa: Regexes.startsUsing({ id: '2372', source: 'カタストロフィー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '2372', source: '灾变者', capture: false }),
      regexKo: Regexes.startsUsing({ id: '2372', source: '카타스트로피', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'O2S Maniacal Probe',
      regex: Regexes.startsUsing({ id: '235A', source: 'Catastrophe', capture: false }),
      regexDe: Regexes.startsUsing({ id: '235A', source: 'Katastroph', capture: false }),
      regexFr: Regexes.startsUsing({ id: '235A', source: 'Catastrophe', capture: false }),
      regexJa: Regexes.startsUsing({ id: '235A', source: 'カタストロフィー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '235A', source: '灾变者', capture: false }),
      regexKo: Regexes.startsUsing({ id: '235A', source: '카타스트로피', capture: false }),
      alertText: function(data) {
        if (data.myProbe) {
          if (!data.dpsProbe) {
            return {
              en: 'Maniacal Probe: Tanks & Healers',
              de: 'Tentakeltanz: Tanks & Heiler',
              cn: 'T奶触手',
            };
          }
          return {
            en: 'Maniacal Probe: DPS',
            de: 'Tentakeltanz: DDs',
            cn: 'DPS触手',
          };
        }
      },
      infoText: function(data) {
        if (!data.myProbe) {
          if (!data.dpsProbe) {
            return {
              en: 'Maniacal Probe: Tanks & Healers',
              de: 'Tentakeltanz: Tanks & Heiler',
              cn: 'T奶触手',
            };
          }
          return {
            en: 'Maniacal Probe: DPS',
            de: 'Tentakeltanz: DDs',
            cn: 'DPS触手',
          };
        }
      },
      tts: function(data) {
        if (data.dpsProbe) {
          return {
            en: 'dps probe',
            de: 'dee dees tentakel',
            cn: 'dps触手',
          };
        }
        return {
          en: 'tank heal probe',
          de: 'tenks heiler tentakel',
          cn: 'T奶触手',
        };
      },
    },
    {
      id: 'O2S Unstable Gravity',
      regex: Regexes.gainsEffect({ effect: 'Unstable Gravity' }),
      regexDe: Regexes.gainsEffect({ effect: 'Schwerkraftschwankung' }),
      regexFr: Regexes.gainsEffect({ effect: 'Gravité Instable' }),
      regexJa: Regexes.gainsEffect({ effect: 'グラビティバースト' }),
      regexCn: Regexes.gainsEffect({ effect: '重力爆发' }),
      regexKo: Regexes.gainsEffect({ effect: '중력 폭발' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      delaySeconds: 9,
      alarmText: {
        en: 'Unstable Gravity: Elevate and outside stack',
        de: 'Schwerkraftschwankung: Schweben und außen stacken',
        cn: '升起并分摊',
      },
      tts: {
        en: 'float for bomb',
        de: 'schweben für bombe',
        cn: '升起并分摊',
      },
    },
    {
      id: 'O2S 6 Fulms Under Gain',
      regex: Regexes.gainsEffect({ effect: '6 Fulms Under' }),
      regexDe: Regexes.gainsEffect({ effect: 'Versinkend' }),
      regexFr: Regexes.gainsEffect({ effect: 'Enfoncement' }),
      regexJa: Regexes.gainsEffect({ effect: '沈下' }),
      regexCn: Regexes.gainsEffect({ effect: '下陷' }),
      regexKo: Regexes.gainsEffect({ effect: '침하' }),
      condition: function(data, matches) {
        return !data.under && matches.target == data.me;
      },
      delaySeconds: 5,
      alertText: function(data) {
        if (!data.levitating) {
          return {
            en: '6 Fulms Under: Levitate',
            de: 'Versinkend: Schweben',
            cn: '下陷：悬浮',
          };
        }
      },
      infoText: function(data) {
        if (data.levitating) {
          return {
            en: '6 Fulms Under',
            de: 'Versinkend',
            cn: '下陷',
          };
        }
      },
      tts: {
        en: 'float',
        de: 'schweben',
        cn: '悬浮',
      },
      run: function(data) {
        data.under = true;
      },
    },
    {
      id: 'O2S 6 Fulms Under Lose',
      regex: Regexes.losesEffect({ effect: '6 Fulms Under' }),
      regexDe: Regexes.losesEffect({ effect: 'Versinkend' }),
      regexFr: Regexes.losesEffect({ effect: 'Enfoncement' }),
      regexJa: Regexes.losesEffect({ effect: '沈下' }),
      regexCn: Regexes.losesEffect({ effect: '下陷' }),
      regexKo: Regexes.losesEffect({ effect: '침하' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      run: function(data) {
        data.under = false;
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'missingTranslations': true,
      'replaceSync': {
        'Catastrophe': 'Katastroph',
      },
      'replaceText': {
        '-100 Gs': 'Minus 100 G',
        '(?<!-)100 Gs': '100 G',
        'Antilight': 'Dunkellicht',
        'Death\'s Gaze': 'Todesblick',
        'Earthquake': 'Erdbeben',
        'Epicenter': 'Epizentrum',
        'Evilsphere': 'Sphäre des Bösen',
        'Gravitational Distortion': 'Massenverzerrung',
        'Gravitational Wave': 'Gravitationswelle',
        'Long Drop': 'Tiefer Fall',
        'Paranormal Wave': 'Paranormale Welle',
        'Unstable Gravity': 'Schwerkraftschwankung',
      },
      '~effectNames': {
        '6 Fulms Under': 'Versinkend',
        'Elevated': 'Erhöht',
        'Unstable Gravity': 'Schwerkraftschwankung',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Catastrophe': 'Catastrophe',
      },
      'replaceText': {
        '-100 Gs': 'Gravité -100',
        '(?<!-)100 Gs': 'Gravité 100',
        'Antilight': 'Lumière obscure',
        'Death\'s Gaze': 'Œil de la Mort',
        'Earthquake': 'Grand séisme',
        'Epicenter': 'Épicentre',
        'Evilsphere': 'Sphère démoniaque',
        'Gravitational Distortion': 'Distorsion gravitationnelle',
        'Gravitational Wave': 'Onde gravitationnelle',
        'Long Drop': 'Chute ininterrompue',
        'Paranormal Wave': 'Onde maudite',
        'Unstable Gravity': 'Gravité instable',
      },
      '~effectNames': {
        '6 Fulms Under': 'Enfoncement',
        'Elevated': 'Élévation',
        'Unstable Gravity': 'Gravité instable',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Catastrophe': 'カタストロフィー',
      },
      'replaceText': {
        '-100 Gs': '重力マイナス100',
        '(?<!-)100 Gs': '重力100',
        'Antilight': '暗黒光',
        'Death\'s Gaze': '死神の瞳',
        'Earthquake': '大地震',
        'Epicenter': '震源生成',
        'Evilsphere': 'イビルスフィア',
        'Gravitational Distortion': '重力歪曲',
        'Gravitational Wave': '重力波',
        'Long Drop': '自由落下',
        'Paranormal Wave': '呪詛波',
        'Unstable Gravity': 'グラビティバースト',
      },
      '~effectNames': {
        '6 Fulms Under': '沈下',
        'Elevated': '高度固定：高',
        'Unstable Gravity': 'グラビティバースト',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Catastrophe': '灾变者',
      },
      'replaceText': {
        '-100 Gs': '重力-100',
        '(?<!-)100 Gs': '重力100',
        'Antilight': '暗黑光',
        'Death\'s Gaze': '死神之瞳',
        'Double Stack': '二连分摊',
        'Earthquake': '大地震',
        'Epicenter': '震源制造',
        'Evilsphere': '邪球',
        'Gravitational Distortion': '重力扭曲',
        'Gravitational Wave': '重力波',
        'Long Drop': '自由落体',
        'Paranormal Wave': '诅咒波',
        'Probes': '引导',
        'Unstable Gravity': '重力爆发',
      },
      '~effectNames': {
        '6 Fulms Under': '下陷',
        'Elevated': '固定高位',
        'Unstable Gravity': '重力爆发',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Catastrophe': '카타스트로피',
      },
      'replaceText': {
        '-100 Gs': '중력 -100',
        '(?<!-)100 Gs': '중력 100',
        'Antilight': '암흑광',
        'Death\'s Gaze': '사신의 눈동자',
        'Earthquake': '대지진',
        'Epicenter': '진원 생성',
        'Evilsphere': '악의 세력권',
        'Gravitational Distortion': '중력 왜곡',
        'Gravitational Wave': '중력파',
        'Long Drop': '자유낙하',
        'Paranormal Wave': '저주 파동',
        'Unstable Gravity': '중력 폭발',
      },
      '~effectNames': {
        '6 Fulms Under': '침하',
        'Elevated': '고도 고정: 위',
        'Unstable Gravity': '중력 폭발',
      },
    },
  ],
}];
