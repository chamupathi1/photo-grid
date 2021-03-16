import React, { useEffect } from 'react';
import {
	Col,
	Container,
	Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../common/Layout';
import PhotoCard from '../../common/PhotoCard';
import UserHeader from '../../common/UserHeader';
import { fetchAllPhotos } from './actions';

const classes = {
	nav: {
		margin: '8px',
		top: '48px',
	},
	spacer: { width: '100%', height: '120px' },
};

const PhotoChooser = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.photo.data);
	const busy = useSelector((state) => state.photo.busy);
	const selectedImages = useSelector((state) => state.photo.selected);

	const { entries } = data;

	useEffect(() => {
		dispatch(fetchAllPhotos());
	}, [dispatch]);

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
					{entries &&
						entries.map((photo) => (
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

export default PhotoChooser;
