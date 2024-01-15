import { Outlet, Link } from "react-router-dom";

const Layout = () => {
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
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;