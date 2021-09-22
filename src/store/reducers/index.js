import { combineReducers } from "redux";

import rewards from "./rewards";
import users from "./users";
import tips from "./tips";

export default combineReducers({ rewards, users, tips });
