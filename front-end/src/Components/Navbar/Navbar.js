import React, { useState, useContext, useEffect } from "react";
import "./Navbar.scss";
import { dataListContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import logo from "../../Static/Images/logo.jfif";

const Navbar = () => {
  const navigateTo = useNavigate();
  const { state, dispatch } = useContext(dataListContext);

  const [showDropdown, setShowDropdown] = useState(true);

  /**
   * useEffect to change the theme as the isDark state changes
   */
  useEffect(() => {
    if (state.isDark) {
      document.documentElement.style.setProperty("--secondary-color", "#000");
      document.documentElement.style.setProperty("--white-color", "#fff");
    } else {
      document.documentElement.style.setProperty(
        "--secondary-color",
        "rgb(211, 211, 211)"
      );
      document.documentElement.style.setProperty(
        "--white-color",
        "rgb(240, 240, 240"
      );
    }
  }, [state.isDark]);
  const links = ["Profile", "Contact US"];
  return (
    <div className="root__navbar-main">
      <div>
        <img src={logo} />
      </div>

      <div className="links">
        {links.map((link) => {
          return link === "Profile" ? (
            <a
              key={link}
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <div
                className="dropdownbox"
                style={showDropdown ? { display: "none" } : {}}
              >
                <ol>
                  <li>Username</li>
                  <li>time of login</li>
                  <li
                    onClick={() =>
                      dispatch({
                        type: "IS_SIGNED_IN",
                        payload: false,
                      })
                    }
                  >
                    logout
                  </li>
                  <li
                    onClick={() =>
                      dispatch({ type: "TOGGLE_THEME", payload: !state.isDark })
                    }
                  >
                    Switch theme
                  </li>
                </ol>
              </div>
              {link}
            </a>
          ) : (
            <a
              key={link}
              style={
                link == state.activeLink ? { color: "var(--blue-color)" } : {}
              }
              onClick={() => {
                if (link !== "Profile") {
                  navigateTo(`/${link}`);
                  dispatch({ type: "TOGGLE_ACTIVE_LINK", payload: link });
                }
              }}
            >
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
