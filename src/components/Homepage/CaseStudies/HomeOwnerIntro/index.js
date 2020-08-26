import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styles from "./HomeOwnerIntro.module.scss"
import * as constants from "@constants"
import { useEffect, useContext, useRef } from "react"
import { navigationContext } from "contexts/navigation-context"
import useOverlapObserver from "@hooks/use-overlap-observer"

const forOwnersBackgroundImage = require("@images/for-owners-image.jpg?placeholder=true&resize&format=webp")

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

export default function ForHomeOwnersPage(props) {
  const control = useAnimation()
  const backgroundRef = useRef()
  const { navRef, dispatch: dispatchNavEvent } = useContext(navigationContext)

  const isOverlaping = useOverlapObserver(backgroundRef, navRef, {
    smoothScrollRef: props.scrollRef,
  })

  const [inViewRef, inView] = useInView({
    rootMargin: "-25% 0px",
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      control.start("animate")
    }
  }, [inView])

  useEffect(() => {
    dispatchNavEvent({
      type: "SET_THEME",
      payload: {
        theme: isOverlaping ? "dark" : "light",
      },
    })
  }, [isOverlaping])

  return (
    <motion.section ref={inViewRef} animate={control} className={styles["wrapper"]}>
      <motion.div
        initial="initial"
        variants={slideRevealVariants.up}
        transition={{ duration: 0.1, staggerChildren: 0.4 }}
        className={styles["for-home-owners"]}
      >
        <motion.div
          ref={backgroundRef}
          className={styles["article-background"]}
          initial="initial"
          transition={{ ease: constants.easingValues["ease-1"], duration: 1.5 }}
          variants={slideRevealVariants.right}
        />
        <motion.div
          className={styles["image-wrapper"]}
          initial="initial"
          transition={{ ease: constants.easingValues["ease-1"], duration: 0.6 }}
          variants={slideRevealVariants.left}
        >
          <picture>
            <ProgressiveImage
              src={forOwnersBackgroundImage.src}
              srcSetData={{
                srcSet: forOwnersBackgroundImage.srcSet,
                sizes: "60vw",
              }}
              placeholder={forOwnersBackgroundImage.placeholder}
            >
              {(src, _loading, srcSetData) => (
                <>
                  <motion.img src={src} srcSet={srcSetData.srcSet} sizes={srcSetData.sizes} alt="an image" />
                </>
              )}
            </ProgressiveImage>
          </picture>
        </motion.div>

        <header className={styles["header-wrapper"]}>
          <motion.h2
            transition={{ ease: constants.easingValues["ease-1"], duration: 1 }}
            variants={slideRevealVariants.up}
            initial="initial"
          >
            {constants.OWNER_TITLE}
          </motion.h2>
        </header>
        <article className={styles["article-wrapper"]}>
          <motion.h3
            className={styles["article-title"]}
            transition={{ ease: constants.easingValues["ease-1"], duration: 1.5 }}
            initial="initial"
            variants={slideRevealVariants.right}
          >
            {constants.OWNER_SUBTITLE}
          </motion.h3>
          <div className={styles["details"]}>
            <motion.p
              variants={slideRevealVariants.right}
              transition={{ ease: constants.easingValues["ease-2"], duration: 1 }}
              initial="initial"
            >
              {constants.OWNER_DESCRIPTION}
            </motion.p>
            <Link href="/for-home-owners">
              <motion.button
                variants={slideRevealVariants.right}
                transition={{ ease: constants.easingValues["ease-2"], duration: 0.5 }}
                initial="initial"
              >
                Know more
              </motion.button>
            </Link>
          </div>
        </article>
      </motion.div>
    </motion.section>
  )
}
