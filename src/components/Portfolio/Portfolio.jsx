import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import portfolioData from "../../portfolio";
import Popup from "../Popup/Popup";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    document.title = "Gideon - My Portfolio";
  }, []);
  function openPortfolio(item) {
    setSelectedItem(item);
  }

  function closePortfolio() {
    setSelectedItem(null);
  }

  return (
    <div>
      <div className="container">
        <div className="portfolios">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className="portfolio"
              onClick={() => openPortfolio(item)}
            >
              <img src={item.preview_image} />
              <div className="port_splitte">
                <p>{item.type}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedItem && (
          <Popup item={selectedItem} closePortfolio={closePortfolio} />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
