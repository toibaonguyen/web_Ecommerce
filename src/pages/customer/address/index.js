import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./address.module.scss";
import Link from "next/link";
import CustomerLayout from "@/components/Layouts/CustomerLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderAddress } from "@/redux/slice/userReducer";

const cx = classNames.bind(styles);
function AddressPage() {
  const mapStateToProps = useSelector((state) => {
    return {
      addressArr: state.user.addressArr,
    };
  });

  const dispatch = useDispatch();

  const componentDidMount = async () => {
    try {
      dispatch(renderAddress(1));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    componentDidMount();
  }, []);
  console.log(mapStateToProps.addressArr);
  
  // useEffect(() => {
  //   try {
  //     if (mapStateToProps.addressArr !== null) {
  //       setCart(mapStateToProps.addressArr);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [mapStateToProps.cartProductsArr]);
  return (
    <div className={cx("address-wrapper")}>
      <div className={cx("heading")}>Sổ địa chỉ</div>
      <div className={cx("inner")}>
        <div className={cx("new")}>
          <Link href="/customer/address/create" className={cx("add-address")}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
            <span>Thêm địa chỉ mới</span>
          </Link>
        </div>
        <div className={cx("item")}>
          <div className={cx("info")}>
            <div className={cx("name")}>
              Quân Phan Hoàng Minh
              <div className={cx("default-address")}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                </svg>
                <span>Địa chỉ mặc định</span>
              </div>
            </div>
            <div className="address">
              <span>Địa chỉ: </span>84/36 Lý Thường Kiệt, Phường 07, Quận Gò
              Vấp, Hồ Chí Minh
            </div>
            <div className="phone">
              <span>Điện thoại: </span>0929019827
            </div>
          </div>
          <div className={cx("action")}>
            <Link className={cx("edit")} href="/customer/address/edit/18779875">
              Chỉnh sửa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

AddressPage.getLayout = (page) => (
  <CustomerLayout selectedNav={"address"}>{page}</CustomerLayout>
);
export default AddressPage;
