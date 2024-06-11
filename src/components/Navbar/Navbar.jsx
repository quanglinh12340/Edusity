import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={cx("container", `${sticky ? "dark-nav" : " "}`)}>
      <img src={assets.logo} className={cx("logo")} />
      <ul className={cx(mobileMenu ? "" : "hide-mobile-menu")}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About
          </Link>{" "}
          us
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          {" "}
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className={cx("btn")}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img
        src={assets.menu_icon}
        className={cx("menu-icon")}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
