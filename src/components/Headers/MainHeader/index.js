import React from "react";
import styles from "./Header.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header-container")}>
      <div className={cx("header-content")}>
        <div className={cx("left-content")}>
          <div className={cx("submenu")}>
            <i className={cx("fa-solid fa-bars")}></i>
          </div>
          <div
            className={cx("header-logo")}
            onClick={() => {
              navigate("/homepage");
            }}
          ></div>
        </div>
        <div className={cx("center-content")}>
          <div className={cx("search-are")}>
            <i className={cx("search-icon fa-solid fa-magnifying-glass")}></i>
            <input
              className={cx("search-input")}
              placeholder="Search for anything"
            />
          </div>
          <div className={cx("child-content")}>
            <a href="#">Trang chủ</a>
          </div>
          <div className={cx("child-content")}>
            <a href="#">Astra</a>
          </div>
          <div className={cx("child-content")}>
            <a href="#">Tài khoản</a>
          </div>
        </div>
        <div className={cx("right-content")}>
          <button className={cx("btnLogin")} onClick={() => handleLogin()}>
            Log in
          </button>
          <button className={cx("btnSignup")} onClick={() => handleSignup()}>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
