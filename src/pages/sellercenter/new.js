import classNames from "classnames/bind";
import styles from "./sellercenter.module.scss";
import React, { useState } from "react";
import FullContentLayout from "@/components/Layouts/FullContentLayout/FullContentLayout";
const cx = classNames.bind(styles);

function NewSeller() {
  return (
    <div className={cx("new-wrapper")}>
      <div className={cx("welcomepage-container")}>
        <div className={cx("welcomepage-decor")}></div>
        <div className={cx("store-infor")}>
          <div className={cx("store-content")}>
            <form>
              <div className={cx("business-store-infor")}>
                <h1 className="sc-title">Thông tin về cửa hàng</h1>
                <p className="sc-description">
                  Vui lòng chọn 1 loại tài khoản mà Nhà Bán thỏa mãn yêu cầu:
                </p>
              </div>
              <div className={cx("name-infor")}>
                <div style={{ height: "32px" }}></div>
                <div className={cx("ant-row")}>
                  <div className="ant-col ant-col-xs-24 ant-col-md-12">
                    <div className="ant-row">
                      <div className="ant-col ant-col-24">
                        <div className="">
                          <div className="ant-row">
                            <div className="ant-col ant-col-xs-24 ant-col-md-24">
                              <div type="flex" className="ant-row">
                                <div className="ant-col">
                                  <div>
                                    <span>*</span>
                                    Tên cửa hàng
                                  </div>
                                  <span className="ant-typography ant-typography-secondary">
                                    <span>
                                      Vui lòng đặt Tên gian hàng theo đúng quy
                                      định
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="ant-row ant-legacy-form-item ant-legacy-form-item-with-help storeMainTitleNameInput___3HN5U">
                                <div className="ant-col ant-legacy-form-item-control-wrapper">
                                  <div className="ant-legacy-form-item-control has-feedback has-error">
                                    <span className="ant-legacy-form-item-children">
                                      <span className="ant-input-affix-wrapper">
                                        <input
                                          maxlength="35"
                                          type="text"
                                          className="ant-input"
                                          value=""
                                        />
                                        <span className="ant-input-suffix">
                                          <span>0/35</span>
                                        </span>
                                      </span>
                                      <span className="ant-legacy-form-item-children-icon">
                                        <span
                                          role="img"
                                          aria-label="close-circle"
                                          className="anticon anticon-close-circle"
                                        >
                                          <svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="close-circle"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true"
                                          >
                                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                    <div className="ant-legacy-form-explain">
                                      Vui lòng nhập tên cửa hàng
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-show="true"
                            className="ant-alert ant-alert-warning ant-alert-no-icon"
                            role="alert"
                          >
                            <div className="ant-alert-content">
                              <div className="ant-alert-message">
                                <div className="StoreName__AlertContent-sc-n8n4tj-0 huHcWq">
                                  Để tránh việc hồ sơ của Quý Nhà Bán bị từ chối
                                  đáng tiếc, hãy đặt tên cửa hàng tuân thủ theo
                                  quy định sau:
                                  <br />
                                  <ul>
                                    <li>
                                      Không chứa từ khoá{" "}
                                      <b>gây hiểu nhầm về chất lượng</b> (ví dụ:
                                      tốt nhất, rẻ nhất, v.v.), <b>nội địa</b>,
                                      <b>địa phương</b> (ví dụ: Hồ Chí Minh, Đà
                                      Nẵng, Hà Nội, v.v.),
                                      <b>vùng miền</b> (ví dụ: miền Bắc, miền
                                      Trung, miền Nam, v.v.) hoặc{" "}
                                      <b>tên quốc gia</b>
                                      (ví dụ: Việt Nam, Hàn Quốc, Nhật Bản,
                                      v.v.).
                                      <a
                                        href="https://hocvien.tiki.vn/faq/quy-dinh-ve-ten-gian-hang/?utm_source=TikiSellerCenter&amp;utm_medium=Tools&amp;utm_campaign=2021"
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                      >
                                        Tìm hiểu thêm{" "}
                                        <i className="sc--icon-external-link"></i>
                                      </a>
                                    </li>
                                    <li>
                                      Không chứa tên{" "}
                                      <b>
                                        trùng với tên thương hiệu đã đăng ký
                                        trên Tiki
                                      </b>
                                      . Đối với tên gian hàng{" "}
                                      <b>có chứa thương hiệu được bảo hộ</b> (ví
                                      dụ: Apple, Samsung, v.v.) cần cung cấp
                                      <b>
                                        giấy ủy quyền/chứng nhận thương hiệu
                                      </b>{" "}
                                      sau khi tạo tài khoản.
                                      <a
                                        href="https://hocvien.tiki.vn/faq/gioi-thieu-gian-hang-chinh-hang-official-store/"
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                      >
                                        Tìm hiểu thêm{" "}
                                        <i className="sc--icon-external-link"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="ant-alert-description"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div type="flex" className="ant-row ant-row-middle">
                      <div className="ant-row ant-legacy-form-item">
                        <div className="ant-col ant-legacy-form-item-label">
                          <label className="" title="">
                            <div>
                              <div>Logo gian hàng </div>
                              <div>
                                <span>
                                  Kích thước: 320 x 320 px I JPEG, JPG I Tối đa
                                  2MB
                                  <br />
                                  (Có thể cập nhật sau khi hoàn tất hồ sơ, tại
                                  phần <b>Trang trí gian hàng</b>)
                                </span>
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="ant-col ant-legacy-form-item-control-wrapper">
                          <div className="ant-legacy-form-item-control">
                            <span className="ant-legacy-form-item-children">
                              <div className="uploader___3vLj6 uploadWrapper___378QL">
                                <span className="ant-upload-picture-card-wrapper">
                                  <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                    <span
                                      tabindex="0"
                                      className="ant-upload"
                                      role="button"
                                    >
                                      <input type="file" accept=".jpg,.jpeg" />
                                      <div className="ant-upload-list ant-upload-list-picture-card">
                                        <div className="ant-upload-list-picture-card-container">
                                          <span>
                                            <div className="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture-card">
                                              <div className="ant-upload-list-item-info">
                                                <span>
                                                  <a
                                                    className="ant-upload-list-item-thumbnail"
                                                    rel="noopener noreferrer"
                                                  >
                                                    <img
                                                      src="https://vcdn.tikicdn.com/ts/seller/4b/54/1a/f385a79a716cb3505f152e7af8c769aa.png"
                                                      alt="avatar"
                                                    />
                                                  </a>
                                                </span>
                                              </div>
                                              <span className="ant-upload-list-item-actions">
                                                Tải ảnh mới
                                              </span>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="ImageUploader__ExtraLabel-sc-1jhvuzq-0 hluRAL">
                                        <a className="ant-typography">
                                          <span
                                            role="img"
                                            aria-label="upload"
                                            className="anticon anticon-upload"
                                          >
                                            <svg
                                              viewBox="64 64 896 896"
                                              focusable="false"
                                              data-icon="upload"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                            >
                                              <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                                            </svg>
                                          </span>
                                          &nbsp;Tải lên logo mới
                                        </a>
                                      </div>
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ant-col ant-col-xs-24 ant-col-md-12">
                    <div type="flex" className="ant-row">
                      <div className="ant-col">
                        <div>Hình mô phỏng trên trang gian hàng</div>
                      </div>
                    </div>
                    <div className="view___Xgwu9">
                      <div className="preview___1fNqS storePreviewWrapper">
                        <img
                          src="https://sc-frontend.tikicdn.com/new/static/store-preveiw.e6abcdbd.png"
                          width="100%"
                          alt="background"
                        />
                        <div className="name___yc6G9"> </div>
                        <img
                          src="https://vcdn.tikicdn.com/ts/seller/4b/54/1a/f385a79a716cb3505f152e7af8c769aa.png"
                          className="logo___AQZgj"
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("ant-row")}></div>
            </form>
          </div>
        </div>
        <div className={cx("action-container")}>
          <div className="BusinessStoreInformation__WelcomeFooter-sc-wqyu3d-1 fknMAW">
            <div>
              <span>Tôi đã đọc và đồng ý với</span>&nbsp;
              <a
                href="https://hocvien.tiki.vn/khoa-hoc/quy-dinh-chinh-sach-bieu-mau/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Chính sách và điều khoản của Tiki</span>
              </a>
            </div>
            <button
              type="button"
              className="ant-btn ant-btn-primary"
              ant-click-animating-without-extra-node="false"
            >
              <span>Hoàn thành</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
NewSeller.getLayout = (page) => <FullContentLayout>{page}</FullContentLayout>;
export default NewSeller;
