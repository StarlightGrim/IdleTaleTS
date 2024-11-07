import ReactDOM from "react-dom/client";
import { useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";

function Layout() {
	const data = [
		{
		title: 'Home Page',
			link: '/',
		},
		{
			title: 'Talents Builder',
			link: '/talents-builder',
		},
		{
			title: 'Character Builder',
			link: '/character-builder',
		},
		{
			title: 'Glory Builder',
			link: '/glory-builder',
		}
	];
	
	const [navs] = useState(data);
	return (
		<>
			<div className="sticky">
				<ul className="menu-ul">
					{navs.map((nav) => (
						<NavLink to={nav.link} >
						<div className="link">{nav.title}</div>
						</NavLink>
					))}
					
				</ul>
			</div>
			<Outlet />
		</>
	)
}
  
export default Layout;