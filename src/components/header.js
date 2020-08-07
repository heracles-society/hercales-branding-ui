import { motion } from "framer-motion"
import Link from "next/link"
import * as constants from "../constants"

export default function HeaderPage(props) {
  const { isHomePage } = props
  return (
    <motion.div>
      <Link href="/">
        <nav className="site-nav">
          <div className="site-logo"></div>
          <ul className="nav-list">
            {Object.keys(constants.NAV_LIST).map((nav, index) => {
              return (
                <li className="nav-list-item" key={index}>
                  <Link href={constants.NAV_LIST[nav]}>
                    <a style={{ color: isHomePage ? "white" : "black" }}>{nav}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Link>
    </motion.div>
  )
}
