import { motion } from "framer-motion"
import Footer from "../components/footer"
import HeaderPage from "../components/header"

export default function AboutUs() {
  return (
    <motion.div>
      <HeaderPage isHomePage={false} />
      <div className="about-us">
        <div className="header">
          <div className="wrapper">
            <div className="content">
              <div className="subtitle">TEAM</div>
              <div className="title">A diversified firm with an eye on the future.</div>
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
              <div className="title">Discovering value</div>
              <div className=" subtitle">
                With a passion for quality products, Adige Design’s mission is to uncover special artisans, unique
                materials & products, and incorporate them in any development, home, or office. Boston-based, Adige
                travels throughout Italy and France going to the mines, workshops, factories, and mills to diligently
                search and discover special artisans with centuries of craft knowledge in their culture and quality
                artisan product suppliers without larger international representation.
              </div>
            </div>
          </div>
        </div>

        <div className="team">
          <div className="team-content">
            <div className="key">Key People</div>
            <div className="competitive">Our competitive advantage</div>
            <div className="member_1">
              <div className="member-image"></div>
              <div className="member-desc">
                <div className="designation">Co-founder / Project Designer / Senior Developer</div>
                <div className="name">Avik Sarkar</div>
                <div className="mail">sayavik@gmail.com</div>
                <div className="about">
                  An IT Graduate with B-tech from AOT, Kolkata. Avik has over 6 years of experience. Prior to founding
                  Heracles, Avik is a senior Member of Technical Staff at Nutanix, Bangalore, India and works on
                  multiple ecommerce project. Avik have worked extensively delivering value to Engineering productivity
                  & Developer happiness. Avik build Tools and Services with products in Ecommerce, Tooling and
                  Engineering domain.
                </div>
              </div>
            </div>

            <div className="member_2">
              <div className="member-desc">
                <div className="designation">Co-founder / Senior Developer</div>
                <div className="name">Kumar Ankur</div>
                <div className="mail">akakankur81@gmail.com</div>
                <div className="about">
                  An IT Graduate with B-tech from AOT, Kolkata. Ankur has over 6 years of experience. Prior to founding
                  Heracles, Ankur is a senior FrontEnd Developer at Sapient, Noida, India and works on many telecom &
                  hospitality project. Ankur is deeply passionate about the technology and create several project from
                  last 5 years.
                </div>
              </div>
              <div className="member-image-2"></div>
            </div>

            <div className="member_3">
              <div className="member-image-3"></div>
              <div className="member-desc">
                <div className="designation">Co-founder / Senior Developer</div>
                <div className="name">Manish Gupta</div>
                <div className="mail">sayavik@gmail.com</div>
                <div className="about">
                  An IT Graduate with B-tech from AOT, Kolkata. Manish has over 6 years of experience. Prior to founding
                  Heracles, Manish is a senior Member of Technical Staff at Nutanix, Bangalore, India and works on
                  multiple ecommerce project. Manish have worked extensively delivering value to Engineering
                  productivity & Developer happiness. Manish build Tools and Services with products in Ecommerce,
                  Tooling and Engineering domain.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
