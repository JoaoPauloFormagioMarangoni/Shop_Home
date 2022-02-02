import { ProductsContainer } from './styles'

import imgBannerTwo from '../../assets/imgBannerTwo.png'
import { BsFillShareFill, BsHeart } from 'react-icons/bs'

export function Products() {
  return (
    <ProductsContainer>
      <h1>Our Products</h1>
      <ul>
        <li>
          <img src={imgBannerTwo} alt="" />
          <div className='infos'>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <div>
              <span>Rp 2.450.000</span>
              <span>Rp 3.500.000</span>
            </div>
          </div>
          <span className="discount">-30%</span>
          <div className='addToCart'>
            <button>Add to cart</button>
            <div>
              <div>
                <BsFillShareFill />
                <span>Share</span>
              </div>
              <div>
                <BsHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={imgBannerTwo} alt="" />
          <span className="new">New</span>
          <div className='infos'>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <div>
              <span>Rp 2.500.000</span>
              <span></span>
            </div>
          </div>
          <div className='addToCart'>
            <button>Add to cart</button>
            <div>
              <div>
                <BsFillShareFill />
                <span>Share</span>
              </div>
              <div>
                <BsHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={imgBannerTwo} alt="" />
          <span className="discount">-50%</span>
          <div className='infos'>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <div>
              <span>Rp 1.500.000</span>
              <span>Rp 3.000.000</span>
            </div>
          </div>
          <div className='addToCart'>
            <button>Add to cart</button>
            <div>
              <div>
                <BsFillShareFill />
                <span>Share</span>
              </div>
              <div>
                <BsHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={imgBannerTwo} alt="" />
          <span className="new">New</span>
          <div className='infos'>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <div>
              <span>Rp 1.500.000</span>
              <span></span>
            </div>
          </div>
          <div className='addToCart'>
            <button>Add to cart</button>
            <div>
              <div>
                <BsFillShareFill />
                <span>Share</span>
              </div>
              <div>
                <BsHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={imgBannerTwo} alt="" />
          <div className='infos'>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <div>
              <span>Rp 3.310.000</span>
              <span></span>
            </div>
          </div>
          <div className='addToCart'>
            <button>Add to cart</button>
            <div>
              <div>
                <BsFillShareFill />
                <span>Share</span>
              </div>
              <div>
                <BsHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={imgBannerTwo} alt="" />
          <span className="discount">-10%</span>
          <div className='infos'>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <div>
              <span>Rp 2.270.000</span>
              <span>Rp 2.300.000</span>
            </div>
          </div>
          <div className='addToCart'>
            <button>Add to cart</button>
            <div>
              <div>
                <BsFillShareFill />
                <span>Share</span>
              </div>
              <div>
                <BsHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={imgBannerTwo} alt="" />
          <span className="new">New</span>
          <div className='infos'>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <div>
              <span>Rp 3.500.000</span>
              <span></span>
            </div>
          </div>
          <div className='addToCart'>
            <button>Add to cart</button>
            <div>
              <div>
                <BsFillShareFill />
                <span>Share</span>
              </div>
              <div>
                <BsHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <img src={imgBannerTwo} alt="" />
          <div className='infos'>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <div>
              <span>Rp 1.500.000</span>
              <span></span>
            </div>
          </div>
          <div className='addToCart'>
            <button>Add to cart</button>
            <div>
              <div>
                <BsFillShareFill />
                <span>Share</span>
              </div>
              <div>
                <BsHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <button>Show More</button>
    </ProductsContainer>
  )
}
