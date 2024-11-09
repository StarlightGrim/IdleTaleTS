export const TALENTS_VALUES: {
  MIN: number, MAX: number
} = {
  MIN: 0,
  MAX: 62,
};

export const TALENT_NAME: {
  BERSERK: string, ASSASSIN: string
} = {
    BERSERK: "berserk",
    ASSASSIN: "assassin",
};

export const LEVEL_NAME: {
  TALENT: string, COMPLETED: string, LEVELED: string
} = {
    TALENT: "talent",
    COMPLETED: "completed",
    LEVELED: "leveled",
};

export interface CurrentTotal {
  BERSERK: number, ASSASSIN: number
}

export const CURRENT_TOTAL: CurrentTotal = {
    BERSERK: 0,
    ASSASSIN: 0
};

export interface TalentData {
  id: number, background: string, talentClass: string,
  max: number, req: number, tier: number, changable: {level: number, style: string},
  descStart: string, descEnd: string, descValues: Array<any>
}

export const TALENTS_DATA: TalentData[] = [
    {
      id: 0, 
      background: "/resources/berserk-talents/berserk-1.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 1,
      req: 0,
      tier: 1,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Increases your autoattack damage by ",
      descEnd: "%.",
      descValues: [0, 100]
    }, {
      id: 1, 
      background: "/resources/berserk-talents/berserk-2.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 5,
      req: 1,
      tier: 2,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You gain ",
      descEnd: "Attack Power for every Gains Upgrades bought.",
      descValues: [0, 0.2, 0.4, 0.6, 0.8, 1]
    }, {
      id: 2, 
      background: "/resources/berserk-talents/berserk-3.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 3,
      req: 1,
      tier: 2,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Increases your Multi-Hit Chance by ",
      descEnd: "%.",
      descValues: [0, 1, 2, 3]
    }, {
      id: 3, 
      background: "/resources/berserk-talents/berserk-4.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 3,
      req: 5,
      tier: 3,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Reduces your autoattack cooldown by ",
      descEnd: " seconds.",
      descValues: [0, 3, 6, 9]
    }, {
      id: 4, 
      background: "/resources/berserk-talents/berserk-5.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 5,
      req: 5,
      tier: 3,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Reduces your damage taken by ",
      descEnd: "%.",
      descValues: [0, 2, 4, 6, 8, 10]
    }, {
      id: 5, 
      background: "/resources/berserk-talents/berserk-6.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 5,
      req: 10,
      tier: 4,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Each point of Strength increases your Attack Power by ",
      descEnd: " additional points.",
      descValues: [0, 0.2, 0.4, 0.6, 0.8, 1]
    }, {
      id: 6, 
      background: "/resources/berserk-talents/berserk-7.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 1,
      req: 10,
      tier: 4,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Every point of Critical Strike Chance now also grants you a ",
      descEnd: "% Attack Speed bonus.",
      descValues: [0, 0.5]
    }, {
      id: 7, 
      background: "/resources/berserk-talents/berserk-8.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 5,
      req: 15,
      tier: 5,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You deal ",
      descEnd: "% extra damage when wielding maces, staves, fist weapons and ranged weapons.",
      descValues: [0, 3, 6, 9, 12, 15]
    }, {
      id: 8, 
      background: "/resources/berserk-talents/berserk-9.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 5,
      req: 15,
      tier: 5,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You deal ",
      descEnd: "% extra damage when wielding swords, axes, daggers and polearms.",
      descValues: [0, 3, 6, 9, 12, 15]
    }, {
      id: 9, 
      background: "/resources/berserk-talents/berserk-10.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 3,
      req: 20,
      tier: 6,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You gain ",
      descEnd: "% Crit Damage.",
      descValues: [0, 5, 10, 15]
    }, {
      id: 10, 
      background: "/resources/berserk-talents/berserk-11.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 1,
      req: 20,
      tier: 6,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You kill ",
      descEnd: "% more enemies while offline.",
      descValues: [0, 50]
    }, {
      id: 11, 
      background: "/resources/berserk-talents/berserk-12.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 3,
      req: 20,
      tier: 6,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Each consecutive attack increases your damage by ",
      descEnd: "% for 3 seconds, stacking up to 5 times.",
      descValues: [0, 5, 10, 15]
    }, {
      id: 12, 
      background: "/resources/berserk-talents/berserk-13.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 1,
      req: 25,
      tier: 7,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You don't stop if you can oneshot an enemy.",
      descEnd: "",
      descValues: [
        "",
        ""
      ]
    }, {
      id: 13, 
      background: "/resources/berserk-talents/berserk-14.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 3,
      req: 25,
      tier: 7,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Dealing a critical strike increases your attack speed by ",
      descEnd: "% for 5 seconds, stacking up to 10 times.",
      descValues: [0, 1, 2, 3]
    }, {
      id: 14, 
      background: "/resources/berserk-talents/berserk-15.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 1,
      req: 25,
      tier: 7,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Your critical strikes reset your attack timer.",
      descEnd: "",
      descValues: [
        "",
        ""
      ]
    }, {
      id: 15, 
      background: "/resources/berserk-talents/berserk-16.png",
      talentClass: TALENT_NAME.BERSERK,
      max: 1,
      req: 30,
      tier: 8,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Your attacks against a target below ",
      descEnd: "% health (40% with 8th Wonder of the World Glory Update) will cause twice as much damage.",
      descValues: [0, 25]
    }, {
      id: 16, 
      background: "/resources/assassin-talents/assassin-1.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 1,
      req: 0,
      tier: 1,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Every time you kill an enemy you gain a movement speed bonus based on the exceding damage.",
      descEnd: "",
      descValues: [
        "",
        ""
      ]
    }, {
      id: 17, 
      background: "/resources/assassin-talents/assassin-2.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 5,
      req: 1,
      tier: 2,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Your Agility increases your Critical Strike chance by an additional ",
      descEnd: "%.",
      descValues: [0, 10, 20, 30, 40, 50]
    }, {
      id: 18, 
      background: "/resources/assassin-talents/assassin-3.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 3,
      req: 1,
      tier: 2,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Increases your Dodge Chance by ",
      descEnd: "%.",
      descValues: [0, 2, 4, 6]
    }, {
      id: 19, 
      background: "/resources/assassin-talents/assassin-4.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 5,
      req: 5,
      tier: 3,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You gain ",
      descEnd: "% more Critical Strike Chance from gear.",
      descValues: [0, 5, 10, 15, 20, 25]
    }, {
      id: 20, 
      background: "/resources/assassin-talents/assassin-5.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 5,
      req: 5,
      tier: 3,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Increases your Critical Strike Chance by ",
      descEnd: "%.",
      descValues: [0, 0.5, 1, 1.5, 2, 2.5]
    }, {
      id: 21, 
      background: "/resources/assassin-talents/assassin-6.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 5,
      req: 10,
      tier: 4,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Your Wisdom increases your total Attack Power by an additional ",
      descEnd: "% per level.",
      descValues: [0, 0.4, 0.8, 1.2, 1.6, 2]
    }, {
      id: 22, 
      background: "/resources/assassin-talents/assassin-7.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 1,
      req: 10,
      tier: 4,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Increases your maximum Shadow Rush Speed by ",
      descEnd: "%.",
      descValues: [0, 100]
    }, {
      id: 23, 
      background: "/resources/assassin-talents/assassin-8.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 5,
      req: 15,
      tier: 5,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "	Increases your Attack Speed by ",
      descEnd: "%.",
      descValues: [0, 1, 2, 3, 4, 5]
    }, {
      id: 24, 
      background: "/resources/assassin-talents/assassin-9.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 1,
      req: 15,
      tier: 5,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You gain an extra percentage of Attack Power equal to ",
      descEnd: "% of your Power Level.",
      descValues: [0, 10]
    }, {
      id: 25, 
      background: "/resources/assassin-talents/assassin-10.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 3,
      req: 20,
      tier: 6,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Every ",
      descEnd: "normal attacks your next hit will be a guaranteed Critical Strike. Lasts for 3 seconds.",
      descValues: [0, 9, 7, 5]
    }, {
      id: 26, 
      background: "/resources/assassin-talents/assassin-11.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 1,
      req: 20,
      tier: 6,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "When you land a Critical Strike you generate 10-25 stacks of Malice. Upon reaching 100 stacks your next hit will be a guaranteed Multi-Hit. Lasts 5 seconds.",
      descEnd: "",
      descValues: [
        "",
        ""
      ]
    }, {
      id: 27, 
      background: "/resources/assassin-talents/assassin-12.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 5,
      req: 25,
      tier: 7,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Upon taking damage there's a ",
      descEnd: "% chance to gain 100% dodge chance for the next 5 seconds.",
      descValues: [0, 1, 2, 3, 4, 5]
    }, {
      id: 28, 
      background: "/resources/assassin-talents/assassin-13.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 1,
      req: 25,
      tier: 7,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "When you perform a regular attack there's a 20% chance you'll summon an Unholy Weapon for 5 seconds that will imitate all your attacks at a 50% reduced effectiveness.",
      descEnd: "",
      descValues: [
        "",
        ""
      ]
    }, {
      id: 29, 
      background: "/resources/assassin-talents/assassin-14.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 3,
      req: 25,
      tier: 7,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "When you dodge an attack there's a ",
      descEnd: "% chance you'll counter-attack with 50% reduced damage.",
      descValues: [0, 30, 60, 90]
    }, {
      id: 30, 
      background: "/resources/assassin-talents/assassin-15.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 1,
      req: 30,
      tier: 8,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "Your Unholy Weapons now attack on their own, and their damage is increased by 50% (100% with 8th Wonder of the World Glory Update).",
      descEnd: "",
      descValues: [
        "",
        ""
      ]
    }, {
      id: 31, 
      background: "/resources/assassin-talents/assassin-16.png",
      talentClass: TALENT_NAME.ASSASSIN,
      max: 1,
      req: 30,
      tier: 8,
      changable: {
        level: 0,
        style: "talent"
      },
      descStart: "You gain +1 Multi-Hit Amount.",
      descEnd: "",
      descValues: [
        "",
        ""
      ]
    }
]

