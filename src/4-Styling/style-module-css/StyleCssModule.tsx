import React from "react";
import styled from "./StyleCssModule.module.css";

const StyleCssModule = () => {
  return (
    <div>
      <h2 className={styled.h2}>Welcome to Style Css Module</h2>
      <p className={styled.p}> I am a paragraph</p>
    </div>
  );
};

export default StyleCssModule;
