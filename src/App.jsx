import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutImage from "./assets/images/about.png";
import aboutImage1 from "./assets/images/download.png";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Feature />
      <About
        image={aboutImage}
        title={"Comes With All You Need For Daily Life"}
        button={"Get The App"}
      />
    </React.Fragment>
  );
}

export default App;

