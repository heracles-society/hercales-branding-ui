import { motion } from "framer-motion"
import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import * as constants from "../../../constants"
import styles from "./Footer.module.scss"

const LogoImage = require("@images/logo.png?placeholder=true&resize&format=webp")

export default function Footer() {
  return (
    <motion.footer className={styles["wrapper"]}>
      <section className={styles["nav-links"]}>
        <div className={styles["logo"]}>
          <Link href="/">
            <a>
              <ProgressiveImage
                src={LogoImage.src}
                srcSetData={{
                  srcSet: LogoImage.srcSet,
                }}
                placeholder={LogoImage.placeholder}
              >
                {(src, _loading, srcSetData) => (
                  <>
                    <motion.img src={src} srcSet={srcSetData.srcSet} sizes="8rem" alt="logo" />
                  </>
                )}
              </ProgressiveImage>
            </a>
          </Link>
        </div>
        <nav className={styles["menu"]}>
          <h5>Menu</h5>
          <ul>
            <li>
              <Link href="/" prefetch={false}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us" prefetch={false}>
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/why-us" prefetch={false}>
                <a>Why us</a>
              </Link>
            </li>
            <li>
              <Link href="/service" prefetch={false}>
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing" prefetch={false}>
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" prefetch={false}>
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" prefetch={false}>
                <a>Request Demo</a>
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles["follow-us"]}>
          <h5>Follow us</h5>
          <ul>
            <li>
              <Link href="/">
                <a>Instagram</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Facebook</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Twitter</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" prefetch={false}>
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" prefetch={false}>
                <a>Diclaimer</a>
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" prefetch={false}>
                <a>Terms and Conditions</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["contact-us"]}>
          <h5>
            Reach us <span>@</span>
          </h5>
          <address>
            <a rel="noreferrer" target="_blank" href="tel:+919599015901">
              Tel: +91-9599015901
            </a>
            <a rel="noreferrer" target="_blank" href="mailto:heraclesteam2020@gmail.com">
              heraclesteam2020@gmail.com
            </a>
            <div>{constants.ADDRESS_2}</div>
            <div>{constants.ADDRESS_1}</div>
          </address>
        </div>
      </section>
      <div className={styles["copyright"]}>
        Copyright © 2020 Heracles India Private Limited - All Rights Reserved. - P.IVA 01287901217
      </div>
    </motion.footer>
  )
}
