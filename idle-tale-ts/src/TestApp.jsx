import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from "./compendium/Layout";
import Home from "./compendium/home/Home";
import NoPage from "./compendium/NoPage"
import TalentsBuilder from "./compendium/talents_builder/TalentsBuilder";
import CharacterBuilder from "./compendium/CharacterBuilder";
import GloryBuilder from "./compendium/GloryBuilder";

function TestApp() {

	return (
		<Router>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="talents-builder" element={<TalentsBuilder />} />
				<Route path="character-builder" element={<CharacterBuilder />} />
				<Route path="glory-builder" element={<GloryBuilder />} />
				<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
		</Router>
	);
}

export default TestApp;
