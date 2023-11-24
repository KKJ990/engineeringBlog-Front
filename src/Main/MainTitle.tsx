import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Todotitle = () => {
  return (
    <div className="title">
      <div className="icon">
        <a href="https://www.instagram.com/97___junny" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </a>
      </div>
      <div className=" blogtitle">BLOG</div>
      <div className="icon">
        <a href="https://ko-kr.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
        </a>
        <a href="https://www.twitter.com/" target="_black">
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
        </a>
      </div>
    </div>
  );
};
export default Todotitle;
