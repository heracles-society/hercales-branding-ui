import { AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <AnimatePresence>
      <div className="page-index">
        <header></header>
        <main>
          <nav className="site-nav">
            <div className="site-logo"></div>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link href="/about-us">
                  <a>About us</a>
                </Link>
              </li>
              <li className="nav-list-item">
                <Link href="/about-us">
                  <a>Contact us</a>
                </Link>
              </li>
            </ul>
          </nav>
          <section className="section hero-image-background">
            <div className="overlay"></div>
            <figure className="image-background">
              <img src="/images/main-bg-6.jpg"></img>
            </figure>
          </section>
          <section className="section case-study study-1">
            <div className="flex">
              <div className="flex study-images">
                <figure>
                  <img src="/images/main-bg-1.jpg"></img>
                </figure>
              </div>
              <div className="flex column study-summary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, error! Explicabo autem saepe
                  doloribus eum laborum dolores quasi ab recusandae incidunt neque suscipit necessitatibus, consequuntur
                  accusamus nemo, eligendi reprehenderit ut?
                </p>
              </div>
            </div>
          </section>
          <section className="section case-study study-2">
            <div className="flex">
              <div className="flex column study-summary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, error! Explicabo autem saepe
                  doloribus eum laborum dolores quasi ab recusandae incidunt neque suscipit necessitatibus, consequuntur
                  accusamus nemo, eligendi reprehenderit ut?
                </p>
              </div>
              <div className="flex study-images">
                <figure>
                  <img src="/images/main-bg-2.jpg"></img>
                </figure>
              </div>
            </div>
          </section>
          <section className="section case-study study-3">
            <div className="flex">
              <div className="flex study-images">
                <figure>
                  <img src="/images/main-bg-3.jpg"></img>
                </figure>
              </div>
              <div className="flex column study-summary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, error! Explicabo autem saepe
                  doloribus eum laborum dolores quasi ab recusandae incidunt neque suscipit necessitatibus, consequuntur
                  accusamus nemo, eligendi reprehenderit ut?
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="site-footer">
          <div className="wrapper">
            <div className="logo">Manish Gupta</div>
            <div className="feature"></div>
            <div className="contact"></div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  )
}
