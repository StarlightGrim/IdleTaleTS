import React from 'react';
import './App.css';
import Talent from "./components/Talent.jsx";
import { useState } from "react";
import {TALENTS_DATA, TALENT_NAME} from "./data/talents-data"

function EmptyTalent() {
  return <input className="base-level talent" disabled={true} />;
}

function App() {
  const [berserkLevel, setBerserkLevel] = useState(0);
  const [assassinLevel, setAssassinLevel] = useState(0);
  const [treeCode, setTreeCode] = useState('00000000000000000000000000000000');

  return (
    <div className="App">
      <header className="App-header">
        <p>Talent Tree Builder (ver 1.0.0)</p>

        <div className="talent-tree">
          <div className="talent-tree-classes">
            <div className="talent-tree-berserk">
              Berserk Points: {berserkLevel}
              <div className="talent-tree-row">
                <EmptyTalent />
                <Talent
                  background="/resources/berserk-talents/berserk-1.png"
                  id="1"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/berserk-talents/berserk-2.png"
                  id="2"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
                <Talent
                  background="/resources/berserk-talents/berserk-3.png"
                  id="3"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <EmptyTalent />
                <Talent
                  background="/resources/berserk-talents/berserk-4.png"
                  id="4"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/berserk-talents/berserk-5.png"
                  id="5"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/berserk-talents/berserk-6.png"
                  id="6"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
                <Talent
                  background="/resources/berserk-talents/berserk-7.png"
                  id="7"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/berserk-talents/berserk-8.png"
                  id="8"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
                <Talent
                  background="/resources/berserk-talents/berserk-9.png"
                  id="9"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/berserk-talents/berserk-10.png"
                  id="10"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/berserk-talents/berserk-11.png"
                  id="11"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/berserk-talents/berserk-12.png"
                  id="12"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/berserk-talents/berserk-13.png"
                  id="13"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/berserk-talents/berserk-14.png"
                  id="14"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/berserk-talents/berserk-15.png"
                  id="15"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <EmptyTalent />
                <Talent
                  background="/resources/berserk-talents/berserk-16.png"
                  id="16"
                  talentClass={TALENT_NAME.BERSERK}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
              </div>
            </div>

            <div className="talent-tree-assassin">
              Assassin Points: {assassinLevel}
              <div className="talent-tree-row">
                <EmptyTalent />
                <Talent
                  background="/resources/assassin-talents/assassin-1.png"
                  id="1"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/assassin-talents/assassin-2.png"
                  id="2"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
                <Talent
                  background="/resources/assassin-talents/assassin-3.png"
                  id="3"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/assassin-talents/assassin-4.png"
                  id="4"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
                <Talent
                  background="/resources/assassin-talents/assassin-5.png"
                  id="5"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/assassin-talents/assassin-6.png"
                  id="6"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/assassin-talents/assassin-7.png"
                  id="7"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/assassin-talents/assassin-8.png"
                  id="8"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
                <Talent
                  background="/resources/assassin-talents/assassin-9.png"
                  id="9"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/assassin-talents/assassin-10.png"
                  id="10"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/assassin-talents/assassin-11.png"
                  id="11"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <EmptyTalent />
              </div>
              <div className="talent-tree-row">
                <Talent
                  background="/resources/assassin-talents/assassin-12.png"
                  id="12"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/assassin-talents/assassin-13.png"
                  id="13"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/assassin-talents/assassin-14.png"
                  id="14"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
              <div className="talent-tree-row">
                <EmptyTalent />
                <Talent
                  background="/resources/assassin-talents/assassin-15.png"
                  id="15"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
                <Talent
                  background="/resources/assassin-talents/assassin-16.png"
                  id="16"
                  talentClass={TALENT_NAME.ASSASSIN}
                  setBerserkLevel={setBerserkLevel}
                  setAssassinLevel={setAssassinLevel}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="build-manager">
          <input type="text" value={treeCode}
          onChange={e => setTreeCode(e.target.value)}
          ></input>

          <button onClick={() => {
            let code = "";
            let data = [TALENTS_DATA.BERSERK, TALENTS_DATA.ASSASSIN];
            for (let i = 0; i < 2; i++) {
              let subdata = data[i];
              for (let j = 1; j <= 16; j++) {
                code += subdata[j].level;
              }
            }
            setTreeCode(code);
          }}>
            Generate build
          </button>

          {/* <button onClick={() => {
            const result = treeCode.split("");
            let data = [TALENTS_DATA.BERSERK, TALENTS_DATA.ASSASSIN];
            for (let i = 0; i < 2; i++) {
              let subdata = data[i];
              for (let j = 1; j <= 16; j++) {
                subdata[j].level += Number(result[j]);
              }
            }
            console.log(TALENTS_DATA);
          }}>
            Use Build
          </button> */}
        </div>
        <div className="additional-info">
          This functionality works in test mode.
        </div>

        <div className="footer-info">
          Created by eXce11ence. For all questions and suggestions :)
          <br></br>Discord: galaxydevourer
        </div>
      </header>
    </div>
  );
}

export default App;
