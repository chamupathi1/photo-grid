import { FETCH_ALL_PHOTOS, _FAILED, _SUCCESS } from "./actionTypes";

const intitState = {
        busy : false,
        data : {},
        selected : {
                204900002 : true,
                204900003 : true,
                204900008 : true,
                204900010 : true,
                204900009 : true,
        }
};

export default function photoReducer( state = intitState, action ) {

	switch ( action.type ) {

                case FETCH_ALL_PHOTOS : {
                        return {
                                ...state,
                                busy : true,
                                data : {}
                        }
                }

                case `${FETCH_ALL_PHOTOS}${_SUCCESS}` : {
                        return {
                                ...state,
                                busy : false,
                                data : action.payload
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
