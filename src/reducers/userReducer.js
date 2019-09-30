import {
  SIGNING_UP,
  SIGNUP,
  SIGNUP_ERROR,
} from '../actions/types';

const initialState = {
  user: {},
  errors: [],
  signingUp: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SIGNING_UP:
    return {
      ...state,
      errors: [],
      signingUp: true,
    };
  case SIGNUP:
    return {
      ...state,
      user: action.payload,
      errors: [],
      signingUp: false,
    };

  case SIGNUP_ERROR:
    return {
      ...state,
      signingUp: false,
      errors: [action.payload],
    };

  default:
    return {
      ...state,
    };
  }
};
