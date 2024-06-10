import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const Navbar = () => {
  return (
    <nav className={cx("container")}>
      <img src={assets.logo} className={cx("logo")} />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className={cx("btn")}>Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
