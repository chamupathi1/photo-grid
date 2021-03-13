import { RSAA } from 'redux-api-middleware';
import { BASE_URL } from '../../constants';
import {
	FETCH_USER,
	SAVE_USER,
	_FAILED,
	_SUCCESS,
} from '../../redux/actionTypes';
import history from '../../history';
import { routes } from '../../routes';

export const fetchUser = () => ({
	[RSAA]: {
		endpoint: `${BASE_URL}/`,
		method: 'GET',
		types: [
			FETCH_USER,
			`${FETCH_USER}${_SUCCESS}`,
			{
				type: `${FETCH_USER}${_FAILED}`,
				payload: async (action) => {
					history.push(`${routes.SELECT}`);

					return action.payload;
				},
			},
		],
	},
});

export const saveUser = () => ({
	[RSAA]: {
		endpoint: `${BASE_URL}/`,
		method: 'POST',
		types: [SAVE_USER, `${SAVE_USER}${_SUCCESS}`, `${SAVE_USER}${_FAILED}`],
	},
});
