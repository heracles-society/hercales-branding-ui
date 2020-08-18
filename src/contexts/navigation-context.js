import { createContext, useReducer, useRef } from "react"

export const navigationContext = createContext()
const { Provider } = navigationContext
const stateReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload.theme,
      }
    default:
      throw new Error("Type unsupported in Navigation context")
  }
}

export const NavigationContextProvider = (props) => {
  const navRef = useRef(null)
  const [state, dispatch] = useReducer(stateReducer, { theme: "light" })
  return <Provider value={{ state, dispatch, navRef }} {...props}></Provider>
}
