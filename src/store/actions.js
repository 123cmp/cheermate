import {SET_REWARDS_FILTER_STRING, SET_USERS_FILTER_STRING} from "./actionTypes";

export const setFilterStringForRewards = payload => ({
    type: SET_REWARDS_FILTER_STRING,
    payload
});

export const setFilterStringForUsers = payload => ({
    type: SET_USERS_FILTER_STRING,
    payload
});