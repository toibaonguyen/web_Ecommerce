import classNames from "classnames/bind";
import styles from "./AccountManageSidebar.module.scss";
import AccountIcon from "@/components/SVGImg/AccountIcon";
import NotiIcon from "@/components/SVGImg/NotiIcon";
import OrderIcon from "@/components/SVGImg/OrderIcon";
import AddressIcon from "@/components/SVGImg/AddressIcon";
import CommentIcon from "@/components/SVGImg/CommentIcon";
import SeenIcon from "@/components/SVGImg/SeenIcon";
import LoveIcon from "@/components/SVGImg/LoveIcon";
import TelephoneIcon from "@/components/SVGImg/TelephoneIcon";
import StarIcon from "@/components/SVGImg/StarIcon";

import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const listItem = [
  {
    href: "/customer/account/edit",
    title: "Thông tin tài khoản",
    icon: AccountIcon,
    navName: "account",
  },
  {
    href: "/customer/notification",
    title: "Thông báo của tôi",
    icon: NotiIcon,
    navName: "notification",
  },
  {
    href: "/sales/order/history",
    title: "Quản lý đơn hàng",
    icon: OrderIcon,
    navName: "history",
  },
  {
    href: "/customer/address",
    title: "Sổ địa chỉ",
    icon: AddressIcon,
    navName: "address",
  },
  {
    href: "/review-hub",
    title: "Đánh giá sản phẩm",
    icon: CommentIcon,
    navName: "review",
  },
  {
    href: "/danh-rieng-cho-ban",
    title: "Sản phẩm bạn đã xem",
    icon: SeenIcon,
    navName: "seen",
  },
  {
    href: "/customer/wishlist",
    title: "Sản phẩm yêu thích",
    icon: LoveIcon,
    navName: "wishlist",
  },
  {
    href: "/customer/review",
    title: "Nhận xét của tôi",
    icon: StarIcon,
    navName: "star",
  },
  {
    href: "/customer/help-center?src=sidebar_my_account",
    title: "Hỗ trợ khách hàng",
    icon: TelephoneIcon,
    navName: "support",
  },
];

function AccountManageSidebar({ selectedNav }) {
  const [activeNav, setActiveNav] = useState(selectedNav);

  useEffect(() => {
    setActiveNav(selectedNav);
  }, []);
  return (
    <div className={cx("sidebar-wrapper")}>
      <div className={cx("sidebar-content")}>
        <aside className={cx("sidebar-container")}>
          <div className={cx("account-avatar")}>
            <img
              src="https://salt.tikicdn.com/desktop/img/avatar.png"
              alt="avatar"
            />
            <div className={cx("info")}>
              Tài khoản của
              <strong>Greeny Tiki</strong>
            </div>
          </div>
          <ul className={cx("customer-account-item")}>
            {listItem.map((item, index) => {
              let IconSidebar = item.icon;
              return (
                <li key={index}>
                  <a
                    className={
                      activeNav === item.navName ? cx("is-active") : ""
                    }
                    href={item.href}
                  >
                    <IconSidebar />
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default AccountManageSidebar;
