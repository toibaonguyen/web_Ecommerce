import classNames from 'classnames/bind';
import styles from './auth.module.scss';
import React, { useState } from 'react';
import FullContentLayout from '@/components/Layouts/FullContentLayout/FullContentLayout';

const cx = classNames.bind(styles);
function SignupForm() {
  return (
    <div className={cx('main_container')}>
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
                  <h4>Đăng ký tài khoản</h4>
                </div>
                <form>
                  <div className={cx('input')}>
                    <input
                      type="fullname"
                      name="fullname"
                      placeholder="Họ tên"
                      value=""
                    />
                  </div>
                  <div className={cx('input')}>
                    <input
                      type="phonenumber"
                      name="phonenumber"
                      placeholder="Số điện thoại"
                      value=""
                    />
                  </div>
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
                  <div className={cx('input')}>
                    <input
                      type="retype-password"
                      placeholder="Nhập lại mật khẩu"
                      value=""
                    />
                  </div>
                  <button>Đăng ký</button>
                </form>

                <div className={cx('create-account')}>
                  Đã có tài khoản? <p>đăng nhập</p>
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

SignupForm.getLayout = (page) => <FullContentLayout>{page}</FullContentLayout>;
export default SignupForm;
