import type { Product } from '../types';

type ProductProps = {
  product : Product, 
  addToCart: (item: Product) => void
}

function Product({ product, addToCart } : ProductProps) {
  const { name, image, price } = product;

  return (
    <div className="box__producto">
      <div className="producto">
        <div className="producto__imagen">
          <img src={`/img/${image}.jpg`} alt="Producto 01" />
        </div>
        <div className="producto__descripcion">
          <div className="producto__nombre">{name}</div>
          <div className="flexbox">
            <div className="flex__precio">
              <p className="producto__precio">
                ${price} <span className="producto__precio--antiguo">$420</span>
              </p>
            </div>
            <div className="flex__botones">
              <a
                href="#agregarCarrito"
                onClick={() => addToCart(product)}
                className="producto__btn"
              >
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
              <a href="#verProducto" className="producto__btn">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                </i>
              </a>

              <a href="#fav" className="producto__btn--favorito">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
