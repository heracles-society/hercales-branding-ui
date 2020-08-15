import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import * as constants from "../../../../constants"
import styles from "./SecurityProvisionIntro.module.scss"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const forSecurityBackgroundImage = require("@images/for-security.jpeg?placeholder=true&resize&format=webp")

const slideRevealVariants = {
  right: {
    initial: { clipPath: "inset(-20px 100% -20px 0%)" },
    animate: { clipPath: "inset(-20px 0% -20px 0%)" },
  },
  left: {
    initial: { clipPath: "inset(-20px 0% -20px 100%)" },
    animate: { clipPath: "inset(-20px 0% -20px 0%)" },
  },
  up: {
    initial: { opacity: 0, y: "60px" },
    animate: { opacity: 1, y: "0" },
  },
}

export default function SecurityProvisionIntro() {
  const control = useAnimation()
  const [inViewRef, inView] = useInView({
    rootMargin: "-25% 0px",
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      control.start("animate")
    }
  }, [inView])

  return (
    <motion.section ref={inViewRef} animate={control} className={styles["wrapper"]}>
      <div className={styles["for-security-provision"]}>
        <header className={styles["header-wrapper"]}>
          <motion.h2
            initial="initial"
            variants={slideRevealVariants.right}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {constants.SECURITY_TITLE}
          </motion.h2>
        </header>
        <motion.article
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
          }}
          initial="initial"
          transition={{ duration: 0.1, staggerChildren: 0.3 }}
          className={styles["article-wrapper"]}
        >
          <h3>
            <motion.span
              initial="initial"
              variants={slideRevealVariants.right}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Are you a Medjay ?
            </motion.span>
            <motion.span
              initial="initial"
              variants={slideRevealVariants.right}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              If you're not, then leave security to Heracles.
            </motion.span>
          </h3>
          <motion.div
            initial="initial"
            variants={slideRevealVariants.up}
            transition={{ delay: 0.3, duration: 0.1, ease: "easeInOut", staggerChildren: 0.2 }}
            className={styles["details"]}
          >
            <motion.p
              initial="initial"
              variants={slideRevealVariants.up}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {constants.SECURITY_DESC}
            </motion.p>
            <Link href="/for-builders">
              <motion.a
                initial="initial"
                variants={slideRevealVariants.up}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Know more
              </motion.a>
            </Link>
          </motion.div>
        </motion.article>
        <div className={styles["background-wrapper"]}>
          <motion.picture
            variants={slideRevealVariants.up}
            initial="initial"
            transition={{ ease: constants.easingValues["ease-1"], duration: 1 }}
          >
            <ProgressiveImage
              src={forSecurityBackgroundImage.src}
              srcSetData={{
                srcSet: forSecurityBackgroundImage.srcSet,
                sizes: "35vw",
              }}
              placeholder={forSecurityBackgroundImage.placeholder}
            >
              {(src, _loading, srcSetData) => (
                <>
                  <motion.img src={src} srcSet={srcSetData.srcSet} sizes={srcSetData.sizes} alt="an image" />
                </>
              )}
            </ProgressiveImage>
          </motion.picture>
        </div>
      </div>
    </motion.section>
  )
}
