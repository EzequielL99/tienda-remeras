import Header from "./components/Header";
import Product from "./components/Producto";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    cartTotal,
    isEmpty,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main>
        <section id="promociones" className="section__promociones">
          <div className="contenedor">
            <article className="promocion">
              <div className="promocion__contenido">
                <p className="promocion__nombre">Oferta de Black Friday</p>
                <h2 className="promocion__titulo">LAS MEJORES REMERAS</h2>
                <p className="promocion__descripcion">
                  Nuevo precio: <b>$20000</b>
                </p>
                <div className="promocion__botones">
                  <a href="#" className="btn btn__outline-white">
                    Buscar
                  </a>
                  <a href="#" className="btn btn__outline-white">
                    Comprar
                  </a>
                </div>
              </div>
            </article>
            <article className="promocion">
              <div className="promocion__contenido">
                <h2 className="promocion__titulo">Buzos de programador</h2>
                <p className="promocion__descripcion">
                  Los mejores buzos con logos de programación
                </p>
                <div className="promocion__botones">
                  <a href="#" className="btn btn__outline-white">
                    Ver
                  </a>
                </div>
              </div>
            </article>
            <article className="promocion">
              <div className="promocion__contenido">
                <h2 className="promocion__titulo">LLegó Angular</h2>
                <p className="promocion__descripcion">
                  Ya disponible la nueva taza!
                </p>
                <div className="promocion__botones">
                  <a href="#" className="btn btn__outline-white">
                    Comprar
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="productos" className="section__productos">
          <div className="contenedor">
            <h2>#TDevShop</h2>
          </div>

          <div className="contenedor productos__grid">
            {data.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="contenedor">
          <div className="footer__grid">
            <div className="footer__empresa">
              <a href="index.html" className="footer__logo">
                LOGO
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, iure harum ullam nobis optio expedita. Commodi
                doloremque quod dolores nesciunt!
              </p>
              <div className="footer__redes">
                <a href="" target="_blank">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </i>
                </a>
                <a href="" target="_blank">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </i>
                </a>
                <a href="" target="_blank">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M16.5 7.5l0 .01" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
            <div className="footer__info">
              <h3>Legales</h3>
              <a href="">Términos de uso</a>
              <a href="">Política de privacidad</a>
              <a href="">Contacto</a>
              <a href="">Newsletter</a>
            </div>
            <div className="footer__info">
              <h3>Información</h3>
              <a href="">FAQs</a>
              <a href="">Nosotros</a>
              <a href="">Medios de pago</a>
              <a href="">Envíos</a>
            </div>
            <div className="footer__newsletter">
              <h3>Nuestro newsletter</h3>
              <p>
                Suscríbete a nuestro newsletter para enterarte las últimas
                novedades
              </p>
              <form action="#" method="post">
                <input type="email" placeholder="Escribe tu correo" />
                <input
                  type="submit"
                  className="btn btn-footer"
                  value="Suscribirse"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
