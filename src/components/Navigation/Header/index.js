import { useReducer, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import classNames from "classnames"

import { useMousePosition } from "@hooks/use-mouse-position"
import { easingValues } from "@constants"
import { useRef } from "react"

import styles from "./Header.module.scss"

const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2
  var b = y1 - y2

  return Math.hypot(a, b)
}

const navPositionsReducer = (state, action) => {
  switch (action.type) {
    case "SET_HOVER":
      return {
        ...state,
        hover: action.payload.hover,
      }
    case "SET_MENU_STATE":
      return {
        ...state,
        menuOpened: action.payload.open,
      }
    case "SET_DATA":
      return {
        ...state,
        ...action.payload.data,
      }

    default:
      throw new Error("Unknown action.type")
  }
}

export default function Header() {
  const navRef = useRef()
  const mousePos = useMousePosition()
  const [headerState, setHeaderState] = useReducer(navPositionsReducer, {
    menuOpened: false,
    translateX: 0,
    translateY: 0,
    active: false,
    hover: false,
  })
  const animationControl = useAnimation()
  const hoverAnimationControl = useAnimation()

  const toggleMenu = () => setHeaderState({ type: "SET_MENU_STATE", payload: { open: !headerState["menuOpened"] } })

  useEffect(() => {
    const newHeaderState = {
      translateX: 0,
      translateY: 0,
      active: false,
    }
    const rect = navRef.current.getBoundingClientRect()
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(mousePos.x, mousePos.y, rect.left + rect.width / 2, rect.top + rect.height / 2)
    // new values for the translations
    if (distanceMouseButton < rect.width * 2) {
      newHeaderState["translateX"] = (mousePos.x - (rect.left + rect.width / 2)) * 0.3
      newHeaderState["translateY"] = (mousePos.y - (rect.top + rect.height / 2)) * 0.3
      newHeaderState["active"] = true
    }

    // animationControl.stop()
    // animationControl.start({ translateX: newHeaderState["translateX"], translateY: newHeaderState["translateY"] })

    setHeaderState({ type: "SET_DATA", payload: { data: newHeaderState } })
  }, [mousePos.x, mousePos.y])

  useEffect(() => {
    hoverAnimationControl.stop()
    if (headerState["hover"]) {
      hoverAnimationControl.start("animate")
    } else {
      hoverAnimationControl.start("initial")
    }
  }, [headerState["hover"]])

  return (
    <motion.nav
      onClick={toggleMenu}
      ref={navRef}
      initial={false}
      animate={animationControl}
      transition={{ ease: easingValues["ease-3"], duration: 0.6 }}
      onHoverEnd={() => setHeaderState({ type: "SET_HOVER", payload: { hover: false } })}
      onHoverStart={() => setHeaderState({ type: "SET_HOVER", payload: { hover: true } })}
      className={classNames({
        [styles["burger-menu"]]: true,
        [styles["burger-menu--active"]]: headerState["active"],
        [styles["burger-menu--hover"]]: headerState["hover"],
      })}
    >
      <AnimatePresence exitBeforeEnter>
        {headerState["menuOpened"] === true ? (
          <motion.div
            key="menu--opened"
            className={classNames({
              [styles["menu"]]: true,
              [styles["menu--opened"]]: true,
            })}
          >
            <motion.div className={styles["line-wrap"]}>
              <motion.div
                className={classNames(styles["line"], styles["line--background"])}
                initial="initial"
                exit="exit"
                animate="animate"
                variants={{
                  exit: { y: "100%" },
                  initial: { y: "100%" },
                  animate: { y: 0 },
                }}
                transition={{ delay: 0.2, duration: 0.4, ease: easingValues["ease-3"] }}
              ></motion.div>
              <motion.div
                className={classNames(styles["line"], styles["line--foreground"])}
                animate={hoverAnimationControl}
                variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
                transition={{ delay: 0.2, duration: 0.2, ease: easingValues["ease-1"] }}
              ></motion.div>
            </motion.div>
            <motion.div className={styles["line-wrap"]}>
              <motion.div
                className={classNames(styles["line"], styles["line--background"])}
                initial="initial"
                exit="exit"
                animate="animate"
                variants={{
                  exit: { y: "100%" },
                  initial: { y: "100%" },
                  animate: { y: 0 },
                }}
                transition={{ delay: 0.2, duration: 0.4, ease: easingValues["ease-3"] }}
              ></motion.div>
              <motion.div
                className={classNames(styles["line"], styles["line--foreground"])}
                animate={hoverAnimationControl}
                variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
                transition={{ delay: 0.2, duration: 0.2, ease: easingValues["ease-1"] }}
              ></motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="menu--closed"
            className={classNames({
              [styles["menu"]]: true,
              [styles["menu--closed"]]: true,
            })}
            initial="initial"
            animate="animate"
            exit="initial"
            variants={{
              initial: { opacity: 0.9, transition: { when: "afterChildren" } },
              animate: { opacity: 1, transition: { when: "beforeChildren" } },
            }}
            transition={{ duration: 0.4, staggerChildren: 0.2 }}
          >
            <motion.div
              className={styles["line-wrap"]}
              initial="initial"
              animate="animate"
              exit="initial"
              variants={{ initial: { scaleX: 0, transition: { when: "afterChildren" } }, animate: { scaleX: 1 } }}
              transition={{ duration: 0.4, ease: easingValues["ease-3"] }}
            >
              <motion.div
                initial="initial"
                animate={hoverAnimationControl}
                variants={{ initial: { x: "-100%" }, animate: { x: 0 } }}
                transition={{ duration: 0.4, ease: easingValues["ease-3"] }}
                className={styles["line"]}
              ></motion.div>
            </motion.div>
            <motion.div
              className={styles["line-wrap"]}
              initial="initial"
              animate="animate"
              exit="initial"
              variants={{ initial: { scaleX: 0, transition: { when: "afterChildren" } }, animate: { scaleX: 1 } }}
              transition={{ duration: 0.4, ease: easingValues["ease-3"] }}
            >
              <motion.div
                initial="initial"
                animate={hoverAnimationControl}
                variants={{ initial: { x: "-100%" }, animate: { x: 0 } }}
                transition={{ delay: 0.1, duration: 0.4, ease: easingValues["ease-3"] }}
                className={styles["line"]}
              ></motion.div>
            </motion.div>
            <motion.div
              className={styles["line-wrap"]}
              initial="initial"
              animate="animate"
              exit="initial"
              variants={{ initial: { scaleX: 0, transition: { when: "afterChildren" } }, animate: { scaleX: 1 } }}
              transition={{ duration: 0.4, ease: easingValues["ease-3"] }}
            >
              <motion.div
                initial="initial"
                animate={hoverAnimationControl}
                variants={{ initial: { x: "-100%" }, animate: { x: 0 } }}
                transition={{ delay: 0.2, duration: 0.4, ease: easingValues["ease-3"] }}
                className={styles["line"]}
              ></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <svg className={styles["frame"]} height="100%" width="100%">
        <line x1="0" y1="0" x2="240" y2="0" />
        <line x1="60" y1="0" x2="60" y2="240" />
        <line x1="60" y1="60" x2="-180" y2="60" />
        <line x1="0" y1="60" x2="0" y2="-180" />
      </svg>
    </motion.nav>
  )
}
