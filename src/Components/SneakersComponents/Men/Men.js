// Men.js
import React from "react";
import { Link } from 'react-router-dom';
import "../../Assets/styles/Men.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import data from "../../Assets/dummydata/dummydata";

const Men = () => {
  const filteredProducts = data.products.filter(product => ["i", "j", "k", "l"].includes(product.id));

  return (
    <div className="men-container">
      <div className="men-wrapper">
        <h1>For Mens</h1>

        <div className="grids-content">
          {filteredProducts.map(product => (
            <div className="grid-container" key={product.id}>
              <div className="grid-content-text">
                <h4>{product.brand}</h4>
                <h3>{product.title}</h3>
                <h4>${product.retailPrice.toFixed(2)}</h4>
                <div className="img-shoes-cotainer">
                  <img className="shoeimg" src={product.media.imageUrl} alt={product.title} />
                </div>
              </div>
              <div className="grid-item">
                <Link to={`/singlepage/${product.id}`} className="link-icon">
                  <ShoppingCartIcon className="cart-icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
