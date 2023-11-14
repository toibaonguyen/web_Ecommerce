import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './manageorder.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);
export default function addressPage() {
  return (
    <>
      <div className={cx('container')}>
        <div className={cx('styled-account-layout')}>
          <div className={cx('account-styled-sidebar')}>
            <div className={cx('account-styled-avatar')}>
              <img
                src="https://salt.tikicdn.com/desktop/img/avatar.png"
                alt="avatar"
              />
              <div className={cx('info')}>
                Tài khoản của<strong>Quân Phan Hoàng Minh</strong>
              </div>
            </div>
            <ul className={cx('account-styled-navbar')}>
              <li>
                <Link href="/account/accountdetail">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                  <span>Thông tin tài khoản</span>
                </Link>
              </li>
              <li>
                <a href="#!">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                  </svg>
                  <span>Thông báo của tôi</span>
                </a>
              </li>
              <li>
                <Link href="/account/manageorder">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
                  </svg>
                  <span>Quản lý đơn hàng</span>
                </Link>
              </li>
              <li>
                <Link href="/account/address">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                  <span>Sổ địa chỉ</span>
                </Link>
              </li>
              <li>
                <Link href="/account/payment">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
                  </svg>
                  <span>Thông tin thanh toán </span>
                </Link>
              </li>
              {/* <li>
                <Link href="/account/productwatched">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                  </svg>
                  <span>Sản phẩm bạn đã xem</span>
                </Link>
              </li> */}
              <li>
                <Link href="/account/wishlist">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg>
                  <span>Sản phẩm yêu thích</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('styled-account-manage-order')}>
            <div className={cx('heading')}>Đơn hàng của tôi</div>
            <div className={cx('styled-tab')}>
              <div width="16.666666666666668%" className={cx('styles-tab')}>
                Tất cả đơn
              </div>
              <div width="16.666666666666668%" className={cx('styles-tab')}>
                Chờ thanh toán
              </div>
              <div width="16.666666666666668%" className={cx('styles-tab')}>
                Đang xử lý
              </div>
              <div width="16.666666666666668%" className={cx('styles-tab')}>
                Đang vận chuyển
              </div>
              <div width="16.666666666666668%" className={cx('styles-tab')}>
                Đã giao
              </div>
              <div width="16.666666666666668%" className={cx('styles-tab')}>
                Đã huỷ
              </div>
            </div>
            <div className={cx('styled-input')}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#808089"
                className={cx('icon-left')}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
              <input
                name="search"
                placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
                type="search"
                className={cx('input-with-icon-left')}
              ></input>
              <div className={cx('search-right')}>Tìm đơn hàng</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
