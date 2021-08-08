import { LOGIN_USER_REQUEST,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAILED,
         REGISTER_USER_REQUEST,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_FAILED,
         RESET_USER,
         RESET_USER_FAILED,
         FORGOT_PASSWORD_FAILED,
         FORGOT_PASSWORD,
         RESET_PASSWORD,
         RESET_PASSWORD_FAILED,
         REFRESH_TOKEN,
         REFRESH_TOKEN_FAILED,
         GET_USER,
         GET_USER_FAILED,
         REFRESH_USER,
         REFRESH_USER_FAILED } from '../constants';

const initialState = { user: null, forgotPasswordSuccess: false, resetPasswordSuccess: false };

export const userReducer = (state = initialState, action) => {
  switch(action.type) {

    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        registerUserRequest: true,
        registerUserFailed: false
      }
    }

    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        registerUserRequest: false,
        registerUserFailed: false,
        user: action.user
      }
    }

    case REGISTER_USER_FAILED: {
      return {
        ...state,
        registerUserRequest: false,
        registerUserFailed: true
      }
    }

    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loginUserRequest: true,
        loginUserFailed: false
      }
    }

    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginUserRequest: false,
        loginUserFailed: false,
        user: action.user
      }
    }

    case LOGIN_USER_FAILED: {
      return {
        ...state,
        loginUserRequest: false,
        loginUserFailed: true,
      }
    }

    case RESET_USER: {
      return {
        ...state,
        user: null
      }
    }

    case RESET_USER_FAILED: {
      return state
    }

    case FORGOT_PASSWORD: {
      return {
        ...state,
        forgotPasswordSuccess: true,
      }
    }

    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordSuccess: false
      }
    }

    case RESET_PASSWORD: {
      return {
        ...state,
        resetPasswordSuccess: true,
      }
    }

    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordSuccess: false
      }
    }

    case REFRESH_TOKEN: {
      return {
        ...state,
        refreshTokenSuccess: true
      }
    }

    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenSuccess: false
      }
    }

    case GET_USER: {
      return {
        ...state,
        getUserSuccess: true,
        user: action.user
      }
    }

    case GET_USER_FAILED: {
      return {
        ...state,
        getUserSuccess: false
      }
    }

    case REFRESH_USER: {
      return {
        ...state,
        refreshUserSuccess: true,
        user: action.user
      }
    }

    case REFRESH_USER_FAILED: {
      return {
        ...state,
        refreshUserSuccess: false
      }
    }

    default: {
      return state
    }
  }

}