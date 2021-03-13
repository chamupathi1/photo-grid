import { FETCH_ALL_PHOTOS } from "./actionTypes";

const intitState = {
        busy : false
};

export default function photoReducer( state = intitState, action ) {

	switch ( action.type ) {

                case FETCH_ALL_PHOTOS : {
                        return {
                                ...state,
                                busy : true
                        }
                }
		
		default: {
			return state;
		}
	}
}
