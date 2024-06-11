import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { assets } from "@/assets";
import { useState } from "react";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={cx("container", `${sticky ? "dark-nav" : " "}`)}>
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
