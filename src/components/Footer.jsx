import React from 'react'

export const Footer = ({logo, purchase, qr,face, twiter,instagram}) => {
    return (
        <>
            <footer className="footer">
                <div className='container_footer'>
                    <div className="">
                        <img src={logo} alt="" />
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
                            <img src={qr} width="40px" height="50px"  alt="QR" />
                            <img src={purchase} width="40px" height="50px" alt="purchase" />
                            <span>COMPRA CON LA GARANTÍA DE PUFI</span>
                        </div>
                    </div>
                    <div className="">
                        <span> SIGENOS EN
                            <img src={face} width="40px" height="30px" alt="facebook" />
                            <img src={twiter} width="40px" height="30px" alt="twiter" />
                            <img src={instagram} width="40px"  height="30px" alt="instagram" />
                        </span>
                    </div>
                </div>
                <div className='copyRight'>
                    PUFI Copyright 2017 - Todo los derechos reservados
                </div>
            </footer>
        </>
    )
}
