import './Home.css';
import { Tooltip } from 'react-tooltip'

function Home() {

	return (
		<div className="App">
			<h2>Home Page</h2>

			<a
				data-tooltip-id="my-tooltip"
  				data-tooltip-content="Hello world!"
  				data-tooltip-place="top"
			>
  				◕‿‿◕
			</a>
			<Tooltip id="my-tooltip" />

			<div className="footer-info">
				Created by eXce11ence. For all questions and suggestions :)
				<br></br>Discord: galaxydevourer
			</div>
		</div>
	);

}

export default Home;