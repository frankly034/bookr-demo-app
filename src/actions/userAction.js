import instance from '../helpers/axios';

import { SIGNUP, SIGNING_UP, SIGNUP_ERROR } from './types';

export const signUp = (userData) => (dispatch) => {
  dispatch({ type: SIGNING_UP });
  return instance.post('/users', userData)
    .then((res) => {
      dispatch({ type: SIGNUP, payload: res.data.user });
      return { data: res.data.user };
    })
    .catch((e) => {
      dispatch({ type: SIGNUP_ERROR, payload: e.message });
      return { error: e };
    });
};

export const signIn = null;
