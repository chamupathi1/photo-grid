import { RSAA } from 'redux-api-middleware';
import { FETCH_ALL_PHOTOS, _FAILED, _SUCCESS } from '../../redux/actionTypes';


export const fetchAllPhotos = () => ( {
	[ RSAA ] : {
		endpoint : `https://dev-pb-apps.s3-eu-west-1.amazonaws.com/collection/CHhASmTpKjaHyAsSaauThRqMMjWanYkQ.json`,
		method : 'GET',
		types : [ FETCH_ALL_PHOTOS, `${FETCH_ALL_PHOTOS}${_SUCCESS}`, `${FETCH_ALL_PHOTOS}${_FAILED}` ],
	},
} );

