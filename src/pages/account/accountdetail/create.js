import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './create.module.scss';
import Link from 'next/link';
const cx = classNames.bind(styles);
export default function createAddress() {
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
                <Link href="/account/notification">
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
                </Link>
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
                    className={cx('input-label')}
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg>
                  <span>Sản phẩm yêu thích</span>
                </Link>
              </li>
              <li>
                <Link href="/account/helpcenter">
                  <svg
                    fill="#000000"
                    height="1em"
                    width="1em"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 442 442"
                  >
                    <path d="M431.706,232.827h-1.108c-3.863-17.348-17.544-31.03-34.892-34.892v-23.229C395.706,78.373,317.333,0,221,0 S46.294,78.373,46.294,174.706v23.229c-17.348,3.863-31.03,17.544-34.892,34.892h-1.108c-5.523,0-10,4.478-10,10s4.477,10,10,10 h1.108c3.962,17.796,18.257,31.735,36.242,35.173c4.159,17.647,20.027,30.827,38.926,30.827c22.056,0,40-17.944,40-40v-72 c0-22.056-17.944-39.999-40-39.999c-7.384,0-14.303,2.019-20.246,5.523C67.589,88.128,136.482,20,221,20 c84.464,0,153.325,68.042,154.674,152.191c-5.881-3.404-12.698-5.363-19.968-5.363c-22.056,0-40,17.943-40,39.999v72 c0,22.056,17.944,40,40,40c18.918,0,34.799-13.205,38.938-30.879c6.229-1.232,12.007-3.724,17.062-7.201v44.167 c0,18.786-9.134,36.63-25.72,50.244C368.827,389.243,345.999,397,321.706,397h-64.907c-2.082-15.648-9.245-25-19.726-25h-37.5 c-19.299,0-35,15.701-35,35s15.701,35,35,35h37.5c10.482,0,17.645-9.352,19.726-25h64.907c60.654,0,110-41.31,110-92.086v-72.087 c5.523,0,10-4.478,10-10S437.229,232.827,431.706,232.827z M66.57,206.827c0-11.027,8.972-19.999,20-19.999 c11.028,0,20,8.972,20,19.999v72c0,11.028-8.972,20-20,20c-11.028,0-20-8.972-20-20c0-5.522-4.477-10-10-10 c-0.047,0-0.092,0.006-0.138,0.007c-0.047,0-0.092-0.007-0.138-0.007c-14.336,0-26-11.663-26-26c0-10.9,6.744-20.248,16.276-24.106 v25.996c0,5.522,4.477,10,10,10s10-4.478,10-10V206.827z M234.938,422h-35.366c-8.271,0-15-6.729-15-15s6.729-15,15-15h35.366 c1.049,2.163,2.489,7.271,2.489,15S235.987,419.837,234.938,422z M385.706,268.827c-5.523,0-10,4.478-10,10c0,11.028-8.972,20-20,20 s-20-8.972-20-20v-72c0-11.027,8.972-19.999,20-19.999s20,8.972,20,19.999v37.89c0,5.522,4.477,10,10,10s10-4.478,10-10V218.83 c9.387,3.926,16,13.203,16,23.997C411.706,257.164,400.042,268.827,385.706,268.827z"></path>{' '}
                  </svg>
                  <span>Hỗ trợ khách hàng</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('styled-account-layout-inner')}>
            <div className={cx('styled-account-address-create')}>
              <div className={cx('heading')}>Tạo sổ địa chỉ</div>
              <div className={cx('inner')}>
                <form>
                  <div className={cx('form-control')}>
                    <label for="fullName" className={cx('input-label')}>
                      Họ và tên:
                    </label>
                    <div>
                      <input
                        type="text"
                        required=""
                        name="fullName"
                        placeholder="Nhập họ và tên"
                        maxlength="50"
                        className={cx('type-input')}
                        value="Quân Phan Hoàng Minh"
                      />
                    </div>
                  </div>
                  <div className={cx('form-control')}>
                    <label for="company" className={cx('input-label')}>
                      Công ty:
                    </label>
                    <div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Nhập công ty"
                        className={cx('type-input')}
                        value=""
                      />
                    </div>
                  </div>
                  <div className={cx('form-control')}>
                    <label for="telephone" className={cx('input-label')}>
                      Số điện thoại:
                    </label>
                    <div>
                      <input
                        type="text"
                        required=""
                        name="telephone"
                        placeholder="Nhập số điện thoại"
                        className={cx('type-input')}
                        value=""
                      />
                    </div>
                  </div>
                  <div className={cx('form-control')}>
                    <label for="region" className={cx('input-label')}>
                      Tỉnh/Thành phố
                    </label>
                    <select required="">
                      <option value="">Chọn Tỉnh/Thành phố</option>
                      <option value="294">Hồ Chí Minh</option>
                      <option value="297">Hà Nội</option>
                      <option value="291">Đà Nẵng</option>
                      <option value="278">An Giang</option>
                      <option value="280">Bà Rịa - Vũng Tàu</option>
                      <option value="282">Bắc Giang</option>
                      <option value="281">Bắc Kạn</option>
                      <option value="279">Bạc Liêu</option>
                      <option value="283">Bắc Ninh</option>
                      <option value="284">Bến Tre</option>
                      <option value="285">Bình Dương</option>
                      <option value="286">Bình Phước</option>
                      <option value="287">Bình Thuận</option>
                      <option value="316">Bình Định</option>
                      <option value="289">Cà Mau</option>
                      <option value="290">Cần Thơ</option>
                      <option value="288">Cao Bằng</option>
                      <option value="293">Gia Lai</option>
                      <option value="295">Hà Giang</option>
                      <option value="296">Hà Nam</option>
                      <option value="299">Hà Tĩnh</option>
                      <option value="300">Hải Dương</option>
                      <option value="301">Hải Phòng</option>
                      <option value="319">Hậu Giang</option>
                      <option value="302">Hoà Bình</option>
                      <option value="320">Hưng Yên</option>
                      <option value="321">Khánh Hòa</option>
                      <option value="322">Kiên Giang</option>
                      <option value="323">Kon Tum</option>
                      <option value="304">Lai Châu</option>
                      <option value="306">Lâm Đồng</option>
                      <option value="305">Lạng Sơn</option>
                      <option value="324">Lào Cai</option>
                      <option value="325">Long An</option>
                      <option value="326">Nam Định</option>
                      <option value="327">Nghệ An</option>
                      <option value="307">Ninh Bình</option>
                      <option value="328">Ninh Thuận</option>
                      <option value="329">Phú Thọ</option>
                      <option value="308">Phú Yên</option>
                      <option value="309">Quảng Bình</option>
                      <option value="310">Quảng Nam</option>
                      <option value="311">Quảng Ngãi</option>
                      <option value="330">Quảng Ninh</option>
                      <option value="312">Quảng Trị</option>
                      <option value="313">Sóc Trăng</option>
                      <option value="331">Sơn La</option>
                      <option value="332">Tây Ninh</option>
                      <option value="333">Thái Bình</option>
                      <option value="334">Thái Nguyên</option>
                      <option value="335">Thanh Hóa</option>
                      <option value="303">Thừa Thiên Huế</option>
                      <option value="336">Tiền Giang</option>
                      <option value="314">Trà Vinh</option>
                      <option value="315">Tuyên Quang</option>
                      <option value="337">Vĩnh Long</option>
                      <option value="338">Vĩnh Phúc</option>
                      <option value="339">Yên Bái</option>
                      <option value="292">Đắk Lắk</option>
                      <option value="340">Đắk Nông</option>
                      <option value="341">Điện Biên</option>
                      <option value="317">Đồng Nai</option>
                      <option value="318">Đồng Tháp</option>
                    </select>
                  </div>
                  <div className={cx('form-control')}>
                    <label for="district" className={cx('input-label')}>
                      Quận huyện:
                    </label>
                    <select required="">
                      <option value="">Chọn Quận/Huyện</option>
                      <option value="484">Quận 1</option>
                      <option value="486">Quận 3</option>
                      <option value="487">Quận 4</option>
                      <option value="488">Quận 5</option>
                      <option value="489">Quận 6</option>
                      <option value="490">Quận 7</option>
                      <option value="491">Quận 8</option>
                      <option value="493">Quận 10</option>
                      <option value="494">Quận 11</option>
                      <option value="495">Quận 12</option>
                      <option value="496">Quận Bình Tân</option>
                      <option value="497">Quận Bình Thạnh</option>
                      <option value="498">Quận Gò Vấp</option>
                      <option value="499">Quận Phú Nhuận</option>
                      <option value="500">Quận Tân Bình</option>
                      <option value="501">Quận Tân Phú</option>
                      <option value="502">Thành phố Thủ Đức</option>
                      <option value="503">Huyện Bình Chánh</option>
                      <option value="504">Huyện Cần Giờ</option>
                      <option value="505">Huyện Củ Chi</option>
                      <option value="506">Huyện Hóc Môn</option>
                      <option value="507">Huyện Nhà Bè</option>
                    </select>
                  </div>
                  <div className={cx('form-control')}>
                    <label for="ward" className={cx('input-label')}>
                      Phường xã:
                    </label>
                    <select required="">
                      <option value="">Chọn Phường/Xã</option>
                      <option value="10569">Phường 01</option>
                      <option value="10578">Phường 03</option>
                      <option value="10579">Phường 04</option>
                      <option value="10580">Phường 05</option>
                      <option value="10582">Phường 07</option>
                      <option value="10570">Phường 10</option>
                      <option value="10571">Phường 11</option>
                      <option value="10572">Phường 12</option>
                      <option value="10573">Phường 13</option>
                      <option value="10574">Phường 14</option>
                      <option value="10575">Phường 15</option>
                      <option value="10576">Phường 16</option>
                      <option value="10577">Phường 17</option>
                      <option value="10581">Phường 6</option>
                      <option value="10583">Phường 8</option>
                      <option value="10584">Phường 9</option>
                    </select>
                  </div>
                  <div className={cx('form-control')}>
                    <label for="address" className={cx('input-label')}>
                      Địa chỉ:
                    </label>
                    <div>
                      <textarea
                        required=""
                        name="street"
                        rows="5"
                        placeholder="Nhập địa chỉ"
                      ></textarea>
                    </div>
                  </div>
                  <div className={cx('form-control')}>
                    <label
                      for="deliveryAddressType"
                      className={cx('input-label')}
                    >
                      Loại địa chỉ:
                    </label>
                    <label className={cx('styled-radio')}>
                      <input type="radio" name="deliveryAddressType" value="" />
                      <span className={cx('label')}>Nhà riêng / Chung cư</span>
                    </label>
                    <label className={cx('styled-radio')}>
                      <input
                        type="radio"
                        name="deliveryAddressType"
                        value="company"
                      />
                      <span className={cx('label')}>Cơ quan / Công ty</span>
                    </label>
                  </div>
                  <div className={cx('form-control')}>
                    <label className={cx('input-label')}>&nbsp;</label>
                    <label class="styled-checkbox">
                      <input type="checkbox" />
                      <span className={cx('label')}>
                        Đặt làm địa chỉ mặc định
                      </span>
                    </label>
                  </div>
                  <div className={cx('form-control')}>
                    <label className={cx('input-label')}>&nbsp;</label>
                    <button type="submit" className={cx('btn-submit')}>
                      Cập nhật
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
