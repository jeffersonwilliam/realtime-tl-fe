/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const employeeReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.ADD_EMPLOYEE:
      draftState.current = action.payload;
      break;

    case ActionTypes.FETCH_EMPLOYEES:
      draftState.all = action.payload;
      break;

    case ActionTypes.FETCH_ONE_EMPLOYEE:
      draftState.current = action.payload;
      break;

    case ActionTypes.UPDATE_EMPLOYEE:
      draftState.current = action.payload;
      break;

    case ActionTypes.DELETE_EMPLOYEE:
      delete draftState.current;
      break;

    default:
      break;
  }
}, initialState);

export default employeeReducer;
