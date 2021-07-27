import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredientsReducer";
import { userReducer } from './user-reducer';
import { wsReducer } from './wsReducer';

export const rootReducer = combineReducers({
  ingredientsReducer: ingredientsReducer,
  userReducer: userReducer
})