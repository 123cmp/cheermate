import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import saga from "./sagas";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);