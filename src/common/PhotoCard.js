import React, { useState } from 'react';
import { Col, Media, Image } from 'react-bootstrap';
import { imgHeight } from '../constants';

const classes = {
	image: {
                margin : '8px',
                objectFit: 'cover',
        },
	selected: {
		border: '5px solid #0984e3',
	},
	loading: {
		background: '#eee',
		height: '100%',
		width: '100%',
	},
};
const PhotoCard = ({ photo, selected }) => {
	const [loaded, setLoaded] = useState(false);

        const photoStyles = selected ? { ...classes.image, ...classes.selected,} : classes.image;

	return (
		<Col xs={12} md={4} lg={3} key={photo.id} style={{position:'relative'}}>
			<Media>
				{loaded ? null : <div style={classes.loading} />}
				<Image
					style={loaded ? photoStyles : { display: 'none' }}
					width={'100%'}
					height={`${imgHeight}px`}
					src={photo.picture}
					alt="placeholder"
					onLoad={() => setLoaded(true)}
                                        rounded
				/>
			</Media>
		</Col>
	);
};

export default PhotoCard;
