export interface CartBurgerCardProps {
  id: string
  name: string
  img?: string
  price: number
  orders: number
  adds?: {
    name: string
    weight: number
    price: number
  }[]
  selectedAdds?: string[]
}
export interface BurgerOption {
  text: string
  price: number | null
  weight: number | null
  img: string | null
}

export interface BurgerSection {
  title: string
  options: BurgerOption[]
}

export interface SelectedItem {
  id: number
  value: string
  price: number | null
  weight: number | null
  img: string | null
}
export interface CraftedBurgers {
  img?: string
  name: string
  selectedItems?: SelectedItem[]
  weight?: number
  price: number
  id: string
  orders: number
}
