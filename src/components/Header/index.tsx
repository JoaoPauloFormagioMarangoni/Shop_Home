import { FiHeart } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FaUserSecret } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { BackLeft, BackRight, HeaderContainer } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <nav>
          <ul>
            <li>ShopHome.</li>
            <li>
              <a href="#products">Products</a> <IoIosArrowDown />
            </li>
            <li>
              <a href="#rooms">Rooms</a> <IoIosArrowDown />
            </li>
            <li>
              <a href="#Inspirations">Inspirations</a>
            </li>
          </ul>
          <div>
            <BiSearchAlt className="searchIcon" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
        </nav>
        <div>
          <FiHeart className="heart" />
          <BsCart3 className="cart" />
          <div>
            <FaUserSecret />
          </div>
        </div>
      </HeaderContainer>
      <BackLeft />
      <BackRight />
    </>
  )
}
