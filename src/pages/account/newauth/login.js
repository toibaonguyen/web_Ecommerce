import classNames from "classnames/bind";
import styles from "./auth.module.scss";
import React, { useState } from "react";
import FullContentLayout from "@/components/Layouts/FullContentLayout/FullContentLayout";
const cx = classNames.bind(styles);
function Login() {
  return <div className={cx("login-wrapper")}></div>;
}

Login.getLayout = (page) => <FullContentLayout>{page}</FullContentLayout>;
export default Login;
