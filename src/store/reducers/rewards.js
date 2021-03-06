import {FETCH_REWARDS, FETCH_REWARDS_FAILED, FETCH_REWARDS_SUCCEEDED, SET_REWARDS_FILTER_STRING} from "../actionTypes";

const initialState = {
    allRewards: [],
    filterString: "",
    isFetching: false,
    isFetched: false,
};

const rewards = (state = initialState, action) => {
    switch (action.type) {
        case SET_REWARDS_FILTER_STRING: {
            return { ...state, filterString: action.payload };
        }
        case FETCH_REWARDS: {
            return { ...state, isFetching: true, isFetched: false };
        }
        case FETCH_REWARDS_SUCCEEDED: {
            return { ...state, isFetching: false, allRewards: action.payload, isFetched: true };
        }
        case FETCH_REWARDS_FAILED: {
            return { ...state, isFetching: false, isFetched: true };
        }
        default: {
            return state;
        }
    }
};

export default rewards;
