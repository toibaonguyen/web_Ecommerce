import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './accountdetail.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);
export default function accountDetail() {
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
                <Link href="#!">
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
            <div className={cx('styled-heading')}>Thông tin tài khoản</div>
            <div className={cx('styled-info-page')}>
              <div className={cx('info')}>
                <div className={cx('info-left')}>
                  <span className={cx('info-title')}>Thông tin cá nhân</span>
                  <div className={cx('styled-account-info')}>
                    <form>
                      <div className={cx('form-info')}>
                        <div className={cx('form-avatar')}>
                          <div className={cx('styled-avatar')}>
                            <div>
                              <div className={cx('avatar-view')}>
                                <img
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"
                                  alt="avatar"
                                  className={cx('default')}
                                />
                                <div className={cx('edit')}>
                                  <img
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
                                    className={cx('edit_img')}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={cx('form-name')}>
                          <div className={cx('form-control')}>
                            <label className={cx('input-label')}>
                              Họ &amp; Tên
                            </label>
                            <div>
                              <div className={cx('styled-input')}>
                                <input
                                  className={cx('input')}
                                  type="search"
                                  name="fullName"
                                  maxlength="128"
                                  placeholder="Thêm họ tên"
                                  // value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className={cx('form-control')}>
                            <label className={cx('input-label')}>
                              Nickname
                            </label>
                            <div>
                              <div className={cx('styled-input')}>
                                <input
                                  className={cx('input')}
                                  name="userName"
                                  maxlength="128"
                                  placeholder="Thêm nickname"
                                  type="search"
                                  // value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cx('form-control')}>
                        <label className={cx('input-label')}>Ngày sinh</label>
                        <div className={cx('styled-birthday-picker')}>
                          <select name="day">
                            <option value="0">Ngày</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                          </select>
                          <select name="month">
                            <option value="0">Tháng</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                          <select name="year">
                            <option value="0">Năm</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                            <option value="1920">1920</option>
                            <option value="1919">1919</option>
                            <option value="1918">1918</option>
                            <option value="1917">1917</option>
                            <option value="1916">1916</option>
                            <option value="1915">1915</option>
                            <option value="1914">1914</option>
                            <option value="1913">1913</option>
                            <option value="1912">1912</option>
                            <option value="1911">1911</option>
                            <option value="1910">1910</option>
                            <option value="1909">1909</option>
                            <option value="1908">1908</option>
                            <option value="1907">1907</option>
                            <option value="1906">1906</option>
                            <option value="1905">1905</option>
                            <option value="1904">1904</option>
                            <option value="1903">1903</option>
                            <option value="1902">1902</option>
                            <option value="1901">1901</option>
                            <option value="1900">1900</option>
                          </select>
                        </div>
                      </div>
                      <div className={cx('form-control')}>
                        <label className={cx('input-label')}>Giới tính</label>
                        <label className={cx('styled-radio')}>
                          <input type="radio" name="gender" value="male" />

                          <span className={cx('label')}>Nam</span>
                        </label>
                        <label className={cx('styled-radio')}>
                          <input type="radio" name="gender" value="female" />

                          <span className={cx('label')}>Nữ</span>
                        </label>
                        <label className={cx('styled-radio')}>
                          <input type="radio" name="gender" value="other" />

                          <span className={cx('label')}>Khác</span>
                        </label>
                      </div>
                      <div className={cx('form-control')}>
                        <label className={cx('input-label')}>Quốc tịch</label>
                        <div>
                          <div className={cx('styled-input')}>
                            <input
                              className={cx('input-with-icon-right')}
                              name="nationality"
                              maxlength="128"
                              placeholder="Chọn quốc tịch"
                              readonly=""
                              // value=""
                            />
                            <svg
                              className={cx('icon-right')}
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.30806 6.43306C3.55214 6.18898 3.94786 6.18898 4.19194 6.43306L10 12.2411L15.8081 6.43306C16.0521 6.18898 16.4479 6.18898 16.6919 6.43306C16.936 6.67714 16.936 7.07286 16.6919 7.31694L10.4419 13.5669C10.1979 13.811 9.80214 13.811 9.55806 13.5669L3.30806 7.31694C3.06398 7.07286 3.06398 6.67714 3.30806 6.43306Z"
                                fill="#808089"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={cx('form-control')}>
                        <label className={cx('input-label')}>&nbsp;</label>
                        <button type="submit" className={cx('btn-submit')}>
                          Lưu thay đổi
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className={cx('info-vertical')}></div>
                <div className={cx('info-right')}>
                  <span className={cx('info-title')}>
                    Số điện thoại và Email
                  </span>
                  <div className={cx('styled-list-item')}>
                    <div className={cx('list-item')}>
                      <div className={cx('info')}>
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                          className={cx('icon')}
                          alt=""
                        />
                        <div className={cx('detail')}>
                          <span>Số điện thoại</span>
                          <span>0929019827</span>
                        </div>
                      </div>
                      <div className={cx('status')}>
                        <span></span>
                        <button className={cx('button-active')}>
                          Cập nhật
                        </button>
                      </div>
                    </div>
                    <div className={cx('list-item')}>
                      <div className={cx('info')}>
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                          className={cx('icon')}
                          alt=""
                        />
                        <div className={cx('detail')}>
                          <span>Địa chỉ email</span>
                          <span>hoanghuy100202@gmail.com</span>
                        </div>
                      </div>
                      <div className={cx('status')}>
                        <span></span>
                        <button className={cx('button-active')}>
                          Cập nhật
                        </button>
                      </div>
                    </div>
                  </div>
                  <span className={cx('info-title')}>Bảo mật</span>
                  <div className={cx('styled-list-item')}>
                    <div className={cx('list-item')}>
                      <div className={cx('info')}>
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png"
                          className={cx('icon')}
                          alt=""
                        />
                        <span>Đổi mật khẩu</span>
                      </div>
                      <div className={cx('status')}>
                        <span></span>
                        <button className={cx('button-active')}>
                          Cập nhật
                        </button>
                      </div>
                    </div>
                    <div className={cx('list-item')}>
                      <div className={cx('info')}>
                        <img
                          src="https://salt.tikicdn.com/ts/upload/99/50/d7/cc0504daa05199e1fb99cd9a89e60fa5.jpg"
                          className={cx('icon')}
                          alt=""
                        />
                        <span>Thiết lập mã PIN</span>
                      </div>
                      <div className={cx('status')}>
                        <span></span>
                        <button className={cx('button-active')}>
                          Thiết lập
                        </button>
                      </div>
                    </div>
                  </div>
                  <span className={cx('info-title')}>Liên kết mạng xã hội</span>
                  <div className={cx('styled-list-item')}>
                    <div className={cx('list-item')}>
                      <div className={cx('info')}>
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png"
                          className={cx('icon')}
                        />
                        <span>Facebook</span>
                      </div>
                      <div className={cx('status')}>
                        <span></span>
                        <button className={cx('button-active')}>
                          Liên kết
                        </button>
                      </div>
                    </div>
                    <div className={cx('list-item')}>
                      <div className={cx('info')}>
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png"
                          className={cx('icon')}
                        />
                        <span>Google</span>
                      </div>
                      <div className={cx('status')}>
                        <span></span>
                        <button className={cx('button-active')}>
                          Liên kết
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
