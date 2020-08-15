import Link from "next/link"
import { motion } from "framer-motion"
import classNames from "classnames"
import styles from "./Header.module.scss"

import * as constants from "@constants"

export default function Header(props) {
  const { isHomePage } = props
  return (
    <motion.div>
      <nav className={classNames(styles["site-hamburger-menu"])}></nav>
      <nav className={classNames(styles["site-nav"])}>
        <div className={classNames(styles["site-logo"])}></div>
        <ul className={classNames(styles["nav-list"])}>
          {Object.keys(constants.NAV_LIST).map((nav, index) => {
            return (
              <li className={classNames(styles["nav-list-item"])} key={index}>
                <Link href={constants.NAV_LIST[nav]} prefetch={false}>
                  <a style={{ color: isHomePage ? "white" : "black" }}>{nav}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </motion.div>
  )
}
