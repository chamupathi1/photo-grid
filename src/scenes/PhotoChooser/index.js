import React, { useEffect } from 'react';
import { Col, Container, Row, Media } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../common/Layout';
import PhotoCard from '../../common/PhotoCard';
import { fetchAllPhotos } from './actions';

const Selct = () => {
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
				<Row>
					{busy && 'Loading...'}
					{entries &&
						entries
                                                .slice(1, 15)
                                                .map((photo) => <PhotoCard key={photo.id} photo={photo} selected={selectedImages[photo.id]}/>)}
				</Row>
			</Container>
		</Layout>
	);
};

export default Selct;
