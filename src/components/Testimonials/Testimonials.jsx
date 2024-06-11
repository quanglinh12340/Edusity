import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Testimonials.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const Testimonials = () => {
  const sliderRef = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
      sliderRef.current.style.transform = `translateX(${tx}%)`;
    }
    console.log(tx);
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
      sliderRef.current.style.transform = `translateX(${tx}%)`;
    }
    console.log(tx);
  };
  return (
    <div className={cx("testimonials")} id="testimonials">
      <img
        src={assets.next_icon}
        className={cx("next-btn")}
        onClick={slideForward}
      />
      <img
        src={assets.back_icon}
        className={cx("back-btn")}
        onClick={slideBackward}
      />
      <div className={cx("slider")}>
        <ul ref={sliderRef}>
          <li>
            <div className={cx("slide")}>
              <div className={cx("user-info")}>
                <img src={assets.user_1} />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className={cx("slide")}>
              <div className={cx("user-info")}>
                <img src={assets.user_2} />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className={cx("slide")}>
              <div className={cx("user-info")}>
                <img src={assets.user_3} />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className={cx("slide")}>
              <div className={cx("user-info")}>
                <img src={assets.user_4} />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
