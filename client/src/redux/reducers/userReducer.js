import {
  USER_LOGOUT,
  USER_SIGN_IN_FAILURE,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS
} from '../constans/userConstans'


function userSignInReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return {loading: true}

    case USER_SIGN_IN_SUCCESS:
      return {loading: false, userInfo: action.payload}

    case USER_SIGN_IN_FAILURE:
      return {loading: false, error: action.payload}

    case USER_LOGOUT:
      return {}

    default:
      return state
  }
}

export {
  userSignInReducer
}

