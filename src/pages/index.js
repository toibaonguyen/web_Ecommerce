import MyApp from "./_app";
import classNames from "classnames/bind";
import styles from "./Homepage.module.css";
const cx = classNames.bind(styles);
export default function HomePage() {
  return <div className={cx("home-page")}>Hello, world!</div>;
}

HomePage.getLayout = MyApp;
