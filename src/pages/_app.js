import "../styles/app.scss"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const easing = [0.6, -0.05, 0.01, 0.99]
const slideUp = {
  initial: {
    transform: "translateY(100%)",
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
  animate: {
    transform: "translateY(0%)",
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
}

const slideDown = {
  initial: {
    transform: "translateY(-2000px)",
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
  animate: {
    transform: "translateY(0%)",
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialRender, setInitialRender] = useState(true)
  const [canScroll, setCanScroll] = useState()

  const clearScroll = () => setCanScroll(true)
  useEffect(() => {
    if (canScroll) {
      document.querySelector("body").classList.remove("no-scroll")
    } else {
      document.querySelector("body").classList.add("no-scroll")
    }
  }, [canScroll])

  useEffect(() => {
    if (loading || initialRender) {
      setCanScroll(false)
    }
  }, [loading, initialRender])

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  })

  return (
    <>
      <div className="app">
        <AnimatePresence>{loading === false && <Component key="component" {...pageProps} />}</AnimatePresence>
      </div>
      <AnimatePresence exitBeforeEnter onExitComplete={clearScroll}>
        {loading && (
          <motion.div
            key="app-transition-scene"
            className="app-intro-screen"
            variants={slideUp}
            initial="initial"
            animate="animate"
            exit="initial"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <motion.div
              variants={slideDown}
              initial="initial"
              animate="animate"
              exit="initial"
              style={{ background: "red", height: "100px", width: "100px", borderRadius: "5px" }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {initialRender && (
          <motion.div
            key="app-intro-scene"
            className="app-intro-screen"
            variants={slideUp}
            initial={{
              transform: "translateY(0%)",
            }}
            animate="animate"
            exit="initial"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <motion.div
              onAnimationComplete={() => requestAnimationFrame(() => setInitialRender(false))}
              variants={slideDown}
              initial="initial"
              animate="animate"
              exit="initial"
              style={{ background: "red", height: "100px", width: "100px", borderRadius: "5px" }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MyApp
