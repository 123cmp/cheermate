import {
    AUTHORIZE,
    FETCH_REWARDS,
    FETCH_USERS,
    REGISTER,
    SET_REWARDS_FILTER_STRING,
    SET_USERS_FILTER_STRING
} from "./actionTypes";

export const setFilterStringForRewards = payload => ({
    type: SET_REWARDS_FILTER_STRING,
    payload
});

export const setFilterStringForUsers = payload => ({
    type: SET_USERS_FILTER_STRING,
    payload
});

export const authorize = payload => ({
    type: AUTHORIZE,
    payload
});

export const register = payload => ({
    type: REGISTER,
    payload
})

export const fetchRewards = () => ({
    type: FETCH_REWARDS,
})

export const fetchUsers = () => ({
    type: FETCH_USERS,
})