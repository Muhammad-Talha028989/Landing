import React from "react";

const About = (props) => {
  return (
    <React.Fragment>
      <div id="about">
        <div className="about-image">
          <img src={props.image} alt="" className="" />
        </div>
        <div className="about-text">
          <h2 className="">{props.title}</h2>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit deleniti recusandae quia. Hic rerum animi, voluptas possimus
            reiciendis accusamus nostrum asperiores impedit porro illo sapiente
            praesentium non ut, maxime, adipisci in commodi est molestiae.
          </p>
          <button className="">{props.button}</button>
        </div>
      </div>
      <div id="contact">
        <h3>Send Me Mall</h3>
        <div className="contact-input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
          <a href="#">Contact</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
