import React from "react";
import styles from "./allproductsellerpage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function AllProDuctSellerPage() {
  return (
    <>
      <div className={cx("main-container")}>
        <div className={cx("overlay-background")}></div>
      </div>
  
    </>
  );
}
export default AllProDuctSellerPage;
