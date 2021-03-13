import React, { useEffect } from 'react';
import {
	Col,
	Container,
	Navbar,
	Row,
	Nav,
	Form,
	Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../common/Layout';
import PhotoCard from '../../common/PhotoCard';
import { maxPhotos } from '../../constants';
import { fetchAllPhotos } from './actions';

const classes = {
	nav: {
		margin: '8px',
		top: '48px',
	},
        spacer : {width:'100%', height:'120px'}
};

const Selct = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.photo.data);
	const busy = useSelector((state) => state.photo.busy);
        const unsaved =  useSelector((state) => state.photo.unsaved);
	const selectedImages = useSelector((state) => state.photo.selected);

	const { entries } = data;

	useEffect(() => {
		dispatch(fetchAllPhotos());
	}, [dispatch]);

	return (
		<Layout>
			<Container>
				<Navbar
					fixed="top"
					bg="light"
					variant="light"
					style={classes.nav}
				>
					<Navbar.Brand>Select your photos</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Item>
							{Object.keys(selectedImages).length} / {maxPhotos}{' '}
							selected{' '}
						</Nav.Item>
					</Nav>
					<Form inline>
						{ unsaved && <Button variant="outline-success">Save</Button> }
					</Form>
				</Navbar>
				<Row>
					<Col xs={12}>
						<div style={classes.spacer}></div>
					</Col>
				</Row>
				<Row>
					{busy && 'Loading...'}
					{entries &&
						entries
							.slice(1, 15)
							.map((photo) => (
								<PhotoCard
									key={photo.id}
									photo={photo}
									selected={selectedImages[photo.id]}
								/>
							))}
				</Row>
			</Container>
		</Layout>
	);
};

export default Selct;
