import React, { useState } from "react";
import {TALENT_NAME, LEVEL_NAME, CURRENT_TOTAL} from "../data/talents-data-new"
import { Tooltip } from 'react-tooltip'
import '../App.css';

const TestTalent = ({ id, data, talentPoints, setData, setTotal}) => {
	function getTotalLevel(talentClass) {
		switch (talentClass) {
		case TALENT_NAME.BERSERK:
			return CURRENT_TOTAL.BERSERK;
		case TALENT_NAME.ASSASSIN:
			return CURRENT_TOTAL.ASSASSIN;
		default:
			return CURRENT_TOTAL.BERSERK + CURRENT_TOTAL.ASSASSIN;
		}
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

		return tier;
	}

	const onInputClick = () => {
		const newData = data.map(el => {
		if (el.id === id) {
			if ((el.changable.level < el.max) & (getTotalLevel(el.talentClass) >= el.req) & (talentPoints > getTotalLevel())) {

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
		<>
		<input
			className={`base-level active ${data[id].talentClass} ${data[id].changable.style}`}
			value={data[id].changable.level}
			onClick={onInputClick}
			onContextMenu={onContextMenu}
			style={{
				backgroundRepeat: "no-repeat, no-repeat",
				backgroundImage: 
					data[id].changable.level === 0 ? 
					"url(/resources/darkened.png), url(" + data[id].background + ")" :
					"url(" + data[id].background + ")",
				backgroundPosition: "center",
				backgroundSize: "110%, 110%",
			}}
			data-tooltip-id="my-tooltip"
			data-tooltip-content={`
				${data[id].descStart}
				${data[id].descValues[data[id].changable.level]}
				${data[id].descEnd}
			`}
			data-tooltip-place="top"
		/>
		<Tooltip id="my-tooltip" />
		</>
	);
};

export default TestTalent;