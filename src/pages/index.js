import Link from "next/link"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, transform } from "framer-motion"

import useSmoothScrollbar from "src/hooks/use-smooth-scrollbar"
import HeaderPage from "@components/header"
import ForBuildersPage from "@components/for-builders"
import ForHomeOwnersPage from "@components/for-home-owners"
import ForSecurityPage from "@components/for-security"
import ForSocietyManagerPage from "@components/for-society-manager"
import Footer from "@components/footer"
import * as constants from "../constants"
import ProgressiveImage from "react-progressive-image"

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
                <Link href="/about-us" prefetch={false}>
                  <a>{constants.LANDING_LINK}</a>
                </Link>
              </div>
              <div ref={overlayRef} className="image-background-container">
                <div className="overlay"></div>
                <picture className="image-background">
                  <ProgressiveImage
                    src={siteHeroImage.src}
                    srcSetData={{
                      srcSet: siteHeroImage.srcSet,
                      sizes: "100vw",
                    }}
                    placeholder={siteHeroImage.placeholder}
                  >
                    {(src, _loading, srcSetData) => (
                      <>
                        <motion.img
                          src={src}
                          srcSet={srcSetData.srcSet}
                          sizes={srcSetData.sizes}
                          alt="an image"
                          initial={{ scale: 1 }}
                          style={{ scale: scaleImage }}
                        />
                      </>
                    )}
                  </ProgressiveImage>
                </picture>
              </div>
            </section>
            <ForBuildersPage />
            <ForHomeOwnersPage />
            <ForSecurityPage />
            <ForSocietyManagerPage />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </div>
  )
}
