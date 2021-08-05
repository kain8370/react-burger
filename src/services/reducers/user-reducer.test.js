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
  import { userReducer } from "./user-reducer";

  describe('user-reducer', () => {
    it('should return the initial state', () => {
      expect(userReducer(undefined, {})).toEqual({ user: null, forgotPasswordSuccess: false, resetPasswordSuccess: false })
    })

    it('should handle REGISTER_USER_REQUEST', () => {
      expect(userReducer({}, { type: REGISTER_USER_REQUEST })).toEqual({ registerUserRequest: true, registerUserFailed: false })
    })

    it('should handle REGISTER_USER_SUCCESS', () => {
      expect(userReducer({}, { type: REGISTER_USER_SUCCESS, user: {} })).toEqual({ user: {}, registerUserRequest: false, registerUserFailed: false })
    })

    it('should handle REGISTER_USER_FAILED', () => {
      expect(userReducer({}, { type: REGISTER_USER_FAILED })).toEqual({ registerUserRequest: false, registerUserFailed: true })
    })

    it('should handle LOGIN_USER_REQUEST', () => {
      expect(userReducer({}, { type: LOGIN_USER_REQUEST, user: {} })).toEqual({ loginUserRequest: true, loginUserFailed: false })
    })

    it('should handle LOGIN_USER_SUCCESS', () => {
      expect(userReducer({}, { type: LOGIN_USER_SUCCESS, user: {} })).toEqual({ user: {}, loginUserRequest: false, loginUserFailed: false })
    })

    it('should handle LOGIN_USER_FAILED', () => {
      expect(userReducer({}, { type: LOGIN_USER_FAILED })).toEqual({ loginUserRequest: false, loginUserFailed: true })
    })

    it('should handle RESET_USER', () => {
      expect(userReducer({}, { type: RESET_USER })).toEqual({ user: null })
    })

    it('should handle RESET_USER_FAILED', () => {
      expect(userReducer({}, { type: RESET_USER_FAILED })).toEqual({})
    })

    it('should handle FORGOT_PASSWORD', () => {
      expect(userReducer({}, { type: FORGOT_PASSWORD })).toEqual({ forgotPasswordSuccess: true })
    })

    it('should handle FORGOT_PASSWORD_FAILED', () => {
      expect(userReducer({}, { type: FORGOT_PASSWORD_FAILED })).toEqual({ forgotPasswordSuccess: false })
    })

    it('should handle RESET_PASSWORD', () => {
      expect(userReducer({}, { type: RESET_PASSWORD })).toEqual({ resetPasswordSuccess: true })
    })

    it('should handle RESET_PASSWORD_FAILED', () => {
      expect(userReducer({}, { type: RESET_PASSWORD_FAILED })).toEqual({ resetPasswordSuccess: false })
    })

    it('should handle REFRESH_TOKEN', () => {
      expect(userReducer({}, { type: REFRESH_TOKEN })).toEqual({ refreshTokenSuccess: true })
    })

    it('should handle REFRESH_TOKEN_FAILED', () => {
      expect(userReducer({}, { type: REFRESH_TOKEN_FAILED })).toEqual({ refreshTokenSuccess: false })
    })

    it('should handle GET_USER', () => {
      expect(userReducer({}, { type: GET_USER, user: {} })).toEqual({ getUserSuccess: true, user: {} })
    })

    it('should handle GET_USER_FAILED', () => {
      expect(userReducer({}, { type: GET_USER_FAILED })).toEqual({ getUserSuccess: false })
    })

    it('should handle REFRESH_USER', () => {
      expect(userReducer({}, { type: REFRESH_USER, user: {} })).toEqual({ refreshUserSuccess: true, user: {} })
    })

    it('should handle REFRESH_USER_FAILED', () => {
      expect(userReducer({}, { type: REFRESH_USER_FAILED })).toEqual({ refreshUserSuccess: false })
    })
  })