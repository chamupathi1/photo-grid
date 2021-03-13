import { FETCH_ALL_PHOTOS, _FAILED, _SUCCESS } from "./actionTypes";

const intitState = {
        busy : false
};

export default function photoReducer( state = intitState, action ) {

	switch ( action.type ) {

                case FETCH_ALL_PHOTOS : {
                        return {
                                ...state,
                                busy : true,
                                photos : []
                        }
                }

                case `${FETCH_ALL_PHOTOS}${_SUCCESS}` : {
                        return {
                                ...state,
                                busy : false,
                                photos : action.payload
                        }
                }

                case `${FETCH_ALL_PHOTOS}${_FAILED}` : {
                        return {
                                ...state,
                                busy : false,
                        }
                }
		
		default: {
			return state;
		}
	}
}
