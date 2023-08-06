import {createStore} from "redux";
import {basketReducer} from "./basketReducer/basketReducer";

export const store = createStore(basketReducer)