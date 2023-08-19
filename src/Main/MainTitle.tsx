import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
const Todotitle = () => {
  return (
    <div className="todo-title">
      <div className="todo-icon">
        <a href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </a>
      </div>
      <div className="main-title">BLOG</div>
      <div className="todo-icon">
        <a href="https://ko-kr.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
        </a>
        <a href="https://www.twitter.com/" target="_black">
          <FontAwesomeIcon icon={faTwitch} size="2xl" />
        </a>
      </div>
    </div>
  );
};
export default Todotitle;
