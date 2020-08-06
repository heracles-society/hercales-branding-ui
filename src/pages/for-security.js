import { motion } from "framer-motion"
import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import * as constants from "../constants"

const forSecurityBackgroundImage = require("@images/for-security.jpeg?placeholder=true&resize&format=webp")

export default function ForSecurityPage() {
  return (
    <motion.div>
      <Link href="/">
        <section className="section for-builders">
          <header className="header-wrapper">
            <h2>{constants.SECURITY_TITLE}</h2>
          </header>
          <article className="article-wrapper">
            <h3>{constants.SECURITY_SUBTITLE}</h3>
            <div className="details">
              <p>{constants.SECURITY_DESC}</p>
              <Link href="/for-builders">
                <button>{constants.CONTACT_US}</button>
              </Link>
            </div>
          </article>
          <div className="background-wrapper">
            <picture>
              <ProgressiveImage
                src={forSecurityBackgroundImage.src}
                srcSetData={{
                  srcSet: forSecurityBackgroundImage.srcSet,
                }}
                placeholder={forSecurityBackgroundImage.placeholder}
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
