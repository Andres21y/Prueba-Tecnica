import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import Nav from "../components/nav/Navbar";
import Paginated from "../components/paginated/Paginated";
import { Footer } from "../components/footer/Footer";
import "./home.css";

import napx from "../imge/nap.jpg"
import umbrella from "../imge/umbrella.png"
import ppufi from "../imge/ppufi.jpg"
import puficart from "../imge/pufiCart.jpg"
import pufifooter from "../imge/pufifooter.png"
import qr from "../imge/QR.png"
import purchase from "../imge/purchase.png"
import face from "../imge/face.png"
import instagram from "../imge/instagram.png"
import twiter from "../imge/twiter.png"
import brand from "../imge/brand.png"
import arrow from "../imge/arrow.png"



import cart from "../imge/cart.png"
import nap from "../imge/napLogo.png"
import puff from "../imge/puff.png"
import rain from "../imge/rain.png"

import sleep from "../imge/sleep.jpg"
import puffi from "../imge/pufiNap2.jpg"
import pufi2 from "../imge/pufiPuff2.jpg"
import happy from "../imge/happy.jpg"
import collage from "../imge/puffCollage.jpeg"


export default function Home() {
  // const dispatch = useDispatch()
  const [name, setName] = useState('');
  console.log(name);
  const [error, setError] = useState({});

  const handleState = (e) => {
    const ExReg = /^w+([.-]?w+)*@w+([.-]?\w+)*(\.\w{2,3,4})+$/

    if (ExReg.test(e.target.value)) {
      e.preventDefault();
      setName(e.target.value)
    } else {
      setError(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    console.log(e);
    // dispatch()
    setName('')
  }



  return (
    <div>
      <div className="main">
        <Nav cart={cart} nap={nap} puff={puff} rain={rain} />
        <p>
          ESTÁR CÓMODO,
          <br /> NUNCA FUE TAN FÁCIL.
        </p>

        <button>SHOP</button>

        <Paginated />
      </div>
      <div className="container_page">
        {/**======================== */}
        <div className="pufi_rain">
          <div className="shop">
            <button>SHOP</button>
          </div>
          <div className="rain">
            <div className="container_rain">
              <img src={umbrella} width="200px" alt="umbrella" />
              <div>
                <h3>Pufi RAIN</h3>
              </div>
              <span>____</span>
              <p>Descipción del producto. Este es <br /> un texto simulado</p>
            </div>
            <h5>VER MAS</h5>
          </div>
        </div>
        {/**======================== */}
        <div className="pufi_puff">
          <div className="puff">
            <div className="container_puff">
              <img src={ppufi} width="100px" alt="cojin" />
              <h3>Pufi PUFF</h3>
              <span>____</span>
            </div>
            <p>Descipción del producto. Este es <br /> un texto simulado</p>
            <br /><br />
            <h5>VER MAS</h5>
          </div>
          <div className="pic_puff" />
        </div>
        {/**======================== */}
        <div className="pufi_cart">
          <div className="image_cart" />
          <div className="cart">
            <div className="container_cart">
              <img src={puficart} width="100px" alt="umbrella" />
              <div>
                <h3>Pufi CART</h3>
              </div>
              <span>____</span>
              <p>Descipción del producto. Este es <br /> un texto simulado</p>
              <h5>VER MAS</h5>
            </div>
          </div>
        </div>
        {/**======================== */}
        <div className="pufi_nap">
          <div className="nap">
            <div className="container_nap">
              <img src={napx} width="100px" alt="cojin" />
              <h3>Pufi NAP</h3>
              <span>____</span>
            </div>
            <p>Descipción del producto. Este es <br /> un texto simulado</p>
            <br /><br />
            <h5>VER MAS</h5>
          </div>
          <div className="pic_nap" />
        </div>
      </div>
      {/**======================== */}
      <div className="container_espufi">
        <div className="spufi">
          <p>INSTAGRAM</p>
          <span>#ESPUFI</span>
        </div>
        <div className="imgcollage">
          <img src={sleep} width="160px" height="100px" alt="sleep" />
          <img src={puffi} width="160px" height="100px" alt="puffi" />
          <img src={happy} width="160px" height="100px" alt="happy" />
          <img src={collage} width="160px" height="100px" alt="collage" />
          <img src={puficart} width="160px" height="100px" alt="puficart" />
          <img src={pufi2} width="160px" height="100px" alt="pufi2" />
        </div>
        <div className="spufi">
          <p>NEWSLETTER</p>
          <span>SUSCRIBITE</span>
          <div>y enterates de todas las novedades</div>
          <form action="https://formspree.io/f/{form_id}" method="post" onSubmit={(e) => handleSubmit(e)}  >
            <div className="container_input">
              <input name="email" id="email" type="email" onChange={(e) => handleState(e)} placeholder="Ingresa tu email" />
              <label for="email"></label>
              <button type="submit"><img src={arrow} width="30px" alt="arrow" /></button>
            </div>
          </form>
        </div>
        {error && (<p className="error">invalid email, please try again</p>)}
      </div>
      {/**======================== */}
      <br />
      <Footer
        purchase={purchase}
        logo={pufifooter}
        qr={qr}
        face={face}
        twiter={twiter}
        instagram={instagram}
        brand={brand}
      />
    </div>
  );
}
