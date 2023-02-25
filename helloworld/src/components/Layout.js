import { Outlet, Link } from "react-router-dom";

const Layout = () => (
  <div className="text-center my-5">
    <nav>
      <p className="lead">
        <Link to="/">Home</Link> |
        <Link to="/passingobjects">Passing Objects</Link> |
        <Link to="/inputoutput">Input Output</Link>
      </p>
    </nav>
    <hr></hr>
    <Outlet />
    <hr></hr>
  </div>
);

export default Layout;