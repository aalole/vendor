import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
} from "./loginConstant";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
        loginSuccess: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        loginSuccess: true,
      };
    case LOGIN_USER_FAIL:
      return {
        loading: false,
        loginSuccess: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        loading: false,
        userData: {},
      };
    default:
      return state;
  }
};
