import React from "react";

const FeatureBox = (props) => {
  return (
    <React.Fragment>
      <div className="a-box">
        <div className="a-b-img">
          <img src={props.image} alt="" className="" />
        </div>
        <div className="s-b-text">
          <h2 className="">{props.title}</h2>
          <p className="">
            Loren ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeatureBox;
