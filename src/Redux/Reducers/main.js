import { combineReducers } from "redux";

import { cartReducer } from "./Reducer";

const rootreducer = combineReducers({
    cartReducer
});

export default rootreducer;