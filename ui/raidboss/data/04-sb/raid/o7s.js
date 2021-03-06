'use strict';

// O7S - Sigmascape 3.0 Savage
// localization:
//   de: timeline done, partial triggers
//   fr: partial timeline, partial triggers
//   ja: partial timeline, partial triggers
[{
  zoneRegex: {
    en: /^Sigmascape V3\.0 \(Savage\)$/,
    cn: /^欧米茄零式时空狭缝 \(西格玛幻境3\)$/,
  },
  zoneId: ZoneId.SigmascapeV30Savage,
  timelineFile: 'o7s.txt',
  triggers: [
    // State
    {
      id: 'O7S Aether Rot Gain',
      regex: Regexes.gainsEffect({ effect: 'Aether Rot' }),
      regexDe: Regexes.gainsEffect({ effect: 'Ätherfäule' }),
      regexFr: Regexes.gainsEffect({ effect: 'Pourriture Éthéréenne' }),
      regexJa: Regexes.gainsEffect({ effect: 'エーテルロット' }),
      regexCn: Regexes.gainsEffect({ effect: '以太病毒' }),
      regexKo: Regexes.gainsEffect({ effect: '에테르 부패' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      run: function(data) {
        data.rot = true;
      },
    },
    {
      id: 'O7S Aether Rot Lose',
      regex: Regexes.losesEffect({ effect: 'Aether Rot' }),
      regexDe: Regexes.losesEffect({ effect: 'Ätherfäule' }),
      regexFr: Regexes.losesEffect({ effect: 'Pourriture Éthéréenne' }),
      regexJa: Regexes.losesEffect({ effect: 'エーテルロット' }),
      regexCn: Regexes.losesEffect({ effect: '以太病毒' }),
      regexKo: Regexes.losesEffect({ effect: '에테르 부패' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      run: function(data) {
        data.rot = false;
      },
    },
    {
      id: 'O7S Dadaluma Simulation',
      regex: Regexes.gainsEffect({ target: 'Guardian', effect: 'Dadaluma Simulation', capture: false }),
      regexDe: Regexes.gainsEffect({ target: 'Wächter', effect: 'Dadarma-Kampfprogramm', capture: false }),
      regexFr: Regexes.gainsEffect({ target: 'gardien', effect: 'Programme Dadaluma', capture: false }),
      regexJa: Regexes.gainsEffect({ target: 'ガーディアン', effect: 'ダダルマー・プログラム', capture: false }),
      regexCn: Regexes.gainsEffect({ target: '守护者', effect: '达达鲁玛模拟程序', capture: false }),
      regexKo: Regexes.gainsEffect({ target: '가디언', effect: '다다루마 프로그램', capture: false }),
      condition: function(data) {
        return !data.first || data.seenVirus && !data.second;
      },
      run: function(data) {
        if (data.seenVirus)
          data.second = 'dada';
        else
          data.first = 'dada';
      },
    },
    {
      id: 'O7S Bibliotaph Simulation',
      regex: Regexes.gainsEffect({ target: 'Guardian', effect: 'Bibliotaph Simulation', capture: false }),
      regexDe: Regexes.gainsEffect({ target: 'Wächter', effect: 'Bibliotaph-Kampfprogramm', capture: false }),
      regexFr: Regexes.gainsEffect({ target: 'gardien', effect: 'Programme Bibliotaphe', capture: false }),
      regexJa: Regexes.gainsEffect({ target: 'ガーディアン', effect: 'ビブリオタフ・プログラム', capture: false }),
      regexCn: Regexes.gainsEffect({ target: '守护者', effect: '永世珍本模拟程序', capture: false }),
      regexKo: Regexes.gainsEffect({ target: '가디언', effect: '비블리오타프 프로그램', capture: false }),
      condition: function(data) {
        return !data.first || data.seenVirus && !data.second;
      },
      run: function(data) {
        if (data.seenVirus)
          data.second = 'biblio';
        else
          data.first = 'biblio';
      },
    },
    {
      id: 'O7S Virus Tracker',
      regex: Regexes.gainsEffect({ target: 'Guardian', effect: 'Virus', capture: false }),
      regexDe: Regexes.gainsEffect({ target: 'Wächter', effect: 'Virus', capture: false }),
      regexFr: Regexes.gainsEffect({ target: 'gardien', effect: 'Programme Virus', capture: false }),
      regexJa: Regexes.gainsEffect({ target: 'ガーディアン', effect: 'ウィルス・プログラム', capture: false }),
      regexCn: Regexes.gainsEffect({ target: '守护者', effect: '病毒模拟程序', capture: false }),
      regexKo: Regexes.gainsEffect({ target: '가디언', effect: '바이러스 프로그램', capture: false }),
      run: function(data) {
        data.seenVirus = true;
      },
    },
    {
      id: 'O7S Magitek Ray',
      regex: Regexes.startsUsing({ id: '2788', source: 'Guardian', capture: false }),
      regexDe: Regexes.startsUsing({ id: '2788', source: 'Wächter', capture: false }),
      regexFr: Regexes.startsUsing({ id: '2788', source: 'Gardien', capture: false }),
      regexJa: Regexes.startsUsing({ id: '2788', source: 'ガーディアン', capture: false }),
      regexCn: Regexes.startsUsing({ id: '2788', source: '守护者', capture: false }),
      regexKo: Regexes.startsUsing({ id: '2788', source: '가디언', capture: false }),
      alertText: {
        en: 'Magitek Ray',
        de: 'Magitek-Laser',
        fr: 'Rayon Magitek',
        ko: '마도 레이저',
        ja: '魔導レーザー',
        cn: '直线AOE',
      },
      tts: {
        en: 'beam',
        de: 'leser',
        fr: 'laser',
        ko: '레이저',
        ja: 'レーザー',
        cn: '激光',
      },
    },
    {
      id: 'O7S Arm And Hammer',
      regex: Regexes.startsUsing({ id: '2789', source: 'Guardian' }),
      regexDe: Regexes.startsUsing({ id: '2789', source: 'Wächter' }),
      regexFr: Regexes.startsUsing({ id: '2789', source: 'Gardien' }),
      regexJa: Regexes.startsUsing({ id: '2789', source: 'ガーディアン' }),
      regexCn: Regexes.startsUsing({ id: '2789', source: '守护者' }),
      regexKo: Regexes.startsUsing({ id: '2789', source: '가디언' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'O7S Orb Marker',
      regex: Regexes.headMarker({ id: '0017' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      alertText: {
        en: 'Orb Marker',
        de: 'Orb Marker',
        fr: 'Orbe',
        ko: '원자 파동 징',
        ja: 'マーカー',
        cn: '死刑点名',
      },
      tts: {
        en: 'orb',
        de: 'orb',
        fr: 'orbe',
        ko: '원자 파동',
        ja: 'マーカー',
        cn: '球',
      },
    },
    {
      id: 'O7S Blue Marker',
      regex: Regexes.headMarker({ id: '000E' }),
      alarmText: function(data, matches) {
        if (data.me != matches.target)
          return;
        return {
          en: 'Blue Marker on YOU',
          de: 'Aura-Kanone auf DIR',
          fr: 'Marque Bleue sur VOUS',
          ko: '파란징 → 나',
          ja: '青玉 on YOU',
          cn: '蓝球点名',
        };
      },
      infoText: function(data, matches) {
        if (data.me == matches.target)
          return;
        return {
          en: 'Blue Marker on ' + data.ShortName(matches.target),
          de: 'Aura-Kanone auf ' + data.ShortName(matches.target),
          fr: 'Marque Bleue sur ' + data.ShortName(matches.target),
          ko: '파란징 → ' + data.ShortName(matches.target),
          ja: '青玉 on ' + data.ShortName(matches.target),
          cn: '蓝球点名' + data.ShortName(matches.target),
        };
      },
      tts: function(data, matches) {
        if (data.me != matches.target)
          return;
        return {
          en: 'blue marker',
          de: 'aura-kanone',
          fr: 'marque bleu',
          ko: '파란징',
          ja: '青玉ついた',
          cn: '蓝球',
        };
      },
    },
    {
      id: 'O7S Prey',
      regex: Regexes.headMarker({ id: '001E' }),
      response: Responses.preyOn('info'),
    },
    {
      id: 'O7S Searing Wind',
      regex: Regexes.gainsEffect({ effect: 'Searing Wind' }),
      regexDe: Regexes.gainsEffect({ effect: 'Gluthitze' }),
      regexFr: Regexes.gainsEffect({ effect: 'Fournaise' }),
      regexJa: Regexes.gainsEffect({ effect: '灼熱' }),
      regexCn: Regexes.gainsEffect({ effect: '灼热' }),
      regexKo: Regexes.gainsEffect({ effect: '작열' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      response: Responses.getOut(),
    },
    {
      id: 'O7S Abandonment',
      regex: Regexes.gainsEffect({ effect: 'Abandonment' }),
      regexDe: Regexes.gainsEffect({ effect: 'Verlassen' }),
      regexFr: Regexes.gainsEffect({ effect: 'Isolement' }),
      regexJa: Regexes.gainsEffect({ effect: '孤独感' }),
      regexCn: Regexes.gainsEffect({ effect: '孤独感' }),
      regexKo: Regexes.gainsEffect({ effect: '고독감' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      alertText: {
        en: 'Abandonment: stay middle',
        de: 'Verlassen: Bleib mittig',
        fr: 'Isolement : restez au milieu',
        ko: '고독감: 중앙에 있기',
        ja: '孤独: 内側へ',
        cn: '呆在中间',
      },
      tts: {
        en: 'abandonment',
        de: 'verlassen',
        fr: 'isolement',
        ko: '고독감',
        ja: '孤独',
        cn: '孤独',
      },
    },
    {
      id: 'O7S Rot',
      regex: Regexes.gainsEffect({ effect: 'Aether Rot' }),
      regexDe: Regexes.gainsEffect({ effect: 'Ätherfäule' }),
      regexFr: Regexes.gainsEffect({ effect: 'Pourriture Éthéréenne' }),
      regexJa: Regexes.gainsEffect({ effect: 'エーテルロット' }),
      regexCn: Regexes.gainsEffect({ effect: '以太病毒' }),
      regexKo: Regexes.gainsEffect({ effect: '에테르 부패' }),
      infoText: function(data, matches) {
        if (data.me == matches.target) {
          return {
            en: 'Rot on you',
            de: 'Fäule auf DIR',
            fr: 'Pourriture sur VOUS',
            ko: '에테르 → 나',
            ja: 'ロット on YOU',
            cn: '以太病毒点名',
          };
        }
        return {
          en: 'Rot on ' + data.ShortName(matches.target),
          de: 'Fäule auf ' + data.ShortName(matches.target),
          fr: 'Pourriture sur ' + data.ShortName(matches.target),
          ko: '에테르 → ' + data.ShortName(matches.target),
          ja: 'ロット on ' + data.ShortName(matches.target),
          cn: '以太病毒点名' + data.ShortName(matches.target),
        };
      },
      tts: function(data, matches) {
        if (data.me != matches.target)
          return;

        return {
          en: 'rot',
          de: 'fäule',
          fr: 'pourriture',
          ja: 'ロット',
          cn: '结束前传毒',
        };
      },
    },
    {
      id: 'O7S Stoneskin',
      regex: Regexes.startsUsing({ id: '2AB5', source: 'Ultros' }),
      regexDe: Regexes.startsUsing({ id: '2AB5', source: 'Ultros' }),
      regexFr: Regexes.startsUsing({ id: '2AB5', source: 'Orthros' }),
      regexJa: Regexes.startsUsing({ id: '2AB5', source: 'オルトロス' }),
      regexCn: Regexes.startsUsing({ id: '2AB5', source: '奥尔特罗斯' }),
      regexKo: Regexes.startsUsing({ id: '2AB5', source: '오르트로스' }),
      response: Responses.interrupt('alarm'),
    },
    {
      id: 'O7S Load',
      // Load: 275C
      // Skip: 2773
      // Retrieve: 2774
      // Paste: 2776
      regex: Regexes.startsUsing({ id: ['275C', '2773', '2774', '2776'], source: 'Guardian', capture: false }),
      regexDe: Regexes.startsUsing({ id: ['275C', '2773', '2774', '2776'], source: 'Wächter', capture: false }),
      regexFr: Regexes.startsUsing({ id: ['275C', '2773', '2774', '2776'], source: 'Gardien', capture: false }),
      regexJa: Regexes.startsUsing({ id: ['275C', '2773', '2774', '2776'], source: 'ガーディアン', capture: false }),
      regexCn: Regexes.startsUsing({ id: ['275C', '2773', '2774', '2776'], source: '守护者', capture: false }),
      regexKo: Regexes.startsUsing({ id: ['275C', '2773', '2774', '2776'], source: '가디언', capture: false }),
      preRun: function(data) {
        data.loadCount = ++data.loadCount || 1;
        data.thisLoad = undefined;
        data.thisLoadText = undefined;
        data.thisLoadTTS = undefined;

        if (data.loadCount == 1) {
          // First load is unknown.
          data.thisLoad = 'screen';
        } else if (data.loadCount == 2) {
          data.thisLoad = data.first == 'biblio' ? 'dada' : 'biblio';
        } else if (data.loadCount == 3) {
          data.thisLoad = data.first == 'biblio' ? 'ultros' : 'ships';
        } else if (data.loadCount == 4) {
          data.thisLoad = data.first == 'biblio' ? 'ships' : 'ultros';
        } else if (data.loadCount == 5) {
          data.thisLoad = 'virus';
        } else if (data.loadCount == 6) {
          data.thisLoad = data.first == 'biblio' ? 'ultros' : 'ships';
        } else if (data.loadCount == 7) {
          // This is the post-virus Load/Skip divergence.
          data.thisLoad = 'screen';
        } else if (data.loadCount == 8) {
          data.thisLoad = data.second == 'biblio' ? 'dada' : 'biblio';
        } else if (data.loadCount == 9) {
          data.thisLoad = data.first == 'biblio' ? 'ships' : 'ultros';
        }

        if (!data.thisLoad) {
          console.error('Unknown load: ' + data.loadCount);
          return;
        }
        data.thisLoadText = ({
          'screen': 'Biblio?/Knockback?',
          'biblio': 'Biblio: Positions',
          'dada': 'Dada: Knockback',
          'ships': 'Ships: Out of Melee',
          'ultros': 'Ultros: Ink Spread',
          '(?<!\\w)virus': 'VIRUS',
        })[data.thisLoad];

        data.thisLoadTTS = ({
          'screen': 'screen',
          'biblio': 'biblio positions',
          'dada': 'knockback',
          'ships': 'get out',
          'ultros': 'ink ink ink',
          '(?<!\\w)virus': 'virus',
        })[data.thisLoad];
      },
      alertText: function(data) {
        return data.thisLoadText;
      },
      tts: function(data) {
        return data.thisLoadTTS;
      },
    },
    {
      id: 'O7S Run',
      regex: Regexes.startsUsing({ id: '276F', source: 'Guardian', capture: false }),
      regexDe: Regexes.startsUsing({ id: '276F', source: 'Wächter', capture: false }),
      regexFr: Regexes.startsUsing({ id: '276F', source: 'Gardien', capture: false }),
      regexJa: Regexes.startsUsing({ id: '276F', source: 'ガーディアン', capture: false }),
      regexCn: Regexes.startsUsing({ id: '276F', source: '守护者', capture: false }),
      regexKo: Regexes.startsUsing({ id: '276F', source: '가디언', capture: false }),
      preRun: function(data) {
        data.runCount = ++data.runCount || 1;
        data.thisRunText = undefined;
        data.thisRunTTS = undefined;

        if (data.runCount == 1)
          data.thisRun = data.first == 'biblio' ? 'dada' : 'dada';
        else if (data.runCount == 2)
          data.thisRun = data.first == 'biblio' ? 'ultros' : 'ships';
        else if (data.runCount == 3)
          data.thisRun = data.first == 'biblio' ? 'ships' : 'ultros';
        else if (data.runCount == 4)
          data.thisRun = data.first == 'biblio' ? 'ultros' : 'ships';
        else if (data.runCount == 5)
          data.thisRun = 'biblio';
        else if (data.runCount == 6)
          data.thisRun = data.first == 'biblio' ? 'ships' : 'ultros';


        data.thisRunText = ({
          'biblio': 'Biblio Add',
          'dada': 'Dada Add',
          'ships': 'Ship Adds',
          'ultros': 'Ultros Add',
        })[data.thisRun];

        data.thisRunTTS = data.thisRunText;
      },
      infoText: function(data) {
        return data.thisRunText;
      },
      tts: function(data) {
        return data.thisRunTTS;
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Fire Control System': 'Feuerleitsystem',
        'Guardian': 'Wächter',
        'Ultros': 'Ultros',
        'WEAPON SYSTEMS ONLINE': 'Feuerkontrollsystem aktiviert',
        'Searing Wind': 'Gluthitze',
      },
      'replaceText': {
        'Aether Rot': 'Ätherfäule',
        'Arm And Hammer': 'Arm-Hammer',
        'Atomic Ray': 'Atomstrahlung',
        'Aura Cannon': 'Aura-Kanone',
        'Biblio': 'Bibliotaph',
        'Bomb Deployment': 'Bombeneinsatz',
        'Chain Cannon': 'Kettenkanone',
        'Chakra Burst': 'Chakra-Ausbruch',
        'Copy(?! Program)': 'Kopieren',
        'Dada': 'Dadarma',
        'Demon Simulation': 'Dämonensimulation',
        'Diffractive Laser': 'Diffraktiver Laser',
        'Diffractive Plasma': 'Diffusionsplasma',
        'Ink': 'Tinte',
        'Interrupt Stoneskin': 'Steinhaut unterbrechen',
        'Load': 'Laden',
        'Magitek Ray': 'Magitek-Laser',
        'Magnetism': 'Magnetismus',
        'Main Cannon': 'Hauptkanone',
        'Missile Simulation': 'Raketensimulation',
        'Paste(?! Program)': 'Einfügen',
        'Plane Laser': 'Luftwaffe Add Laser',
        'Prey': 'Beute',
        'Radar': 'Radar',
        'Repel': 'Abstoßung',
        'Retrieve Air Force': 'Luftwaffe Wiederherstellen',
        'Retrieve Ultros': 'Ultros Wiederherstellen',
        'Run(?! Program)': 'Start',
        'Shockwave': 'Schockwelle',
        'Skip(?! Program)': 'Überspringen',
        'Temporary Misdirection': 'Plötzliche Panik',
        'Tentacle(?! )': 'Tentakel',
        'Tentacle Simulation': 'Tentakelsimulation',
        'Viral Weapon': 'Panikvirus',
        '(?<!\\w)Virus': 'Virus',
        'Wallop': 'Tentakelklatsche',
      },
      '~effectNames': {
        'Abandonment': 'Verlassen',
        'Aether Rot': 'Ätherfäule',
        'Bibliotaph Simulation': 'Bibliotaph-Kampfprogramm',
        'Dadaluma Simulation': 'Dadarma-Kampfprogramm',
        'Searing Wind': 'Versengen',
        '(?<!\\w)Virus': 'Virus',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Dadaluma': 'Dadaluma',
        'Fire Control System': 'système de contrôle',
        'Guardian': 'gardien',
        'Ultros': 'Orthros',
        'WEAPON SYSTEMS ONLINE': 'Démarrage du système de contrôle... Activation du programme initial... Gardien, au combat',
      },
      'replaceText': {
        'Aether Rot': 'Pourriture éthéréenne',
        'Arm And Hammer': 'Marteau stratégique',
        'Atomic Ray': 'Rayon atomique',
        'Aura Cannon': 'Rayon d\'aura',
        'Biblio': 'Bibliotaphe',
        'Bomb Deployment': 'Déploiement de bombes',
        'Chain Cannon': 'Canon automatique',
        'Chakra Burst': 'Explosion d\'aura',
        'Copy(?! Program)': 'Copie',
        'Dada': 'Dadaluma',
        'Demon Simulation': 'Chargement : démon',
        'Diffractive Laser': 'Laser diffracteur',
        'Diffractive Plasma': 'Plasma diffracteur',
        'Ink': 'Encre',
        'Interrupt Stoneskin': 'Interrompre Cuirasse',
        'Load': 'Chargement',
        'Magitek Ray': 'Rayon magitek',
        'Magnetism': 'Magnétisme',
        'Main Cannon': 'Canon principal',
        'Missile Simulation': 'Chargement : missiles',
        'Paste(?! Program)': 'Collage',
        'Plane Laser': 'Laser force aérienne',
        'Prey': 'Proie',
        'Radar': 'Radar',
        'Repel': 'Répulsion',
        'Retrieve Air Force': 'Programme Précédent Force Aérienne',
        'Retrieve Ultros': 'Programme Précédent Orthros',
        'Run(?! Program)': 'Programme',
        'Shockwave': 'Onde de choc',
        'Skip(?! Program)': 'Saut De Programme',
        'Temporary Misdirection': 'Démence',
        'Tentacle(?! )': 'Tentacule',
        'Tentacle Simulation': 'Chargement : tentacule',
        'Viral Weapon': 'Arme virologique',
        '(?<!\\w)Virus': 'Virus',
        'Wallop': 'Taloche tentaculaire',
      },
      '~effectNames': {
        'Abandonment': 'Isolement',
        'Aether Rot': 'Pourriture éthéréenne',
        'Bibliotaph Simulation': 'Programme bibliotaphe',
        'Dadaluma Simulation': 'Programme Dadaluma',
        'Searing Wind': 'Carbonisation',
        '(?<!\\w)Virus': 'Virus',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Dadaluma': 'ダダルマー',
        'Fire Control System': 'ファイアコントロールシステム',
        'Guardian': 'ガーディアン',
        'Ultros': 'オルトロス',
      },
      'replaceText': {
        'Aether Rot': 'エーテルロット',
        'Arm And Hammer': 'アームハンマー',
        'Atomic Ray': 'アトミックレイ',
        'Aura Cannon': 'オーラキャノン',
        'Bomb Deployment': '爆弾設置',
        'Chain Cannon': 'チェーンガン',
        'Chakra Burst': 'チャクラバースト',
        'Demon Simulation': 'ローディング：デーモン',
        'Diffractive Laser': '拡散レーザー',
        'Diffractive Plasma': '拡散プラズマ',
        'Ink': '墨',
        'Load': 'ローディング',
        'Magitek Ray': '魔導レーザー',
        'Magnetism': '磁力',
        'Main Cannon': 'メインカノン',
        'Missile Simulation': 'ローディング：ミサイル',
        'Prey': 'プレイ',
        'Repel': '反発',
        'Shockwave': '衝撃波',
        'Temporary Misdirection': '心神喪失',
        'Tentacle(?! )': 'たこあし',
        'Tentacle Simulation': 'ローディング：たこあし',
        'Viral Weapon': 'ウィルス兵器',
        '(?<!\\w)Virus': 'ウイルス',
        'Wallop': '叩きつけ',
      },
      '~effectNames': {
        'Abandonment': '孤独感',
        'Aether Rot': 'エーテルロット',
        'Bibliotaph Simulation': 'ビブリオタフ・プログラム',
        'Dadaluma Simulation': 'ダダルマー・プログラム',
        'Searing Wind': '熱風',
        '(?<!\\w)Virus': 'ウイルス',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Dadaluma': '达达鲁玛',
        'Fire Control System': '武器火控系统',
        'Guardian': '守护者',
        'Ultros': '奥尔特罗斯',
        'WEAPON SYSTEMS ONLINE': '武器火控系统启动',
      },
      'replaceText': {
        'Aether Rot': '以太病毒',
        'Arm And Hammer': '臂锤',
        'Atomic Ray': '原子射线',
        'Aura Cannon': '斗气炮',
        'Biblio': '永世珍本',
        'Bomb Deployment': '设置炸弹',
        'Chain Cannon': '链式机关炮',
        'Chakra Burst': '脉轮爆发',
        'Copy(?! Program)': '复制',
        'Dada': '达达鲁玛',
        'Demon Simulation': '加载恶魔模拟程序',
        'Diffractive Laser': '扩散射线',
        'Diffractive Plasma': '扩散离子',
        'Ink': '墨汁',
        'Interrupt Stoneskin': '打断石肤',
        'Load': '加载',
        'Magitek Ray': '魔导激光',
        'Magnetism': '磁力',
        'Main Cannon': '主加农炮',
        'Missile Simulation': '加载导弹模拟程序',
        'Paste(?! Program)': '粘贴',
        'Plane Laser': '平面激光',
        'Prey': '猎物',
        'Radar': '雷达',
        'Repel': '相斥',
        'Retrieve Air Force': '接小飞机',
        'Retrieve Ultros': '接奥尔特罗斯',
        'Run(?! Program)': '跑',
        'Shockwave': '冲击波',
        'Skip(?! Program)': '跳跃',
        'Temporary Misdirection': '精神失常',
        'Tentacle(?! )': '腕足',
        'Tentacle Simulation': '加载腕足模拟程序',
        'Viral Weapon': '病毒兵器',
        '(?<!\\w)Virus': '病毒',
        'Wallop': '敲击',
      },
      '~effectNames': {
        'Abandonment': '孤独感',
        'Aether Rot': '以太病毒',
        'Bibliotaph Simulation': '永世珍本模拟程序',
        'Dadaluma Simulation': '达达鲁玛模拟程序',
        'Searing Wind': '热风',
        '(?<!\\w)Virus': '病毒',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Dadaluma': '다다루마',
        'Fire Control System': '병기 제어 시스템',
        'Guardian': '가디언',
        'Ultros': '오르트로스',
      },
      'replaceText': {
        'Aether Rot': '에테르 부패',
        'Arm And Hammer': '양팔 내리치기',
        'Atomic Ray': '원자 파동',
        'Aura Cannon': '오라 포격',
        'Biblio': '비블리오',
        'Bomb Deployment': '폭탄 설치',
        'Chain Cannon': '기관총',
        'Chakra Burst': '차크라 폭발',
        'Copy(?! Program)': '복사',
        'Dada': '다다',
        'Demon Simulation': '불러오기: 악마',
        'Diffractive Laser': '확산 레이저',
        'Diffractive Plasma': '확산 플라스마',
        'Ink': '먹물',
        'Interrupt Stoneskin': '스톤스킨 취소됨',
        'Load': '불러오기',
        'Magitek Ray': '마도 레이저',
        'Magnetism': '자력',
        'Main Cannon': '주포',
        'Missile Simulation': '불러오기: 미사일',
        'Paste(?! Program)': '붙여넣기',
        'Plane Laser': '에어포스 레이저',
        'Prey': 'プレイ',
        'Radar': '레이더',
        'Repel': '반발',
        'Run(?! Program)': '실체화',
        'Shockwave': '충격파',
        'Skip(?! Program)': '건너뛰기',
        'Temporary Misdirection': '심신상실',
        'Tentacle(?! )': '문어발',
        'Tentacle Simulation': '불러오기: 문어발',
        'Viral Weapon': '바이러스 병기',
        '(?<!\\w)Virus': '바이러스',
        'Wallop': '매질',
      },
      '~effectNames': {
        'Abandonment': '고독감',
        'Aether Rot': '에테르 부패',
        'Bibliotaph Simulation': '비블리오타프 프로그램',
        'Dadaluma Simulation': '다다루마 프로그램',
        'Searing Wind': '작열',
        '(?<!\\w)Virus': '바이러스 프로그램',
      },
    },
  ],
}];
