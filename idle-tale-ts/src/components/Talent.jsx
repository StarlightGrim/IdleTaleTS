import React, { useState } from "react";
import {TALENTS_DATA, TALENT_NAME, CURRENT_TIER} from "../data/talents-data"

const LEVEL_NAME = {
  TALENT: "talent",
  COMPLETED: "completed",
  LEVELED: "leveled",
};

const Talent = ({ background, setBerserkLevel, setAssassinLevel, talentClass, id}) => {
  let skill = talentClass === TALENT_NAME.BERSERK
  ? TALENTS_DATA.BERSERK[id] : TALENTS_DATA.ASSASSIN[id]

  const [style, setStyle] = useState(LEVEL_NAME.TALENT);
  const [level, setLevel] = useState(skill.level);

  function changeLevel(operator) {
    switch (operator) {
      case "+":
        return skill.level >= skill.max ? skill.max : skill.level += 1;
      case "-":
        return skill.level <= 0 ? 0 : skill.level -= 1;
      default:
        return skill.level;
    }
  }

  function setTier() {
    switch (talentClass) {
      case TALENT_NAME.BERSERK:
        CURRENT_TIER.BERSERK = getCurrentTier();
        break;
      case TALENT_NAME.ASSASSIN:
        CURRENT_TIER.ASSASSIN = getCurrentTier()
        break;
      default:
        break;
  }
  }

  function setClassLevel() {
    talentClass === TALENT_NAME.BERSERK
    ? setBerserkLevel(getTotalLevel()) : setAssassinLevel(getTotalLevel());
  }

  function getCurrentTier() {
    let tier = 0;
    let data = talentClass === TALENT_NAME.BERSERK 
    ? TALENTS_DATA.BERSERK : TALENTS_DATA.ASSASSIN;

    for (let i = 1; i <= 16; i++) {
      if (data[i].level > 0) tier = data[i].tier
    }

    return tier
  }

  function getTotalLevel() {
    let totalLevel = 0;
    let data = talentClass === TALENT_NAME.BERSERK 
    ? TALENTS_DATA.BERSERK : TALENTS_DATA.ASSASSIN;

    for (let i = 1; i <= 16; i++) totalLevel += data[i].level
    
    return totalLevel
  }

  const onInputClick = () => {
    if ((skill.level < skill.max) & (getTotalLevel() >= skill.req)) {
      skill.level = changeLevel("+");
      setLevel(skill.level);

      switch (skill.level) {
          case 0:
            setStyle(LEVEL_NAME.TALENT);
            break;
          case skill.max:
            setStyle(LEVEL_NAME.COMPLETED);
            break;
          default:
            setStyle(LEVEL_NAME.LEVELED);
      }

      setClassLevel();
      setTier();
    }
  };

  const onContextMenu = (e) => {
    e.preventDefault();

    if ((skill.level > 0) & (getCurrentTier() <= skill.tier)) {
      skill.level = changeLevel("-");
      setLevel(skill.level);

      switch (skill.level) {
          case skill.max:
            setStyle(LEVEL_NAME.COMPLETED);
            break;
          case 0:
            setStyle(LEVEL_NAME.TALENT);
            break;
          default:
            setStyle(LEVEL_NAME.LEVELED);
      }

      setClassLevel();
      setTier();
    }
  };

  return (
    <input
      className={`base-level active ${talentClass} ${style}`}
      value={level}
      onClick={onInputClick}
      onContextMenu={onContextMenu}
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Talent;