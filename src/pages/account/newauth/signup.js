import classNames from "classnames/bind";
import styles from "./auth.module.scss";
import React, { useState } from "react";
import FullContentLayout from "@/components/Layouts/FullContentLayout/FullContentLayout";
import Header from "../LoginsignupComponent/Header";
import Signup from "../LoginsignupComponent/Signup";
const cx = classNames.bind(styles);
function SignupForm() {
  return (
    <div className={cx("main-container")}>
      <div className={cx('image-styled')}></div>
         <div className={cx('form-container')}>
              <div className={cx('form-loginsignup')}>
              <Header
              heading="Dang Ky Tai Khoan"
              paragraph="Ban da co tai khoan? "
              linkName="Dang Nhap"
              linkUrl="/account/newauth/login"
            />
            <Signup/>
              </div>
          </div>
    </div>
  );
}

SignupForm.getLayout = (page) => <FullContentLayout>{page}</FullContentLayout>;
export default SignupForm;
