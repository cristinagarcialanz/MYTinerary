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
              <h2>Subscribe <br/>to our Newsletter</h2>
              <form action="" method="GET">

                <div class="f-input">
                  <input type="text" placeholder="Enter your email"/>
                    <button type="submit" class="hm-btn-round btn-primary"><SendIcon /></button>
                </div>
              </form>

            </div>

            <div class="foo-col">
              <ul>
                <li><a className="nav-link" id="Productos" href="#">Cities</a></li>
                <div className='icono-redes'><a  href="https://www.instagram.com"><InstagramIcon /> </a></div>
                <li><a className="nav-link" id="Nosotros" href="#">About Us</a></li>
                <div className='icono-redes'> <a  href="https://www.facebook.com"> <FacebookIcon /></a></div>
                <li><a className="nav-link" id="Contacto" href="#">Contact</a></li>
                <div className='icono-redes'><a href="https://www.whatsapp.com"> <WhatsAppIcon /></a></div>
                

              </ul>
            </div>
          </div>
          <p className='foo-copy'>MYTinerary 2023 © All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;