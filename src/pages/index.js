import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Blog de César'
    const siteDescription =
      'Blog dedicado a narrar las experiencias de un junior en busca de trabajo.'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>{siteTitle}</h2>
            </header>
            <p>{siteDescription}</p>
            <ul className="actions">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=dMYKXVf88J0"
                  target="_blank"
                  className="button"
                >
                  Saber más
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Artículos</h2>

            <ul className="actions">
              <li>
                <Link to={`blog`} className="button">
                  Más recientes
                </Link>
              </li>
              <li>
                <Link to={`subscribe`} className="button">
                  Buscar
                </Link>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Contactame</h2>
            <p>
              Rellena el siguiente formulario para ponerte en contacto con migo.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Mensaje"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Enviar Mensaje" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Dirección</span>
                    </h3>
                    C/ La Senyera 25 18
                    <br />
                    Valencia, CP 46006
                    <br />
                    España
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Teléfono</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">cesarmelia@email.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
