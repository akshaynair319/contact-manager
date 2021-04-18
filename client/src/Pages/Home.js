import React from "react";
import NavbarRS from "../Components/Navbar/NavbarRS";
import MainContent from "../Components/MainContent/MainContent";

import "./Home.css";
function Home() {
  return (
    <div className="homePage">
      <NavbarRS />
      <MainContent />
    </div>
  );
}

export default Home;
