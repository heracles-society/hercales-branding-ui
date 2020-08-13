import { motion } from "framer-motion"
import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import * as constants from "../../../../constants"
import styles from "./SecurityProvisionIntro.module.scss"

const forSecurityBackgroundImage = require("@images/for-security.jpeg?placeholder=true&resize&format=webp")

export default function SecurityProvisionIntro() {
  return (
    <motion.div className={styles["wrapper"]}>
      <section className={styles["for-security-provision"]}>
        <header className={styles["header-wrapper"]}>
          <h2>{constants.SECURITY_TITLE}</h2>
        </header>
        <article className={styles["article-wrapper"]}>
          <h3>{constants.SECURITY_SUBTITLE}</h3>
          <div className={styles["details"]}>
            <p>{constants.SECURITY_DESC}</p>
            <Link href="/for-builders">
              <a>Know more</a>
            </Link>
          </div>
        </article>
        <div className={styles["background-wrapper"]}>
          <picture>
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
          </picture>
        </div>
      </section>
    </motion.div>
  )
}
