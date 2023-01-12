import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  const [currentPath] = useState(window.location.pathname);
  console.log(currentPath);
  return (
    <div 
      style={{
        height: "100vh !important",
        width: "100vw !important",
        background:
          currentPath == "/"
            ? `url("/assets/home/background-home-desktop.jpg")`
            : currentPath == "/destination"
            ? `url("/assets/destination/background-destination-desktop.jpg")`
            : currentPath == "/crew"
            ? `url("/assets/crew/background-crew-desktop.jpg")`
            : `url("/assets/technology/background-technology-desktop.jpg")`,
            backgroundSize: "cover !important"
      }}
    >
      <Nav />
      {children} <Footer />
    </div>
  );
};

export default Layout;
