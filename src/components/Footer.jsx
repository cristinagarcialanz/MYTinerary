import * as React from 'react';
import '../styles/footer.css';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer(params) {



  return (
    <div className='footer'>
      
      <footer>

        <div class="container">

          <div class="foo-row">
            <div class="foo-col">
              <h2>Suscribete<br/>a nuestro Newsletter</h2>
              <form action="" method="GET">

                <div class="f-input">
                  <input type="text" placeholder="Ingrese su correo"/>
                    <button type="submit" class="hm-btn-round btn-primary"><SendIcon /></button>
                </div>
              </form>

            </div>

            <div class="foo-col">
              <ul>
                <li><a className="nav-link" id="Productos" href="#">Cities</a></li>
                <a href="https://www.instagram.com"><InstagramIcon /> </a>
                <li><a className="nav-link" id="Nosotros" href="#">About Us</a></li>
                <a href="https://www.facebook.com"> <FacebookIcon /></a>
                <li><a className="nav-link" id="Contacto" href="#">Contact</a></li>
                <a href="https://www.whatsapp.com"> <WhatsAppIcon /></a>

              </ul>

              <p>MYTinerary 2023 © Todos los derechos reservados</p>
            </div>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default Footer;