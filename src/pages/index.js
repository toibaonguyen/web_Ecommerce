import MyApp from "./_app";
import classNames from "classnames/bind";
import styles from "./Homepage.module.scss";
const cx = classNames.bind(styles);
export default function HomePage() {
  return (
    <div className={cx("homepage-wrapper")}>
      <div className={cx("homepage-container")}>
        <div className={cx("homepage-content")}>Hello, world!</div>
      </div>
    </div>
  );
}

HomePage.getLayout = MyApp;
