import React from "react";
import classNames from "classnames/bind";
import styles from "./product.module.scss";
import ProductLayout from "@/components/Layouts/ProductLayout";
import Link from "next/link";
import Widget from "@/components/product/Widget";
import RatingStarsCourses from "@/components/SVGImg/RatingStarsCoures";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const cx = classNames.bind(styles);

//cần chỉnh lại ở đây
export async function getServerSideProps() {
  const productdetaillist = [
    {
      productId: "idkwtd",
      productName:
        "Điện Thoại Samsung Galaxy Z Flip 4 - Hàng Chính Hãnggggggggggggggggggg",
      sold: 100,
      typeRoute: ["Điện Thoại - Máy Tính Bảng", "Điện thoại Smartphone"],
      productPrice: 2900000,
      discount: 25,
      images: [
        "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
        "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
        "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
        "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
      ],
      description:
        "Màu sắc: Black\nChất liệu: Vải canvas. Đế: Cao su\nKiểu dáng giày cổ cao đặc trưng với form ôm sát cổ chân\nDây thắt mảnh đơn giản\nLogo thương hiệu in nổi bật ở má ngoài\nHai khoen tròn nhỏ ở bên hông giúp chân thông thoáng\nPhối đường viền foxing đen nổi bật ở đế\nĐế cao su bền chắc, có độ bám và ma sát cao\nGam màu hiện đại, dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Mỹ",
      details: {
        "Thương hiệu": "Samsung",
        "Chip set": "Snapdragon 8+ Gen 1 8 nhân",
        "Chức năng khác ":
          "AI Camera Ban đêm (Night Mode); Chống rung quang học (OIS); Góc siêu rộng (Ultrawide); Zoom kỹ thuật số",
        "Tốc độ CPU": "1 nhân 3.18 GHz, 3 nhân 2.7 GHz & 4 nhân 2 GHz",
      },

      status: "SELLING",
      avrRating: 2.5,
      reviews: [
        {
          customer: {
            name: "musashi miyamoto",
          },
          rating: 4,
          comment: "smartphone này xịn vc",
          reviewDate: "2023-10-01T04:18:57.584Z",
        },
        {
          customer: {
            name: "sasaki kojiro",
          },
          rating: 1,
          comment: "smartphone này lỏd vl",
          reviewDate: "2023-11-01T04:18:57.584Z",
        },
      ],
      createAt: "2020-10-01T04:18:57.584Z",
      options: {
        "Màu sắc": [
          "Hồng Champagne",
          "Tím Bora",
          "Xanh Lovebird",
          " Xám Graphite",
        ],
        "Dung lượng": ["8GB l 256GB", "8GB-128GB"],
      },
      similarProducts: [
        {
          productId: "asfasfas",
          productName: "Điện Thoại Samsung Galaxy Z Flip 4 - Hàng Chính Hãng",
          productImage:
            "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
          avrRating: 4.9,
          productPrice: 2900000,
          discount: 20,
        },
        {
          productId: "12asfasfasf",
          productName: "Điện Thoại Samsung Galaxy Z Flip 7 - Hàng Chính Hãng",
          productImage:
            "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
          avrRating: 3.0,
          productPrice: 5900000,
          discount: null,
        },
        {
          productId: "kmsdkgms",
          productName: "Điện Thoại Samsung Galaxy Z Flip 7 - Hàng Chính Hãng",
          productImage:
            "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
          avrRating: 3.0,
          productPrice: 5900000,
          discount: null,
        },
        {
          productId: "sdgawg",
          productName: "Điện Thoại Samsung Galaxy Z Flip 7 - Hàng Chính Hãng",
          productImage:
            "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
          avrRating: 3.0,
          productPrice: 5900000,
          discount: null,
        },
      ],
      Business: {
        name: "SamCenter",
        id: "lkaljalksfa",
        avatar:
          "https://vcdn.tikicdn.com/cache/w100/ts/seller/21/ce/5c/b52d0b8576680dc3666474ae31b091ec.jpg",
      },
    },
  ];
  const repo = productdetaillist[0];

  return { props: { repo: repo } };
}

