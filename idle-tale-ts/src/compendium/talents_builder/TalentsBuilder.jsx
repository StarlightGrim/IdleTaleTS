import React from 'react';
import '../../App.css';
import TestTalent from "../../components/TestTalent.jsx";
import { useState } from "react";
import './TalentsBuilder.css';
import ToggleButton from "../../components/ToggleButton.jsx";

import {CURRENT_TOTAL, talentsData, TALENTS_VALUES} from "../../data/talents-data-new"

function EmptyTalent() {
	return <input className="base-level talent" disabled={true}/>
}

function TalentsBuilder() {
	const [total, setTotal] = useState(CURRENT_TOTAL);
	const [treeCode, setTreeCode] = useState('');
	const [data, setData] = useState(talentsData);
	const [talentPoints, setTalentPoints] = useState(62);
	const [isToggled, setToggle] = useState(false);

	function dataToBase64() {
		const saveData = data.map(el => {
		return [el.changable.level, el.changable.style];
		});
		// to string
		let objJsonStr = JSON.stringify([saveData, [total.BERSERK, total.ASSASSIN], total.BERSERK+total.ASSASSIN]);
		// to base64
		let encodedValue = btoa(objJsonStr);

		return encodedValue;
	}

	function base64toData() {
		// to string again
		let decodedValue = atob(treeCode);

		// to data
		let params = JSON.parse(decodedValue);

		let newData = data.map(el => {
			el.changable.level = params[0][el.id][0];
			el.changable.style = params[0][el.id][1];
			return el;
		});

		total.BERSERK = params[1][0];
		total.ASSASSIN = params[1][1];

		setTalentPoints(params[2]);

		return newData;
  	}

	return (
		<div className="App">
			<div className="TalentsBuilder">
				<p>Talents Tree Builder (ver 1.3.0)</p>

				<div className="builder-settings">
					<div className="builder-settings-block">
						<div className="builder-settings-text">Talents Points</div>
						<input value={talentPoints} className="talent-points-picker"
							type="number" placeholder="Talent points"
							onChange={e => {
								let points = e.target.value >= TALENTS_VALUES.MAX
								? TALENTS_VALUES.MAX : e.target.value <= TALENTS_VALUES.MIN
								? 1 : e.target.value;
								setTalentPoints(points);
						}}/>
					</div>

					<div className="builder-settings-block">
						<div className="builder-settings-text">Show Tooltips</div>
						<ToggleButton setOuterToggle={setToggle}/>
					</div>
				</div>

				<div className="talent-tree">
					<div className="talent-tree-classes">
						<div className="talent-tree-berserk">
							Berserk Points: {total.BERSERK}
							<div className="talent-tree-row">
								<EmptyTalent />
								<TestTalent 
									id={0}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={1}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
								<TestTalent 
									id={2}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<EmptyTalent />
								<TestTalent 
									id={3}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={4}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={5}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
								<TestTalent 
									id={6}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={7}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
								<TestTalent 
									id={8}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={9}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={10}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={11}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={12}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={13}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={14}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<EmptyTalent />
								<TestTalent 
									id={15}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
							</div>
						</div>

						<div className="talent-tree-assassin">
							Assassin Points: {total.ASSASSIN}
							<div className="talent-tree-row">
								<EmptyTalent />
								<TestTalent 
									id={16}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={17}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
								<TestTalent 
									id={18}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={19}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
								<TestTalent 
									id={20}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={21}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={22}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={23}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
								<TestTalent 
									id={24}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={25}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={26}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<EmptyTalent />
							</div>
							<div className="talent-tree-row">
								<TestTalent 
									id={27}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={28}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={29}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
							<div className="talent-tree-row">
								<EmptyTalent />
								<TestTalent 
									id={30}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
								<TestTalent 
									id={31}
									data={data}
									talentPoints={talentPoints}
									setData={setData}
									setTotal={setTotal}
									isTooltipOn={isToggled}
								/>
							</div>
						</div>
					</div>
				</div>

				<input
					type="text"
					value={treeCode}
					onChange={e => setTreeCode(e.target.value)}
				></input>

				<button onClick={() => {
					let code = dataToBase64();
					setTreeCode(code)
					}}>
					Generate build
				</button>

				<button onClick={() => {
					let result = base64toData();
					setData(result);
					}}>
					Apply Build
				</button>

				<div className="additional-info">
					This functionality works in test mode.
				</div>
			</div>
		</div>
  	);
}

export default TalentsBuilder;