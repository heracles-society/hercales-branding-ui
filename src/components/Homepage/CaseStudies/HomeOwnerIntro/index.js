import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import { motion } from "framer-motion"
import styles from "./HomeOwnerIntro.module.scss"
import * as constants from "@constants"

const forOwnersBackgroundImage = require("@images/for-owners-image.jpg?placeholder=true&resize&format=webp")

export default function ForHomeOwnersPage() {
  return (
    <motion.section className={styles["wrapper"]}>
      <div className={styles["for-home-owners"]}>
        <header className={styles["header-wrapper"]}>
          <h2>{constants.OWNER_TITLE}</h2>
        </header>
        <article className={styles["article-wrapper"]}>
          <div className={styles["article-background"]}></div>
          <h3>{constants.OWNER_SUBTITLE}</h3>
          <div className={styles["details"]}>
            <p>{constants.OWNER_DESCRIPTION}</p>
            <Link href="/for-home-owners">
              <button>Know more</button>
            </Link>
          </div>
        </article>
        <div className={styles["image-wrapper"]}>
          <picture>
            <ProgressiveImage
              src={forOwnersBackgroundImage.src}
              srcSetData={{
                srcSet: forOwnersBackgroundImage.srcSet,
                sizes: "30vw",
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
        </div>
      </div>
    </motion.section>
  )
}
