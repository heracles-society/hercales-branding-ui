import { useState, useEffect, useRef } from "react"
import Scrollbar from "smooth-scrollbar"
import debounce from "lodash.debounce"

function useSmoothScrollbar(
  ref,
  options = {
    initialValue: {
      offset: {
        x: 0,
        y: 0,
      },
      limit: {
        x: 0,
        y: 1,
      },
    },
    debounceInterval: 6,
  },
) {
  const [scrollStatus, setScrollStatus] = useState(options.initialValue)
  const scrollbar = useRef(null)

  useEffect(() => {
    if (!ref) {
      return
    }

    const target = ref.current
    const scrollHandler = debounce(setScrollStatus, options.debounceInterval)

    const currentScrollbar = Scrollbar.init(target)
    currentScrollbar.addListener(scrollHandler)
    scrollbar.current = currentScrollbar

    return () => {
      currentScrollbar.removeListener(scrollHandler)
      Scrollbar.destroy(target)
    }
  }, [])

  return [scrollStatus, scrollbar.current]
}

export default useSmoothScrollbar
