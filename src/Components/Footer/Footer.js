import React from "react";
import "../Assets/styles/Footer.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer-container bg-color">
      <div className="footer-wrapper">
        <Link to="/" className="logo-link">
          <h1>
            Sneak<span>Peak</span>
          </h1>
        </Link>

        <ul>
          <li>
            <br />
            <br />
        <p id="paragraf-footer" style={{ color: 'white' }}>
          Copyright &copy; 2024
        </p>
          </li>
        </ul>

        <ul>
          <Link
            to="https://www.facebook.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FacebookIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </Link>
          <Link
            to="https://www.instagram.com/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <InstagramIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </Link>

          <Link
            to="https://twitter.com/home"
            style={{ textDecoration: "none", color: "white" }}
          >
            <TwitterIcon sx={{ fontSize: "23px", padding: "0 5px" }} />
          </Link>
        </ul>
      </div>
      <div className="footer-searchbar">
        <hr id="first"/>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous"
        />
      </div>
    </div>
  );
};

export default Footer;
