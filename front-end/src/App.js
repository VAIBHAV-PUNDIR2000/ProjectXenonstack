//css
import "./App.css";

//Routes
import { Routes, Route, Link } from "react-router-dom";

//Components and pages
import Navbar from "./Components/Navbar/Navbar";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Homepage from "./Pages/HomePage/Homepage";

//context and store
import { dataListContext } from "./Context/Context.js";
import { store } from "./Context/Store.js";

//reducer
import reducer from "./Context/reducer";
import { useReducer } from "react";

//bootstrap

function App() {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <dataListContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={state.isSignedIn ? <SignupPage /> : <Homepage />}
          />
        </Routes>
      </div>
    </dataListContext.Provider>
  );
}

export default App;
