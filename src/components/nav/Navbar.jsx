import React from "react";
import("./nav.css")

const imgPufi = require.context('../../assets/imge',true)
export default function Navbar() {

  return (
    <div className="container">
      <div className="start" />
      <div className="middel">
        <div className="cnt_pufi">
          <img src={imgPufi(`./puff.png`)} width="50px" alt="pufi" />
          <h4>PUFI PUFF</h4>
        </div>

        <div className="cnt_rain">
          <img src={imgPufi(`./rain.png`)} width="40px" alt="rain" />
          <h4>PUFI RAIN</h4>
        </div>

        <div className="cnt_cart">
          <img src={imgPufi(`./cart.png`)} width="40px" className="pufi" alt="cart" />
          <h4>PUFI CART</h4>
        </div>

        <div className="cnt_pufi">
          <img src={imgPufi(`./napLogo.png`)} width="35px" alt="nap" />
          <h4>PUFI NAP</h4>
        </div>
      </div>
      <div className="end">
        <button>Mi CUENTA </button>
        <button>MI COMPRA</button>
      </div>
    </div>
  );
}
