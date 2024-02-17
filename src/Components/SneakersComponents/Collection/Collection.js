import React from 'react';
import '../../Assets/styles/Collection.scss';
import data from '../../Assets/dummydata/dummydata';
import { Link } from 'react-router-dom';

const Collection = () => {
  const { products } = data;

  return (
    <div className='collection-container'>
      <div className='collection-wrapper'>
        <h1 id='heading-top'>Our Collection</h1>
        <div className='collection-content'>
          <div className='left-part-collection'>
            <div className='left-part-text'>
              <h3>Black Friday <span id='span-collection'>Sales</span></h3>
              <h1>
                <span id='span-upto'>Up to</span> 55% off
              </h1>
              <Link to="/shopall" className='linki'>
                <button className='collection-button'>Shop now</button>
              </Link>
            </div>
            <div className='right-part-img'>
              <img src={products.find(product => product.id === 'e').media.imageUrl} alt='Nike shoes' />
            </div>
          </div>
          <div className='right-part-collection'>
            <div className='upper-right-part-collection'>
              <div className='upper-right-part-content'>
                <div className='upper-right-part-left-content'>
                  <h2>Puma shoes</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores explicabo quisquam tempora adipisci</p>
                  <Link to="/shopall" className='link-puma'>
                    <button className='puma-button'>Shop now</button>
                  </Link>
                </div>
                <div className='upper-right-part-right-content'>
                  <img src={products.find(product => product.id === 'f').media.imageUrl} alt='Puma shoes' />
                </div>
              </div>
            </div>
            <div className='lower-part-collection'>
              <div className='lower-part-leftpart'>
                <div className='lower-part-leftpart-content'>
                  <h2>Cat shoes</h2>
                  <img src={products.find(product => product.id === 'g').media.imageUrl} alt='Cat shoes' />
                  <Link to="/shopall" className='linki-first'>
                    <button id='buttoni'>Shop now</button>
                  </Link>
                </div>
              </div>
              <div className='lower-part-rightpart'>
                <div className='lower-part-rightpart-content'>
                  <h2>Brand Shoes</h2>
                  <img src={products.find(product => product.id === 'h').media.imageUrl} alt='Jordan shoes' />
                  <Link to="/shopall" className='linki-first'>
                    <button id='buttoni'>Shop now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
