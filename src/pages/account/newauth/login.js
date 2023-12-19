import classNames from "classnames/bind";
import styles from "./auth.module.scss";
import React, { useState } from "react";
import FullContentLayout from "@/components/Layouts/FullContentLayout/FullContentLayout";
import Header from "../LoginsignupComponent/Header";
import Login from "../LoginsignupComponent/Login";
const cx = classNames.bind(styles);
function LoginForm() {
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });

  // const [notAuth, setNotAuth] = useState(false);

  // const { loading, error, dispatch } = useContext(AuthContext);
  return (
    <div className={cx("main-container")}>
      <div className={cx("image-styled")}></div>
      <div className={cx("form-container")}>
        <div className={cx("form-loginsignup")}>
          <Header
            heading="Dang Nhap Tai Khoan"
            paragraph="Ban chua co tai khoan? "
            linkName="Dang Ky"
            linkUrl="/account/newauth/signup"
          />
          <Login />
        </div>
      </div>
    </div>
  );
}

LoginForm.getLayout = (page) => <FullContentLayout>{page}</FullContentLayout>;
export default LoginForm;
