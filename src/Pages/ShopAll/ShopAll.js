import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Components/Assets/styles/ShopAll.scss';
import data from '../../Components/Assets/dummydata/dummydata';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const ShopAll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://example-data.draftbit.com/sneakers?_limit=10';

    axios.get(apiUrl)
      .then((response) => {
        const combinedProducts = [...data.products, ...response.data];
        setProducts(combinedProducts.slice(0, 15));
        setFilteredProducts(combinedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
      const filtered = products.filter((product) =>
          typeof product.title === 'string' && product.title.toLowerCase().includes(searchInput && typeof searchInput === 'string' ? searchInput.toLowerCase() : '')
      );



      setFilteredProducts(filtered);
  }, [searchInput, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="footer-searchbar">
        <hr id="first" />
        <button className="back-button" onClick={() => window.location.href = '/'}>Back to Home</button>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />

        <form action="">
          <input
            type="search"
            required
            placeholder="Search here"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <i className="fa fa-search"></i>
        </form>
      </div>

      <div className="product-container">
        {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
                <div className="product-overlay"></div>
                <img src={product.media && product.media.imageUrl ? product.media.imageUrl : 'fallback-image-url'}
                     alt={product.title} className="product-image"/>
                <div className="product-details">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-gender">{product.gender}</p>
                    <p className="product-retailPrice">Price: ${product.retailPrice}</p>
                    <Link to={`/singlepage/${product.id}`}>
                        <button className="buy-button">Buy Now</button>
                    </Link>
                </div>
            </div>
        ))}
      </div>
        <div className='simple-navbar'>
            <hr id="first"/>
            <p id="paragraf-footer">
                Copyright &copy; 2024
        </p>
      </div>
    </>
  );
};

export default ShopAll;
