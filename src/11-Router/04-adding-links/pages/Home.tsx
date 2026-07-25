import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const titleHome = "Home Page";
  const description = "Benvenuti nel nuovo sito web di Strumenti Musicali";

  return (
    <>
      <div>
        <h2 style={{ color: "red", fontSize: "larger", textAlign: "center" }}>
          {titleHome}
        </h2>
        <p
          style={{
            background: "yellow",
            textAlign: "center",
            color: "red",
            marginLeft: "20%",
            marginRight: "20%",
          }}
        >
          {description}
        </p>
      </div>

      <p style={{ textAlign: "center", marginTop: "30%" }}>
        Per visualizzare i prodotti clicca su
        <Link style={{ color: "orange" }} to="/products">
          Strumenti Musicali
        </Link>
        .
      </p>
    </>
  );
};

export default HomePage;
