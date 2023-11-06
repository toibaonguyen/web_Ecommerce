import classNames from "classnames/bind";
import styles from "./Homepage.module.scss";
import React from "react";
import InterestedProducts from "@/container/Section/InterestedProducts";
import Banner from "@/container/Section/Banner";
import SellingProducts from "@/container/Section/SellingProducts";
import MayLikeProducts from "@/container/Section/MayLikeProducts";
import StandoutProducts from "@/container/Section/StandoutBrands";
import HomePageLayout from "@/components/Layouts/HomePageLayout.js";
import { useSelector, useDispatch } from "react-redux";
import { renderProducts } from "@/redux/slice/productReducer";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
export default function HomePage() {
  const dispatch = useDispatch();

  const mapStateToProps = useSelector((state) => {
    return {
      productsArr: state.product.productsArr,
    };
  });

  const componentDidMount = async () => {
    try {
      dispatch(renderProducts());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    componentDidMount();
    return () => componentDidMount();
  }, []);

  console.log(mapStateToProps.productsArr);

  return (
    <div className={cx("homepage-wrapper")}>
      <div className={cx("homepage-container")}>
        <div className={cx("homepage-content")}>
          <section className={cx("homepage-banner")}>
            <Banner />
          </section>
          <section className={cx("interested-product")}>
            <h3 className={cx("section-heading")}>Sản phẩm bạn quan tâm</h3>
            <InterestedProducts />
          </section>
          <section className={cx("selling-products")}>
            <h3 className={cx("section-heading")}>Sản phẩm bán chạy</h3>
            <SellingProducts />
          </section>
          <section className={cx("may-like-products")}>
            <h3 className={cx("section-heading")}>Bạn có thể thích</h3>
            <MayLikeProducts />
          </section>

          <section className={cx("standout-brands")}>
            <h3 className={cx("section-heading")}>Thương hiệu nổi bật</h3>
            <StandoutProducts />
          </section>
          <div className={cx("moreBtn")}>Xem Thêm</div>
        </div>
      </div>
    </div>
  );
}
HomePage.getLayout = (page) => <HomePageLayout>{page}</HomePageLayout>;
