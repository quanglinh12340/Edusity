import classNames from "classnames/bind";
import styles from "./Title.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const Title = ({ subTitle, title }) => {
  return (
    <div className={cx("title")}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
