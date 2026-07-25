import React from "react";

import IntroductionComponent from "../../1-Introduction/2-custom-component/IntroductionComponent";
import Tsx from "../../1-Introduction/3-tsx-code/Tsx";


const ConditionalRendering = () => {
  const isLoggedIn = true;

  

  return (
    <div>{isLoggedIn ? <IntroductionComponent /> : <Tsx />}</div>
  );
};

export default ConditionalRendering;
