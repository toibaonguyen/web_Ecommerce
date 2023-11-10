import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./cart.module.scss";
import CartDelivery from "@/container/Cart/CartDelivery";
import Promotion from "@/container/Cart/Promotion";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { renderCartProducts } from "@/redux/slice/cartReducer";

const cx = classNames.bind(styles);
function Cart() {
  const router = useRouter();

  // let productCheckout = [
  //   {
  //     id: 1,
  //     productImg:
  //       "https://salt.tikicdn.com/cache/w78/ts/product/40/5e/eb/4dcee6ceebbea004a14f212db4182b18.png",
  //     productName: "Apple iPhone 14 128GB Tím",
  //     productQuantity: 1, // số lượng
  //     productInventory: 10, // tồn kho
  //     productDelivery: "Giao thứ 5, 21/9",
  //     extraInfor: "Tím, 128GB",
  //     productPrice: 18650000, // giá sale
  //     productSalePrice: 24990000, // giá gốc
  //     productAmout: 18650000, // thành tiền
  //   },
  //   {
  //     id: 2,
  //     productImg:
  //       "https://salt.tikicdn.com/cache/w78/ts/product/11/13/de/d500a772339882fd6660b3004da9733c.jpg",
  //     productName: "Apple iPhone 14 Pro Max 128GB Tím",
  //     productDelivery: "Giao thứ 2, 16/10",
  //     extraInfor: "Tím, 128GB",
  //     productQuantity: 2,
  //     productInventory: 20,
  //     productPrice: 26450000,
  //     productSalePrice: 33990000,
  //     productAmout: 52900000,
  //   },
  //   {
  //     id: 3,
  //     productImg:
  //       "https://salt.tikicdn.com/cache/280x280/ts/product/fa/1d/33/47edaa8f754e1c81d0b4ed4f7a5fb20a.png",
  //     productName: "Apple iPhone 15 Pro Max",
  //     productDelivery: "Giao thứ 2, 16/10",
  //     extraInfor: "Titan Đen, 512GB",
  //     productQuantity: 3,
  //     productInventory: 10,
  //     productPrice: 40990000,
  //     productAmout: 40990000,
  //   },
  // ];

  // Calculate the total number of products in the shopping cart
  const [allProducts, setAllProducts] = useState(0);
  useEffect(() => {
    let sumProducts = 0;
    for (let index = 0; index < cart.length; index++) {
      sumProducts++;
    }
    setAllProducts(sumProducts);
  }, []);

  const [cart, setCart] = useState([]);
  const [arrChecked, setArrChecked] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const mapStateToProps = useSelector((state) => {
    return {
      cartProductsArr: state.cart.cartProductsArr,
    };
  });
  // console.log("mapStateToProps.cartProductsArr");
  // console.log(mapStateToProps.cartProductsArr);

  const componentDidMount = async () => {
    try {
      dispatch(renderCartProducts("651e584037b9bb9b12f0b4a6"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  useEffect(() => {
    try {
      if (mapStateToProps.cartProductsArr !== null) {
        setCart(mapStateToProps.cartProductsArr);
      }
    } catch (error) {
      console.log(error);
    }
  }, [mapStateToProps.cartProductsArr]);

  // Increase quantity
  const handleIncrease = (productId) => {
    setCart(
      cart.map((item) => {
        if (productId === item._id) {
          return {
            ...item,
            productQuantity:
              item.productQuantity +
              (item.productQuantity < item.productInventory ? 1 : 0),
            productAmount: item.productSalePrice * (item.productQuantity + 1),
          };
        } else {
          return item;
        }
      })
    );

    setArrChecked(
      arrChecked.map((item) => {
        if (productId === item._id) {
          return {
            ...item,
            productQuantity:
              item.productQuantity +
              (item.productQuantity < item.productInventory ? 1 : 0),
            productAmount: item.productSalePrice * (item.productQuantity + 1),
          };
        } else {
          return item;
        }
      })
    );
    calFinalPrice();
  };

  // Decrease quantity
  const handleDecrease = (productId) => {
    // truyền cart, và sửa cart
    setCart(
      cart.map((item) => {
        if (productId === item._id) {
          if (item.productQuantity > 1) {
            return {
              ...item,
              productQuantity:
                item.productQuantity - (item.productQuantity > 1 ? 1 : 0),
              productAmount: item.productSalePrice * (item.productQuantity - 1),
            };
          } else {
            return item;
          }
        } else {
          return item;
        }
      })
    );

    setArrChecked(
      arrChecked.map((item) => {
        if (productId === item._id) {
          return {
            ...item,
            productQuantity:
              item.productQuantity - (item.productQuantity > 1 ? 1 : 0),
            productAmount: item.productSalePrice * (item.productQuantity - 1),
          };
        } else {
          return item;
        }
      })
    );
    calFinalPrice();
  };

  // Call price and count numbers of product checked
  let [totalChecked, setTotalChecked] = useState(0);
  const calFinalPrice = () => {
    let sumAmount = 0;
    let sumProductsChecked = 0;
    arrChecked.map((item) => {
      sumAmount += item.productAmount;
      sumProductsChecked++;
    });
    console.log("arrChecked");
    console.log(arrChecked);
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
    console.log("arrCheckedItem");
    console.log(arrCheckedItem);
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

  const getArrChecked = () => {
    return [...arrChecked];
  };

  const serializedArray = JSON.stringify(getArrChecked());

  const handleOrder = () => {
    if (totalChecked === 0) {
      alert("Vui lòng chọn sản phẩm");
    } else {
      router.push({
        pathname: "/checkout/payment",
        query: {
          array: serializedArray,
          finalPrice: totalPrice,
        },
      });
    }
  };
  // console.log(cart);
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
                            <div className={cx("product-extra-infor")}>
                              {/* {item.option} */}
                            </div>
                            <div className={cx("product-dilivery")}>
                              <div className={cx("delivery-img")}></div>
                              <span>{item.productDelivery}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cx("product-price")}>
                        <span>
                          {item.productSalePrice
                            ? currencyFormat(item.productSalePrice)
                            : ""}
                        </span>
                      </div>
                      <div className={cx("product-amount")}>
                        <span
                          id={cx("quantity-decrease")}
                          className={cx("qty-decrease")}
                          onClick={() => handleDecrease(item._id)}
                        >
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                            alt="decrease"
                          />
                        </span>
                        <input
                          type="tel"
                          className={cx("qty-input")}
                          value={item.productQuantity}
                          onChange={() => {}}
                        />
                        <span
                          id={cx("quantity-increase")}
                          className={cx("qty-increase")}
                          onClick={() => handleIncrease(item._id)}
                        >
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                            alt="increase"
                          />
                        </span>
                      </div>
                      <div className={cx("product-total")}>
                        {currencyFormat(item.productAmount)}
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
            <CartDelivery
              name={"Student name"}
              phoneNuber={"0578492192"}
              address={
                "Trường ĐH Công Nghệ Thông Tin KP6, Linh Trung, Tp.Thủ Đức"
              }
            />
            <Promotion />
            <div className={cx("sticky-section")}>
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
              <button className={cx("btnBtn")} onClick={handleOrder}>
                Mua Hàng ({totalChecked})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
