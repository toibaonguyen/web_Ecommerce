import Header from "../LoginsignupComponent/Header";
import Login from "../LoginsignupComponent/Login";
import React from "react";
import styles from "./login.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function LoginPage() {
  return (
    <>
      <div className={cx("main-container")}>
        <Header
          heading="Dang Nhap Tai Khoan"
          paragraph="Ban chua co tai khoan? "
          linkName="Signup"
          linkUrl="/account/loginsignupform/signup"
        />
        <Login />
      </div>
    </>
  );
}
