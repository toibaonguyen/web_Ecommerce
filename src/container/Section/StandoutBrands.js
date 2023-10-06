import classNames from "classnames/bind";
import styles from "./Section.module.scss";
import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RatingStarsCourses from "@/components/SVGImg/RatingStarsCoures";

const cx = classNames.bind(styles);
function StandoutProducts() {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidestoscroll: 1,
  };
  const [state, showState] = useState(1);
  const handleChangeState = (value) => {
    showState(value);
  };
  let earphoneProducts = [
    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/5e/66/0b/cfaa686979e6d383b3723f248c48cec4.jpg",
      productName:
        " Tai Nghe Bluetooth True Wireless Anker Soundcore Life Note A3908 - Hàng Chính Hãng",
      productPrice: "₫379,000",
      productDelivery: "Giao thứ 2, 09/10",
    },
    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/4c/4a/a6/24362c978ff4b917e9c3249b071f7ff2.jpg",
      productName: " Apple AirPods Pro 2 - MQD83",
      productPrice: "₫279,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/d6/1d/4c/09e1e30f175441ae5637a9fb0d7ba91d.jpg",
      productName:
        "Tai Nghe Bluetooth ANKER Soundcore Life P2i A3991 - Hàng Chính Hãng",

      productPrice: "₫379,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/bf/a7/93/edbf6eed6dafffc3448f352c21e1204f.png",
      productName: "Tai nghe Bluetooth LG TONE FP5 - Hàng Chính Hãng",

      productPrice: "₫399,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/b5/13/fe/24bc74f069eabac01cc51582be6ca607.jpg",
      productName: " Apple AirPods 3 2022 sạc Lightning - MPNY3",

      productPrice: "₫399,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/39/ab/d4/18f0d29c57180844682690756b0f58cb.png",
      productName: " Apple AirPods 3 2022 sạc Lightning - MPNY3",

      productPrice: "₫379,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/15/87/28/b3fef14f1c639fe03c0c35443018ae2c.jpg",
      productName:
        "Tai nghe Bluetooth True Wireless Samsung Galaxy Buds 2 - Hàng",

      productPrice: "₫279,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e3/08/11/f82f1cc3c916b49e2fdd18696601c24f.png",
      productName: "Tai Nghe Bluetooth Cảm Ứng Thông Minh - Hàng Chính Hãng",

      productPrice: "₫379,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/75/b5/e0/12470c8d9716d1c75ce1e7157305b630.jpg",
      productName:
        " Tai Nghe Bluetooth True Wireless Không Dây - Gaming Mode 0 Trì Hoãn - Chế Độ 2 Máy Chủ Sử Dụng Độc Lập - Khử Ồn ENC TCT-A10 - Hàng Chính Hãng",

      productPrice: "₫399,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/15/c4/bc/68d6c5be54b889a6c221d6a34f4c964a.jpg",
      productName:
        "Tai Nghe Bluetooth True Wireless Không Dây TWS-CT03 Cảm Ứng - 2 Tai Nghe Độc Lập - Hộp Đèn Led Hiển Thị % Pin. Hàng Chính Hãng",

      productPrice: "₫329,000",
      productDelivery: "Giao thứ 2, 09/10",
    },
  ];

  let hardDriveProducts = [
    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/83/ba/35/2f3d4c86fb1e94e2b8f61af0a80f6bb8.jpg",
      productName:
        "(Giá Hủy Diệt) Ổ Cứng SSD Western Digital Green 2.5 inch SATA iii 240GB / 480GB / 1TB Model G3G0A mới nhất 2023 - Hàng Chính Hãng",
      productPrice: "₫850,000",
      productDelivery: "Giao thứ 2, 09/10",
    },
    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/39/b9/4e/7c04be84f3c25063c0ab98b1e6cb28c5.png",
      productName:
        "Ổ Cứ́ng SSD Samsung 970 EVO PLUS 1TB M2 2280 PCIe NVMe MZ- V7S1T0BW - Hàng Nhập Khẩu",
      productPrice: "₫1,450,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/6f/1a/66/d0730a62f6d7b3e17e5545069df939fd.png",
      productName: "Ổ Cứng SSD Samsung 980 Pro M2 PCIe 4.0 - Hàng Nhập Khẩu",
      productPrice: "₫1,950,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/99/b7/3c/928997deefbf6d5f1ae6e74994cbaff6.jpg",
      productName:
        "Ổ Cứng SSD WD Green Sata 6Gb/s ( 2.5 Inch , 7mm cased ) - Hàng Chính Hãng",

      productPrice: "₫428,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/9e/45/e1/91e89c3669dd76a6b073d6f69ec127df.png",
      productName:
        "(Giá Hủy Diệt) Ổ Cứng gắn trong SSD Samsung PM981A 256GB / 512GB / 1TB M2 2280 PCIe NVMe - Hàng Nhập Khẩu",

      productPrice: "₫650,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/c8/ea/03/f368ad660a921a7974fc081d1b438e63.jpg",
      productName:
        "Ổ cứng SSD 128GB Lexar NS100 2.5-Inch SATA III_Hàng chính hãng",

      productPrice: "₫380,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/02/42/2a/650e3133e88be297afb0a23c74b56855.jpg",
      productName: "Ổ cứng SSD Colorful 256GB SL500 SATA 3 - Hàng chính hãng ",

      productPrice: "₫379,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/8d/7b/6a/5b086a670901de0552b4e8d5e23e01ee.jpg",
      productName:
        "[MUA 1 TẶNG 1] Ổ cứng SSD Acer SA100 3D NAND tốc độ đến 561MB/s - Bảo hành 3 năm - Hàng Chính Hãng",

      productPrice: "₫379,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/fd/fc/46/552eb80b3cc5eea940d8625a2ad4bd31.png",
      productName:
        "Ổ Cứng SSD Crucial P3 Plus 500GB / 1TB / 2TB M2 PCIe 4.0 3D NAND - Hàng Nhập Khẩu",

      productPrice: "₫399,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/85/eb/a8/0b42e05ddd184ce2e65d8eea66765767.jpg",
      productName:
        "Ổ cứng SSD Acer SA100 SATA 3 3D NAND 120GB - 1920GB - Hàng chính hãng",

      productPrice: "₫329,000",
      productDelivery: "Giao thứ 2, 09/10",
    },
  ];

  let tabletProducts = [
    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/15/b7/63/7264698dd6dc77d3c5541577b785ee0c.jpg",
      productName:
        "Máy tính bảng Samsung Galaxy Tab A7 Lite LTE SM-T225) - ĐÃ KÍCH HOẠT ĐIỆN TỬ - Hàng Chính Hãng",
      productPrice: "₫2,850,000",
      productDelivery: "Giao thứ 2, 09/10",
    },
    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/de/a8/5e/4c086a0d9ca2d5354717fe8896c46200.jpg",
      productName:
        "Máy tính bảng Samsung Galaxy Tab A7 Lite LTE SM-T225 - Hàng Chính Hãng",
      productPrice: "₫4,450,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/40/75/32/30898fc9f44ff941df466ea8e1d6390b.jpg",
      productName:
        "Máy tính bảng Samsung Galaxy Tab A8 LTE (3GB/32GB) - Hàng Chính Hãng",
      productPrice: "₫2,950,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/15/d1/d6/a3daca94292c66209cb02b9e89833968.jpg",
      productName:
        "Máy tính bảng Samsung Galaxy Tab S7 FE WIFI (4GB/64GB) - Hàng chính hãng - Đã kích hoạt bảo hành điện tử",

      productPrice: "₫6,428,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/72/5b/56/4078325afd6d0c3371d50bdf91a121ae.jpg",
      productName:
        "Máy Tính Bảng Samsung Galaxy Tab A7 Lite T225 3GB/32GB - Hàng Chính Hãng",

      productPrice: "₫2,650,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/51/3f/2e/bc48f6742c8ea97dc553180986df4243.jpg ",
      productName:
        "Máy Tính Bảng Samsung Galaxy Tab S6 Lite (2022) (4GB/64GB) SM-P619 ĐÃ KÍCH HOẠT BẢO HÀNH ĐIỆN TỬ - Hàng Chính Hãng",

      productPrice: "₫6,380,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/7c/19/ce/270476d7154ece6b8b3b54950174b167.jpg",
      productName:
        "Máy Tính Bảng Samsung Galaxy Tab A7 Lite T225 3GB/32GB - Hàng Chính Hãng",

      productPrice: "₫2,379,000",
      productDelivery: "Giao thứ 2, 09/10",
    },

    {
      productImg:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a6/13/13/c89124695a3368e0a58eeb26cfe004da.jpg",
      productName:
        "Máy Tính Bảng Samsung Galaxy Tab A7 Lite LTE T225 (3GB/32GB) ĐÃ KÍCH HOẠT BẢO HÀNH ĐIỆN TỬ - Hàng Chính Hãng",

      productPrice: "₫2,379,000",
      productDelivery: "Giao thứ 2, 09/10",
    },
  ];

  return (
    <div className={cx("selling-product-content")}>
      <div className={cx("product-type")}>
        <div
          className={state === 1 ? cx("type-option active") : cx("type-option")}
          onClick={() => handleChangeState(1)}
        >
          Máy tính bảng
        </div>
        <div
          className={state === 2 ? cx("type-option active") : cx("type-option")}
          onClick={() => handleChangeState(2)}
        >
          Ổ cứng SSD
        </div>
        <div
          className={state === 3 ? cx("type-option active") : cx("type-option")}
          onClick={() => handleChangeState(3)}
        >
          Tai nghe True Wireless
        </div>
      </div>
      <div
        className={
          state === 1 ? cx("products-slider") : cx("products-slider disable")
        }
        onClick={() => handleChangeState(3)}
      >
        <Slider {...settings}>
          {tabletProducts.map((item, index) => {
            return (
              <div className={cx("product-item")} key={index}>
                <img src={item.productImg} className={cx("product-img")}></img>
                <div className={cx("product-des")}>
                  <div className={cx("genuine-tag")}></div>
                  <div className={cx("product-title")}>{item.productName}</div>
                  <div className={cx("product-rate")}>
                    <RatingStarsCourses />
                  </div>
                  <div className={cx("product-price")}>
                    <div className={cx("price")}>{item.productPrice}</div>
                  </div>
                </div>
                <div className={cx("product-delivery")}>
                  <span>{item.productDelivery}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div
        className={
          state === 2 ? cx("products-slider") : cx("products-slider disable")
        }
        onClick={() => handleChangeState(2)}
      >
        <Slider {...settings}>
          {hardDriveProducts.map((item, index) => {
            return (
              <div className={cx("product-item")} key={index}>
                <img src={item.productImg} className={cx("product-img")}></img>
                <div className={cx("product-des")}>
                  <div className={cx("genuine-tag")}></div>
                  <div className={cx("product-title")}>{item.productName}</div>
                  <div className={cx("product-rate")}>
                    <RatingStarsCourses />
                  </div>
                  <div className={cx("product-price")}>
                    <div className={cx("price")}>{item.productPrice}</div>
                  </div>
                </div>
                <div className={cx("product-delivery")}>
                  <span>{item.productDelivery}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div
        className={
          state === 3 ? cx("products-slider") : cx("products-slider disable")
        }
        onClick={() => handleChangeState(1)}
      >
        <Slider {...settings}>
          {earphoneProducts.map((item, index) => {
            return (
              <div className={cx("product-item")} key={index}>
                <img src={item.productImg} className={cx("product-img")}></img>
                <div className={cx("product-des")}>
                  <div className={cx("genuine-tag")}></div>
                  <div className={cx("product-title")}>{item.productName}</div>
                  <div className={cx("product-rate")}>
                    <RatingStarsCourses />
                  </div>
                  <div className={cx("product-price")}>
                    <div className={cx("price")}>{item.productPrice}</div>
                  </div>
                </div>
                <div className={cx("product-delivery")}>
                  <span>{item.productDelivery}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default StandoutProducts;
