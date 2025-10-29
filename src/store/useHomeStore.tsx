// useHomeStore.ts
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { type BurgerData, burgers } from "@/consts/burgers"

interface CartItem extends BurgerData {
  selectedAdds: string[]
  cartId: string // Unique ID for cart item
}

interface HomeStoreProps {
  burgers: BurgerData[]
  cart: CartItem[]
  
  // Cart operations
  addToCart: (burgerIndex: number, qty: number, selectedAddNames: string[]) => void
  updateCartItemQty: (cartId: string, newQty: number) => void
  removeFromCart: (cartId: string) => void
  
  // Helper to get original burger data
  getOriginalBurger: (index: number) => BurgerData
}

const useHomeStore = create<HomeStoreProps>()(
  persist(
    (set, get) => ({
      burgers: burgers,
      cart: [],

      addToCart: (burgerIndex, qty, selectedAddNames) => {
        const burger = get().burgers[burgerIndex]
        const adds = burger.adds.filter(add => selectedAddNames.includes(add.name))
        
        const totalPrice = adds.reduce((sum, add) => sum + add.price, burger.price)
        const totalWeight = adds.reduce((sum, add) => sum + add.weight, burger.weight)
        
        const cartItem: CartItem = {
          ...burger,
          selectedAdds: selectedAddNames,
          orders: qty,
          price: totalPrice,
          weight: totalWeight,
          cartId: `${burger.name}-${Date.now()}-${Math.random()}` // Unique ID
        }
        
        set({ cart: [...get().cart, cartItem] })
      },

      updateCartItemQty: (cartId, newQty) => {
        set({
          cart: get().cart.map(item =>
            item.cartId === cartId
              ? { ...item, orders: Math.max(1, newQty) }
              : item
          )
        })
      },

      removeFromCart: (cartId) => {
        set({
          cart: get().cart.filter(item => item.cartId !== cartId)
        })
      },

      getOriginalBurger: (index) => {
        return burgers[index]
      }
    }),
    {
      name: "HomeStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useHomeStore