import {
    AUTHORIZE,
    FETCH_USERS,
    FETCH_USERS_FAILED,
    FETCH_USERS_SUCCEEDED,
    REGISTER, REGISTER_FAILED, REGISTER_SUCCEEDED,
    SET_USERS_FILTER_STRING
} from "../actionTypes";

const initialState = {
    allUsers: [],
    filterString: "",
    isAuthorized: true,//false,
    isFetching: false,
    isUsersFetched: false,
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_FILTER_STRING: {
            return {...state, filterString: action.payload};
        }
        case AUTHORIZE: {
            console.log('Authorization attempt', action.payload);
            return {...state, isAuthorized: true};
        }

        case FETCH_USERS: {
            return {...state, isFetching: true, isUsersFetched: false};
        }
        case FETCH_USERS_SUCCEEDED: {
            return {...state, isFetching: false, allUsers: action.payload, isUsersFetched: true};
        }
        case FETCH_USERS_FAILED: {
            return {...state, isFetching: false, allUsers: [], isUsersFetched: true};
        }
        case REGISTER_SUCCEEDED: {
            return {...state, isAuthorized: true};
        }
        case REGISTER_FAILED: {
            return {...state, isAuthorized: false};
        }

        default: {
            return state;
        }
    }
};

export default users;
