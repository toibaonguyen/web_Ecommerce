import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./cart.module.scss";
const cx = classNames.bind(styles);

function Cart() {
  let productCheckout = [
    {
      id: 1,
      productImg:
        "https://salt.tikicdn.com/cache/w78/ts/product/40/5e/eb/4dcee6ceebbea004a14f212db4182b18.png",
      productName: "Apple iPhone 14 128GB Tím",
      productQuantity: 1, // số lượng
      productInventory: 10, // tồn kho
      productDelivery: "Giao thứ 5, 21/9",
      productPrice: 18650000, // giá sale
      productSalePrice: 24990000, // giá gốc
      productAmout: 18650000, // thành tiền
    },
    {
      id: 2,
      productImg:
        "https://salt.tikicdn.com/cache/w78/ts/product/11/13/de/d500a772339882fd6660b3004da9733c.jpg",
      productName: "Apple iPhone 14 Pro Max 128GB Tím",
      productDelivery: "Giao thứ 2, 16/10",
      productQuantity: 2,
      productInventory: 20,
      productPrice: 26450000,
      productSalePrice: 33990000,
      productAmout: 52900000,
    },
    {
      id: 3,
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/fa/1d/33/47edaa8f754e1c81d0b4ed4f7a5fb20a.png",
      productName: "Apple iPhone 15 Pro Max",
      productDelivery: "Giao thứ 2, 16/10",
      productQuantity: 3,
      productInventory: 10,
      productPrice: 40990000,
      productAmout: 40990000,
    },
  ];

  // Calculate the total number of products in the shopping cart
  const [allProducts, setAllProducts] = useState(0);
  useEffect(() => {
    let sumProducts = 0;
    for (let index = 0; index < cart.length; index++) {
      sumProducts++;
    }
    setAllProducts(sumProducts);
  }, []);

  const [cart, setCart] = useState(productCheckout);
  const [arrChecked, setArrChecked] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);

  //Handle Decrease quantity
  const handleDecrease = (productId) => {
    // truyền cart, và sửa cart
    setCart(
      cart.map((item) => {
        if (productId === item.id) {
          return {
            ...item,
            productQuantity:
              item.productQuantity - (item.productQuantity > 1 ? 1 : 0),
            productAmout: item.productPrice * (item.productQuantity - 1),
          };
        } else {
          return item;
        }
      })
    );

    setArrChecked(
      arrChecked.map((item) => {
        if (productId === item.id) {
          return {
            ...item,
            productQuantity:
              item.productQuantity - (item.productQuantity > 1 ? 1 : 0),
            productAmout: item.productPrice * (item.productQuantity - 1),
          };
        } else {
          return item;
        }
      })
    );
  };

 

  const handleIncrease = (productId) => {
    setCart(
      cart.map((item) => {
        if (productId === item.id) {
          return {
            ...item,
            productQuantity:
              item.productQuantity +
              (item.productQuantity < item.productInventory ? 1 : 0),
            productAmout: item.productPrice * (item.productQuantity + 1),
          };
        } else {
          return item;
        }
      })
    );

    setArrChecked(
      arrChecked.map((item) => {
        if (productId === item.id) {
          return {
            ...item,
            productQuantity:
              item.productQuantity +
              (item.productQuantity < item.productInventory ? 1 : 0),
            productAmout: item.productPrice * (item.productQuantity + 1),
          };
        } else {
          return item;
        }
      })
    );
  };

  // Call price and count numbers of product checked
  let [totalChecked, setTotalChecked] = useState(0);
  const calFinalPrice = () => {
    let sumAmount = 0;
    let sumProductsChecked = 0;
    arrChecked.map((item) => {
      sumAmount += item.productAmout;
      sumProductsChecked++;
    });
    setTotalPrice(sumAmount);
    setTotalChecked(sumProductsChecked);
  };

  const allCheckRef = useRef([]);
  useEffect(() => {
    //Call calFinalPrice() again every time the array containing the checkboxes is changed to recalculate the
    //total amount
    calFinalPrice();

    //Check all if all are checked
    if (arrChecked.length === cart.length) {
      allCheckRef.current[0].checked = true;
    } else {
      allCheckRef.current[0].checked = false;
    }
  }, [arrChecked]);

  //Handle Final Price
  const handleCheckItem = (event, productItem) => {
    var arrCheckedItem = [...arrChecked];
    if (event.target.checked) {
      arrCheckedItem = [...arrChecked, productItem];
    } else {
      arrCheckedItem.splice(arrChecked.indexOf(productItem), 1);
    }
    setArrChecked(arrCheckedItem);
  };

  //Handle Check all
  const ref = useRef([]);
  const handleCalAll = (event) => {
    if (event.target.checked) {
      for (let i = 0; i < ref.current.length; i++) {
        ref.current[i].checked = true;
      }
      setArrChecked(cart);
    } else {
      for (let i = 0; i < ref.current.length; i++) {
        ref.current[i].checked = false;
      }
      var emptyArr = [...arrChecked];
      emptyArr.length = 0;
      setArrChecked(emptyArr);
    }
  };

  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " ₫";
  };

  return (
    <div className={cx("checkout-wrapper")}>
      <div className={cx("checkout-container")}>
        <div className={cx("checkout-heading")}>
          <h4>Giỏ Hàng</h4>
        </div>
        <div className={cx("checkout-content")}>
          <div className={cx("left-content")}>
            <div className={cx("left-up-content")}>
              <div className={cx("item")}>
                <input
                  ref={(element) => {
                    allCheckRef.current[0] = element;
                  }}
                  type="checkbox"
                  className={cx("check-box")}
                  onChange={(e) => {
                    handleCalAll(e);
                  }}
                />
                <span className={cx("lable-heading-cart")}>
                  Tất cả ({allProducts} sản phẩm)
                </span>
              </div>
              <span className={cx("lable-heading-cart")}>Đơn giá</span>
              <span className={cx("lable-heading-cart")}>Số lượng</span>
              <span className={cx("lable-heading-cart")}>Thành tiền</span>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                alt="deleted"
                className={cx("deleteBtn")}
              />
            </div>
            <div className={cx("left-down-content")}>
              <div className={cx("tiki-trading")}>
                <div className={cx("item")}>
                  <input type="checkbox" className={cx("check-box")} />
                  <div className={cx("shop-img")}></div>
                  <span className={cx("tiki-trading-heading")}>
                    Tiki trading
                  </span>
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg"
                    alt="seller-link"
                    className={cx("sellers__icon-arrow")}
                  />
                </div>
              </div>
              {cart &&
                cart.length > 0 &&
                cart.map((item, index) => {
                  return (
                    <div className={cx("product-item")} key={index}>
                      <div className={cx("item")}>
                        <input
                          ref={(element) => {
                            ref.current[index] = element;
                          }}
                          type="checkbox"
                          className={cx("check-box")}
                          onChange={(e) => {
                            handleCheckItem(e, item);
                          }}
                        />
                        <div className={cx("product-infor")}>
                          <div
                            className={cx("product-img")}
                            style={{
                              backgroundImage: `url(${item.productImg})`,
                            }}
                          ></div>
                          <div className={cx("product-title")}>
                            <div className={cx("product-name")}>
                              {item.productName}
                            </div>
                            <div className={cx("product-dilivery")}>
                              <div className={cx("delivery-img")}></div>
                              <span>{item.productDelivery}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cx("product-price")}>
                        {currencyFormat(item.productPrice)}{" "}
                        <span>
                          {" "}
                          {item.productSalePrice
                            ? currencyFormat(item.productSalePrice)
                            : ""}
                        </span>
                      </div>
                      <div className={cx("product-amount")}>
                        <span
                          id={cx("quantity-decrease")}
                          className={cx("qty-decrease")}
                          onClick={() => handleDecrease(item.id)}
                        >
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                            alt="decrease"
                          />
                        </span>
                        <input
                          type="tel"
                          className={cx("qty-input")}
                          defaultValue={item.productQuantity}
                        />
                        <span
                          id={cx("quantity-increase")}
                          className={cx("qty-increase")}
                          onClick={() => handleIncrease(item.id)}
                        >
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                            alt="increase"
                          />
                        </span>
                      </div>
                      <div className={cx("product-total")}>
                        {currencyFormat(item.productAmout)}
                      </div>

                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                        alt="deleted"
                        className={cx("deleteBtn")}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={cx("right-content")}>
            <div className={cx("delivery-area")}>
              <div className={cx("delivery-text")}>
                <h3>Giao tới</h3>
                <a className={cx("changeBtn")}>Thay đổi</a>
              </div>
              <h3 className={cx("delivery-name")}>Student Name</h3>
              <h3 className={cx("delivery-address")}>
                Trường ĐH Công Nghệ Thông Tin KP6, Linh Trung, Tp.Thủ Đức
              </h3>
            </div>
            <div className={cx("promotion-area")}>
              <div className={cx("promotion-text")}>
                <span>Tiki khuyến mãi</span>
                <div className={cx("promotion-selection")}>
                  Có thể chọn 2
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={cx("info-icon")}
                    background="#ffffff"
                    aria-describedby="popup-2"
                  >
                    <path
                      d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                      fill="#787878"
                    ></path>
                    <path
                      d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                      fill="#787878"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                      fill="#787878"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={cx("promotion-choose")}>
                <svg
                  className={cx("coupon-icon")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2803 14.7803L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803Z"
                    fill="#0B74E5"
                  ></path>
                  <path
                    d="M10.125 10.5C10.7463 10.5 11.25 9.99632 11.25 9.375C11.25 8.75368 10.7463 8.25 10.125 8.25C9.50368 8.25 9 8.75368 9 9.375C9 9.99632 9.50368 10.5 10.125 10.5Z"
                    fill="#0B74E5"
                  ></path>
                  <path
                    d="M15 14.625C15 15.2463 14.4963 15.75 13.875 15.75C13.2537 15.75 12.75 15.2463 12.75 14.625C12.75 14.0037 13.2537 13.5 13.875 13.5C14.4963 13.5 15 14.0037 15 14.625Z"
                    fill="#0B74E5"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 5.25C3.33579 5.25 3 5.58579 3 6V9.75C3 10.1642 3.33579 10.5 3.75 10.5C4.61079 10.5 5.25 11.1392 5.25 12C5.25 12.8608 4.61079 13.5 3.75 13.5C3.33579 13.5 3 13.8358 3 14.25V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V14.25C21 13.8358 20.6642 13.5 20.25 13.5C19.3892 13.5 18.75 12.8608 18.75 12C18.75 11.1392 19.3892 10.5 20.25 10.5C20.6642 10.5 21 10.1642 21 9.75V6C21 5.58579 20.6642 5.25 20.25 5.25H3.75ZM4.5 9.08983V6.75H19.5V9.08983C18.1882 9.41265 17.25 10.5709 17.25 12C17.25 13.4291 18.1882 14.5874 19.5 14.9102V17.25H4.5V14.9102C5.81181 14.5874 6.75 13.4291 6.75 12C6.75 10.5709 5.81181 9.41265 4.5 9.08983Z"
                    fill="#0B74E5"
                  ></path>
                </svg>
                <span>Chọn hoặc nhập Khuyến mãi khác</span>
              </div>
            </div>
            <div className={cx("total-amount-area")}>
              <div className={cx("provisional")}>
                <span>Tạm tính</span>
                <span className={cx("price")}>
                  {currencyFormat(totalPrice)}
                </span>
              </div>
              <div className={cx("total")}>
                <span>Tổng tiền</span>
                <div className={cx("total-price")}>
                  <span className={cx("price-final")}>
                    {totalPrice === 0 ? (
                      <span>Vui lòng chọn sản phẩm</span>
                    ) : (
                      currencyFormat(totalPrice)
                    )}
                  </span>
                  <span>(Đã bao gồm VAT nếu có)</span>
                </div>
              </div>
              <div className={cx("freeship")}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/70/f9/77/3b172be9ee58c8104fe8a4d40c4f5633.png"
                  alt=""
                  width="81"
                  data-selected="true"
                  data-label-id="0"
                  data-metatip="true"
                />
                <span>đã được áp dụng!</span>
              </div>
            </div>
            <button className={cx("btnBtn")}>Mua Hàng ({totalChecked})</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

