import { FiHeart } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FaUserSecret } from 'react-icons/fa'
import { BiSearchAlt, BiMenuAltLeft } from 'react-icons/bi'

import { BackLeft, BackRight, HeaderContainer } from './styles'

import { Button, SwipeableDrawer } from '@mui/material'

import React, { useState } from 'react'
import { Cart } from '../Cart'
import { useCart } from '../../contexts/useCart'

export function Header() {
  const { cart } = useCart()

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleOpenModal() {
    setIsOpenModal(true)
    setIsOpenDrawer(false)
  }

  function handleCloseModal() {
    setIsOpenModal(false)
    setIsOpenDrawer(true)
  }

  function totalAmount() {
    const total = cart.reduce((acc, product) => (acc += product.amount), 0)
    return total
  }

  return (
    <>
      <Cart isOpenModal={isOpenModal} handleCloseModal={handleCloseModal} />
      <HeaderContainer>
        <React.Fragment>
          <Button
            disabled={isOpenModal ? true : false}
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          >
            <BiMenuAltLeft />
          </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={isOpenDrawer}
            onClose={() => setIsOpenDrawer(false)}
            onOpen={() => setIsOpenDrawer(true)}
            className="swiperableDrawer"
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
              <button onClick={handleOpenModal}>
                <span>{totalAmount()}</span>
                <BsCart3 className="cart" />
              </button>
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
