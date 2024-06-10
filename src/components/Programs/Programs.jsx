import classNames from "classnames/bind";
import styles from "./Programs.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const Programs = () => {
  return (
    <div className={cx("programs")}>
      <div className={cx("program")}>
        <img src={assets.program_1} />
        <div className={cx("caption")}>
          <img src={assets.program_icon_1} />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className={cx("program")}>
        <img src={assets.program_2} />
        <div className={cx("caption")}>
          <img src={assets.program_icon_2} />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className={cx("program")}>
        <img src={assets.program_3} />
        <div className={cx("caption")}>
          <img src={assets.program_icon_3} />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
