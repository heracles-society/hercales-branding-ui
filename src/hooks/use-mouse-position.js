import { useContext } from "react"
import { mousePositionContext } from "@contexts/mouse-position-context"

export const useMousePosition = () => useContext(mousePositionContext)
