import React from "react";
import FeatureBox from "./FeatureBox";
import featureImage from "../assets/images/feature_1.png";
import featureImage1 from "../assets/images/feature_2.png";
import featureImage2 from "../assets/images/feature_3.png";

const Feature = () => {
  return (
    <React.Fragment>
      <div id="features">
        <div className="a-container">
          <FeatureBox image={featureImage} title="Development Course" />
          <FeatureBox image={featureImage1} title="Money Saving Services" />
          <FeatureBox image={featureImage2} title="Usability Interface" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Feature;
