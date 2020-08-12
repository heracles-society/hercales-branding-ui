import { useState, useEffect, useRef } from "react"
import Scrollbar from "smooth-scrollbar"
import debounce from "lodash.debounce"

function useSmoothScrollbar(ref, options = { initialValue: {}, debounceInterval: 10 }) {
  const initialValue = options.initialValue ?? {}
  const offset = initialValue.offset ?? { x: 0, y: 0 }
  const limit = initialValue.limit ?? { x: 0, y: 0 }
  const debounceInterval = options.debounceInterval ?? 10
  const [scrollStatus, setScrollStatus] = useState({
    offset,
    limit,
  })
  const scrollbar = useRef(null)

  useEffect(() => {
    if (!ref) {
      return
    }

    const target = ref.current
    const scrollHandler = debounce(setScrollStatus, debounceInterval)

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
