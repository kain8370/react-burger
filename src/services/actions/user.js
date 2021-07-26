import { REGISTER_USER_REQUEST,
         REGISTER_USER_SUCCESS,
         REGISTER_USER_FAILED,
         LOGIN_USER_REQUEST,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAILED,
         RESET_USER,
         RESET_USER_FAILED,
         RESET_PASSWORD,
         RESET_PASSWORD_FAILED,
         FORGOT_PASSWORD,
         FORGOT_PASSWORD_FAILED,
         GET_USER,
         GET_USER_FAILED,
         REFRESH_USER,
         REFRESH_USER_FAILED } from "../constants"; 
         
import { setCookie, getCookie } from '../../utils/cookie';

const USER_REGISTER_URL = 'https://norma.nomoreparties.space/api/auth/register';
const USER_LOGIN_URL = 'https://norma.nomoreparties.space/api/auth/login';
const LOGOUT_USER_URL = 'https://norma.nomoreparties.space/api/auth/logout';
const FORGOT_PASSWORD_URL = 'https://norma.nomoreparties.space/api/password-reset';
const RESET_PASSWORD_URL = ' https://norma.nomoreparties.space/api/password-reset/reset';
const REFRESH_TOKEN_URL = 'https://norma.nomoreparties.space/api/auth/token';
const GET_USER_URL = 'https://norma.nomoreparties.space/api/auth/user';
const REFRESH_USER_URL = 'https://norma.nomoreparties.space/api/auth/user';

export const registerUser = (email, password, name) => {
  return dispatch => {
    const body = { email, password, name };
    dispatch({ type: REGISTER_USER_REQUEST });
    fetch(USER_REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(res => {
      console.log(res);
      if (res.success) {
        setCookie('token', res.accessToken);
        localStorage.setItem('token', res.refreshToken);
        localStorage.setItem('userName', res.user.name);
        dispatch({
          type: REGISTER_USER_SUCCESS,
          user: res.user
        })
      } else {
        return Promise.reject(res);
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REGISTER_USER_FAILED,
      })
    })

  } 
}

export const loginUser = (email, password) => {
  return dispatch => {
    const body = { email, password };
    dispatch({ type: LOGIN_USER_REQUEST });
    fetch(USER_LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(res => {
      console.log(res);
      if (res.success) {
        setCookie('token', res.accessToken);
        localStorage.setItem('token', res.refreshToken);
        localStorage.setItem('userName', res.user.name);
        dispatch({
          type: LOGIN_USER_SUCCESS,
          user: res.user
        })
      } else {
        return Promise.reject(res);
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_USER_FAILED,
      })
    })
  }
}

export const resetUser = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    fetch(LOGOUT_USER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ 'token': token })
    })
    .then(res =>{
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(res => {
      if (res.success) {
        setCookie('token', '');
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        dispatch({ type: RESET_USER });
      } else {
        return Promise.reject(res);
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: RESET_USER_FAILED,
      })
    })
  }
}

export const forgotPassword = email => {
  return dispatch => {
    fetch(FORGOT_PASSWORD_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ 'email': email })
    })
    .then(res =>{
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(res => {
      if (res.success) {
        dispatch({ type: FORGOT_PASSWORD });
      } else {
        return Promise.reject(res);
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FORGOT_PASSWORD_FAILED,
      })
    })
  }
}

export const resetPassword = (password, code) => {
  return dispatch => {
    fetch(RESET_PASSWORD_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ 'password': password, 'token': code })
    })
    .then(res =>{
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(res => {
      if (res.success) {
        dispatch({ type: RESET_PASSWORD });
      } else {
        return Promise.reject(res);
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: RESET_PASSWORD_FAILED,
      })
    })
  }
}

export const refreshToken = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    fetch(REFRESH_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ 'token': token })
    })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(res => {
      if (res.success) {
        console.log(res);
        setCookie('token', res.accessToken);
        localStorage.setItem('token', res.refreshToken);
      } else {
        return Promise.reject(res);
      }
    })
    .catch(err => {
      console.log(err);
    }) 
  }
}

export const getUser = () => {
  return dispatch => {
    const token = getCookie('token');
    fetch(GET_USER_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': token
      }
    })
    .then(res => {
      
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(res => {
      if (res.success) {
        dispatch({ type: GET_USER, user: res.user })
      } else {
        return Promise.reject(res);
      }
    })
    .catch(err => {
      if (err.status === 403) {
        dispatch(refreshToken());
      } else {
        dispatch({ type: GET_USER_FAILED })
      }
    }) 
  }
}

export const refreshUser = (userData) => {
  return dispatch => {
    const token = getCookie('token');
    fetch(REFRESH_USER_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': token
      },
      body: JSON.stringify(userData)
    })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(res => {
      if (res.success) {
        dispatch({ type: REFRESH_USER, user: res.user })
        console.log(res);
      } else {
        return Promise.reject(res);
      }
    })
    .catch(err => {
      if (err.status === 403) {
        dispatch(refreshToken());
      } else {
        dispatch({ type: REFRESH_USER_FAILED })
      }
    }) 
  }
}