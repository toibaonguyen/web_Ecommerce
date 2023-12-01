import React from 'react';
import styles from './allproductsellerpage.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function AllProDuctSellerPage() {
  return (
    <>
      <div className={cx('main-container')}>
        <div className={cx('header-wrapper')}>
          <div id="seller-info-wrapper" className={cx('header-seller')}>
            <div className={cx('header-logo')}>
              <img
                src="https://salt.tikicdn.com/cache/w220/ts/seller/21/ce/5c/b52d0b8576680dc3666474ae31b091ec.jpg"
                alt="Tiki Trading "
                width="100%"
              />
            </div>
            <div className={cx('seller-name-wrapper')}>
              <h1 className={cx('seller-name')}>Tiki Trading</h1>
              <div className={cx('info-row')}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                  alt="store-badge-img"
                  className={cx('image-badge')}
                />
              </div>
              <div className={cx('badge-wrapper')}>
                <div className={cx('header-badge-wrapper')}>
                  <div className={cx('wrapper-follow')}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.37301 2.73241L9.92801 5.88241L13.405 6.38841C13.4818 6.39949 13.554 6.43184 13.6133 6.48182C13.6727 6.5318 13.7169 6.5974 13.7409 6.6712C13.7648 6.74499 13.7677 6.82403 13.7491 6.89935C13.7305 6.97468 13.6911 7.04329 13.6355 7.09741L11.119 9.54741L11.713 13.0104C11.7261 13.0869 11.7176 13.1655 11.6883 13.2374C11.6591 13.3093 11.6103 13.3716 11.5475 13.4172C11.4847 13.4628 11.4104 13.4899 11.333 13.4956C11.2556 13.5012 11.1782 13.485 11.1095 13.4489L8.00001 11.8164L4.89001 13.4504C4.82125 13.4863 4.74383 13.5024 4.66645 13.4966C4.58908 13.4909 4.51484 13.4637 4.45211 13.4181C4.38937 13.3725 4.34062 13.3102 4.31136 13.2383C4.28211 13.1665 4.2735 13.0879 4.28651 13.0114L4.88051 9.55041L2.36401 7.10041C2.30841 7.04629 2.26907 6.97768 2.25045 6.90235C2.23183 6.82702 2.23468 6.74799 2.25867 6.6742C2.28266 6.6004 2.32684 6.5348 2.38619 6.48482C2.44555 6.43484 2.51771 6.40249 2.59451 6.39141L6.07151 5.88291L7.62651 2.73291C7.66091 2.66332 7.71407 2.60474 7.77999 2.56375C7.84592 2.52277 7.92198 2.50103 7.99961 2.50098C8.07723 2.50092 8.15333 2.52257 8.2193 2.56346C8.28528 2.60435 8.33852 2.66287 8.37301 2.73241Z"
                        fill="#FFC400"
                      ></path>
                    </svg>
                  </div>
                  <div className={cx('header-sub-info')}>4.7 / 5</div>
                </div>
                <div className={cx('header-line-row')}></div>
                <div className={cx('header-badge-wrapper')}>
                  <div className={cx('wrapper-follow')}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 8C5.1195 8 4 6.3805 4 5V4.5C4 3.1195 5.1195 2 6.5 2C7.8805 2 9 3.1195 9 4.5V5C9 6.3805 7.8805 8 6.5 8Z"
                        fill="white"
                        fill-opacity="0.7"
                      ></path>
                      <path
                        d="M8.765 12.4065C8.2715 11.919 8 11.27 8 10.5775C8 10.075 8.147 9.597 8.4145 9.1855C7.8345 9.076 7.1865 9 6.5 9C5.088 9 3.8355 9.319 3.013 9.5965C2.405 9.802 2 10.3745 2 11.016V13H9.3655L8.765 12.4065Z"
                        fill="white"
                        fill-opacity="0.7"
                      ></path>
                      <path
                        d="M13.5315 9.46C13.1925 9.125 12.726 8.961 12.2485 9.008C11.9755 9.0355 11.7185 9.131 11.4995 9.2825C11.2805 9.131 11.024 9.0355 10.7505 9.008C10.274 8.962 9.8065 9.125 9.4675 9.46C9.1665 9.758 9 10.155 9 10.5775C9 11 9.1665 11.397 9.468 11.695L11.5 13.703L13.532 11.6955C13.8335 11.397 14 11 14 10.5775C14 10.155 13.8335 9.758 13.5315 9.46Z"
                        fill="white"
                        fill-opacity="0.7"
                      ></path>
                    </svg>
                  </div>
                  <div className={cx('header-sub-info')}>
                    Người theo dõi: 494.1k+
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('header-store-action-section')}></div>
          </div>
          <div className={cx('header-menu-wrapper')}>
            <div className={cx('wrapper-tab-menu')}>
              <div className={cx('wrapper-option')}>
                <div className={cx('text-option')}>Cửa Hàng</div>
              </div>
              <div className={cx('wrapper-option')}>
                <div className={cx('text-option')}>Tất Cả Sản Phẩm</div>
              </div>
              <div className={cx('wrapper-option')}>
                <div className={cx('text-option')}>Hồ Sơ Cửa Hàng</div>
              </div>
            </div>
            <div className={cx('search-input-wrapper')}>
              <div className={cx('search-icon-wrapper')}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2611 13.1449C11.2988 13.9147 10.0781 14.375 8.75 14.375C5.6434 14.375 3.125 11.8566 3.125 8.75C3.125 5.6434 5.6434 3.125 8.75 3.125C11.8566 3.125 14.375 5.6434 14.375 8.75C14.375 10.0781 13.9147 11.2988 13.1449 12.2611L16.6919 15.8081C16.936 16.0521 16.936 16.4479 16.6919 16.6919C16.4479 16.936 16.0521 16.936 15.8081 16.6919L12.2611 13.1449ZM4.375 8.75C4.375 6.33375 6.33375 4.375 8.75 4.375C11.1662 4.375 13.125 6.33375 13.125 8.75C13.125 9.94774 12.6437 11.0331 11.8639 11.8231C11.8569 11.8296 11.8499 11.8362 11.8431 11.8431C11.8362 11.8499 11.8296 11.8569 11.8231 11.8639C11.0331 12.6437 9.94774 13.125 8.75 13.125C6.33375 13.125 4.375 11.1662 4.375 8.75Z"
                    fill="#38383D"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Tìm sản phẩm tại cửa hàng"
                className={cx('search-input')}
                value=""
              />
            </div>
          </div>
          <div className={cx('overlay-background')}></div>
        </div>
        <div className={cx('producttab-row')}>
          <div className={cx('sidebar-root')}>
            <div className={cx('block')}>
              <h4 className={cx('h4-title')}>Danh mục sản phẩm</h4>
              <div className={cx('list-collapsed')}>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Làm Đẹp - Sức Khỏe</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Điện Gia Dụng</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Điện Thoại - Máy Tính Bảng</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Máy Ảnh - Máy Quay Phim</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Thiết Bị Số - Phụ Kiện Số</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Laptop - Máy Vi Tính - Linh kiện</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Cross Border - Hàng Quốc Tế</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Đồ Chơi - Mẹ &amp; Bé</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Điện Tử - Điện Lạnh</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Nhà Sách Tiki</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Giày - Dép nam</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Bách Hóa Online</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Thể Thao - Dã Ngoại</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Nhà Cửa - Đời Sống</a>
                </div>
                <div className={cx('item-row')}>
                  <a className={cx('item')}>Voucher - Dịch vụ</a>
                </div>
              </div>
              <a href="javascript:" className={cx('toggler')}>
                Xem Thêm
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={cx('all-product-container')}>
            <div className={cx('product-row-wrapper')}>
              <div className={cx('widget-title')}>
                <h2>
                  <div className={cx('title-wrapper')}>
                    <span>Tất cả sản phẩm:</span>
                    <span className={cx('count-text')}> 10000+ kết quả</span>
                  </div>
                </h2>
              </div>
              <div className={cx('product-filter-and-sort-bar-wrapper')}>
                <div className={cx('product-filter-and-sort-bar-sort-section')}>
                  <a value="" className={cx('sort-item')}>
                    Phổ biến
                  </a>
                  <a value="order_desc" className={cx('sort-item')}>
                    Bán chạy
                  </a>
                  <a value="newest" className={cx('sort-item')}>
                    Hàng mới
                  </a>
                  <a value="price_asc" className={cx('sort-item')}>
                    Giá thấp đến cao
                  </a>
                  <a value="price_desc" className={cx('sort-item')}>
                    Giá cao đến thấp
                  </a>
                </div>
                <div
                  className={cx('product-filter-and-sort-bar-divider')}
                ></div>
              </div>
              <div type="flex" className={cx('product-row-container')}>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="/san-pham-so/the-cao-game?spid=192048498"
                  className={cx('styled-wrapper')}
                >
                  <div className={cx('product-container')}>
                    <div className={cx('product-thumbnail')}>
                      <picture className={cx('image-container')}>
                        <source
                          type="image/webp"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png.webp 2x
                    "
                        />
                        <img
                          src="https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png"
                          className={cx('styled-image')}
                          alt="Mã thẻ game Garena 100K"
                          srcset="
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 1x,
                      https://salt.tikicdn.com/cache/w300/ts/product/9c/f1/8c/85744097b3d2e2c9fec78c9f20f4a444.png 2x
                    "
                        />
                      </picture>
                      <div className={cx('product-badge-ship')}>
                        <img
                          src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                          alt="badge icon"
                        />
                      </div>
                    </div>
                    <div className={cx('product-info')}>
                      <div className={cx('product-name')}>
                        <h3>Mã thẻ game Garena 100K</h3>
                      </div>
                      <div className={cx('product-container-rating')}>
                        <div className={cx('product-container-text-rating')}>
                          4.8
                        </div>
                        <img
                          src="https://salt.tikicdn.com/ts/tmp/76/32/ae/3b087e1ae6fa94a7cade963cc2e1311c.png"
                          alt=""
                          className={cx('wrapper-follow')}
                        />
                        <div className={cx('line-wrap')}></div>
                        <span className={cx('percent')}>Đã bán 5k+</span>
                      </div>
                      <div className={cx('product-price-discount')}>
                        <div className={cx('price-discount-value')}>
                          <span>97.000</span>
                        </div>
                        <div className={cx('discount-currency')}>₫</div>
                        <div className={cx('price-discount-percent')}>-3%</div>
                      </div>

                      <div className={cx('product-benefit-wrapper')}></div>
                      <div className={cx('badge-wrapper')}>
                        <div className={cx('line-badge-row')}></div>
                        <div className={cx('badge-wrapper-text')}>
                          <div className={cx('ship-text')}>
                            Thanh toán qua thẻ &amp; ví
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className={cx('footer-view')}>
                <button className={cx('view-more-button')}>Xem Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AllProDuctSellerPage;
