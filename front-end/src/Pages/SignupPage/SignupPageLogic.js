export const signupHandler = (email, password, dispatch, state) => {
  console.log(state);
  if (email.length === 0) {
    dispatch({
      type: "SET_ERR",
      payload: { errorString: "Please Enter Vailed Email", type: "primary" },
    });
  }

  if (password.length < 8) {
    dispatch({
      type: "SET_ERR",
      payload: { errorString: "Please Enter Vailed Password", type: "primary" },
    });
  }

  if (state.signupError.error === "") {
    // console.log(error);
    console.log("success");
  }
};
