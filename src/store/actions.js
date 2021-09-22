import {
    AUTHORIZE,
    FETCH_REWARDS, FETCH_TIPS,
    FETCH_USERS,
    REGISTER,
    SET_REWARDS_FILTER_STRING,
    SET_USERS_FILTER_STRING, TIP_USER
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

export const fetchTips = (payload) => ({
    type: FETCH_TIPS,
    payload
})

export const tipUser = (payload) => ({
    type: TIP_USER,
    payload
})