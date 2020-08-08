import { motion } from "framer-motion"
import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import * as constants from "../constants"

const forBuilderBackgroundImage = require("@images/for-builders-image.jpg?placeholder=true&resize&format=webp")

export default function ForBuildersPage() {
  return (
    <motion.div>
      <section className="section for-builders">
        <header className="header-wrapper">
          <h2>{constants.BUILDER_TITLE}</h2>
        </header>
        <article className="article-wrapper">
          <h3>{constants.BUILDER_SUBTITLE}</h3>
          <div className="details">
            <p>{constants.BUILDER_DESC}</p>
            <Link href="/for-builders">
              <button>Contact us</button>
            </Link>
          </div>
        </article>
        <div className="background-wrapper">
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
      </section>
    </motion.div>
  )
}
