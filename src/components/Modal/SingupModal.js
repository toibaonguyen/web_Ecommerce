import classNames from "classnames/bind";
import styles from "./SingupModal.module.scss";
import { Modal, ModalBody } from "reactstrap";
import { useState } from "react";
import { memo } from "react";

const cx = classNames.bind(styles);

function SingupModal({ isModalOpen, toggle, coachId }) {
  const [toogleModal, setToogleModal] = useState(isModalOpen);
  return (
    <div className={cx("modal")}>
      <div className={cx("modal__overlay")}></div>
      <div className={cx("modal__body")}>
        <div className={cx("auth-form sigup-form")}>
          <div className={cx("auth-form__container js-modal-container")}>
            <div className={cx("auth-form__header")}>
              <h3 className={cx("auth-form__heading")}>Đăng ký</h3>
              <span className={cx("auth-form__switch-btn js-login-infom")}>
                Đăng nhập
              </span>
            </div>

            <div className={cx("auth-form__form")}>
              <div className={cx("auth-form__group")}>
                <input
                  type="text"
                  className={cx("auth-form__input")}
                  placeholder="Email"
                />
              </div>
              <div className={cx("auth-form__group")}>
                <input
                  type="password"
                  className={cx("auth-form__input")}
                  placeholder="Mật khẩu"
                />
              </div>
              <div className={cx("auth-form__group")}>
                <input
                  type="password"
                  className={cx("auth-form__input")}
                  placeholder="Nhập lại Mật khẩu"
                />
              </div>
            </div>

            <div className={cx("auth-form__aside")}>
              <p className={cx("auth-form__policy-text")}>
                Bằng việc đăng ký, bạn đã đồng ý về
                <a href="" className={cx("auth-form__text-link")}>
                  Điều khoản dịch vụ
                </a>{" "}
                &
                <a href="" className={cx("auth-form__text-link")}>
                  Chính sách bảo mật
                </a>{" "}
                của chúng tôi
              </p>
            </div>

            <div className={cx("auth-form__controls")}>
              <button
                className={cx(
                  "btn btn--normal auth-form__controls-back js-back"
                )}
              >
                TRỞ LẠI
              </button>
              <button className={cx("btn btn--primary")}>ĐĂNG KÝ</button>
            </div>
          </div>

          <div className={cx("auth-form__socials")}>
            <a
              href=""
              className={cx(
                "auth-form__socials--fb btn btn--size-s btn--with-icon"
              )}
            >
              <i
                className={cx(
                  "auth-form__socials-icons fa-brands fa-square-facebook"
                )}
              ></i>
              <span className={cx("auth-form__socials-lable")}>
                Kết nối với Facebook
              </span>
            </a>

            <a
              href=""
              className={cx("auth-form__socials--gg btn btn--with-icon")}
            >
              <i
                className={cx("auth-form__socials-icons fa-brands fa-google")}
              ></i>
              <span className={cx("auth-form__socials-lable")}>
                Kết nối với Google
              </span>
            </a>
          </div>
        </div>

        {/* <div className={cx("auth-form login-form")}>
            <div className={cx("auth-form__container")}>
                <div className={cx("auth-form__header")}>
                    <h3 className={cx("auth-form__heading")}>Đăng nhập</h3>
                    <span className={cx("auth-form__switch-btn js-sigup-infom")}>Đăng ký</span>
                </div>
                <div className={cx("auth-form__form")}>
                    <div className={cx("auth-form__group")}>
                        <input type="text" className={cx("auth-form__input" placeholder="Email")}>
                    </div>
                    <div className={cx("auth-form__group")}>
                        <input type="password" className={cx("auth-form__input" placeholder="Mật khẩu")}>
                    </div>
                </div>
    
                <div className={cx("auth-form__aside")}>
                    <div className={cx("auth-form__help")}>
                        <a href="" className={cx("auth-form__help-link auth-form__help-forgot")}>Quên mật khẩu</a>
                        <span className={cx("auth-form__help-separate")}></span>
                        <a href="" className={cx("auth-form__help-link")}>Cần trợ giúp?</a>
                    </div>
                </div>
    
                <div className={cx("auth-form__controls")}>
                    <button className={cx("btn btn--normal auth-form__controls-back js-back")}>TRỞ LẠI</button>
                    <button className={cx("btn btn--primary")}>ĐĂNG NHẬP</button>
                </div>
            </div>

            <div className={cx("auth-form__socials")}>
                <a href="" className={cx(" auth-form__socials--fb btn btn--size-s btn--with-icon")}>
                    <i className={cx("header_auth-form__socials-icons fa-brands fa-square-facebook")}></i>
                        <span className={cx("auth-form__socials-lable")}> 
                            Kết nối với Facebook
                        </span>
                </a>

                <a href="" className={cx("auth-form__socials--gg btn btn--with-icon")}>
                    <i className={cx("header_auth-form__socials-icons fa-brands fa-google")}></i>
                    <span className={cx("auth-form__socials-lable")}> 
                        Kết nối với Google
                    </span>                        
                </a>
            </div>
        </div> */}
      </div>
    </div>
  );
}
export default memo(SingupModal);
