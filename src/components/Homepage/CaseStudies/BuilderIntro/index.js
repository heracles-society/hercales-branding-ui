import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import { motion } from "framer-motion"

import styles from "./BuilderIntro.module.scss"
import * as constants from "@constants"

const forBuilderBackgroundImage = require("@images/for-builders-image.jpg?placeholder=true&resize&format=webp")

export default function ForBuildersPage() {
  return (
    <motion.section className={styles["wrapper"]}>
      <div className={styles["for-builders"]}>
        <header className={styles["header-wrapper"]}>
          <h2>{constants.BUILDER_TITLE}</h2>
        </header>
        <article className={styles["article-wrapper"]}>
          <h3>{constants.BUILDER_SUBTITLE}</h3>
          <div className={styles["details"]}>
            <p>{constants.BUILDER_DESC}</p>
            <Link href="/for-builders">
              <a>Know more</a>
            </Link>
          </div>
          <div className={styles["features"]}>
            <ul>
              <li>Project management</li>
              <li>Inventory management</li>
              <li>Event management</li>
              <li>Banking facilities</li>
            </ul>
          </div>
        </article>
        <div className={styles["background-wrapper"]}>
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
        </div>
      </div>
    </motion.section>
  )
}
