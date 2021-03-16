import React, { useEffect } from 'react';

import {
	Navbar,
	Nav,
	Form,
	Button,
} from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { maxPhotos } from '../constants';
import { fetchUser, saveUser } from '../scenes/Home/actions';

const classes = {
	nav: {
		margin: '8px',
		top: '48px',
	},
};

const UserHeader = () => {
	const dispatch = useDispatch();

	const selectedImages = useSelector((state) => state.photo.selected);
	const data = useSelector((state) => state.photo.data);
	const unsaved = useSelector((state) => state.photo.unsaved);

	useEffect(() => {
		if (!Object.keys(selectedImages).length) {
			dispatch(fetchUser());
		}
	}, [dispatch, selectedImages]);

	const handleSave = () => {
		dispatch(
			saveUser({
				id: data.id,
				entries: Object.keys(selectedImages).map(
					(key) => selectedImages[key]
				),
			})
		);
	};

	return (
		<Navbar fixed="top" bg="light" variant="light" style={classes.nav}>
			<Navbar.Brand>
				{unsaved ? 'You have unsaved changes' : 'Your photos'}
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Item>
					{Object.keys(selectedImages).length} / {maxPhotos} selected{' '}
				</Nav.Item>
			</Nav>
			<Form inline>
				{unsaved && (
					<Button variant="outline-success" onClick={handleSave}>
						Save
					</Button>
				)}
			</Form>
		</Navbar>
	);
};

export default UserHeader;
