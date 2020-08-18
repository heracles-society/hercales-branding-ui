import { useState, useEffect } from "react"
import debounce from "lodash.debounce"

export default function useOverlapObserver(sourceRef, targetRef, options = {}) {
  const { scrollRef, smoothScrollRef } = options
  const [overlap, setOverlap] = useState(false)
  useEffect(() => {
    if (!sourceRef.current || !targetRef.current) {
      return
    }

    if (scrollRef === null || (scrollRef && !scrollRef.current)) {
      return
    }

    if (smoothScrollRef === null) {
      return
    }

    const isOverlaping = () => {
      let overlap = false
      const {
        left: sourceLeft,
        right: sourceRight,
        top: sourceTop,
        bottom: sourceBottom,
      } = sourceRef.current.getBoundingClientRect()
      const {
        left: targetLeft,
        right: targetRight,
        top: targetTop,
        bottom: targetBottom,
      } = targetRef.current.getBoundingClientRect()

      overlap = !(
        sourceRight < targetLeft ||
        sourceLeft > targetRight ||
        sourceBottom < targetTop ||
        sourceTop > targetBottom
      )

      setOverlap(overlap)
    }

    const debouncedHandler = debounce(isOverlaping, 10)

    let scrollTarget = scrollRef ? scrollRef.current : document
    if (smoothScrollRef) {
      smoothScrollRef.addListener(debouncedHandler)
    } else if (scrollTarget) {
      scrollTarget.addEventListener("scroll", debouncedHandler)
    }

    return () => {
      if (smoothScrollRef) {
        smoothScrollRef.removeListener(debouncedHandler)
      } else {
        scrollTarget.removeEventListener("scroll", debouncedHandler)
      }
    }
  }, [sourceRef, targetRef, scrollRef])

  return overlap
}
