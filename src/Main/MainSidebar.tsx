import { Link } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <Link to="/todo">
          <li>TODO-LIST</li>
        </Link>
      </div>
      <div className="menu">
        <Link to="/github">
          <li>GitHub</li>
        </Link>
      </div>
      <div className="menu">
        <Link to="/test">
          <li>Test1메뉴3</li>
        </Link>
      </div>

      <div className="menu">
        <Link to="/test">
          <li>Test1메뉴4</li>
        </Link>
      </div>
      <div className="menu">
        <Link to="/test">
          <li>Test1메뉴5</li>
        </Link>
      </div>
      <div className="menu">
        <Link to="/test">
          <li>Test1메뉴6</li>
        </Link>
      </div>
      <div className="menu">
        <Link to="/test">
          <li>Test1메뉴7</li>
        </Link>
      </div>

      <div className="menu">
        <Link to="/test">
          <li>Test1메뉴8</li>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
