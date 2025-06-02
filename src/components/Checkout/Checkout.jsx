import React from "react";
import PropTypes from "prop-types";
import './Checkout.css';
import '../../index.css'

export default function Checkout({ cart, setCart }) {

  const handleChange = (id, value) => {
    const quantity = Math.max(1, Number(value));
    setCart(prevCart => prevCart.map(product => product.id === id ? {...product, quantity} : product))
  }

  return (
    <>
      <div className="inter-400 checkout">
        {cart.map(product => (
          <div className="checkoutCard" key={product.id}>
            <div>
              <img src={product.image}></img>
            </div>
            <div>
              <p>{product.title}</p>
              {product.price}$ x {" "}
              <input type="number" min={1} onChange={e => handleChange(product.id, e.target.value)} value={product.quantity}></input> - {product.price * product.quantity}$
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};