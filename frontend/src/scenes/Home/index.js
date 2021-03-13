import React from 'react';
import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../common/Layout';
import PhotoCard from '../../common/PhotoCard';
import UserHeader from '../../common/UserHeader';

const classes = {
	spacer: { width: '100%', height: '120px' },
};

const Index = () => {
	const dispatch = useDispatch();

	const selectedImages = useSelector((state) => state.photo.selected);
	const busy = useSelector((state) => state.photo.busy);

	return (
		<Layout>
			<Container>
				<UserHeader />
				<Row>
					<Col xs={12}>
						<div style={classes.spacer}></div>
					</Col>
				</Row>
				<Row>
					{busy && 'Loading...'}
					{Object.keys(selectedImages).map((key) => (
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

export default Index;
