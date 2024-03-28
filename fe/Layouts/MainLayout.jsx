import React from "react";
import NavigationBar from "../Navigation/NavigationBar";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
