import Link from "next/link"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, transform } from "framer-motion"
import ProgressiveImage from "react-progressive-image"

import styles from "./Homepage.module.scss"
import classNames from "classnames"

import useSmoothScrollbar from "@hooks/use-smooth-scrollbar"
import * as constants from "@constants"

import Header from "./Header"
import Footer from "./Footer"
import BuilderIntro from "./CaseStudies/BuilderIntro"
import HomeOwnerIntro from "./CaseStudies/HomeOwnerIntro"
import SecurityProviderIntro from "./CaseStudies/SecurityProvisionIntro"
import RenterIntro from "./CaseStudies/RenterIntro"

const siteHeroImage = require("@images/site-hero-image.jpg?placeholder=true&resize&format=webp")

export default function HomePage() {
  const appRef = useRef(null)
  const overlayRef = useRef(null)
  const [scrollStatus, scrollbar] = useSmoothScrollbar(appRef, { debounceInterval: 12 })
  const [scaleImage, setScaleImage] = useState(1)

  useEffect(() => {
    if (overlayRef.current && scrollbar && scrollbar.isVisible(overlayRef.current)) {
      const overlayRefOffsetY = overlayRef.current.clientHeight + overlayRef.current.offsetTop
      const newScale = transform(scrollStatus.offset.y, [0, overlayRefOffsetY], [1, 1.125])
      setScaleImage(newScale)
    }
  }, [scrollStatus.offset.y])

  return (
    <>
      <Head>
        <title>{constants.LANDING_TITLE}</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <>
          <Header isHomePage={true} />
          <div ref={appRef} className={classNames(styles["wrapper"])}>
            <main className="no-scroll">
              <section className={classNames(styles["hero-image-background"])}>
                <div className={classNames(styles["title"])}>
                  <h1>{constants.LANDING_HEADING}</h1>
                  <p>{constants.LANDING_SUBHEADING}</p>
                  <Link href="/about-us" prefetch={false}>
                    <a>{constants.LANDING_LINK}</a>
                  </Link>
                </div>
                <div ref={overlayRef} className={styles["image-background-container"]}>
                  <div className={styles["overlay"]}></div>
                  <picture className={styles["image-background"]}>
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
              <BuilderIntro />
              <HomeOwnerIntro />
              <SecurityProviderIntro />
              <RenterIntro />
            </main>
            <Footer />
          </div>
        </>
      </AnimatePresence>
    </>
  )
}
