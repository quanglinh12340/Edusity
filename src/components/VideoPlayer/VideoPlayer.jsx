import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./VideoPlayer.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={cx("video-player", { hide: !playState })}
      ref={player}
      onClick={closePlayer}
    >
      <video src={assets.video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
