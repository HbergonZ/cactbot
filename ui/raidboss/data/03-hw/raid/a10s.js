'use strict';

// Notes:
// Ignoring Gobsway Rumblerocks (1AA0) aoe trigger, as it is small and frequent.

[{
  zoneRegex: {
    en: /^Alexander - The Breath Of The Creator \(Savage\)$/,
    cn: /^亚历山大零式机神城 \(天动之章2\)$/,
  },
  zoneId: ZoneId.AlexanderTheBreathOfTheCreatorSavage,
  timelineFile: 'a10s.txt',
  timelineTriggers: [
    {
      id: 'A10S Goblin Rush',
      regex: /Goblin Rush/,
      beforeSeconds: 5,
      condition: Conditions.caresAboutPhysical(),
      suppressSeconds: 1,
      response: Responses.miniBuster(),
    },
    {
      id: 'A10S Gobbie Adds',
      regex: /Gobbie Adds/,
      beforeSeconds: 0,
      suppressSeconds: 1,
      infoText: {
        en: 'Hit Adds With Weight Trap',
        de: 'Adds mit Gewichtsfalle treffen',
        fr: 'Frappez les Adds avec le Piège à poids',
        cn: '使用铁锤陷阱击中小怪',
      },
    },
  ],
  triggers: [
    {
      id: 'A10S Floor Spike Trap',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1AB2', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1AB2', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1AB2', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1AB2', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1AB2', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1AB2', capture: false }),
      infoText: {
        en: 'Floor Spikes',
        de: 'Boden-Stachel',
        fr: 'Pics au sol',
        cn: '地刺陷阱',
      },
    },
    {
      id: 'A10S Frost Laser Trap',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1AB1', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1AB1', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1AB1', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1AB1', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1AB1', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1AB1', capture: false }),
      infoText: {
        en: 'Frost Lasers',
        de: 'Eislaser',
        fr: 'Lasers de glace',
        cn: '冰晶陷阱',
      },
    },
    {
      id: 'A10S Ceiling Weight Trap',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1AB0', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1AB0', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1AB0', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1AB0', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1AB0', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1AB0', capture: false }),
      infoText: {
        en: 'Ceiling Weight',
        de: 'Gewichte von der Decke',
        fr: 'Poids du plafond',
        cn: '铁球陷阱',
      },
    },
    {
      id: 'A10S Charge Marker',
      // This also handles the "single charge" call.
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1AB[89AB]' }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1AB[89AB]' }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1AB[89AB]' }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1AB[89AB]' }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1AB[89AB]' }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1AB[89AB]' }),
      preRun: function(data, matches) {
        data.charges = data.charges || [];
        data.charges.push({
          '1AB8': Responses.getIn,
          '1AB9': Responses.getOut,
          '1ABA': Responses.spread,
          '1ABB': Responses.stack,
        }[matches.id]);
      },
      response: function(data) {
        // Call the first one out with alert, the other two with info.
        let severity = data.charges.length > 1 ? 'info' : 'alert';
        return data.charges[data.charges.length - 1](severity);
      },
    },
    {
      id: 'A10S Charge 1',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1A9[789]', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1A9[789]', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1A9[789]', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1A9[789]', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1A9[789]', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1A9[789]', capture: false }),
      run: function(data) {
        if (data.charges)
          data.charges.shift();
      },
    },
    {
      id: 'A10S Charge Double Triple',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1A9[ABCE]', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1A9[ABCE]', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1A9[ABCE]', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1A9[ABCE]', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1A9[ABCE]', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1A9[ABCE]', capture: false }),
      suppressSeconds: 0.5,
      response: function(data) {
        if (!data.charges || !data.charges.length)
          return;

        return data.charges.shift()('alert');
      },
    },
    {
      id: 'A10S Charge Clear',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1A9[789]', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1A9[789]', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1A9[789]', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1A9[789]', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1A9[789]', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1A9[789]', capture: false }),
      delaySeconds: 10,
      run: function(data) {
        // Cleanup just in case.
        delete data.charges;
      },
    },
    {
      id: 'A10S Gobrush Rushgob',
      regex: Regexes.startsUsing({ source: 'Lamebrix Strikebocks', id: '1A9F' }),
      regexDe: Regexes.startsUsing({ source: 'Wüterix (?:der|die|das) Söldner', id: '1A9F' }),
      regexFr: Regexes.startsUsing({ source: 'Lamebrix Le Mercenaire', id: '1A9F' }),
      regexJa: Regexes.startsUsing({ source: '傭兵のレイムプリクス', id: '1A9F' }),
      regexCn: Regexes.startsUsing({ source: '佣兵雷姆普里克斯', id: '1A9F' }),
      regexKo: Regexes.startsUsing({ source: '용병 레임브릭스', id: '1A9F' }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'A10S Slicetops Tether',
      regex: Regexes.tether({ source: 'Lamebrix Strikebocks', id: '0039' }),
      regexDe: Regexes.tether({ source: 'Wüterix (?:der|die|das) Söldner', id: '0039' }),
      regexFr: Regexes.tether({ source: 'Lamebrix Le Mercenaire', id: '0039' }),
      regexJa: Regexes.tether({ source: '傭兵のレイムプリクス', id: '0039' }),
      regexCn: Regexes.tether({ source: '佣兵雷姆普里克斯', id: '0039' }),
      regexKo: Regexes.tether({ source: '용병 레임브릭스', id: '0039' }),
      alarmText: function(data, matches) {
        if (data.me != matches.target)
          return;
        return {
          en: 'Tank Swap, Get Away',
          de: 'Tankwechsel, geh weg',
          fr: 'Tank swap, éloignez-vous',
          cn: '换T并且远离',
        };
      },
      alertText: function(data, matches) {
        if (data.me == matches.target)
          return;
        if (data.role == 'tank') {
          return {
            en: 'Tank Swap!',
            de: 'Tankwechsel!',
            fr: 'Tank swap !',
            ja: 'タンクスイッチ',
            cn: '换T！',
            ko: '탱 교대',
          };
        }
        if (data.role == 'healer' || data.job == 'blu') {
          return {
            en: 'Shield ' + data.ShortName(matches.target),
            de: 'Schild ' + data.ShortName(matches.target),
            fr: 'Bouclier ' + data.ShortName(matches.target),
            cn: '单盾' + data.ShortName(matches.target),
          };
        }
      },
    },
    {
      id: 'A10S Gobsnick Leghops',
      regex: Regexes.startsUsing({ source: 'Lamebrix Strikebocks', id: '1AA4', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Wüterix (?:der|die|das) Söldner', id: '1AA4', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Lamebrix Le Mercenaire', id: '1AA4', capture: false }),
      regexJa: Regexes.startsUsing({ source: '傭兵のレイムプリクス', id: '1AA4', capture: false }),
      regexCn: Regexes.startsUsing({ source: '佣兵雷姆普里克斯', id: '1AA4', capture: false }),
      regexKo: Regexes.startsUsing({ source: '용병 레임브릭스', id: '1AA4', capture: false }),
      response: Responses.stopEverything(),
    },
    {
      id: 'A10S Brighteyes Tracker',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1AA9', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1AA9', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1AA9', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1AA9', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1AA9', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1AA9', capture: false }),
      run: function(data) {
        // This comes out 0.1s before every '0029' prey marker.
        data.seenBrighteyes = true;
      },
    },
    {
      id: 'A10S Brighteyes Cleanup',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1AA9', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1AA9', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1AA9', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1AA9', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1AA9', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1AA9', capture: false }),
      delaySeconds: 20,
      suppressSeconds: 20,
      run: function(data) {
        delete data.seenBrighteyes;
      },
    },
    {
      id: 'A10S Brighteyes Prey Marker',
      regex: Regexes.headMarker({ id: '0029' }),
      condition: Conditions.targetIsYou(),
      alertText: {
        en: 'Prey on YOU',
        de: 'Makierung auf DIR',
        fr: 'Marquage sur VOUS',
        cn: '火圈点名',
      },
    },
    {
      id: 'A10S Brighteyes Prey Marker Pass',
      regex: Regexes.headMarker({ id: '0029' }),
      condition: function(data, matches) {
        // Only need to pass on the first one.
        return data.me == matches.target && !data.seenBrighteyes;
      },
      delaySeconds: 5,
      infoText: {
        en: 'Pass Prey',
        de: 'Makierung weitergeben',
        fr: 'Passez le marquage',
        cn: '传递点名',
      },
    },
    {
      id: 'A10S Gobslice Mooncrops',
      regex: Regexes.startsUsing({ source: 'Lamebrix Strikebocks', id: '1A92', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Wüterix (?:der|die|das) Söldner', id: '1A92', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Lamebrix Le Mercenaire', id: '1A92', capture: false }),
      regexJa: Regexes.startsUsing({ source: '傭兵のレイムプリクス', id: '1A92', capture: false }),
      regexCn: Regexes.startsUsing({ source: '佣兵雷姆普里克斯', id: '1A92', capture: false }),
      regexKo: Regexes.startsUsing({ source: '용병 레임브릭스', id: '1A92', capture: false }),
      infoText: {
        en: 'Hit Floor Trap',
        de: 'Aktiviere Bodenfalle',
        fr: 'Activez le Piège au sol',
        cn: '踩地刺陷阱',
      },
    },
    {
      id: 'A10S Gobslice Mooncrops Cast',
      regex: Regexes.startsUsing({ source: 'Lamebrix Strikebocks', id: '1A8F', capture: false }),
      regexDe: Regexes.startsUsing({ source: 'Wüterix (?:der|die|das) Söldner', id: '1A8F', capture: false }),
      regexFr: Regexes.startsUsing({ source: 'Lamebrix Le Mercenaire', id: '1A8F', capture: false }),
      regexJa: Regexes.startsUsing({ source: '傭兵のレイムプリクス', id: '1A8F', capture: false }),
      regexCn: Regexes.startsUsing({ source: '佣兵雷姆普里克斯', id: '1A8F', capture: false }),
      regexKo: Regexes.startsUsing({ source: '용병 레임브릭스', id: '1A8F', capture: false }),
      response: Responses.getOut('info'),
    },
    {
      id: 'A10S Gobspin Zoomdrops',
      regex: Regexes.ability({ source: 'Lamebrix Strikebocks', id: '1A8F', capture: false }),
      regexDe: Regexes.ability({ source: 'Wüterix (?:der|die|das) Söldner', id: '1A8F', capture: false }),
      regexFr: Regexes.ability({ source: 'Lamebrix Le Mercenaire', id: '1A8F', capture: false }),
      regexJa: Regexes.ability({ source: '傭兵のレイムプリクス', id: '1A8F', capture: false }),
      regexCn: Regexes.ability({ source: '佣兵雷姆普里克斯', id: '1A8F', capture: false }),
      regexKo: Regexes.ability({ source: '용병 레임브릭스', id: '1A8F', capture: false }),
      infoText: {
        en: 'Hit Boss With Ice',
        de: 'Boss mit Eis treffen',
        fr: 'Frappez le boss avec la Glace',
        cn: '踩冰晶陷阱',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Buzzsaw': 'Rotorsäge',
        'Gobpress R-VI': 'Gob-Roller VI',
        'Lamebrix Strikebocks': 'Wüterix (?:der|die|das) Söldner',
        'Lameprix Strikedocks': 'Wüterix (?:der|die|das) Trickser',
        'The Excruciationator': 'Multi-Martyrium',
        'Weight Of The World': 'Schwere der Erde',
      },
      'replaceText': {
        '(?!--)mechanic': 'Mechanik',
        '--in--': '--Rein--',
        '--out--': '--Raus--',
        '--in/out--': '--Rein/Raus--',
        '--out/in--': '--Raus/Rein--',
        '--spread/stack--': '--Verteilen/Sammeln--',
        '--stack/spread--': '--Sammeln/Verteilen--',
        'Brighteyes': 'Zielheften Auge',
        'Clone Add': 'Klon Add',
        'Discharge': 'Abfeuern',
        'Double Charge': 'Doppelaufladung',
        'Floor Trap': 'Boden-Falle',
        'Frost Trap': 'Eisstrahl-Falle',
        'Frostbite': 'Abfrieren',
        'Gobbie Adds': 'Gobbie Adds',
        'Goblin Rush': 'Goblin-Rausch',
        'Gobrush Rushgob': 'Indigoblin-Rausch ',
        'Gobslash Slicetops': 'Indigo-Vakuumhieb',
        'Gobslice Mooncrops': 'Schlitzensichel',
        'Gobsnick Leghops': 'Gob am Berg',
        'Gobspin Zoomdrops': 'Große Gobwirbel',
        'Gobsway Rumblerocks': 'Riesengroße Schüttern',
        'Gobswish Spraymops': 'Fährliche Fächer',
        'Illuminati Hand Cannon': 'Indigohandkanone',
        'Impact': 'Impakt',
        'Laceration': 'Zerreißen',
        'Single Charge': 'Einzelaufladung',
        'Steam Roller': 'Dampfwalze',
        'Stoneskin': 'Steinhaut',
        'Triple Charge': 'Dreifachaufladung',
        'Weight Trap': 'Gewichts-Falle',
        'Leghops\\?/Charge \\(In\\)\\?': 'Gob am Berg?/Aufladung (Rein)?',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Buzzsaw': 'Scie mécanique',
        'Gobpress R-VI': 'Gobrouleau compresseur G-VI',
        'Lamebrix Strikebocks': 'Lamebrix le Mercenaire',
        'Lameprix Strikedocks': 'Lamebrix le Diversif',
        'The Excruciationator': 'la plate-forme de torture polyvalente',
        'Weight Of The World': 'Poids du monde',
      },
      'replaceText': {
        '(?!--)mechanic': 'Mécanique',
        '--in--': '--intérieur--',
        '--in/out--': '--intérieur/extérieur--',
        '--out--': '--extérieur--',
        '--out/in--': '--extérieur/intérieur--',
        '--spread/stack--': '--dispersion/package--',
        '--stack/spread--': '--package/dispersion--',
        '\\(Stack/Spread\\)': '(Package/Dispersion)',
        'Brighteyes Markers': 'Marquage Œil vif',
        'Brighteyes(?! Markers)': 'Œil vif',
        'Clone Add': 'Add Clone',
        'Discharge': 'Mitraillage',
        'Double Charge': 'Rechargement double',
        'Floor Trap': 'Piège au sol',
        'Frost Trap': 'Piège de glace',
        'Frostbite': 'Gelure',
        'Gobbie Adds x3 \\(NE\\)': 'Adds x3 Gob',
        'Goblin Rush': 'Charge gobeline',
        'Gobrush Rushgob': 'Gobcharge gobeline',
        'Gobslash Slicetops': 'Gobtranchant du vide',
        'Gobslice Mooncrops': 'Gobcroissant lacérant',
        'Gobsnick Leghops': 'Gobfeinte mortelle',
        'Gobspin Zoomdrops': 'Gobtoupie mégatranchante',
        'Gobsway Rumblerocks': 'Gobbouleversement',
        'Gobswish Spraymops': 'Gobdécoupage brutal',
        'Illuminati Hand Cannon': 'Main-canon indigo',
        'Impact': 'Impact',
        'Laceration': 'Lacération',
        'Leghops\\?/Charge \\(In\\)\\?': 'Mortelle ?/Charge (intérieur) ?',
        'Single Charge': 'Rechargement simple',
        'Steam Roller': 'Compression',
        'Stoneskin': 'Cuirasse',
        'Triple Charge': 'Rechargement triple',
        'Weight Trap': 'Piège à poids',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Buzzsaw': '回転ノコギリ',
        'Gobpress R-VI': 'VI号ゴブリローラー',
        'Lamebrix Strikebocks': '傭兵のレイムプリクス',
        'Lameprix Strikedocks': '偽兵のレイムプリクス',
        'The Excruciationator': '科学的万能処刑場',
        'Weight Of The World': '大陸の重み',
      },
      'replaceText': {
        'Brighteyes': '狙い目',
        'Discharge': '銃撃',
        'Double Charge': '二連充填',
        'Frostbite': 'フロストバイト',
        'Goblin Rush': 'ゴブリンラッシュ',
        'Gobrush Rushgob': 'ゴブ流ゴブリンラッシュ',
        'Gobslash Slicetops': 'ゴブ流真空斬り',
        'Gobslice Mooncrops': 'ゴブ流三日月斬り',
        'Gobsnick Leghops': 'ゴブ流後の先',
        'Gobspin Zoomdrops': 'ゴブ流大回転斬り',
        'Gobsway Rumblerocks': 'ゴブ流大激震',
        'Gobswish Spraymops': 'ゴブ流飛水断ち',
        'Illuminati Hand Cannon': 'イルミナティ・ハンドカノン',
        'Impact': 'インパクト',
        'Laceration': '斬撃',
        'Single Charge': '単発充填',
        'Steam Roller': 'ローラープレス',
        'Stoneskin': 'ストンスキン',
        'Triple Charge': '三連充填',
      },
    },
    {
      'locale': 'cn',
      'missingTranslations': true,
      'replaceSync': {
        'Buzzsaw': '旋转链锯',
        'Gobpress R-VI': '6号哥布林压路机',
        'Lamebrix Strikebocks': '佣兵雷姆普里克斯',
        'Lameprix Strikedocks': '虚兵雷姆普里克斯',
        'The Excruciationator': '科学万能处刑场',
        'Weight Of The World': '大陆之重',
      },
      'replaceText': {
        'Brighteyes': '目标',
        'Discharge': '枪击',
        'Double Charge': '二连填充',
        'Frostbite': '寒冰箭',
        'Goblin Rush': '哥布林冲锋',
        'Gobrush Rushgob': '哥布流哥布林冲锋',
        'Gobslash Slicetops': '哥布流真空斩',
        'Gobslice Mooncrops': '哥布流月牙斩',
        'Gobsnick Leghops': '哥布流后之先',
        'Gobspin Zoomdrops': '哥布流大回旋斩',
        'Gobsway Rumblerocks': '哥布流大怒震',
        'Gobswish Spraymops': '哥布流断瀑斩',
        'Illuminati Hand Cannon': '青蓝手炮',
        'Impact': '冲击',
        'Laceration': '斩击',
        'Single Charge': '单发填充',
        'Steam Roller': '蒸汽滚轮',
        'Stoneskin': '石肤',
        'Triple Charge': '三连填充',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Buzzsaw': '회전톱',
        'Gobpress R-VI': 'VI호 고블린롤러',
        'Lamebrix Strikebocks': '용병 레임브릭스',
        'Lameprix Strikedocks': '가짜 용병 레임프릭스',
        'The Excruciationator': '과학적 만능처형장',
        'Weight Of The World': '대륙의 무게',
      },
      'replaceText': {
        'Brighteyes': '표적',
        'Discharge': '총격',
        'Double Charge': '2연속 충전',
        'Frostbite': '동상',
        'Goblin Rush': '고블린 돌진',
        'Gobrush Rushgob': '고브류 고블린 돌진',
        'Gobslash Slicetops': '고브류 진공베기',
        'Gobslice Mooncrops': '고브류 초승달베기',
        'Gobsnick Leghops': '고브류 되받아치기',
        'Gobspin Zoomdrops': '고브류 대회전베기',
        'Gobsway Rumblerocks': '고브류 대격진',
        'Gobswish Spraymops': '고브류 물보라베기',
        'Illuminati Hand Cannon': '푸른손 화포',
        'Impact': '임팩트',
        'Laceration': '참격',
        'Single Charge': '단발 충전',
        'Steam Roller': '롤러 프레스',
        'Stoneskin': '스톤스킨',
        'Triple Charge': '3연속 충전',
      },
    },
  ],
}];
