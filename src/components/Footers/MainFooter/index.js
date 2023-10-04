import classNames from "classnames/bind";
import styles from "./Footer.module.css";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <section className={cx("footer-wrapper")}>
      <div className={cx("container")}>
        <div className={cx("footer-content")}>
          <div className={cx("up-content")}>
            <div className={cx("left-footer-content")}>
              <div className={cx("child-content")}>
                <ul className={cx("list-item")}>
                  <li className={cx("item")}>Mentorship Busniess</li>
                  <li className={cx("item")}>Becom an Mentor</li>
                  <li className={cx("item")}>Get the app</li>
                  <li className={cx("item")}>About us</li>
                  <li className={cx("item")}>Contact us</li>
                </ul>
              </div>
              <div className={cx("child-content")}>
                <ul className={cx("list-item")}>
                  <li className={cx("item")}>Careers</li>
                  <li className={cx("item")}>Blog</li>
                  <li className={cx("item")}>Help and Support</li>
                  <li className={cx("item")}>Affiliate</li>
                  <li className={cx("item")}>Investor</li>
                </ul>
              </div>
              <div className={cx("child-content")}>
                <ul className={cx("list-item")}>
                  <li className={cx("item")}>Terms</li>
                  <li className={cx("item")}>Privacy policy</li>
                  <li className={cx("item")}>Cookie settings</li>
                  <li className={cx("item")}>Sitemap</li>
                  <li className={cx("item")}>Accessibility statement</li>
                </ul>
              </div>
            </div>
            <div className={cx("right-footer-content")}>
              <button className={cx("btnFooter")}>
                <i className={cx("fa-solid fa-globe languageBtn")}></i>English
              </button>
            </div>
          </div>
          <div className={cx("down-content")}>
            <div className={cx("footer-logo")}></div>
            <div className={cx("footer-copyright")}>
              © 2023 Tiki, Inc.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
