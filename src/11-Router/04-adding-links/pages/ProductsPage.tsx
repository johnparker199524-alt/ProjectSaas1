import React from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <React.Fragment>
      <h1 style={{ fontSize: "larger", color: "red", textAlign: "center" }}>
        Products
      </h1>
      <div>
        <h3
          style={{ color: "orange", fontSize: "larger", textAlign: "center" }}
        >
          Elenco di Strumenti Musicali:
        </h3>
        <ul
          style={{ color: "deeppink", fontSize: "larger", marginLeft: "42%" }}
        >
          <li>Pianoforte</li>
          <li>Chitarra Acustica</li>
          <li> Chitarra Classica</li>
          <li>Chitarra Elettrica</li>
        </ul>
   

 
        <p style={{marginTop:'30%',marginLeft:'40%'}}>Clicca su Contattaci se vuoi inviare un messaggio

        <Link style={{ color: "orange",marginLeft:'2%' }} to="/contacts">
          Contattaci
          </Link>
          </p>
           </div>
    </React.Fragment>
  );
};

export default ProductsPage;
