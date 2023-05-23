import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import LoginModal from "./LoginModal";
import logo from "../assets/bookwiseLogo.png";
import './Header.css';


const Header = () => {
  const [randomQuote, setRandomQuote] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch random quote from an API or use a sample quote
    fetch("https://api-ninjas.com/api/quotes")
      .then(response => response.json())
      .then(data => {
        setRandomQuote(data.quote);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="random-quote">
        <p>{randomQuote}</p>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/bookshelf">Bookshelf</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <button onClick={openModal}>Login</button>
          </li> */}
        </ul>
      </nav>
      {/* {isModalOpen && <LoginModal onClose={closeModal} />} */}
    </header>
  );
};

export default Header;
