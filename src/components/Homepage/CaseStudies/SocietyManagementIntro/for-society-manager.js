import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import * as constants from "../../../../constants"

export default function ForSocietyManagerPage() {
  const [svgDurations] = useState({
    pathOne: Math.floor(Math.random() * 6 + 16),
    pathTwo: Math.floor(Math.random() * 13 + 10),
    pathThree: Math.floor(Math.random() * 20 + 11),
    pathFour: Math.floor(Math.random() * 10 + 5),
  })
  return (
    <motion.div>
      <Link href="/">
        <section className="section for-renters">
          <header className="header-wrapper">
            <h2>{constants.MANAGER_TITLE}</h2>
          </header>
          <article className="article-wrapper">
            <div className="article-background"></div>
            <h3>{constants.MANAGER_SUBTITLE}</h3>
            <div className="details">
              <p>{constants.MANAGER_DESC}</p>
              <Link href="/for-renters">
                <button>{constants.CONTACT_US}</button>
              </Link>
            </div>
          </article>
          <div className="image-wrapper">
            <motion.svg className="scene" width="100%" preserveAspectRatio="none" viewBox="0 0 1440 800">
              <motion.path
                animate={{
                  d:
                    "M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1576,704.7 1517,625.7 1459,514.7 1418,419.4 1430,288.5 1382,187 1349,116.3 1296,54.47 1240,0.3429 1205,-33.51 1120,-83.59 1120,-83.59 1120,-83.59 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z",
                  transition: {
                    duration: svgDurations.pathOne,
                    yoyo: Infinity,
                  },
                }}
                d="M -84.52,-81.13 C -94.62,-73.4 -88.88,-59.55 -90.33,-48.91 -89.29,27.31 -89.61,103.5 -88.33,179.8 -85.99,416.1 -81.32,888.9 -81.32,888.9 -81.32,888.9 974.5,888.7 1587,891.9 1518,719.9 1487,644 1429,533 1388,437.7 1447,259.7 1400,187 1362,132 1270,90.53 1207,39.93 1161,2.932 1071,-74.45 1071,-74.45 1071,-74.45 914.5,-77.77 848.2,-80.17 537.6,-80.84 227,-81.38 -83.6,-81.6 -83.91,-81.44 -84.21,-81.29 -84.52,-81.13 Z"
              ></motion.path>
              <motion.path
                animate={{
                  d:
                    "M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1175,659.3 1150,544.3 1128,438.4 1143,312.6 1081,227.1 1004,121.1 925.8,114.8 851.3,54.73 762,-17.34 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z",
                  transition: {
                    duration: svgDurations.pathTwo,
                    yoyo: Infinity,
                  },
                }}
                d="M -85.01,-74.02 C -92.39,-66.64 -85.37,-55.79 -87.81,-46.91 -86.65,265.1 -84.66,577.2 -83.18,889.2 317.2,888.3 717.5,885.8 1118,890.4 1152,890.6 1187,890.9 1221,890 1219,768.3 1224,643.6 1187,526 1153,417 1091,319.3 1029,224.1 998.8,178.5 968.8,132.6 936.6,88.23 891.7,27.39 772.2,-78.96 772.2,-78.96 772.2,-78.96 222.1,-81.07 -85.01,-74.02 Z"
              ></motion.path>
              <motion.path
                animate={{
                  d:
                    "M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 906.9,734.7 779.3,676 721.4,519.4 676.8,398.8 566.5,307.1 458.9,236.6 355.2,168.7 220.3,165.7 107.8,113.5 40.05,82.12 -24.82,24.2 -85.28,0.03 Z",
                  transition: {
                    duration: svgDurations.pathThree,
                    yoyo: Infinity,
                  },
                }}
                d="M -88.6,95.54 C -90.38,166.1 -88.23,236.7 -88.68,307.4 L -86.19,890 C 229.7,890.2 939.8,892.4 939.8,892.4 855.2,767 831,639.4 721.4,519.4 634.7,424.5 526.4,360.9 428.8,281.8 332.7,204 251.6,102.3 140.1,48.9 70.75,15.73 -24.82,24.2 -85.28,0.03 Z"
              ></motion.path>
              <motion.path
                animate={{
                  d:
                    "M -85.59,444.4 -85.59,890.6 546.9,895.6 C 546.9,895.6 517.4,695.4 339.9,593.4 187.7,505.9 57.98,629.2 -85.59,444.4 Z",
                  transition: {
                    duration: svgDurations.pathFour,
                    yoyo: Infinity,
                  },
                }}
                d="M -85.59,444.4 -85.59,890.6 489,895.6 C 489,895.6 436.8,745.3 382.5,690.8 258.1,565.8 57.98,629.2 -85.59,444.4 Z"
              ></motion.path>
            </motion.svg>
          </div>
        </section>
      </Link>
    </motion.div>
  )
}
