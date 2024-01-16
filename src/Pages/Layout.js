import { Outlet, Link } from "react-router-dom";
import "../Styles/Layout.css";
import { useState } from "react";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    // Initially check for user's preferred color scheme
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.querySelector("body").toggleAttribute("data-dark-mode");
  };

  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="navbar">
            <div>
              <Link className="navbar-item" to="/">Home</Link>
            </div>
            <div>
              <Link className="navbar-item" to="/AllPosts">All Posts</Link>
            </div>
            <div>
              <Link className="navbar-item" to="/SavedPosts">Saved Posts</Link>
            </div>
            <div className="navbar-item">
              <button onClick={toggleTheme}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
