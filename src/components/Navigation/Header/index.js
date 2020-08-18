import { motion } from "framer-motion"
import classNames from "classnames"
import styles from "./Header.module.scss"

import { useContext } from "react"
import { navigationContext } from "contexts/navigation-context"

export default function Header() {
  const { navRef, state: navState } = useContext(navigationContext)
  const { theme } = navState
  return (
    <nav
      className={classNames({
        [styles["burger-menu"]]: true,
        [styles["burger-menu--dark"]]: theme === "dark",
        [styles["burger-menu--light"]]: theme === "light",
      })}
    >
      <div ref={navRef} className={styles["background"]}>
        <motion.div className={styles["top"]}></motion.div>
        <div className={styles["bottom"]}></div>
      </div>
      <div className={styles["menu-open"]}>
        <div className={styles["line-wrap"]}>
          <span className={styles["line"]} />
        </div>
        <div className={styles["line-wrap"]}>
          <span className={styles["line"]} />
        </div>
        <div className={styles["line-wrap"]}>
          <span className={styles["line"]} />
        </div>
      </div>
      <div className={styles["menu-close"]}>
        <span className={styles["line-1"]} />
        <span className={styles["line-2"]} />
      </div>
      <div className={styles["menu-border"]}>
        <div className={styles["border"]}></div>
        <div className={styles["border"]}></div>
        <div className={styles["border"]}></div>
        <div className={styles["border"]}></div>
      </div>
    </nav>
  )
}
