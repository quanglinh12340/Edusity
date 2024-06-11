import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("footer")}>
      <p>© 2024 Edusity. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li> <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
