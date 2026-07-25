import React from "react";
const Product:React.FC<{brand:string,prodotto:string,color:string}>=(props)=> {
  return <ul>
    <li>{props.brand}</li>
    <br />
    <li>{props.prodotto}</li>
         <br />
     <li>{props.color}</li>

  </ul>
  
  
 
  }

export default function Key() {
  const products = [{ id: 1, brand: 'Samsung', prodotto: "Smartphone", color: "Nero" },
    { id: 2, brand: 'Apple', prodotto:"Smartphone", color:"Bianco"},
  ]

  //
  return (
    <div>

      <h1>My Products</h1>
      <ul>
        {products.map((product) => <Product key={product.id} brand={product.brand} prodotto={product.prodotto} 
        color={product.color}
        
        />)}
      </ul>
      
    </div>
  );
}
