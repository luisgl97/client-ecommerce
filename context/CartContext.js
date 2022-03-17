import { createContext } from "react";

const CartContext = createContext({
    productsCart: 0,
    addProduct: () => null,
    getProductsCart: () => null,
    removeProductCart: () => null,
    remveAllProductsCart: () => null
})

export default CartContext;