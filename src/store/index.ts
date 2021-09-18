import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {countryDataReducer} from "./reducer/countryDataReducer";

export const store = createStore(countryDataReducer, applyMiddleware(thunk));