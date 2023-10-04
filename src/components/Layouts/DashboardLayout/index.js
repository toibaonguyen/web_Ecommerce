import React from "react";
import Header from "@/components/Headers/MainHeader";
import Footer from "@/components/Footers/MainFooter";

export default function DashboadLayout({ children }) {
  return (
    <>
      <Footer />
      <main>{children}</main>
      <Header />
    </>
  );
}
