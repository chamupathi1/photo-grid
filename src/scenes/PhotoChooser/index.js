import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../common/Layout';
import { fetchAllPhotos } from './actions';

const Selct = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.photo.data);
	const busy = useSelector((state) => state.photo.busy);
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
						entries.map((photo) => (
							<Col xs={12} md={4} lg={3} key={photo.id}>
								{photo.id}
							</Col>
						))}
				</Row>
			</Container>
		</Layout>
	);
};

export default Selct;
