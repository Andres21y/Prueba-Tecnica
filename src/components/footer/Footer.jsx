import React from 'react'

const imgPufi = require.context('../../assets/imge',true)

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className='container_footer'>
                    <div className="">
                        <img src={imgPufi(`./pufifooter.png`)} width="60px" alt="" />
                    </div>
                    <div className="pufis">
                        <h5>PUFI RAIN</h5>
                        <h5>PUFI PUFF</h5>
                        <h5>PUFI CART</h5>
                        <h5>PUFI NAP</h5>
                    </div>
                    <div className="info">
                        <h5>CONTACTO</h5>
                        <h5>AYUDA</h5>
                        <h5>CÓMO COMPRAR</h5>
                        <h5>TÉRMINOS &#38; CONDICIONES</h5>
                    </div>
                    <div className="compra">
                        <div>
                            <h5>COMPRA 100&#37; SEGURA</h5>
                        </div>
                        <div className='logi'>
                            <img src={imgPufi(`./QR.png`)} width="40px" height="50px" alt="QR" />
                            <img src={imgPufi(`./purchase.png`)} width="40px" height="50px" alt="purchase" />
                            <span>COMPRA CON LA GARANTÍA DE PUFI</span>
                        </div>
                    </div>
                    <div className="">
                        <span> SIGENOS EN
                            <img src={imgPufi(`./face.png`)} width="40px" height="30px" alt="facebook" />
                            <img src={imgPufi(`./twiter.png`)} width="40px" height="30px" alt="twiter" />
                            <img src={imgPufi(`./instagram.png`)} width="40px" height="30px" alt="instagram" />
                        </span>
                    </div>
                </div>
                <div className='copyRight'>
                    <div>
                        <p>  PUFI Copyright 2017 - Todo los derechos reservados</p>
                    </div>
                    <div>
                        <img src={imgPufi(`./brand.png`)} height="20px" alt="brandline" />
                    </div>

                </div>
            </footer>
        </>
    )
}
