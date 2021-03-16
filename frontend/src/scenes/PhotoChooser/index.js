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
import UserHeader from '../../common/UserHeader';
import { maxPhotos } from '../../constants';
import { saveUser } from '../Home/actions';
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
	const unsaved = useSelector((state) => state.photo.unsaved);
	const selectedImages = useSelector((state) => state.photo.selected);

	const { entries } = data;

	useEffect(() => {
		dispatch(fetchAllPhotos());
	}, [dispatch]);

	const handleSave = () => {
		dispatch(saveUser({
			id: data.id,
			entries : Object.keys(selectedImages).map((key) => selectedImages[key])
		}));
	};

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
