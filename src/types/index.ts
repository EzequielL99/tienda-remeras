export type Product = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Product & {
    quantity: number
}

// Pick
// export type CartItem = Pick<Product, 'id' | 'name' | 'price'> & {
//     quantity: number
// }