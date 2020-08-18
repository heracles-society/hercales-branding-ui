import React, { useState } from "@components/Pricing/node_modules/react"
import HeaderPage from "../Navigation/Header"
import * as constants from "../../constants"

export default function Pricing() {
  const [selected, setSelected] = useState(constants.PRICING_OPTION[0])
  const [facilities, setFacility] = useState(constants.PRICING_FACILITY[0]["Basic"])
  const [cost, setCost] = useState(constants.PRICING_COST[0])

  const setPlanSelections = (index) => {
    setSelected(constants.PRICING_OPTION[index])
    setFacility(constants.PRICING_FACILITY[0][constants.PRICING_OPTION[index]])
    setCost(constants.PRICING_COST[index])
  }
  return (
    <div className="pricing">
      <div className="image-container"></div>
      <HeaderPage isHomePage={false} />
      <div className="modal">
        <div className="list">
          <ul className="list-items">
            {constants.PRICING_OPTION.map((plan, index) => {
              return (
                <li
                  key={index}
                  className="list-item"
                  style={{ color: selected === plan ? "#05a8aa" : "black" }}
                  onClick={() => setPlanSelections(index)}
                >
                  {selected === plan ? `✓  ${plan}` : plan}
                </li>
              )
            })}
          </ul>
          <span className="drawer" />
          <span className="help">{constants.PRICING_HELP}</span>
        </div>
        <div className="detail">
          <h1 className="cost">{cost}</h1>
          {Object.keys(facilities).map((facility, index) => {
            return (
              <div key={index} className="facility">
                {facilities[facility] ? `✓  ${facility}` : `x  ${facility}`}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
