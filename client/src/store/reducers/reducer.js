const initialState = {
  user: null,
  isLogined: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        user: action.user,
        isLogined: true,
      };
    }
    case "logout": {
      return {
        ...state,
        user: null,
        isLogined: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const login = (user) => (dispatch) => {
  dispatch({ type: "login", user });
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "logout" });
};

