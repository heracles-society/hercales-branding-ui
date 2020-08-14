import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import { motion, useAnimation } from "framer-motion"

import styles from "./BuilderIntro.module.scss"
import * as constants from "@constants"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const forBuilderBackgroundImage = require("@images/for-builders-image.jpg?placeholder=true&resize&format=webp")

const textRevealVariants = {
  initial: { clipPath: "inset(-20px 100% -20px 0%)" },
  animate: { clipPath: "inset(-20px 0% -20px 0%)" },
}

const textSlideUpVariants = {
  initial: { opacity: 0, y: "60px" },
  animate: { opacity: 1, y: "0" },
}

export default function ForBuildersPage() {
  const control = useAnimation()
  const [inViewRef, inView] = useInView({
    rootMargin: "-300px 0px",
  })

  useEffect(() => {
    if (inView) {
      control.start("animate")
    }
  }, [inView])

  return (
    <motion.section ref={inViewRef} animate={control} className={styles["wrapper"]}>
      <div className={styles["for-builders"]}>
        <motion.header className={styles["header-wrapper"]}>
          <motion.h2 initial="initial" variants={textRevealVariants} transition={{ duration: 0.6, ease: "easeInOut" }}>
            {constants.BUILDER_TITLE}
          </motion.h2>
        </motion.header>
        <motion.article
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
          }}
          initial="initial"
          transition={{ duration: 0.1, staggerChildren: 0.1 }}
          className={styles["article-wrapper"]}
        >
          <h3>
            <motion.span
              initial="initial"
              variants={textRevealVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Easy and approchable
            </motion.span>
            <motion.span
              initial="initial"
              variants={textRevealVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              platform for customers.
            </motion.span>
          </h3>
          <motion.div
            initial="initial"
            variants={textSlideUpVariants}
            transition={{ delay: 0.3, duration: 0.1, ease: "easeInOut", staggerChildren: 0.2 }}
            className={styles["details"]}
          >
            <motion.p initial="initial" variants={textSlideUpVariants} transition={{ duration: 1, ease: "easeInOut" }}>
              {constants.BUILDER_DESC}
            </motion.p>
            <Link href="/for-builders">
              <motion.a
                initial="initial"
                variants={textSlideUpVariants}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Know more
              </motion.a>
            </Link>
          </motion.div>
          <motion.div
            initial="initial"
            animate={control}
            variants={textSlideUpVariants}
            transition={{ delay: 0.3, duration: 0.1, delayChildren: 0.6, ease: "easeInOut" }}
            className={styles["features"]}
          >
            <motion.ul variants={textSlideUpVariants} transition={{ duration: 1, ease: "easeInOut" }}>
              <li>Project management</li>
              <li>Inventory management</li>
              <li>Event management</li>
              <li>Banking facilities</li>
            </motion.ul>
          </motion.div>
        </motion.article>
        <motion.div
          variants={{
            initial: { y: "200px", opacity: 0 },
            animate: { y: "100px", opacity: 1 },
          }}
          initial="initial"
          transition={{ ease: constants.easingValues["ease-1"], duration: 1 }}
          className={styles["background-wrapper"]}
        >
          <picture>
            <ProgressiveImage
              src={forBuilderBackgroundImage.src}
              srcSetData={{
                srcSet: forBuilderBackgroundImage.srcSet,
                sizes: "35vw",
              }}
              placeholder={forBuilderBackgroundImage.placeholder}
            >
              {(src, _loading, srcSetData) => (
                <>
                  <motion.img src={src} srcSet={srcSetData.srcSet} sizes={srcSetData.sizes} alt="an image" />
                </>
              )}
            </ProgressiveImage>
          </picture>
        </motion.div>
      </div>
    </motion.section>
  )
}
