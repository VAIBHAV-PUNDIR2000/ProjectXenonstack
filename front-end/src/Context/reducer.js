import {
  LIST_DATA,
  SET_IS_LOADING,
  SET_IS_SIGNEDIN,
  SET_SIGN_OUT,
  SET_USER,
  TOGGLE_THEME,
  TOGGLE_ACTIVE_LINK,
  SET_ERR,
} from "./action.type";

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_IS_SIGNEDIN:
      return { ...state, isSignedIn: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case TOGGLE_THEME:
      return { ...state, isDark: action.payload };
    case TOGGLE_ACTIVE_LINK:
      return { ...state, activeLink: action.payload };
    case SET_IS_SIGNEDIN:
      return { ...state, activeLink: action.payload };
    case SET_ERR: {
      console.log(action.payload);
      return {
        ...state,
        signupError: {
          error: action.payload.errorString,
          type: action.payload.type,
        },
      };
    }

    default:
      return state;
  }
};
