import React from "react";
import img_1 from "../images/img_1.jpg";
import img_2 from "../images/img_2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={img_1} alt="egg" className="h-full rounded-md mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Corned Egg</h2>
          <p className="mb-2">Subtle, delicious and nutritious</p>
          <span>$15</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={img_2} alt="egg" className="h-full rounded-md mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Smoothy half-boiled egg</h2>
          <p className="mb-2">Subtle, delicious and heavy-stuffed</p>
          <span>$11</span>
        </div>
      </div>
    </>
  );
};

export default Content;
