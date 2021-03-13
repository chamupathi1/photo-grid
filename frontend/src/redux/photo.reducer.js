import { maxPhotos } from '../constants';
import {
	FETCH_ALL_PHOTOS,
	FETCH_USER,
	TOGGLE_PHOTO,
	_FAILED,
	_SUCCESS,
} from './actionTypes';

const intitState = {
	busy: false,
	data: {},
	selected: {},
	unsaved : false
};

export default function photoReducer(state = intitState, action) {
	switch (action.type) {
		case FETCH_ALL_PHOTOS: {
			return {
				...state,
				busy: true,
				data: {},
			};
		}

		case `${FETCH_ALL_PHOTOS}${_SUCCESS}`: {
			return {
				...state,
				busy: false,
				data: action.payload,
			};
		}

		case `${FETCH_ALL_PHOTOS}${_FAILED}`: {
			return {
				...state,
				busy: false,
			};
		}

		case TOGGLE_PHOTO: {
			const photo = action.payload;
			const selected = state.selected;
			const count = Object.keys(selected).length;

			const isSelected = selected[photo.id];

			// can not select more
			if (!isSelected && count >= maxPhotos) {
				return { ...state };
			}

			if (isSelected) {
				delete selected[photo.id];
			} else {
				selected[photo.id] = photo;
			}

			return {
				...state,
				selected: { ...selected },
				unsaved : true
			};
		}

		case FETCH_USER: {
			return {
				...state,
				busy: true,
				data: {},
			};
		}

		case `${FETCH_USER}${_SUCCESS}`: {
			return {
				...state,
				busy: false,
				// data: action.payload,
			};
		}

		case `${FETCH_USER}${_FAILED}`: {
			return {
				...state,
				busy: false,
			};
		}

		default: {
			return state;
		}
	}
}
