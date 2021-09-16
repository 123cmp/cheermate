import {call, put, takeEvery} from "@redux-saga/core/effects";
import {API} from "./api";
import {FETCH_REWARDS, FETCH_REWARDS_FAILED, FETCH_REWARDS_SUCCEEDED} from "./actionTypes";

function* fetchRewards(action) {
    try {
        const rewards = yield call(API.fetchRewards);
        yield put({type: FETCH_REWARDS_SUCCEEDED, payload: rewards});
    } catch (e) {
        yield put({type: FETCH_REWARDS_FAILED, payload: e.message});
    }
}

function* saga() {
    yield takeEvery(FETCH_REWARDS, fetchRewards);
}

export default saga;