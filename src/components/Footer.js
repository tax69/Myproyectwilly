import React from "react";
import "./Footer.css"

const Footer = () => {

    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
              
                    {/* Column1 */}
                    <div className="col">
                        <h6>CONTACTOS</h6>
                        <div className="list-unstyled">
                            <h5>Gerente Pedro Samines</h5>
                            <h5>Secretaria Lisa Coleman</h5>
                            <h5>Servicio al cliente</h5>
                        </div>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h6>INFORMACIÓN</h6>
                        <div className="list-unstyled">
                            <h5>Tel. 12345678</h5>
                            <h5>Gmail: libros@gmail.com</h5>
                            
                        </div>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h6>DIRECCIÓN</h6>
                        <div className="list-unstyled">
                            <h5>Zona 2</h5>
                            <h5>1ra avenida</h5>
                            <h5>QUICHé</h5>
                        </div>
                    </div>
                </div>
                    <hr />
                    <div className="prowdos">  
                    <div className="prow">
                        <p>
                            &copy;{new Date().getFullYear()} SERVICIO |  LIBROS  | Y MUCHOS COLORES
                        </p>

                        </div>
                    </div>

            </div>
        </div>
    )
}
    export default Footer;