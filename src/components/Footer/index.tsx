import { FaPhoneAlt } from 'react-icons/fa'
import { SiGooglemaps } from 'react-icons/si'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <h2>Funiro.</h2>
        <ul>
          <li>
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website
          </li>
          <li>
            <SiGooglemaps /> Sawojajar Malang, Indonesia
          </li>
          <li>
            <FaPhoneAlt /> 55 99999-9999
          </li>
          <li>www.funiro.com</li>
        </ul>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          <li>Products</li>
          <li>Rooms</li>
          <li>Inspirations</li>
          <li>About Us</li>
          <li>Terms &amp; Policy</li>
        </ul>
      </div>
      <div>
        <h2>Account</h2>
        <ul>
          <li>My Account</li>
          <li>Checkout</li>
          <li>My Cart</li>
          <li>My Catalog</li>
        </ul>
      </div>
      <div>
        <h2>Stay Connected</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <h2>Stay Updated</h2>
        <input type="email" name="email" id="email" placeholder='Enter your email' />
      </div>
    </FooterContainer>
  )
}
