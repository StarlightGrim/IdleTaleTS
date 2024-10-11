import React, { useState } from "react";
import {TALENT_NAME, LEVEL_NAME, CURRENT_TOTAL, talentsData} from "../data/talents-data-new"

const TestTalent = ({ id, data, setData, setTotal}) => {

  function getTotalLevel(talentClass) {
    return talentClass === TALENT_NAME.BERSERK 
    ? CURRENT_TOTAL.BERSERK : CURRENT_TOTAL.ASSASSIN;
  }

  function changeLevel(operator, level, max) {
    switch (operator) {
      case "+":
        return level >= max ? max : level += 1;
      case "-":
        return level <= 0 ? 0 : level -= 1;
      default:
        return level;
    }
  }

  function changeStyle(level, max) {
    switch (level) {
      case 0:
        return LEVEL_NAME.TALENT;
      case max:
        return LEVEL_NAME.COMPLETED;
      default:
        return LEVEL_NAME.LEVELED;
    }
  }

  function setClassLevel(operator, talentClass) {
    switch (operator) {
      case "+":
        talentClass === TALENT_NAME.BERSERK 
        ? CURRENT_TOTAL.BERSERK += 1 : CURRENT_TOTAL.ASSASSIN += 1;
        break;
      case "-":
        talentClass === TALENT_NAME.BERSERK 
        ? CURRENT_TOTAL.BERSERK -= 1 : CURRENT_TOTAL.ASSASSIN -= 1;
        break;
      default:
        break;
    }

    setTotal(CURRENT_TOTAL);
  }

  function getCurrentTier(talentClass) {
    let tier = 0;
    data.map(el => {
      if ((el.changable.level > 0) & (el.talentClass === talentClass)) tier = el.tier
    })

    return tier
  }

  const onInputClick = () => {
    const newData = data.map(el => {
      if (el.id === id) {
        if ((el.changable.level < el.max) 
          & (getTotalLevel(el.talentClass) >= el.req)) {

            el.changable.level = changeLevel("+", el.changable.level, el.max);
            el.changable.style = changeStyle(el.changable.level, el.max);
    
            setClassLevel("+", el.talentClass);
        }
        return el;
      } 
      else return el;
    });

    setData(newData);
  };

  const onContextMenu = (e) => {
    e.preventDefault();

    const newData = data.map(el => {
      if (el.id === id) {
        if ((el.changable.level > 0) 
          & (getCurrentTier(el.talentClass) <= el.tier)) {

            el.changable.level = changeLevel("-", el.changable.level, el.max);
            el.changable.style = changeStyle(el.changable.level, el.max);
    
            setClassLevel("-", el.talentClass);
        }
        return el;
      } 
      else return el;
    });

    setData(newData);
  };

  return (
    <input
      className={`base-level active ${data[id].talentClass} ${data[id].changable.style}`}
      value={data[id].changable.level}
      onClick={onInputClick}
      onContextMenu={onContextMenu}
      style={{
        backgroundImage: "url(" + data[id].background + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};

export default TestTalent;