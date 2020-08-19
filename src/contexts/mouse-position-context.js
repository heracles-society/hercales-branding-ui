import { createContext, useEffect, useState, useRef } from "react"
export const mousePositionContext = createContext({ x: 0, y: 0 })
const MousePostionProvider = mousePositionContext.Provider

// Gets the mouse position
export const getMousePos = (e) => {
  let posX = 0
  let posY = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posX = e.pageX
    posY = e.pageY
  } else if (e.clientX || e.clientY) {
    posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }

  return { x: posX, y: posY }
}

export function MousePositionContextProvider(props) {
  const [state, setState] = useState({ x: 0, y: 0 })
  const debouncedUpdateMousePosition = useRef((e) => {
    const currentMousePosition = getMousePos(e)
    setState(currentMousePosition)
  })
  useEffect(() => {
    window.addEventListener("mousemove", debouncedUpdateMousePosition.current)
    return () => {
      window.removeEventListener("mousemove", debouncedUpdateMousePosition.current)
    }
  })

  return <MousePostionProvider value={state}>{props.children}</MousePostionProvider>
}

export default MousePositionContextProvider
