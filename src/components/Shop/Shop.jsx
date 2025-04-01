import React, { useEffect, useState } from "react";
import './Shop.css';
import '../../index.css'

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error while fetching", error));
}, [])

  return (
    <>
      <main className="inter-400">
        <ul className="shop">
          {products.map(product => (
            <div className="shopCard" key={product.id}>
              <div>
                <img src={product.image} alt={product.title} />
              </div>
              <div className="shopCardDetailWrapper">
                <div>
                  <li>{product.title}</li>
                </div>
                <div>
                  <div>
                    <span>{product.price}$</span>
                  </div>
                  <div>
                    <input defaultValue={1} min={1} type="number" name={product.id} id={product.id} />
                  </div>
                </div>
              </div>
              <div className="shopCardButton">
                <button>Add to card</button>
              </div>
            </div>
          ))}
        </ul>
      </main>
    </>
  )
}