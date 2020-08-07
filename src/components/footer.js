import { motion } from "framer-motion"
import Link from "next/link"
import ProgressiveImage from "react-progressive-image"
import * as constants from "../constants"

const LogoImage = require("@images/logo.png?placeholder=true&resize&format=webp")

export default function Footer() {
  return (
    <motion.div>
      <footer className="site-footer">
        <div className="wrapper">
          <div className="section">
            <div className="logo">
              <ProgressiveImage
                src={LogoImage.src}
                srcSetData={{
                  srcSet: LogoImage.srcSet,
                }}
                placeholder={LogoImage.placeholder}
              >
                {(src, _loading, srcSetData) => (
                  <>
                    <motion.img src={src} srcSet={srcSetData.srcSet} sizes="8rem, 8rem" alt="logo" />
                  </>
                )}
              </ProgressiveImage>
            </div>
            <div
              style={{
                marginLeft: "-2rem",
                width: "80%",
                lineHeight: "1.5rem",
                textDecoration: "none",
                marginBottom: "28px",
                color: "white",
              }}
            >
              Need more information, chat with HERACLES support team or click on REQUEST DEMO.
            </div>
            <div
              style={{
                marginLeft: "-2rem",
                width: "80%",
                lineHeight: "1.5rem",
                textDecoration: "none",
                marginBottom: "28px",
                color: "white",
              }}
            >
              Tel: +91-9599015901
            </div>
            <div
              style={{
                marginLeft: "-2rem",
                width: "80%",
                lineHeight: "1.5rem",
                textDecoration: "none",
                marginBottom: "28px",
                color: "white",
              }}
            >
              mail to: heraclesteam2020@gmail.com
            </div>
          </div>
          <div className="section">
            <div style={{ fontSize: "1.5rem", textDecoration: "none", textTransform: "uppercase", color: "white" }}>
              <bold>Menu</bold>
            </div>
            <div>
              <Link href="/">
                <a style={{ textdecoration: "none" }}>Home</a>
              </Link>
            </div>
            <div>
              <Link href="/about-us">
                <a>About us</a>
              </Link>
            </div>
            <div>
              <Link href="/why-us">
                <a>Why us</a>
              </Link>
            </div>
            <div>
              <Link href="/service">
                <a>Services</a>
              </Link>
            </div>
            <div>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </div>
            <div>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </div>
            <div>
              <div>Request Demo</div>
            </div>
          </div>

          <div className="section">
            <div style={{ fontSize: "1.5rem", textDecoration: "none", textTransform: "uppercase", color: "white" }}>
              <bold>Contact us</bold>
            </div>
            <address>{constants.ADDRESS_2}</address>
            <address>{constants.ADDRESS_1}</address>
            <Link href="/contact-us">
              <button>{constants.CONTACT_US}</button>
            </Link>
          </div>

          <div className="section" style={{ marginLeft: "13rem" }}>
            <div style={{ fontSize: "1.5rem", textDecoration: "none", textTransform: "uppercase", color: "white" }}>
              <bold>Follow us</bold>
            </div>
            <div>
              <div>Instagram</div>
            </div>
            <div>
              <div>Facebook</div>
            </div>
            <div>
              <div>Twitter</div>
            </div>
            <div style={{ fontSize: "1.5rem", textDecoration: "none", textTransform: "uppercase", color: "white" }}>
              <bold>Policy</bold>
            </div>
            <div>
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </div>
            <div>
              <Link href="/disclaimer">
                <a>Diclaimer</a>
              </Link>
            </div>
            <div>
              <Link href="/terms-and-conditions">
                <a>Terms and Conditions</a>
              </Link>
            </div>
          </div>

          <div className="copyright">
            Copyright © 2020 Heracles India Private Limited - All Rights Reserved. - P.IVA 01287901217
          </div>
        </div>
      </footer>
    </motion.div>
  )
}
