import React from 'react';
import {
	Col,
	Container,
	Navbar,
	Row,
	Nav,
	Form,
	Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Layout from '../../common/Layout';
import PhotoCard from '../../common/PhotoCard';
import { maxPhotos } from '../../constants';

const classes = {
	nav: {
		margin: '8px',
		top: '48px',
	},
        spacer : {width:'100%', height:'120px'}
};

const Selct = () => {

	const selectedImages = useSelector((state) => state.photo.selected);
	const busy = useSelector((state) => state.photo.busy);
        const unsaved =  useSelector((state) => state.photo.unsaved);

	return (
		<Layout>
			<Container>
                                {/* TODO move this nav bar as a seperate component */}
				<Navbar
					fixed="top"
					bg="light"
					variant="light"
					style={classes.nav}
				>
					<Navbar.Brand>{unsaved ? 'You have unsaved changes':'Your photos'}</Navbar.Brand>
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
					{Object.keys(selectedImages)
							.map((key) => (
								<PhotoCard
									key={key}
									photo={selectedImages[key]}
									selected={false}
                                                                        disbleSelect
								/>
							))}
				</Row>
			</Container>
		</Layout>
	);
};

export default Selct;
