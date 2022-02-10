import Modal from 'react-modal'

import { useCart } from '../../contexts/useCart'
import { formatPrice } from '../../util/format'

import { FiTrash2 } from 'react-icons/fi'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'

interface CartProps {
  isOpenModal: boolean
  handleCloseModal: () => void
}

export function Cart({ isOpenModal, handleCloseModal }: CartProps) {
  const { cart, deleteProduct, updatedProductAmount } = useCart()

  function totalPrice() {
    const total = cart.reduce(
      (acc, product) => (acc += product.value * product.amount),
      0,
    )
    return total
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      className="modalStyle"
      overlayClassName="react-modal-overlay"
    >
      <div>
        <h3>Carrinho</h3>
        <p>
          Total: <span>{formatPrice(totalPrice())}</span>
        </p>
        <button onClick={handleCloseModal}>Close</button>
      </div>
      <ul>
        {cart.map((productCart) => (
          <li key={productCart.id}>
            <img src={productCart.image} alt={productCart.title} />
            <div>
              <button
                onClick={() =>
                  updatedProductAmount({
                    idProduct: productCart.id,
                    amount: productCart.amount - 1,
                  })
                }
              >
                <BsFillCaretLeftFill />
              </button>
              <span>{productCart.amount}</span>
              <button
                onClick={() =>
                  updatedProductAmount({
                    idProduct: productCart.id,
                    amount: productCart.amount + 1,
                  })
                }
              >
                <BsFillCaretRightFill />
              </button>
            </div>
            <div>
              <span>{formatPrice(productCart.value)}</span>
              <button onClick={() => deleteProduct(productCart.id)}>
                <FiTrash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  )
}
