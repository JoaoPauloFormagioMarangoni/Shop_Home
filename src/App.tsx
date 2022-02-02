import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Slider } from './components/Slider'

import { AppContainer, Feature } from './styles/app.styles'

import { GlobalStyle } from './styles/global'

import Trophy from './assets/trophy.svg'
import Guarantee from './assets/guarantee.svg'
import Shipping from './assets/shipping.svg'
import CustomerSupport from './assets/customerSupport.svg'
import { Products } from './components/Products'
import { RoomsInspiration } from './components/RoomsInspiration'
import { TipsAndTricks } from './components/TipsAndTricks'
import { ShareYourSetup } from './components/ShareYourSetup'

function App() {
  return (
    <AppContainer>
      <Header />
      <Slider />

      <Feature>
        <li>
          <img src={Trophy} alt="Trophy" />
          <div>
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </li>
        <li>
          <img src={Guarantee} alt="Guarantee" />
          <div>
            <h3>Warrany Protection</h3>
            <p>Over 2 years</p>
          </div>
        </li>
        <li>
          <img src={Shipping} alt="Shipping" />
          <div>
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </li>
        <li>
          <img src={CustomerSupport} alt="CustomerSupport" />
          <div>
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </li>
      </Feature>

      <Products />
      <RoomsInspiration />
      <TipsAndTricks />

      <ShareYourSetup />
      <hr/>
      <Footer />
      <GlobalStyle />
    </AppContainer>
  )
}

export default App
