import type { CartItem, Product } from "../types";
type HeaderProps = {
  cart: CartItem[]
  removeFromCart: (id: Product['id']) => void
  increaseQuantity: (id: Product['id']) => void
  decreaseQuantity: (id: Product['id']) => void
  clearCart: () => void
  isEmpty: boolean
  cartTotal: number
}

function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } : HeaderProps) {
  return (
    <header className="header">
      <div className="contenedor">
        <div className="flex-logo">
          <a href="index.html" className="header__logo">
            Logo
          </a>
        </div>
        <nav className="navegacion">
          <a className="navegacion__enlace navegacion__enlace--activo" href="#">
            Inicio
          </a>
          <a className="navegacion__enlace" href="nosotros.html">
            Nosotros
          </a>
        </nav>
        <div className="flex-busqueda">
          <div className="box__carrito">
            <a href="" className="header__btn">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </i>
            </a>
            <div id="carrito" className="carrito">
              {isEmpty ? (
                <p className="carrito__vacio">El carrito está vacío</p>
              ) : (
                <>
                  <table className="carrito__tabla">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(({ id, name, image, price, quantity }) => (
                        <tr className="item" key={id}>
                          <td>
                            <img
                              src={`./img/${image}.jpg`}
                              alt="Imagen del producto"
                            />
                          </td>
                          <td>{name}</td>
                          <td className="item__precio">{price}</td>
                          <td className="item__cantidad">
                            <button type="button" onClick={() => decreaseQuantity(id)} className="btn">-</button>
                            {quantity}
                            <button type="button" onClick={() => increaseQuantity(id)} className="btn">+</button>
                            </td>
                          <td>
                            <button onClick={() => removeFromCart(id)} className="btn item__btn--eliminar">
                              <i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  />
                                  <path d="M4 7l16 0" />
                                  <path d="M10 11l0 6" />
                                  <path d="M14 11l0 6" />
                                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                              </i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="carrito__total">Total a pagar: ${cartTotal}</p>
                  <button onClick={clearCart} className="btn btn__limpiar">
                    Vaciar el carrito
                  </button>
                </>
              )}
            </div>
          </div>
          <a href="" className="header__btn">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
