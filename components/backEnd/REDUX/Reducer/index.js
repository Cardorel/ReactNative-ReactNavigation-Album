import {
    FETCH_ERROR,
    FETCH_LOADING,
    FETCH_SUCCESS
} from '../Types';


const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const albumReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                loading: false,
            };
        case FETCH_SUCCESS:
            return {
                loading: true,
                data: action.payload,
                error: "",
            };
        case FETCH_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
}

