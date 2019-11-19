import request from "superagent";

const baseUrl = "http://localhost:4000";

//login should dispatch the JWT from the /login responsebody inside an action with type JWT

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = jwt(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

function signupSuccess(payload) {
  return {
    type: SIGNUP_SUCCESS,
    payload
  };
}

export const signup = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ email, password })
    .then(response => {
      const action = signupSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
