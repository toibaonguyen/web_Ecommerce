import React from "react";
import Header from "@/components/Headers/MainHeader";
import Footer from "@/components/Footers/MainFooter";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}
