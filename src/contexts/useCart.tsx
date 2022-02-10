import { createContext, ReactNode, useContext, useState } from 'react'
// import api from '../services/api'
import { ProductsCartProps, ProductsProps } from '../types'

import { ourProducts, stock } from './data'

import { toast } from 'react-toastify'

interface CartProviderProps {
  children: ReactNode
}

interface UpdatedProps {
  idProduct: number
  amount: number
}

interface CartContextProps {
  products: ProductsProps[]
  cart: ProductsCartProps[]
  addProduct: (idProduct: number) => void
  deleteProduct: (idProduct: number) => void
  updatedProductAmount: ({ idProduct, amount }: UpdatedProps) => void
}

const ProductsContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductsCartProps[]>(() => {
    const storagedCart = localStorage.getItem('@ShopHome:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  let products: ProductsProps[] = ourProducts

  async function addProduct(idProduct: number) {
    try {
      const itemVerifiction = cart.findIndex((item) => item.id === idProduct)
      console.log(ourProducts)
      if (itemVerifiction >= 0) {
        updatedProductAmount({
          idProduct: cart[itemVerifiction].id,
          amount: cart[itemVerifiction].amount + 1,
        })
      } else {
        // const itemSelected = await api
        //   .get('/ourProducts')
        //   .then((response) => response.data)

        for (let index of ourProducts) {
          if (index.id === idProduct) {
            setCart([...cart, { amount: 1, ...index }])
            localStorage.setItem(
              '@ShopHome:cart',
              JSON.stringify([...cart, { amount: 1, ...index }]),
            )
            toast.success('Produto adicionado', {
              position: 'top-left',
              autoClose: 5000,
              theme: 'dark',
              closeOnClick: true,
              closeButton: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            break
          }
        }
      }
    } catch {
      toast.error('Erro na adição do produto', {
        position: 'top-left',
        autoClose: 5000,
        theme: 'dark',
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  async function deleteProduct(idProduct: number) {
    try {
      const itemVerifiction = cart.findIndex((item) => item.id === idProduct)

      if (itemVerifiction >= 0) {
        const newProductAmount = cart
        newProductAmount.splice(itemVerifiction, 1)
        localStorage.setItem('@ShopHome:cart', JSON.stringify(newProductAmount))
        setCart([...newProductAmount])

        toast.success('Produto removido', {
          position: 'top-left',
          autoClose: 5000,
          theme: 'dark',
          closeOnClick: true,
          closeButton: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch {
      toast.error('Erro na remoção do produto', {
        position: 'top-left',
        autoClose: 5000,
        theme: 'dark',
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  async function updatedProductAmount({ idProduct, amount }: UpdatedProps) {
    try {
      if (amount <= 0) {
        throw Error()
      } else {
        // const stock = await api.get('/stock').then((response) => response.data)
        const itemVerifiction = cart.findIndex((item) => item.id === idProduct)
        let exceededTheAmount = false

        for (let index of stock) {
          if (index.id === idProduct) {
            if (amount > index.amount) {
              toast.error('Quantidade solicitada fora de estoque', {
                position: 'top-left',
                autoClose: 5000,
                theme: 'dark',
                closeOnClick: true,
                closeButton: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              exceededTheAmount = true
            }
          }
        }

        if (!exceededTheAmount) {
          const newProductAmount = cart
          newProductAmount[itemVerifiction].amount = amount
          setCart([...newProductAmount])
          localStorage.setItem(
            '@ShopHome:cart',
            JSON.stringify(newProductAmount),
          )
          toast.success(`Quantidade alterada para ${amount}`, {
            position: 'top-left',
            autoClose: 5000,
            theme: 'dark',
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto', {
        position: 'top-left',
        autoClose: 5000,
        theme: 'dark',
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <ProductsContext.Provider
      value={{ products, cart, addProduct, deleteProduct, updatedProductAmount }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useCart() {
  const context = useContext(ProductsContext)
  return context
}
