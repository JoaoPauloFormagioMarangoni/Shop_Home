import { ProductsContainer } from './styles'

import { BsFillShareFill, BsHeart } from 'react-icons/bs'
// import { useEffect, useState } from 'react'

// import { ProductsProps } from '../../types'
// import api from '../../services/api'
import { formatPrice } from '../../util/format'

import { useCart } from '../../contexts/useCart'

export function Products() {
  const { products, addProduct } = useCart()

  // const [products, setProducts] = useState<ProductsProps[]>([])

  // useEffect(() => {
  //   async function loadProducts() {
  //     const response = await api.get(`/ourProducts`)
  //     setProducts(response.data)
  //   }

  //   loadProducts()
  // }, [])

  function isNew(productDate: string) {
    let nowDay = new Date().getDate()
    let nowMonth = new Date().getMonth()
    let nowYear = new Date().getFullYear()

    let productDay = new Date(productDate).getDate()
    let productMonth = new Date(productDate).getMonth()
    let productYear = new Date(productDate).getFullYear()

    if (
      nowDay === productDay &&
      nowMonth === productMonth &&
      nowYear === productYear
    ) {
      return true
    } else {
      return false
    }
  }

  function handleAddCart(productId: number) {
    addProduct(productId)
  }

  return (
    <ProductsContainer>
      <h1 id="products">Our Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="infos">
              <h4>{product.title}</h4>
              <p>{product.supTitle}</p>
              <div>
                <span>
                  {formatPrice(
                    product.value *
                      (product.promotion > 0 ? product.promotion / 100 : 1),
                  )}
                </span>
                <span>
                  {product.promotion > 0 ? formatPrice(product.value) : ''}
                </span>
              </div>
            </div>

            {product.promotion > 0 ? (
              <span className="discount">-{product.promotion}%</span>
            ) : (
              isNew(product.createdAt) && <span className="new">New</span>
            )}

            <div className="addToCart">
              <button onClick={() => handleAddCart(product.id)}>
                Add to cart
              </button>
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
        ))}
      </ul>
      <button>Show More</button>
    </ProductsContainer>
  )
}
