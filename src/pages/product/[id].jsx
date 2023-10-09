import React from "react";
import classNames from "classnames/bind";
import styles from "./product.module.scss";
import ProductLayout from "@/components/Layouts/ProductLayout";
import Link from "next/link";
import Widget from "@/components/product/Widget";
import ReviewImages from "@/components/product/ReviewImages";
const cx = classNames.bind(styles);

//cần chỉnh lại ở đây
export async function getServerSideProps() {
  const productdetaillist = [
    {
      productId: "idkwtd",
      productName:
        "Điện Thoại Samsung Galaxy Z Flip 4 - Hàng Chính Hãnggggggggggggggggggg",
      typeRoute: ["Điện Thoại - Máy Tính Bảng", "Điện thoại Smartphone"],
      productPrice: 2900000,
      salePrice: 2000000,
      images: [
        "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
        "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
        "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
        "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
      ],
      description:
        "Màu sắc: Black\nChất liệu: Vải canvas. Đế: Cao su\nKiểu dáng giày cổ cao đặc trưng với form ôm sát cổ chân\nDây thắt mảnh đơn giản\nLogo thương hiệu in nổi bật ở má ngoài\nHai khoen tròn nhỏ ở bên hông giúp chân thông thoáng\nPhối đường viền foxing đen nổi bật ở đế\nĐế cao su bền chắc, có độ bám và ma sát cao\nGam màu hiện đại, dễ dàng phối với nhiều trang phục và phụ kiện\nXuất xứ thương hiệu: Mỹ",
      details: [
        {
          "Thương hiệu": "Samsung",
          "Chip set": "Snapdragon 8+ Gen 1 8 nhân",
          "Chức năng khác ":
            "AI Camera Ban đêm (Night Mode); Chống rung quang học (OIS); Góc siêu rộng (Ultrawide); Zoom kỹ thuật số",
          "Tốc độ CPU": "1 nhân 3.18 GHz, 3 nhân 2.7 GHz & 4 nhân 2 GHz",
        },
      ],
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
          nameProduct: "Điện Thoại Samsung Galaxy Z Flip 4 - Hàng Chính Hãng",
          productImage:
            "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
          avrRating: 4.9,
          productPrice: 2900000,
          salePrice: 2000000,
        },
        {
          productId: "12asfasfasf",
          nameProduct: "Điện Thoại Samsung Galaxy Z Flip 7 - Hàng Chính Hãng",
          productImage:
            "https://product.hstatic.net/1000284478/product/0000_black_m9160c_1_da1c1e61bbf44183940afe225b3f5f75_large.jpg",
          avrRating: 3.0,
          productPrice: 5900000,
          salePrice: null,
        },
      ],
      Business: {
        name: "SamCenter",
        id: "lkaljalksfa",
        avatar:
          "https://www.looper.com/img/gallery/every-power-sasuke-has-on-naruto-explained/l-intro-1663193400.jpg",
      },
    },
  ];
  const repo = productdetaillist[0];

  return { props: { repo: repo } };
}

export default function ProductPage({ repo }) {
  return (
    // <div className={cx("product-wrapper")}>
    <div className={cx("container")}>
      <div className={cx("breadcrum")}>
        <Link href={"/"}>Trang chủ &gt;</Link>
        {repo.typeRoute.map((item) => (
          <Link href={"/" + item} color="#38383d">
            &nbsp;{item} &gt;
          </Link>
        ))}
        <p>&nbsp;{repo.productName} </p>
      </div>
      <div className={cx("info-container")}>
        <div className={cx("info-container-left-body")}>
          <div className={cx("product-info")}>
            <div className={cx("left-side")}>
              <div className={cx("review-images")}>
                <Widget>
                  <ReviewImages listImgSource={repo.images} />
                </Widget>
              </div>
            </div>
            <div className={cx("main-info")}>
              <Widget>
                <h1
                  style={{
                    margin: "0px",
                    color: "rgb(39, 39, 42)",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "150%",
                    wordBreak: "break-word",
                    whiteSpace: "break-spaces",
                  }}
                >
                  {repo.productName}
                </h1>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "150%",
                  }}
                >
                  {repo.productPrice}đ
                </h3>
              </Widget>
            </div>
          </div>
          <div className={cx("product-reviews")}>
            <Widget>reviews</Widget>
          </div>
        </div>
        <div className={cx("info-container-right-body")}>
          <div className={cx("right-container")}>
            <Widget>price</Widget>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductPage.getLayout = (page) => <ProductLayout>{page}</ProductLayout>;
