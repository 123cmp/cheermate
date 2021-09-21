import {call, put, takeEvery} from "@redux-saga/core/effects";
import {API} from "./api";
import {
    FETCH_REWARDS,
    FETCH_REWARDS_FAILED,
    FETCH_REWARDS_SUCCEEDED,
    FETCH_USERS, FETCH_USERS_FAILED,
    FETCH_USERS_SUCCEEDED, REGISTER, REGISTER_FAILED, REGISTER_SUCCEEDED
} from "./actionTypes";
import {showError} from "../utils";

function* fetchRewards(action) {
    try {
        const rewards = yield call(API.fetchRewards);
        yield put({type: FETCH_REWARDS_SUCCEEDED, payload: rewards});
    } catch (e) {
        yield put({type: FETCH_REWARDS_FAILED, payload: e.message});
    }
}

function* fetchUsers(action) {
    try {
        const users = yield call(API.fetchUsers);
        yield put({type: FETCH_USERS_SUCCEEDED, payload: users});
    } catch (e) {
        showError(e.message)
        yield put({type: FETCH_USERS_FAILED, payload: e.message});
    }
}

function* register(action) {
    try {
        yield call(API.register, action.payload);
        yield put({type: REGISTER_SUCCEEDED});
        yield put({type: FETCH_USERS});
    } catch (e) {
        showError(e.message)
        yield put({type: REGISTER_FAILED, payload: e.message});
    }

}

function* saga() {
    yield takeEvery(FETCH_REWARDS, fetchRewards);
    yield takeEvery(FETCH_USERS, fetchUsers);
    yield takeEvery(REGISTER, register);
}

export default saga;