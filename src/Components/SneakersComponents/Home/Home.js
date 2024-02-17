import React, { useState, useEffect } from "react";
import "../../Assets/styles/Home.scss";
import HomeImg from "../../Assets/firstImg.png";
import data from "../../Assets/dummydata/dummydata";

const Home = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [imageTransitionComplete, setImageTransitionComplete] = useState(false);
  const [showOrangeCircle, setShowOrangeCircle] = useState(false);

  const productsToDisplay = data.products.slice(0, 4);

  const handleButtonClick = (productId) => {
    setActiveButton(productId);
    setImageTransitionComplete(false);
    setShowOrangeCircle(false);
  };

  const toggleOrangeCircle = () => {
    setShowOrangeCircle(!showOrangeCircle);
  };

  const getActiveProductImage = () => {
    if (activeButton && !showOrangeCircle) {
      const activeProduct = productsToDisplay.find(
        (product) => product.id === activeButton
      );
      if (activeProduct) {
        return activeProduct.media.imageUrl;
      }
    }
    return HomeImg;
  };

  useEffect(() => {
    const transitionDelay = 300;

    const timer = setTimeout(() => {
      setImageTransitionComplete(true);
    }, transitionDelay);

    return () => clearTimeout(timer);
  }, [activeButton]);

  return (
    <div className="Home-container">
      <div className="Home-wrapper">
        <div className="Home-text">
          <h3>SneakPeak</h3>
          <br/>
          <h1>
            The ultimate <span id="orange">Sneak</span> shoe paradise
          </h1>
          <br/>
          <p>
            Feel free to adapt these suggestions to set your specific context
            and branding
          </p>
          <a href="/shopall" className="button-link">
            <button className="Home-button">Buy Now</button>
          </a>
          <div className="circle-buttons">
            <p>Colors: </p>
            <button
              className={`red ${activeButton === "a" ? "active" : ""}`}
              onClick={() => handleButtonClick("a")}
            ></button>
            <button
              className={`yellow ${activeButton === "b" ? "active" : ""}`}
              onClick={() => handleButtonClick("b")}
            ></button>
            <button
              className={`blue ${activeButton === "c" ? "active" : ""}`}
              onClick={() => handleButtonClick("c")}
            ></button>
            <button
              className={`grey ${activeButton === "d" ? "active" : ""}`}
              onClick={() => handleButtonClick("d")}
            ></button>
            <button
              className={`orange ${showOrangeCircle ? "active" : ""}`}
              onClick={toggleOrangeCircle}
            ></button>
          </div>
        </div>
        <div className="Home-middle-img">
          <img
            className="middle-img"
            src={getActiveProductImage()}
            alt="Orange Sneakers"
            style={
              imageTransitionComplete
                ? {}
                : { transform: "rotate(-30deg)" }
            }
          />
        </div>
        <div className="Home-images-right">
          {productsToDisplay.map((product, index) => (
            <div className="home-img-right" key={product.id}>
              <img
                id="img-colon"
                src={product.media.imageUrl}
                alt={`product-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
