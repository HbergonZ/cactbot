'use strict';

// O5S - Sigmascape 1.0 Savage
// localization:
//   de: done
//   fr: missing replaceText, triggers
//   ja: missing replaceText, triggers
[{
  zoneRegex: {
    en: /^Sigmascape V1\.0 \(Savage\)$/,
    cn: /^欧米茄零式时空狭缝 \(西格玛幻境1\)$/,
  },
  zoneId: ZoneId.SigmascapeV10Savage,
  timelineFile: 'o5s.txt',
  resetWhenOutOfCombat: false,
  triggers: [
    {
      id: 'O5S Stop Combat',
      regex: Regexes.removingCombatant({ name: 'Phantom Train', capture: false }),
      regexDe: Regexes.removingCombatant({ name: 'Phantomzug', capture: false }),
      regexFr: Regexes.removingCombatant({ name: 'Train Fantôme', capture: false }),
      regexJa: Regexes.removingCombatant({ name: '魔列車', capture: false }),
      regexCn: Regexes.removingCombatant({ name: '魔列车', capture: false }),
      regexKo: Regexes.removingCombatant({ name: '마열차', capture: false }),
      run: function(data) {
        data.StopCombat();
      },
    },
    {
      id: 'O5S Doom Strike',
      regex: Regexes.startsUsing({ id: '28B1', source: 'Phantom Train' }),
      regexDe: Regexes.startsUsing({ id: '28B1', source: 'Phantomzug' }),
      regexFr: Regexes.startsUsing({ id: '28B1', source: 'Train Fantôme' }),
      regexJa: Regexes.startsUsing({ id: '28B1', source: '魔列車' }),
      regexCn: Regexes.startsUsing({ id: '28B1', source: '魔列车' }),
      regexKo: Regexes.startsUsing({ id: '28B1', source: '마열차' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'O5S Head On',
      regex: Regexes.startsUsing({ id: '28A4', source: 'Phantom Train', capture: false }),
      regexDe: Regexes.startsUsing({ id: '28A4', source: 'Phantomzug', capture: false }),
      regexFr: Regexes.startsUsing({ id: '28A4', source: 'Train Fantôme', capture: false }),
      regexJa: Regexes.startsUsing({ id: '28A4', source: '魔列車', capture: false }),
      regexCn: Regexes.startsUsing({ id: '28A4', source: '魔列车', capture: false }),
      regexKo: Regexes.startsUsing({ id: '28A4', source: '마열차', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'O5S Diabolic Headlamp',
      regex: Regexes.startsUsing({ id: '28B2', source: 'Phantom Train', capture: false }),
      regexDe: Regexes.startsUsing({ id: '28B2', source: 'Phantomzug', capture: false }),
      regexFr: Regexes.startsUsing({ id: '28B2', source: 'Train Fantôme', capture: false }),
      regexJa: Regexes.startsUsing({ id: '28B2', source: '魔列車', capture: false }),
      regexCn: Regexes.startsUsing({ id: '28B2', source: '魔列车', capture: false }),
      regexKo: Regexes.startsUsing({ id: '28B2', source: '마열차', capture: false }),
      response: Responses.stackMiddle(),
    },
    {
      id: 'O5S Diabolic Light',
      regex: Regexes.headMarker({ id: '0001' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      infoText: {
        en: 'Light',
        de: 'Licht',
        fr: 'Lumière',
        ko: '빛장판',
        ja: 'ライト',
        cn: '光点名',
      },
    },
    {
      id: 'O5S Diabolic Wind',
      regex: Regexes.headMarker({ id: '0046' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      infoText: {
        en: 'Wind',
        de: 'Wind',
        fr: 'Vent',
        ko: '초록징',
        ja: '風',
        cn: '圆圈点名',
      },
    },
    {
      id: 'O5S Remorse',
      regex: Regexes.addedCombatant({ name: 'Remorse', capture: false }),
      regexDe: Regexes.addedCombatant({ name: 'Melancholisch(?:e|er|es|en) Geist', capture: false }),
      regexFr: Regexes.addedCombatant({ name: 'Fantôme Mélancolique', capture: false }),
      regexJa: Regexes.addedCombatant({ name: '未練のゴースト', capture: false }),
      regexCn: Regexes.addedCombatant({ name: '留恋幽灵', capture: false }),
      regexKo: Regexes.addedCombatant({ name: '미련이 남은 유령', capture: false }),
      response: Responses.knockback(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Agony': 'Gequälter Geist',
        'Malice': 'Boshaftigkeit',
        'Phantom Train': 'Phantomzug',
        'Remorse': 'melancholisch(?:e|er|es|en) Geist',
        'Wroth Ghost': 'erzürnt(?:e|er|es|en) Geist',
      },
      'replaceText': {
        ' Ghosts': ' Geister',
        'Acid Rain': 'Säureregen',
        'Add Wave': 'Add Welle',
        'All In The Mind': 'Psychokinese',
        'Crossing Whistle': 'Kreuzend Pfeife',
        'Diabolic Headlamp': 'Diabolische Leuchte',
        'Diabolic Light': 'Diabolisches Licht',
        'Diabolic Wind': 'Diabolischer Wind',
        'Doom Strike': 'Vernichtungsschlag',
        'Encumber': 'Wegsperrung',
        'Ghosts spawn': 'Geister erscheinen',
        'Head On': 'Frontalangriff',
        'Knockback Whistle': 'Rückstoß Pfeife',
        'Saintly Beam': 'Heiligenstrahl',
        'Tether Whistle': 'Verfolger Pfeife',
      },
    },
    {
      'locale': 'fr',
      'missingTranslations': true,
      'replaceSync': {
        'Agony': 'Fantôme Souffrant',
        'Malice': 'Malveillance',
        'Phantom Train': 'train fantôme',
        'Remorse': 'fantôme mélancolique',
        'Wroth Ghost': 'fantôme furieux',
      },
      'replaceText': {
        ' Ghosts': ' Fantômes',
        'Acid Rain': 'Pluie acide',
        'Add Wave': 'Vague d\'Adds',
        'All In The Mind': 'Force de volonté',
        'Crossing Whistle': 'Sifflet traversée',
        'Diabolic Headlamp': 'Phare diabolique',
        'Diabolic Light': 'Lueur diabolique',
        'Diabolic Wind': 'Vent diabolique',
        'Doom Strike': 'Frappe létale',
        'Encumber': 'Encombrement',
        'Ghosts spawn': 'Pop des Fantômes',
        'Head On': 'Plein fouet',
        'Saintly Beam': 'Faisceaux sacrés',
        'Tether Whistle': 'Sifflet liens',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Agony': '苦悶のゴースト',
        'Malice': '怨念',
        'Phantom Train': '魔列車',
        'Remorse': '未練のゴースト',
        'Wroth Ghost': 'ロスゴースト',
      },
      'replaceText': {
        'Acid Rain': '酸性雨',
        'All In The Mind': '念力',
        'Diabolic Headlamp': '魔界の前照灯',
        'Diabolic Light': '魔界の光',
        'Diabolic Wind': '魔界の風',
        'Doom Strike': '魔霊撃',
        'Encumber': '進路妨害',
        'Head On': '追突',
        'Saintly Beam': 'セイントビーム',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Agony': '苦闷幽灵',
        'Malice': '怨念',
        'Phantom Train': '魔列车',
        'Remorse': '留恋幽灵',
        'Wroth Ghost': '怒灵',
      },
      'replaceText': {
        ' Ghosts': ' 幽灵',
        'Acid Rain': '酸雨',
        'Add Wave': '一波小怪',
        'All In The Mind': '念力',
        'Crossing Whistle': '交叉汽笛',
        'Diabolic Headlamp': '魔界前照灯',
        'Diabolic Light': '魔界光',
        'Diabolic Wind': '魔界风',
        'Doom Strike': '魔灵击',
        'Encumber': '挡路',
        'Ghosts spawn': '幽灵出现',
        'Head On': '追尾',
        'Knockback Whistle': '击退汽笛',
        'Saintly Beam': '圣光射线',
        'Tether Whistle': '连线汽笛',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Agony': '고뇌하는 유령',
        'Malice': '원한',
        'Phantom Train': '마열차',
        'Remorse': '미련이 남은 유령',
        'Wroth Ghost': '격노하는 유령',
      },
      'replaceText': {
        'Acid Rain': '산성비',
        'All In The Mind': '염력',
        'Diabolic Headlamp': '마계의 전조등',
        'Diabolic Light': '마계의 빛',
        'Diabolic Wind': '마계의 바람',
        'Doom Strike': '마령격',
        'Encumber': '진로 방해',
        'Head On': '추돌',
        'Saintly Beam': '성스러운 광선',
      },
    },
  ],
}];
