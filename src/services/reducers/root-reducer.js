import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredientsReducer";
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  ingredientsReducer: ingredientsReducer,
  userReducer: userReducer
})