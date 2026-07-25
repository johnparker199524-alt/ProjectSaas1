import React, { Fragment } from "react";


const HomePage = () => {
  const titleHome = "Home Page";

  const description = "Sito in stato di sviluppo";

  return (
    <Fragment>
      <div>
        <h2 style={{ color: "red", fontSize: "larger", textAlign: "center" }}>
          {titleHome}
        </h2>
        <p style={{ background: "yellow", textAlign: "center", color: "red",marginLeft:'30%',marginRight:'30%' }}>
          {description}
        </p>
      </div>
    </Fragment>
  );
};

export default HomePage;
