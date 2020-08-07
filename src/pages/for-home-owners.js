import { motion } from "framer-motion"
import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import * as constants from "../constants"

const forOwnersBackgroundImage = require("@images/for-owners-image.jpg?placeholder=true&resize&format=webp")

export default function ForHomeOwnersPage() {
  return (
    <motion.div>
      <Link href="/">
        <section className="section for-home-owners">
          <header className="header-wrapper">
            <h2>{constants.OWNER_TITLE}</h2>
          </header>
          <article className="article-wrapper">
            <div className="article-background"></div>
            <h3>{constants.OWNER_SUBTITLE}</h3>
            <div className="details">
              <p>{constants.OWNER_DESCRIPTION}</p>
              <Link href="/for-home-owners">
                <button>{constants.CONTACT_US}</button>
              </Link>
            </div>
          </article>
          <div className="image-wrapper">
            <picture className="image-background">
              <ProgressiveImage
                src={forOwnersBackgroundImage.src}
                srcSetData={{
                  srcSet: forOwnersBackgroundImage.srcSet,
                }}
                placeholder={forOwnersBackgroundImage.placeholder}
              >
                {(src, _loading, srcSetData) => (
                  <>
                    <motion.img
                      src={src}
                      srcSet={srcSetData.srcSet}
                      sizes="(min-width: 1024px) 1024px, 100vw"
                      alt="an image"
                    />
                  </>
                )}
              </ProgressiveImage>
            </picture>
          </div>
        </section>
      </Link>
    </motion.div>
  )
}
