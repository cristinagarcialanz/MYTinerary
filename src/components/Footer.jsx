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
                <li><a className="nav-link" id="Productos" href="https://www.instagram.com/accounts/login/">Cities</a></li>
                <a href="https://www.instagram.com"><InstagramIcon /> </a>
                <li><a className="nav-link" id="Nosotros" href="https://es-la.facebook.com/login/device-based/regular/login/">About Us</a></li>
                <a href="https://www.facebook.com"> <FacebookIcon /></a>
                <li><a className="nav-link" id="Contacto" href="https://www.whatsapp.com/?lang=es">Contact</a></li>
                <a href="https://www.whatsapp.com"> <WhatsAppIcon /></a>

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