import "./navigation-bar.scss";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="nav-container">
      <div className="list-link">
        <NavLink
          to="/"
          exact={true}
          className="link-item"
          activeClassName="link-active"
        >
          Tết 2021
        </NavLink>
        <NavLink to="/game" className="link-item" activeClassName="link-active">
          Lật hình
        </NavLink>
        <NavLink to="/gift" className="link-item" activeClassName="link-active">
          Bộ sưu tập
        </NavLink>
      </div>
    </div>
  );
}
