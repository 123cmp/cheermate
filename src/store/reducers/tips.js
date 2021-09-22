import {FETCH_TIPS, FETCH_TIPS_FAILED, FETCH_TIPS_SUCCEEDED} from "../actionTypes";

const initialState = {
    allTips: [],
    isFetching: false,
    isFetched: false,
};

const tips = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TIPS: {
            return { ...state, isFetching: true, isFetched: false };
        }
        case FETCH_TIPS_SUCCEEDED: {
            return { ...state, isFetching: false, allTips: action.payload, isFetched: true };
        }
        case FETCH_TIPS_FAILED: {
            return { ...state, isFetching: false, isFetched: true };
        }
        default: {
            return state;
        }
    }
};

export default tips;
