import classNames from "classnames/bind";
import styles from "./Campus.module.scss";
import { assets } from "@/assets";
const cx = classNames.bind(styles);

const Campus = () => {
  return (
    <div className={cx("campus")}>
      <div className={cx("gallery")}>
        <img src={assets.gallery_1} />
        <img src={assets.gallery_2} />
        <img src={assets.gallery_3} />
        <img src={assets.gallery_4} />
      </div>
      <button className={cx("btn", "dark-btn")}>
        See more here <img src={assets.white_arrow} />
      </button>
    </div>
  );
};

export default Campus;
