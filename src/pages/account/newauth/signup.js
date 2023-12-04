import classNames from "classnames/bind";
import styles from "./auth.module.scss";
import React, { useState } from "react";
import FullContentLayout from "@/components/Layouts/FullContentLayout/FullContentLayout";
const cx = classNames.bind(styles);
function Signup() {
  return <div className={cx("signup-wrapper")}></div>;
}

Signup.getLayout = (page) => <FullContentLayout>{page}</FullContentLayout>;
export default Signup;
