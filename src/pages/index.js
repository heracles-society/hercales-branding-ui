import { AnimatePresence, motion, transform } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import useSmoothScrollbar from "src/hooks/use-smooth-scrollbar"

export default function Home() {
  const appRef = useRef(null)
  const overlayRef = useRef(null)
  const [scrollStatus, scrollbar] = useSmoothScrollbar(appRef)
  const [scaleImage, setScaleImage] = useState(1)

  useEffect(() => {
    if (overlayRef.current && scrollbar && scrollbar.isVisible(overlayRef.current)) {
      const overlayRefOffsetY = overlayRef.current.clientHeight + overlayRef.current.offsetTop
      const newScale = transform(scrollStatus.offset.y, [0, overlayRefOffsetY], [1, 1.125])
      setScaleImage(newScale)
    }
  }, [scrollStatus.offset.y])

  return (
    <AnimatePresence exitBeforeEnter>
      <div ref={appRef} className="page-index">
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
            <div className="heading">
              <h1>Heracles</h1>
              <p>
                Let's connect you with your Society. We provide you the hassle free life, easy to pay society bill, user
                friendly portal with high security management.
              </p>
              <Link href="/about-us">
                <a>Click here to know more</a>
              </Link>
            </div>
            <div ref={overlayRef} className="image-background-container">
              <div className="overlay"></div>
              <figure className="image-background">
                <motion.img src="/images/main-bg-6.jpg" initial={{ scale: 1 }} style={{ scale: scaleImage }} />
              </figure>
            </div>
          </section>
          <section className="section case-study study-1">
            <div className="">
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
            <div className="">
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
            <div className="">
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
            <div></div>
            <div></div>
            <div></div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  )
}
