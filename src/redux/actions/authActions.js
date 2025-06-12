import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../constants/authConstants";

export const loadUser = () => (dispatch) => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    dispatch({ type: LOGIN_SUCCESS, payload: JSON.parse(userInfo) });
  } else {
    dispatch({ type: LOGOUT });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    setTimeout(() => {
      // localStorage se user data le lo (jo register ke time save hua)
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        const user = JSON.parse(userInfo);
        if (user.email === email) {
          // agar email match karta hai to use login karo
          dispatch({ type: LOGIN_SUCCESS, payload: user });
        } else {
          // agar email match nahi karta to error bhejo
          dispatch({
            type: LOGIN_FAIL,
            payload: "Invalid email or password",
          });
        }
      } else {
        // userInfo nahi hai to error bhejo
        dispatch({
          type: LOGIN_FAIL,
          payload: "User not registered",
        });
      }
    }, 1000);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    // Simulate API call
    setTimeout(() => {
      const user = {
        id: 2,
        name: name,
        email: email,
        token: "fake-jwt-token",
      };
      localStorage.setItem("userInfo", JSON.stringify(user));
      dispatch({ type: REGISTER_SUCCESS, payload: user });
    }, 1000);
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: LOGOUT });
};
