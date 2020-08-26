import { useReducer, useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import classNames from "classnames"
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

const lineBackgroundVariant = {
  initial: ({ direction }) => ({
    [direction]: "18px",
  }),
  animate: ({ idx: i, direction }) => ({
    [direction]: "0px",
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: [0.95, 0.05, 0.795, 0.035],
    },
  }),
  exit: ({ idx: i, direction }) => ({
    [direction]: "18px",
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      when: "afterChildren",
      delayChildren: 0.2,
      ease: [0.95, 0.05, 0.795, 0.035],
    },
  }),
}

const lineForegroundVariant = {
  exit: ({ direction }) => ({
    [direction]: "18px",
    transition: {
      ease: [0.95, 0.05, 0.795, 0.035],
    },
  }),
}

const useMousePosition = () => {
  const [state, setState] = useState({
    screenX: NaN,
    screenY: NaN,
    clientX: NaN,
    clientY: NaN,
    pageX: NaN,
    pageY: NaN,
  })

  useEffect(() => {
    const moveHandler = (event) => {
      const { screenX, screenY, clientX, clientY, pageX, pageY } = event
      setState({ screenX, screenY, clientX, clientY, pageX, pageY })
    }
    document.addEventListener("mousemove", moveHandler)
    return () => {
      document.removeEventListener("mousemove", moveHandler)
    }
  }, [])

  return state
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

  const toggleMenu = () => setHeaderState({ type: "SET_MENU_STATE", payload: { open: !headerState["menuOpened"] } })

  useEffect(() => {
    const newHeaderState = {
      translateX: 0,
      translateY: 0,
      active: false,
    }
    const rect = navRef.current.getBoundingClientRect()
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(
      mousePos.pageX,
      mousePos.pageY,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
    )
    // new values for the translations
    if (distanceMouseButton < rect.width * 2) {
      newHeaderState["translateX"] = (mousePos.pageX - (rect.left + rect.width / 2)) * 0.3
      newHeaderState["translateY"] = (mousePos.pageY - (rect.top + rect.height / 2)) * 0.3
      newHeaderState["active"] = true
    }

    animationControl.stop()
    animationControl.start({ translateX: newHeaderState["translateX"], translateY: newHeaderState["translateY"] })

    setHeaderState({ type: "SET_DATA", payload: { data: newHeaderState } })
  }, [mousePos.pageX, mousePos.pageY])

  return (
    <motion.nav
      onClick={toggleMenu}
      ref={navRef}
      animate={animationControl}
      className={classNames({
        [styles["burger-menu"]]: true,
        [styles["burger-menu--active"]]: headerState["active"],
      })}
    >
      <AnimatePresence exitBeforeEnter>
        {headerState["menuOpened"] === true ? (
          <motion.div
            key="menu--opened"
            className={classNames(styles["menu"], styles["menu--opened"])}
            animate="animate"
            initial="initial"
            exit="exit"
            whileHover="hover"
          >
            <motion.div className={styles["line"]}>
              <motion.div
                custom={{ idx: 0, direction: "y" }}
                variants={lineBackgroundVariant}
                className={styles["line--background"]}
              >
                <motion.div custom={{ direction: "y" }} className={styles["line--foreground"]}></motion.div>
              </motion.div>
            </motion.div>
            <motion.div className={styles["line"]}>
              <motion.div
                custom={{ idx: 1, direction: "y" }}
                variants={lineBackgroundVariant}
                className={styles["line--background"]}
              >
                <motion.div custom={{ direction: "y" }} className={styles["line--foreground"]}></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="menu--closed"
            className={classNames(styles["menu"], styles["menu--closed"])}
            animate="animate"
            initial="initial"
            exit="exit"
            whileHover="hover"
          >
            <motion.div className={styles["line"]}>
              <motion.div
                custom={{ idx: 0, direction: "x" }}
                variants={lineBackgroundVariant}
                className={styles["line--background"]}
              >
                <motion.div
                  custom={{ direction: "x" }}
                  variants={lineForegroundVariant}
                  className={styles["line--foreground"]}
                ></motion.div>
              </motion.div>
            </motion.div>
            <motion.div className={styles["line"]}>
              <motion.div
                custom={{ idx: 1, direction: "x" }}
                variants={lineBackgroundVariant}
                className={styles["line--background"]}
              >
                <motion.div
                  custom={{ direction: "x" }}
                  variants={lineForegroundVariant}
                  className={styles["line--foreground"]}
                ></motion.div>
              </motion.div>
            </motion.div>
            <motion.div className={styles["line"]}>
              <motion.div
                custom={{ idx: 2, direction: "x" }}
                variants={lineBackgroundVariant}
                className={styles["line--background"]}
              >
                <motion.div
                  custom={{ direction: "x" }}
                  variants={lineForegroundVariant}
                  className={styles["line--foreground"]}
                ></motion.div>
              </motion.div>
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
