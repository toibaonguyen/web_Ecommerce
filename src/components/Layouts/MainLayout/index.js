"use client";
import React from "react";
import Header from "@/components/Headers/MainHeader";
import Footer from "@/components/Footers/MainFooter";
import classNames from "classnames/bind";
import styles from "./MainLayout.module.css";
import Container from "react-bootstrap/Container";
const cx = classNames.bind(styles);

export default function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Container>
        <div className={cx("container")}>
          <div className={cx("layout-content")}>{children}</div>
          <Footer />
        </div>
      </Container>
    </div>
  );
}
