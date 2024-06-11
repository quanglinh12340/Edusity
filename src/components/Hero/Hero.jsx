import classNames from "classnames/bind";
import styles from "./Hero.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);
const Hero = () => {
  return (
    <div className={cx("hero", "container")} id="hero">
      <div className={cx("hero-text")}>
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <img src={assets.dark_arrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
