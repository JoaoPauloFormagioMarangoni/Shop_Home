import { FiHeart } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FaUserSecret } from 'react-icons/fa'
import { BiSearchAlt, BiMenuAltLeft } from 'react-icons/bi'

import { BackLeft, BackRight, HeaderContainer } from './styles'

import { Button, SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'

export function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  return (
    <>
      <HeaderContainer>
        <React.Fragment>
          <Button onClick={() => setIsOpenDrawer(!isOpenDrawer)}>
            <BiMenuAltLeft />
          </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={isOpenDrawer}
            onClose={() => setIsOpenDrawer(false)}
            onOpen={() => setIsOpenDrawer(true)}
            className='swiperableDrawer'
          >
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
          </SwipeableDrawer>
        </React.Fragment>
      </HeaderContainer>
      <BackLeft />
      <BackRight />
    </>
  )
}
