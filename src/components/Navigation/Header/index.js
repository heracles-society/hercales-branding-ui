import { useReducer, useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import classNames from "classnames"
import styles from "./Header.module.scss"
import Link from "next/link"
import { easingValues } from "@constants"

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

const slideUp = {
  initial: {
    transform: "translateY(120px)",
    opacity: 0,
    transition: {
      duration: 1,
      ease: easingValues["ease-1"],
    },
  },
  exit: {
    transform: "translateY(120px)",
    opacity: 0,
    transition: {
      duration: 1,
      ease: easingValues["ease-1"],
    },
  },
  animate: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: {
      duration: 1,
      ease: easingValues["ease-1"],
    },
  },
}

const slideDown = {
  initial: {
    transform: "translateY(-100%)",
    transition: {
      duration: 0.45,
      ease: [0.95, 0.05, 0.795, 0.035],
    },
  },
  exit: {
    transform: "translateY(-100%)",
    transition: {
      duration: 0.45,
      ease: [0.95, 0.05, 0.795, 0.035],
    },
  },
  animate: {
    transform: "translateY(0%)",
    transition: {
      duration: 0.45,
      ease: [0.95, 0.05, 0.795, 0.035],
    },
  },
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
    <motion.header>
      <motion.nav
        animate={animationControl}
        onClick={toggleMenu}
        ref={navRef}
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
      <AnimatePresence>
        {headerState["menuOpened"] === true && (
          <motion.section
            className={styles["section--site-nav"]}
            key="nav--menu-opened"
            animate="animate"
            initial="initial"
            exit="exit"
            variants={{
              ...slideDown,
              animate: {
                transform: "translateY(0%)",
                transition: {
                  delayChildren: 0.15,
                  duration: 0.45,
                  ease: [0.95, 0.05, 0.795, 0.035],
                },
              },
            }}
          >
            <motion.nav
              className={styles["site-nav"]}
              variants={{
                ...slideDown,
                animate: {
                  transform: "translateY(0%)",
                  transition: {
                    delayChildren: 1,
                    staggerChildren: 0.15,
                    duration: 0.45,
                    ease: [0.95, 0.05, 0.795, 0.035],
                  },
                },
              }}
            >
              <motion.ul
                className={styles["nav--links"]}
                initial="initial"
                animate="animate"
                variants={{
                  ...slideUp,
                  animate: {
                    opacity: 1,
                    transform: "translateY(0%)",
                    transition: {
                      staggerChildren: 0.15,
                      duration: 0.15,
                      ease: [0.95, 0.05, 0.795, 0.035],
                    },
                  },
                }}
              >
                <motion.li variants={slideUp}>
                  <Link href="/" prefetch={false}>
                    <a data-content="Home">Home</a>
                  </Link>
                </motion.li>
                <motion.li variants={slideUp}>
                  <Link href="/about-us" prefetch={false}>
                    <a data-content="About us">About us</a>
                  </Link>
                </motion.li>
                <motion.li variants={slideUp}>
                  <Link href="/why-us" prefetch={false}>
                    <a data-content="Why us">Why us</a>
                  </Link>
                </motion.li>
                <motion.li variants={slideUp}>
                  <Link href="/service" prefetch={false}>
                    <a data-content="Services">Services</a>
                  </Link>
                </motion.li>
                <motion.li variants={slideUp}>
                  <Link href="/pricing" prefetch={false}>
                    <a data-content="Pricing">Pricing</a>
                  </Link>
                </motion.li>
                <motion.li variants={slideUp}>
                  <Link href="/contact-us" prefetch={false}>
                    <a data-content="Contact Us">Contact Us</a>
                  </Link>
                </motion.li>
                <motion.li variants={slideUp}>
                  <Link href="/contact-us" prefetch={false}>
                    <a data-content="Request Demo">Request Demo</a>
                  </Link>
                </motion.li>
              </motion.ul>
              <motion.div className={styles["nav--details"]} variants={slideUp}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus saepe voluptatem!
                  Modi neque, nulla ad aperiam accusamus minima cupiditate, ex error voluptate, similique at doloremque
                  quis totam eos sit.
                </p>
              </motion.div>
            </motion.nav>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
