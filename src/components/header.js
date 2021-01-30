import React from "react";

const navList = [
  "home",
  "world",
  "politics",
  "magazine",
  "technology",
  "science",
  "health",
  "sports",
  "arts",
  "fashion",
  "food",
  "travel",
];

const Header = ({ category, setCategory }) => {
  return (
    <>
      <div className="main-heading-container">
        <h1 className="main-heading-text">THE PERTINENT TIMES</h1>
      </div>
      <div className="nav-container">
        <nav className="nav navbar">
          {navList.map((u, i) => (
            <a
              key={i}
              className={"nav-link nav-option"}
              href="#"
              onClick={() => setCategory(u)}
            >
              {u}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
