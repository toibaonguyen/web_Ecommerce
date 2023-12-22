import classNames from 'classnames/bind';
import styles from './auth.module.scss';
import React, { useState } from 'react';
import FullContentLayout from '@/components/Layouts/FullContentLayout/FullContentLayout';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function LoginForm() {
  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });

  // const [notAuth, setNotAuth] = useState(false);

  // const { loading, error, dispatch } = useContext(AuthContext);
  return (
    <div className={cx('main-container')}>
      <div className={cx('react-modal-overlay')}>
        <div
          className={cx('react-modal-content')}
          tabindex="-1"
          role="dialog"
          aria-modal="true"
        >
          <div className={cx('login-modal')}>
            <button className={cx('btn-close')}>
              <img
                className={cx('close-img')}
                src="https://salt.tikicdn.com/ts/upload/fe/20/d7/6d7764292a847adcffa7251141eb4730.png"
                alt="icon"
              />
            </button>
            <div className={cx('styled-left')}>
              <div className={cx('styled-login-with-mail')}>
                <div className={cx('heading-loginsignup')}>
                  <h4>Đăng nhập bằng email</h4>
                  <p>Nhập email và mật khẩu tài khoản Tiki</p>
                </div>
                <form>
                  <div className={cx('input')}>
                    <input
                      type="email"
                      name="email"
                      placeholder="acb@email.com"
                      value=""
                    />
                  </div>
                  <div className={cx('input')}>
                    <input type="password" placeholder="Mật khẩu" value="" />
                  </div>
                  <button>Đăng nhập</button>
                </form>
                <p className={cx('forgot-pass')}>Quên mật khẩu?</p>
                <div className={cx('create-account')}>
                  Chưa có tài khoản? <p>tạo tài khoản</p>
                </div>
              </div>
            </div>
            <div className={cx('styled-right')}>
              <img
                src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
                width="203"
              />
              <div className={cx('content-loginsignup')}>
                <h4>Mua sắm tại Tiki</h4>
                <span>Siêu ưu đãi mỗi ngày</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginForm.getLayout = (page) => <FullContentLayout>{page}</FullContentLayout>;
export default LoginForm;
