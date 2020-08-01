import { AnimatePresence, motion, transform } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import useSmoothScrollbar from "src/hooks/use-smooth-scrollbar"
import ProgressiveImage from "react-progressive-image"

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
                We help builders manage societies. We help future home owners explore societies. We help renters connect
                with home owners.
              </p>
              <Link href="/about-us">
                <a>Click here to know more</a>
              </Link>
            </div>
            <div ref={overlayRef} className="image-background-container">
              <div className="overlay"></div>
              <figure className="image-background">
                <ProgressiveImage
                  delay={4000}
                  src="images/processed-main-bg-6_hmddja_c_scale,w_1400.jpg"
                  srcSetData={{
                    srcSet: `images/processed-main-bg-6_hmddja_c_scale,w_300.jpg 300w,
                    images/processed-main-bg-6_hmddja_c_scale,w_697.jpg 697w,
                    images/processed-main-bg-6_hmddja_c_scale,w_959.jpg 959w,
                    images/processed-main-bg-6_hmddja_c_scale,w_1222.jpg 1222w,
                    images/processed-main-bg-6_hmddja_c_scale,w_1380.jpg 1380w`,
                    sizes: "(max-width: 1400px) 100vw, 1400px",
                  }}
                  placeholder="images/processed-main-bg-6_hmddja_c_scale,w_300.jpg"
                >
                  {(src, _loading, srcSetData) => (
                    <motion.img
                      src={src}
                      srcSet={srcSetData.srcSet}
                      sizes={srcSetData.sizes}
                      alt="an image"
                      initial={{ scale: 1 }}
                      style={{ scale: scaleImage }}
                    />
                  )}
                </ProgressiveImage>
              </figure>
            </div>
          </section>
          <section className="section for-builders">
            <header className="header-wrapper">
              <h2>For builders</h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </header>
            <article className="article-wrapper">
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis laudantium.</h3>
              <div className="details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, culpa blanditiis. Ipsum vero
                  dolorum soluta! Quam quaerat soluta, minus velit itaque dolor sed aperiam, voluptatem in modi est
                  eligendi tenetur?
                </p>
                <Link href="/about-us">
                  <button>Contact us</button>
                </Link>
              </div>
            </article>
            <div className="background-wrapper">
              <figure>
                <img src="/all-images/main-bg-5.jpg" alt="" />
              </figure>
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
