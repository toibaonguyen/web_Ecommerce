import CustomerLayout from "@/components/Layouts/CustomerLayout";
import styles from "./history.module.scss";
import { useState } from "react";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function SalesHistory() {
  const [state, showState] = useState(1);
  const handleChangeState = (value) => {
    showState(value);
  };

  let allOrders = [
    {
      ordersType: "Đã hủy",
      orderProducts: [
        {
          productName: "Apple iPhone 14 Pro Max 128GB Tím",
          productImg:
            "https://salt.tikicdn.com/cache/200x200/ts/product/11/13/de/d500a772339882fd6660b3004da9733c.jpg",
          productPrice: 26590000,
          productStore: "Tiki Trading",
          productQuantity: 2,
        },
        {
          productName: "iPhone 15 Pro Max 512GB Titan Đen",
          productImg:
            "	https://salt.tikicdn.com/cache/200x200/ts/product/fa/1d/33/47edaa8f754e1c81d0b4ed4f7a5fb20a.png",
          productPrice: 40990000,
          productStore: "Tiki Trading",
          productQuantity: 1,
        },
        {
          productName: "Apple iPhone 14 128GB Tím",
          productImg:
            "https://salt.tikicdn.com/cache/200x200/ts/product/40/5e/eb/4dcee6ceebbea004a14f212db4182b18.png",
          productPrice: 18650000,
          productStore: "Tiki Trading",
          productQuantity: 1,
        },
      ],
      ordersAmount: 112854000,
    },
    {
      ordersType: "Giao hàng thành công",
      orderProducts: [
        {
          productName:
            "Balo chống trộm cao cấp GUBAG chống thấm nước, có cổng sạc USB, thiết kế mới hiện đai, sang trọng, khóa số nâng cấp, bảo mật tốt hơn - Đen",
          productImg:
            "	https://salt.tikicdn.com/cache/200x200/ts/product/56/f0/f3/e7cf9f7058e8db1b3967f4c7490ea2d2.jpg",
          productPrice: 439000,
          productStore: "Gu Bag Official Store",
          productQuantity: 1,
        },
      ],
      ordersAmount: 439000,
    },
  ];

  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " ₫";
  };

  return (
    <div className={cx("sales-history-wrapper")}>
      <div className={cx("sales-history-heading")}>Đơn hàng của tôi</div>
      <div className={cx("sales-history-nav")}>
        <div
          className={state === 1 ? cx("nav-item selected") : cx("nav-item")}
          onClick={() => handleChangeState(1)}
        >
          Tất cả đơn
        </div>
        <div
          className={state === 2 ? cx("nav-item selected") : cx("nav-item")}
          onClick={() => handleChangeState(2)}
        >
          Chờ thanh toán
        </div>
        <div
          className={state === 3 ? cx("nav-item selected") : cx("nav-item")}
          onClick={() => handleChangeState(3)}
        >
          Đang xử lý
        </div>
        <div
          className={state === 4 ? cx("nav-item selected") : cx("nav-item")}
          onClick={() => handleChangeState(4)}
        >
          Đang vận chuyển
        </div>
        <div
          className={state === 5 ? cx("nav-item selected") : cx("nav-item")}
          onClick={() => handleChangeState(5)}
        >
          Đã giao
        </div>
        <div
          className={state === 6 ? cx("nav-item selected") : cx("nav-item")}
          onClick={() => handleChangeState(6)}
        >
          Đã huỷ
        </div>
      </div>
      <div className={cx("search-orders")}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          color="#808089"
          className={cx("icon-left")}
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
        />
        <div className={cx("search-right")}>Tìm đơn hàng</div>
      </div>
      <div className={cx("swipe-wrapper")}>
        {/* Tất cả đơn hàng */}
        <div
          className={
            state === 1 ? cx("swipper-content") : cx("swipper-content disable")
          }
          onClick={() => handleChangeState(1)}
        >
          {allOrders &&
            allOrders.length > 0 &&
            allOrders.map((item, index) => {
              return (
                <div className={cx("swipper-section")} key={index}>
                  <div color="#808089" className={cx("swipper-heading")}>
                    <span className="main-status">{item.ordersType}</span>
                  </div>
                  <div className={cx("swipper-product")}>
                    {item.orderProducts &&
                      item.orderProducts.length > 0 &&
                      item.orderProducts.map((item, index) => {
                        return (
                          <div
                            className={cx("swipper-product-item")}
                            key={index}
                          >
                            <div className={cx("detail")}>
                              <div
                                className={cx("product-img")}
                                style={{
                                  backgroundImage: `url(${item.productImg})`,
                                }}
                              >
                                <span className={cx("quantity")}>
                                  x{item.productQuantity}
                                </span>
                              </div>
                              <div className={cx("product-info")}>
                                <p className={cx("product-name")}>
                                  {item.productName}
                                </p>
                                <div className={cx("store")}>
                                  <span>{item.productStore}</span>
                                </div>
                              </div>
                            </div>
                            <div className={cx("price")}>
                              <span>
                                {item.productPrice
                                  ? currencyFormat(item.productPrice)
                                  : ""}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className={cx("product-amount")}>
                    <div className={cx("total-money")}>
                      <div className={cx("title")}>Tổng tiền:</div>
                      <div className={cx("total")}>
                        {item.ordersAmount
                          ? currencyFormat(item.ordersAmount)
                          : ""}
                      </div>
                    </div>
                    <div className={cx("button-group")}>
                      <div>Mua lại</div>
                      <div>Xem chi tiết</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Đơn hàng chờ thanh toán */}
        <div
          className={
            state === 2 ? cx("swipper-content") : cx("swipper-content disable")
          }
          onClick={() => handleChangeState(2)}
        >
          <div className={cx("swipper-section-nonproduct")}>
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
            <p>Chưa có đơn hàng</p>
          </div>
        </div>

        {/* Đơn hàng đang xử lý */}
        <div
          className={
            state === 3 ? cx("swipper-content") : cx("swipper-content disable")
          }
          onClick={() => handleChangeState(3)}
        >
          <div className={cx("swipper-section-nonproduct")}>
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
            <p>Chưa có đơn hàng</p>
          </div>
        </div>

        {/* Đơn hàng đang vận chuyển */}
        <div
          className={
            state === 4 ? cx("swipper-content") : cx("swipper-content disable")
          }
          onClick={() => handleChangeState(4)}
        >
          <div className={cx("swipper-section-nonproduct")}>
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
            <p>Chưa có đơn hàng</p>
          </div>
        </div>

        {/* Đơn hàng đã giao */}
        <div
          className={
            state === 5 ? cx("swipper-content") : cx("swipper-content disable")
          }
          onClick={() => handleChangeState(5)}
        >
          {allOrders &&
            allOrders.length > 0 &&
            allOrders.map((item, index) => {
              let check = 0;
              if (item.ordersType === "Giao hàng thành công") {
                check = 1;
                return (
                  <div className={cx("swipper-section")} key={index}>
                    <div color="#808089" className={cx("swipper-heading")}>
                      <span className="main-status">{item.ordersType}</span>
                    </div>
                    <div className={cx("swipper-product")}>
                      {item.orderProducts &&
                        item.orderProducts.length > 0 &&
                        item.orderProducts.map((item, index) => {
                          return (
                            <div
                              className={cx("swipper-product-item")}
                              key={index}
                            >
                              <div className={cx("detail")}>
                                <div
                                  className={cx("product-img")}
                                  style={{
                                    backgroundImage: `url(${item.productImg})`,
                                  }}
                                >
                                  <span className={cx("quantity")}>
                                    x{item.productQuantity}
                                  </span>
                                </div>
                                <div className={cx("product-info")}>
                                  <p className={cx("product-name")}>
                                    {item.productName}
                                  </p>
                                  <div className={cx("store")}>
                                    <span>{item.productStore}</span>
                                  </div>
                                </div>
                              </div>
                              <div className={cx("price")}>
                                <span>
                                  {item.productPrice
                                    ? currencyFormat(item.productPrice)
                                    : ""}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      <div className={cx("btn-more")}>
                        <p>Xem thêm 1 sản phẩm</p>
                      </div>
                    </div>
                    <div className={cx("product-amount")}>
                      <div className={cx("total-money")}>
                        <div className={cx("title")}>Tổng tiền:</div>
                        <div className={cx("total")}>
                          {item.ordersAmount
                            ? currencyFormat(item.ordersAmount)
                            : ""}
                        </div>
                      </div>
                      <div className={cx("button-group")}>
                        <div>Mua lại</div>
                        <div>Xem chi tiết</div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (check === 1) {
                return (
                  <div className={cx("swipper-section-nonproduct")}>
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
                    <p>Chưa có đơn hàng</p>
                  </div>
                );
              }
            })}
        </div>

        {/* Đơn hàng đã hủy */}
        <div
          className={
            state === 6 ? cx("swipper-content") : cx("swipper-content disable")
          }
          onClick={() => handleChangeState(6)}
        >
          {allOrders &&
            allOrders.length > 0 &&
            allOrders.map((item, index) => {
              let check = 1;
              if (item.ordersType === "Đã hủy") {
                check = 0;
                return (
                  <div className={cx("swipper-section")} key={index}>
                    <div color="#808089" className={cx("swipper-heading")}>
                      <span className="main-status">{item.ordersType}</span>
                    </div>
                    <div className={cx("swipper-product")}>
                      {item.orderProducts &&
                        item.orderProducts.length > 0 &&
                        item.orderProducts.map((item, index) => {
                          return (
                            <div
                              className={cx("swipper-product-item")}
                              key={index}
                            >
                              <div className={cx("detail")}>
                                <div
                                  className={cx("product-img")}
                                  style={{
                                    backgroundImage: `url(${item.productImg})`,
                                  }}
                                >
                                  <span className={cx("quantity")}>
                                    x{item.productQuantity}
                                  </span>
                                </div>
                                <div className={cx("product-info")}>
                                  <p className={cx("product-name")}>
                                    {item.productName}
                                  </p>
                                  <div className={cx("store")}>
                                    <span>{item.productStore}</span>
                                  </div>
                                </div>
                              </div>
                              <div className={cx("price")}>
                                <span>
                                  {item.productPrice
                                    ? currencyFormat(item.productPrice)
                                    : ""}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      <div className={cx("btn-more")}>
                        <p>Xem thêm 1 sản phẩm</p>
                      </div>
                    </div>
                    <div className={cx("product-amount")}>
                      <div className={cx("total-money")}>
                        <div className={cx("title")}>Tổng tiền:</div>
                        <div className={cx("total")}>
                          {item.ordersAmount
                            ? currencyFormat(item.ordersAmount)
                            : ""}
                        </div>
                      </div>
                      <div className={cx("button-group")}>
                        <div>Mua lại</div>
                        <div>Xem chi tiết</div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (check === 0) {
                return (
                  <div className={cx("swipper-section-nonproduct")}>
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" />
                    <p>Chưa có đơn hàng</p>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

SalesHistory.getLayout = (page) => <CustomerLayout>{page}</CustomerLayout>;
export default SalesHistory;
