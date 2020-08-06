import { AnimatePresence, motion, transform } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import useSmoothScrollbar from "src/hooks/use-smooth-scrollbar"
import Head from "next/head"
import HeaderPage from "./header"
import ForBuildersPage from "./for-builders"
import ForHomeOwnersPage from "./for-home-owners"
import ForSecurityPage from "./for-security"
import ForSocietyManagerPage from "./for-society-manager"
import FooterPage from "./footer"
import * as constants from "../constants"

const siteHeroImage = require("@images/site-hero-image.jpg?placeholder=true&resize&format=webp")

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
    <div>
      <Head>
        <title>{constants.LANDING_TITLE}</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <div ref={appRef} className="page-index">
          <header></header>
          <main>
            <HeaderPage isHomePage={true} />
            <section className="section hero-image-background">
              <div className="heading">
                <h1>{constants.LANDING_HEADING}</h1>
                <p>{constants.LANDING_SUBHEADING}</p>
                <Link href="/about-us">
                  <a>{constants.LANDING_LINK}</a>
                </Link>
              </div>
              <div ref={overlayRef} className="image-background-container">
                <div className="overlay"></div>
                <picture
                  className="image-background"
                  style={{ backgroundSize: "cover", background: `url(${siteHeroImage.placeholder})` }}
                >
                  <motion.img
                    src={siteHeroImage.src}
                    srcSet={siteHeroImage.srcSet}
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    alt="an image"
                    initial={{ scale: 1 }}
                    style={{ scale: scaleImage }}
                  />
                </picture>
              </div>
            </section>
            <ForBuildersPage />
            <ForHomeOwnersPage />
            <ForSecurityPage />
            <ForSocietyManagerPage />
          </main>
          <FooterPage />
        </div>
      </AnimatePresence>
    </div>
  )
}
