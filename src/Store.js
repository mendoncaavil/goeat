import { createStore } from "redux";

import rootreducer from "./Redux/Reducers/main";


const store = createStore(
    rootreducer
);

export default store;