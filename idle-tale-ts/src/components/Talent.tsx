import React, { Dispatch, SetStateAction, useState } from "react";
import {TALENT_NAME, LEVEL_NAME, CURRENT_TOTAL, TalentData, CurrentTotal} from "../data/talents-data-new"
import { Tooltip } from 'react-tooltip'
import '../App.css';

interface Talent {
    id: number,
    data: Array<TalentData>,
	talentPoints: number,
	setData: Dispatch<SetStateAction<Array<TalentData>>>,
	setTotal: Dispatch<SetStateAction<CurrentTotal>>,
	isTooltipOn: boolean
}

const Talent: React.FC<Talent> = ({
	id, data, talentPoints, setData, setTotal, isTooltipOn
}) => {
	
	function getTotalLevel(talentClass: string) {
		switch (talentClass) {
		case TALENT_NAME.BERSERK:
			return CURRENT_TOTAL.BERSERK;
		case TALENT_NAME.ASSASSIN:
			return CURRENT_TOTAL.ASSASSIN;
		default:
			return CURRENT_TOTAL.BERSERK + CURRENT_TOTAL.ASSASSIN;
		}
	}

	function changeLevel(
		operator: string, level: number, max: number
	) {
		switch (operator) {
		case "+":
			return level >= max ? max : level += 1;
		case "-":
			return level <= 0 ? 0 : level -= 1;
		default:
			return level;
		}
	}

	function changeStyle(level: number, max: number) {
		switch (level) {
		case 0:
			return LEVEL_NAME.TALENT;
		case max:
			return LEVEL_NAME.COMPLETED;
		default:
			return LEVEL_NAME.LEVELED;
		}
	}

	function setClassLevel(operator: string, talentClass: Object) {
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

	function getCurrentTier(talentClass: Object) {
		let tier = 0;
		data.map(el => {
		if ((el.changable.level > 0) && (el.talentClass === talentClass)) tier = el.tier
		})

		return tier;
	}

	const onInputClick = () => {
		const newData = data.map(el => {
		if (el.id === id) {
			if ((el.changable.level < el.max) 
				&& (getTotalLevel(el.talentClass) >= el.req) 
				&& (talentPoints > getTotalLevel("total"))
			) {

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

	const onContextMenu = (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		const newData = data.map(el => {
		if (el.id === id) {
			if ((el.changable.level > 0) 
			&& (getCurrentTier(el.talentClass) <= el.tier)) {

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
			data-tooltip-html={`
				${data[id].descStart}
				<b>${data[id].descValues[data[id].changable.level]}</b>
				${data[id].descEnd}
			`}
			data-tooltip-place="top"
			data-tooltip-delay-show={1000}
			data-tooltip-delay-hide={10}
		/>
		{isTooltipOn ? <Tooltip className="tooltip-text" id="my-tooltip"/> : null}
		</>
	);
};

export default Talent;