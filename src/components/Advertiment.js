import React from "react";
import "../index.scss";
import bg from "./iPhone-13-Pro-Max-silver-1000x1000 1.png";

const Advertiment = () => {
  return (
    <div className="box">
      <h2 className="box_h2">
        Аксессуары для <br />
        Iphone 13 Pro Max
      </h2>
      <img className="bg" src={bg} />
    </div>
  );
};

export default Advertiment;
