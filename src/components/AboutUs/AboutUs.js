import { motion } from "framer-motion"
import Footer from "@components/Navigation/Footer"
import Header from "@components/Navigation/Header"
import * as constants from "@constants"
import styles from "./AboutUs.module.scss"

export default function AboutUs() {
  return (
    <motion.div>
      <Header isHomePage={false} />
      <div className={styles["about-us"]}>
        <div className={styles["header"]}>
          <div className={styles["wrapper"]}>
            <div className={styles["content"]}>
              <div className={styles["subtitle"]}>{constants.TEAM}</div>
              <div className={styles["title"]}>{constants.ABOUT_TITLE}</div>
            </div>
          </div>
        </div>
        <div className={styles["discovering"]}>
          <div className={styles["discovering-image"]}>
            <div className={styles["image-1"]}></div>
            <div className={styles["image-2"]}></div>
          </div>
          <div className={styles["discovering-content"]}>
            <div className={styles["content"]}>
              <div className={styles["title"]}>{constants.DISCOVERING_TITLE}</div>
              <div className={styles[" subtitle"]}>{constants.ABOUT_SUB_TITLE}</div>
            </div>
          </div>
        </div>

        <div className={styles["team"]}>
          <div className={styles["team-content"]}>
            <div className={styles["key"]}>{constants.ABOUT_PEOPLE}</div>
            <div className={styles["competitive"]}>{constants.ADVANTAGE}</div>
            {constants.About_US.map((team, index) => {
              if (team.imageDisplay === "left") {
                return (
                  <div className={team.className} key={index}>
                    <div className={team.imageStyle}></div>
                    <div className={styles["member-desc"]}>
                      <div className={styles["designation"]}>{team.designation}</div>
                      <div className={styles["name"]}>{team.name}</div>
                      <div className={styles["mail"]}>{team.mail}</div>
                      <div className={styles["about"]}>{team.about}</div>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className={team.className} key={index}>
                    <div className={styles["member-desc"]}>
                      <div className={styles["designation"]}>{team.designation}</div>
                      <div className={styles["name"]}>{team.name}</div>
                      <div className={styles["mail"]}>{team.mail}</div>
                      <div className={styles["about"]}>{team.about}</div>
                    </div>
                    <div className={team.imageStyle}></div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
