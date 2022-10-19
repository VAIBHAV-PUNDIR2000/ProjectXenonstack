import React from "react";
import { useState, useContext } from "react";
import "./SignupPage.scss";
import { dataListContext } from "../../Context/Context";
import LoginAlert from "../../Components/LoginAlert/LoginAlert";
import { signupHandler } from "./SignupPageLogic";
const SignupPage = () => {
  const { state, dispatch } = useContext(dataListContext);
  const [userDet, setUserdet] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errorMessage: "",
    errorType: "",
  });
  console.log(state);
  return (
    <div className="root__signuppage-main">
      <div className="form-signup">
        <h1
          style={{ textAlign: "center", fontWeight: 200, marginBottom: "50px" }}
        >
          USER LOGIN
        </h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setUserdet({ ...userDet, email: e.target.value });
              dispatch({
                type: "SET_ERR",
                payload: { errorString: "", type: "primary" },
              });
            }}
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              dispatch({
                type: "SET_ERR",
                payload: { errorString: "", type: "primary" },
              });
              setUserdet({ ...userDet, password: e.target.value });
            }}
          ></input>
        </div>
        <button
          class="submit-btn"
          onClick={() =>
            signupHandler(
              userDet.email,
              userDet.password,

              dispatch,
              state
            )
          }
        >
          Submit
        </button>
      </div>
      <LoginAlert
        errorMessage={state.signupError.error}
        errorType={state.signupError.type}
      />
    </div>
  );
};

export default SignupPage;
