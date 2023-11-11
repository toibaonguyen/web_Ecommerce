import CustomerLayout from "@/components/Layouts/CustomerLayout";
import styles from "./account.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Account() {
  return (
    <div className={cx("account-wrapper")}>
      <div className={cx("account-heading")}>Đơn hàng của tôi</div>
      <div className={cx("")}>
        <div
          width="16.666666666666668%"
          className="styles__Tab-sc-e27b7w-3 kJvPK"
        >
          Tất cả đơn
        </div>
        <div
          width="16.666666666666668%"
          className="styles__Tab-sc-e27b7w-3 czMhB"
        >
          Chờ thanh toán
        </div>
        <div
          width="16.666666666666668%"
          className="styles__Tab-sc-e27b7w-3 czMhB"
        >
          Đang xử lý
        </div>
        <div
          width="16.666666666666668%"
          className="styles__Tab-sc-e27b7w-3 czMhB"
        >
          Đang vận chuyển
        </div>
        <div
          width="16.666666666666668%"
          className="styles__Tab-sc-e27b7w-3 czMhB"
        >
          Đã giao
        </div>
        <div
          width="16.666666666666668%"
          className="styles__Tab-sc-e27b7w-3 czMhB"
        >
          Đã huỷ
        </div>
      </div>
      <div className="styles__StyledInput-sc-e27b7w-4 dJmBHv">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          color="#808089"
          className="icon-left"
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
          className="input with-icon-left"
        />
        <div className="search-right">Tìm đơn hàng</div>
      </div>
      <div>
        <div className="react-swipe-container carousel">
          <div>
            <div data-index="0">
              <div>
                <div className="infinite-scroll-component ">
                  <div className="styles__StyledOrder-sc-1vf2n1c-0 ekuyi">
                    <div
                      color="#808089"
                      className="styles__OrderHeader-sc-1vf2n1c-1 eUsvUb"
                    >
                      <span className="main-status">Đã hủy</span>
                    </div>
                    <div className="styles__StyledOrderInfo-sc-1upbws9-0 hBZYMQ">
                      <div>
                        <div className="product">
                          <div className="detail">
                            <div className="product-img">
                              <span className="quantity">x1</span>
                            </div>
                            <div className="product-info">
                              <p className="product-name">
                                Quần Lengging Lửng Nữ Chất Thun Co Dãn 4 Chiều ,
                                Quần Ngố Chất Đẹp Dễ Phối Đồ Màu Đen Cá Tính
                                Phong Cách
                              </p>
                              <div className="store">
                                <span>Đầm YuRin</span>
                              </div>
                            </div>
                          </div>
                          <div className="price">
                            <span>43.000 ₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__OrderFooter-sc-1vf2n1c-2 hBVEFq">
                      <div className="total-money">
                        <div className="title">Tổng tiền:</div>
                        <div className="total">65.000 ₫</div>
                      </div>
                      <div className="button-group">
                        <div>Mua lại</div>
                        <div>Xem chi tiết</div>
                      </div>
                    </div>
                  </div>
                  <div className="styles__StyledOrder-sc-1vf2n1c-0 ekuyi">
                    <div
                      color="#808089"
                      className="styles__OrderHeader-sc-1vf2n1c-1 hBsvqt"
                    >
                      <span className="main-status">Giao hàng thành công</span>
                    </div>
                    <div className="styles__StyledOrderInfo-sc-1upbws9-0 hBZYMQ">
                      <div>
                        <div className="product">
                          <div className="detail">
                            <div className="product-img">
                              <span className="quantity">x1</span>
                            </div>
                            <div className="product-info">
                              <p className="product-name">
                                Balo chống trộm cao cấp GUBAG chống thấm nước,
                                có cổng sạc USB, thiết kế mới hiện đai, sang
                                trọng, khóa số nâng cấp, bảo mật tốt hơn - Đen
                              </p>
                              <div className="store">
                                <span>Gu Bag Official Store</span>
                              </div>
                            </div>
                          </div>
                          <div className="price">
                            <span>469.000 ₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles__OrderFooter-sc-1vf2n1c-2 hBVEFq">
                      <div className="total-money">
                        <div className="title">Tổng tiền:</div>
                        <div className="total">439.000 ₫</div>
                      </div>
                      <div className="button-group">
                        <div>Mua lại</div>
                        <div>Xem chi tiết</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="1">
              <div>
                <div className="infinite-scroll-component ">
                  <div className="styles__Container-sc-o2r87r-0 gXFGTl">
                    <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    <div className="middle">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="middle__right">
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="2">
              <div>
                <div className="infinite-scroll-component ">
                  <div className="styles__Container-sc-o2r87r-0 gXFGTl">
                    <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    <div className="middle">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="middle__right">
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="3">
              <div>
                <div className="infinite-scroll-component ">
                  <div className="styles__Container-sc-o2r87r-0 gXFGTl">
                    <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    <div className="middle">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="middle__right">
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="4">
              <div>
                <div className="infinite-scroll-component ">
                  <div className="styles__Container-sc-o2r87r-0 gXFGTl">
                    <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    <div className="middle">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="middle__right">
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-index="5">
              <div>
                <div className="infinite-scroll-component ">
                  <div className="styles__Container-sc-o2r87r-0 gXFGTl">
                    <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    <div className="middle">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="middle__right">
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                        <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                      <div className="Shape__Container-sc-4y9477-0 aiTig"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Account.getLayout = (page) => <CustomerLayout>{page}</CustomerLayout>;
export default Account;
