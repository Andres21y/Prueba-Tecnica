import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Nav from "../components/nav/Navbar";
import Paginated from "../components/paginated/Paginated";
import { Footer } from "../components/footer/Footer";
import saveEmail from "../Redux/actions";
import "./home.css";

const imgPufi = require.context('../assets/image')

export default function Home() {

  const dispatch = useDispatch()
  const [name, setName] = useState('');

  const [error, setError] = useState({});

  const handleState = (e) => {
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regex.test(e.target.value) === false) {
      setError('invalid email, please try again')
      const validate = document.getElementById("submit").disabled
      validate = true
    } else {
      e.preventDefault();
      setName(e.target.value)
      setError({})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveEmail(name))
    setName('')
  }

  return (
    <div>

      <div className="main">
        <Nav cart={cart} nap={nap} puff={puff} rain={rain} />
        <p> ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL. </p>
        <button>SHOP</button>
        <Paginated />
      </div>

        {/**======================== */}
      <div className="container_page">
        <div className="cube">
          <div className="cubo"></div>
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
        </div>

        {/**======================== */}
        <div className="cube">
          <div className="cubo"></div>
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
        </div>

        {/**======================== */}
        <div className="cube">
          <div className="cubo"></div>
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
        </div>

        {/**======================== */}
        <div className="cube">
          <div className="cubo"></div>
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
          <form action="#" method="post" onSubmit={(e) => handleSubmit(e)}  >
            <div className="container_input">
              <input name="email" id="email" type="email" onChange={(e) => handleState(e)} placeholder="Ingresa tu email" />
              <label for="email"></label>
              <button id="submit" disabled={false} type="submit"><img src={arrow} width="30px" alt="arrow" /></button>
            </div>
          </form>
        </div>

        {error.length && (<p className="error">invalid email, please try again</p>)}
      </div><br />

      {/**======================== */}
      
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