export default function ProductPage({ repo }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidestoscroll: 1,
  };
  const optionsEntries = Object.entries(repo.options);
  const detailsEntries = Object.entries(repo.details);
  return (
    // <div className={cx("product-wrapper")}>
    <div className={cx("container")}>
      <div className={cx("breadcrum")}>
        <Link href={"/"}>
          <span>Trang chủ &nbsp;</span>
        </Link>
        <path> &gt;</path>
        {repo.typeRoute.map((item) => (
          <>
            <Link href={"/" + item} color="#38383d">
              <span>&nbsp;{item}&nbsp;</span>
            </Link>
            <path> &gt;</path>
          </>
        ))}
        <p>&nbsp;{repo.productName} </p>
      </div>
      <div className={cx("info-container")}>
        <div className={cx("info-container-left-body")}>
          <div className={cx("product-info")}>
            <div className={cx("left-side")}>
              <div className={cx("review-images")}>
                <Widget>
                  <Carousel>
                    {repo.images.map((item) => (
                      <div id={item.productId}>
                        <img src={item} />
                      </div>
                    ))}
                  </Carousel>
                </Widget>
              </div>
            </div>
            <div className={cx("main-info")}>
              <Widget>
                <div className={cx("brand-author")}></div>

                <h1 className={cx("titledstyled")}>{repo.productName}</h1>
                <div className={cx("ratingstyled")}>
                  <div>{repo.avrRating}</div>
                  <RatingStarsCourses />
                  <div>({repo.reviews.length})</div>
                  <div>| đã bán {repo.sold}</div>
                </div>
                <div className={cx("product-price")}>
                  <div className={cx("current-price")}>
                    {repo.productPrice}
                    <sup
                      style={{
                        color: "#27272a",
                        display: "inline",
                        fontSize: 18,
                        fontWeight: 600,
                        lineHeight: 0,
                      }}
                    >
                      đ
                    </sup>
                  </div>
                  {repo.discount && (
                    <div className={cx("discount-rate")}>-{repo.discount}%</div>
                  )}
                </div>
                {optionsEntries.map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <p>{key}</p>
                    <div
                      style={{
                        color: "#27272a",
                        display: "flex",
                        flexWrap: "wrap",
                        fonSize: "14px",
                        lineHeight: "21px",
                        gap: "8px 12px",
                      }}
                    >
                      {value.map((item) => (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 8,
                            color: "#242424",
                            borderWidth: 1.6,
                            borderStyle: "solid",
                            lineHeight: "21px",
                            fontSize: "14px",
                            fontWeight: 500,
                            padding: 10,
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Widget>
              <Widget>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  Sản phẩm tương tự
                </div>
              </Widget>
              <Widget>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  Thông tin người bán
                </div>
                <div
                  style={{
                    display: "grid",
                    fontSize: "14px",
                    gap: "16px",
                    lineHeight: "16.1px",
                    gridTemplateColumns: "40px 496px",
                    gridTemplateRows: "54.6px",
                  }}
                >
                  <a
                    style={{
                      color: "#0b74e5",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      lineHeight: "16.1px",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      style={{
                        color: "#0b74e5",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        borderRadius: "50%",
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        display: "block",
                      }}
                      src={repo.Business.avatar}
                    ></img>
                  </a>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#242424",
                        fontSize: "15px",
                        fontWeight: 500,
                        lineHeight: "24px",
                      }}
                    >
                      {repo.Business.name}
                    </span>
                  </div>
                </div>
              </Widget>
              <Widget>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  Thông tin chi tiết
                </div>
                <div>
                  {detailsEntries.map(([key, value]) => (
                    <Widget>
                      <div
                        style={{
                          alignItems: "center",
                          color: "#27272a",
                          display: "grid",
                          fontSize: "14px",
                          gap: "8px",
                          lineHeight: "21px",
                          padding: "8px 0px",
                          gridTemplateColumns: "300px 248px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            lineHeight: "21px",
                            color: "#808089",
                          }}
                        >
                          {key}
                        </span>
                        <span
                          style={{
                            fontSize: "14px",
                            lineHeight: "21px",
                            color: "#27272a",
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    </Widget>
                  ))}
                </div>
              </Widget>
              <Widget>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >Mô tả sản phẩm</div>
                <div>
                  {repo.description}
                </div>
              </Widget>
            </div>
          </div>
          <div className={cx("product-reviews")}>
            <Widget>reviews</Widget>
          </div>
        </div>
        <div className={cx("info-container-right-body")}>
          <div className={cx("right-container")}>
            <Widget>
              <div className={cx("buy-box-header")}></div>
              <div className={cx("add-to-cart")}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "21px",
                  }}
                >
                  Số lượng
                </p>
                <div className={cx("group-input")}>
                  <button
                    style={{
                      alignItems: "center",
                      backgroundColor: "#ececec",
                      borderRadius: "4px",
                      color: "#242424",
                      display: "flex",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      justifyContent: "center",
                      lineHeight: "16.1px",
                      padding: "1px 6px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "#242424",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        textAlign: "center",
                      }}
                    >
                      -
                    </div>
                  </button>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "4px",
                      color: "#242424",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      lineHeight: "16.1px",
                      margin: "0px 4px",
                      padding: "1px 2px",
                      textAlign: "center",
                    }}
                  >
                    1
                  </div>
                  <button
                    style={{
                      alignItems: "center",
                      backgroundColor: "#ececec",
                      borderRadius: "4px",
                      color: "#242424",
                      display: "flex",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      justifyContent: "center",
                      lineHeight: "16.1px",
                      padding: "1px 6px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "#242424",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        textAlign: "center",
                      }}
                    >
                      +
                    </div>
                  </button>
                </div>
                <div
                  style={{
                    color: "#27272a",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  Tạm tính
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "36px",
                  }}
                >
                  44.970.000₫
                </div>
                <button
                  style={{
                    alignItems: "center",
                    backgroundColor: "#ff424e",
                    borderRadius: "4px",
                    color: "#ffffff",
                    display: "flex",
                    fontFamily: "Inter",
                    fontWeight: "300",
                    gap: "8px",
                    justifyContent: "center",
                    lineHeight: "24px",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontWeight: 300,
                      lineHeight: "24px",
                      textAlign: "center",
                    }}
                  >
                    Mua ngay
                  </span>
                </button>
                <button
                  style={{
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    color: "#0a68ff",
                    display: "flex",
                    fontFamily: "Inter",
                    gap: "8px",
                    justifyContent: "center",
                    lineHeight: "24px",
                    padding: "8px",
                    textAlign: "center",
                    borderStyle: "solid",
                  }}
                >
                  Thêm vào giỏ
                </button>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductPage.getLayout = (page) => <ProductLayout>{page}</ProductLayout>;
