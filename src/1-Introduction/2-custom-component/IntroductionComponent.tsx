import React from "react";
import SonComponent from "./introduction_components/SonComponent";
import Figlio1 from "./introduction_components/Figlio1";

const IntroductionComponent = () => {

  return (
    <div>

      <h1>REACT</h1>

      <Figlio1 />
      <h2>Ho ricevuto delle informazioni dal SonComponent </h2>

      <div>
        <SonComponent />
      </div>
    </div>
  );
};

export default IntroductionComponent;
