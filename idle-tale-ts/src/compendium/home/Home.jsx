import './Home.css';
import { Tooltip } from 'react-tooltip'

function Home() {

	return (
		<div className="App">
			<h2>Home Page</h2>

			<div className="info">
				Welcome to the main page of my toolbox for 
				IdleTale! Here you will find:
			</div>
			<ul className="info-list">
						<li>Talents Tree Builder</li>
						<li>Character Builder (PLANNED)</li>
						<li>Glory Tree Planner (PLANNED)</li>
					</ul>

			<div className="info">
  				◕‿‿◕
			</div>

			<div className="info">
				Created by eXce11ence. For all questions and suggestions :)
				<br/>Discord: galaxydevourer
			</div>
		</div>
	);

}

export default Home;