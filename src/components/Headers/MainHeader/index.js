import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("header-wrapper")}>
      <div className={cx("container")}>
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
          <div className={cx("right-content")}>
            <div className={cx("up-content")}>
              <div className={cx("search-are")}>
                <img
                  className={cx("search-icon")}
                  src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                  alt="icon-search"
                />
                <input
                  type="text"
                  value=""
                  placeholder="Giao nhanh 2H &amp; đúng khung giờ"
                  className={cx("search-input")}
                />
                <button className={cx("search-btn")}>Tìm kiếm</button>
              </div>
              <div className={cx("user-shortcut")}>
                <div className={cx("child-content")}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/32/56/db/d919a4fea46f498b5f4708986d82009d.png"
                    alt="header_menu_item_home"
                  />
                  <a href="#">Trang chủ</a>
                </div>
                <div className={cx("child-content")}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/41/28/7d/4713aa0d2855c5c770799f248692f0c5.png"
                    alt="header_menu_item_astra"
                  />
                  <a href="#">Astra</a>
                </div>
                <div className={cx("child-content")}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
                    alt="header_header_account_img"
                  />
                  <a href="#">Tài khoản</a>
                </div>
              </div>
            </div>
            <div className={cx("down-content")}>
              <div className={cx("category-listing")}>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="0"
                  href="/lam-dep-suc-khoe/c1520"
                >
                  khỏe đẹp
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="1"
                  href="/nha-cua-doi-song/c1883"
                >
                  nhà cửa
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="2"
                  href="/nha-sach-tiki/c8322"
                >
                  sách
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="3"
                  href="/the-thao-da-ngoai/c1975"
                >
                  thể thao
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="4"
                  href="/tikingon/trai-cay/c44824"
                >
                  trái cây
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="5"
                  href="/tikingon/thit-trung/c54276"
                >
                  thịt, trứng
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="6"
                  href="/tikingon/rau-cu-qua/c54302"
                >
                  rau củ quả
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="7"
                  href="/tikingon/sua-bo-pho-mai/c54330"
                >
                  sữa, bơ, phô mai
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="8"
                  href="/tikingon/ca-thuy-hai-san/c54290"
                >
                  hải sản
                </a>
                <a
                  data-view-id="header_quicklinks_item"
                  data-view-index="9"
                  href="/tikingon/gao-mi-nong-san/c54384"
                >
                  gạo, mì ăn liền
                </a>
              </div>
              <div className={cx("location")}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"
                  alt="header-icon-location"
                />
                <h4 className={cx("title")}>Giao đến:</h4>
                <div className={cx("address")} bis_skin_checked="1">
                  Q. 1, P. Bến Nghé, Hồ Chí Minh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
