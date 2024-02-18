import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';
const API_KEY = '?key=j_akesseh';

export const ActionTypes = {
  ADD_EMPLOYEE: 'ADD_EMPLOYEE',
  FETCH_ONE_EMPLOYEE: 'FETCH_ONE_EMPLOYEE',
  FETCH_EMPLOYEES: 'FETCH_EMPLOYEES',
  DELETE_EMPLOYEE: 'DELETE_EMPLOYEE',
  UPDATE_EMPLOYEE: 'UPDATE_EMPLOYEE',
};

// Actions & Payloads functions
const employeesFetched = (employees) => ({
  type: ActionTypes.FETCH_EMPLOYEES,
  payload: employees,
});

export const fetchEmployees = () => {
  return function (dispatch) {
    axios
      .get(`${ROOT_URL}/employees${API_KEY}`)
      .then((response) => {
        dispatch(employeesFetched(response.data));
        // console.log("response.data", response.data)
      })
      .catch((error) => console.log(error));
  };
};
