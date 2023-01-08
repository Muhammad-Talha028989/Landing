import React from "react";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <React.Fragment>
      {" "}
      <div id="main">
        <NavBar />
        <div className="name">
          <h1 className="">
            Lanuch Your App
            <span className="">With Confidence And Creativity</span>
          </h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magin,
            blanditiis!
          </p>
          <a href="#" className="cv-btn">
            Download
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
