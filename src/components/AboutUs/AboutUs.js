import { motion } from "framer-motion"
import Footer from "@components/Navigation/Footer"
import Header from "@components/Navigation/Header"
import * as constants from "@constants"

export default function AboutUs() {
  return (
    <motion.div>
      <Header isHomePage={false} />
      <div className="about-us">
        <div className="header">
          <div className="wrapper">
            <div className="content">
              <div className="subtitle">{constants.TEAM}</div>
              <div className="title">{constants.ABOUT_TITLE}</div>
            </div>
          </div>
        </div>
        <div className="discovering">
          <div className="discovering-image">
            <div className="image-1"></div>
            <div className="image-2"></div>
          </div>
          <div className="discovering-content">
            <div className="content">
              <div className="title">{constants.DISCOVERING_TITLE}</div>
              <div className=" subtitle">{constants.ABOUT_SUB_TITLE}</div>
            </div>
          </div>
        </div>

        <div className="team">
          <div className="team-content">
            <div className="key">{constants.ABOUT_PEOPLE}</div>
            <div className="competitive">{constants.ADVANTAGE}</div>
            {constants.About_US.map((team, index) => {
              if (team.imageDisplay === "left") {
                return (
                  <div className={team.className} key={index}>
                    <div className={team.imageStyle}></div>
                    <div className="member-desc">
                      <div className="designation">{team.designation}</div>
                      <div className="name">{team.name}</div>
                      <div className="mail">{team.mail}</div>
                      <div className="about">{team.about}</div>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className={team.className} key={index}>
                    <div className="member-desc">
                      <div className="designation">{team.designation}</div>
                      <div className="name">{team.name}</div>
                      <div className="mail">{team.mail}</div>
                      <div className="about">{team.about}</div>
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
