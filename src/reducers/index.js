import { combineReducers } from '@reduxjs/toolkit';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  employee: employeeReducer,
});

export default rootReducer;
