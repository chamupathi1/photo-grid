import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { routes } from '../routes';
import { Link, useLocation } from 'react-router-dom';

const classes = {
	nav: {
		color: '#eee',
		textDecoration: 'none',
                paddingLeft : '10px'
	},
        selected : {
                color: '#fff',
                fontWeight : 500,
        }
};

const Header = () => {
	const location = useLocation();

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand >Photo Grid</Navbar.Brand>
				<Nav className="mr-auto">
					{navs.map((nav) => getLink(location, nav))}
				</Nav>
			</Navbar>
		</div>
	);
};

export default Header;

const navs = [
        {
		route: routes.HOME,
		text: 'Home',
	},
	{
		route: routes.SELECT,
		text: 'Choose Photos',
	},
];

const getLink = (location, nav) => {
        const selected = location.pathname === nav.route;

        const style = selected ? {...classes.nav, ...classes.selected} : classes.nav

	return (
		<Nav.Item key={nav.route}>
			<Link to={nav.route} style={style}>
				{nav.text}
			</Link>
		</Nav.Item>
	);
};
