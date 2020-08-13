export const easingValues = {
  "ease-1": [0.6, 0.01, -0.05, 0.9],
  "ease-2": [0.43, 0.13, 0.23, 0.96],
}

export const defaultTransition = {
  duration: 2,
  ease: easingValues["ease-1"],
}

export const CONTACT_US = "CONTACT US"

// header components
export const NAV_LIST = {
  Home: "/",
  "About us": "/about-us",
  "Contact us": "/contact-us",
  Pricing: "/pricing",
}

// Landing component
export const LANDING_TITLE = "Heracles - Societies made easy"
export const LANDING_HEADING = "Heracles"
export const LANDING_SUBHEADING =
  "We help builders manage societies. We help future home owners explore societies. We help renters connect with home owners."
export const LANDING_LINK = "Click here to know more"

// Builders components
export const BUILDER_TITLE = "We assist dealing in Real Estate"
export const BUILDER_SUBTITLE = "Easy and approchable platform for customers."
export const BUILDER_DESC =
  "Sell, Purchase or Rent will be effort less as society administration provide you all the data and it's geniune guranteed by Heracles. Select society, flat based on one click and gets 100% satisfied report without any third party involvment."

// HomeOwner Component
export const OWNER_TITLE = "We provide many services for apartment owners."
export const OWNER_SUBTITLE = "Leave your after accomodation worries to Heracles"
export const OWNER_DESCRIPTION =
  "Providing easy platform to pay maintainance or electricity bill, book club house, register complain, Notification mechanism, security, access request , visitors permission from single portal with less effort."

// Security Component
export const SECURITY_TITLE = "For Security Staff"
export const SECURITY_SUBTITLE = "Don't need an eagle eye, leave it to Heracles"
export const SECURITY_DESC =
  "Less effort to validate whether user is permanent resident or visitor. Notify resident if any visitors at the main gate with IVAR call or from notification. Onboarding resident data are also paperless and details available at security gate via Heracles."

// Society Manager Component
export const MANAGER_TITLE = "For Society Manager"
export const MANAGER_SUBTITLE = "Let Heracles lend a hand in managing everything for you."
export const MANAGER_DESC =
  "Easy to handle new onboarding request, generate bills for respective user, notifiy society with real time notification, provide access to user, handle security system."

// Renters Component
export const RENTER_TITLE = "We know renting is hard. We'll make it easy for you"
export const RENTER_SUBTITLE = "Let Heracles lend a hand in managing everything for you."
export const RENTER_DESC =
  "Easy to handle new onboarding request, generate bills for respective user, notifiy society with real time notification, provide access to user, handle security system."

// Contact Us constant
export const TITLE = "Get in Touch"
export const SUB_TITILE = "Please fill out the quick form and we will in touch with lightening speed."
export const SEND = "Send"
export const SUPPORT_EMAIL = "heraclesteam2020@gmail.com"
export const INFO_HEADING = "Mail"
export const CONTACT = "Drop us Mail at:"
export const PHONE = "Phone"
export const SUPPORT_NUMBER = "+91-9599015901"
export const OFFICE = "Office"
export const PHONE_REGEX = /^[6-9]\d{9}$/ // eslint-disable-line
export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // eslint-disable-line
export const TERMS_CONDITION =
  "By submitting this form, you agree to our terms and conditions and that you have read our data policy as well as cookie policy."
export const ADDRESS_1 =
  "Heracles India Pvt. Limited Plot 16 A & B, Oxygen Business Park, Sector - 144, Noida, Uttar Pradesh 201009, India"
export const ADDRESS_2 =
  "Heracles India Pvt. Limited 9th Floor Mercury Block, Prestige Technology Park Sarjapura, Marathahalli - Sarjapur Outer Ring Rd, Kadabeesanahalli, Bengaluru, Karnataka 560103, India"
// Pricing Constant
export const PRICING_OPTION = ["Basic", "Standard", "Premium"]
export const PRICING_COST = ["Free", "₹1000/month", "₹1500/month"]
export const PRICING_HELP =
  "Choose appropriate plan and enjoy Heracles benefit with lots of fetaures. Need to know more, please contact with Heracles support"
export const PRICING_FACILITY = [
  {
    Basic: {
      "User Registration (upto 50 count)": true,
      "Administration Registration": true,
      "Admin Web Portal": true,
      "User Native Registration": true,
      "Security Notification": true,
      "Access/Complain Register": true,
      "Bills and Payment": true,
      Booking: true,
      "Cancel at any time": true,
      "First Month Free": true,
      "SOS Service": false,
      "Heracles Support": false,
    },
    Standard: {
      "User Registration (upto 1000 count)": true,
      "Administration Registration": true,
      "Admin Web Portal": true,
      "User Native Registration": true,
      "Security Notification": true,
      "Access/Complain Register": true,
      "Bills and Payment": true,
      Booking: true,
      "Cancel at any time": true,
      "First Month Free": true,
      "SOS Service": false,
      "Heracles Support": false,
    },
    Premium: {
      "User Registration (Unlimited)": true,
      "Administration Registration": true,
      "Admin Web Portal": true,
      "User Native Registration": true,
      "Security Notification": true,
      "Access/Complain Register": true,
      "Bills and Payment": true,
      Booking: true,
      "Cancel at any time": true,
      "First Month Free": true,
      "SOS Service": true,
      "Heracles Support": true,
    },
  },
]

// About us page
export const TEAM = "Team"
export const ABOUT_TITLE = "A diversified firm with an eye on the future."
export const ABOUT_SUB_TITLE =
  "With a passion for quality products, Adige Design’s mission is to uncover special artisans, unique materials & products, and incorporate them in any development, home, or office. Boston-based, Adige travels throughout Italy and France going to the mines, workshops, factories, and mills to diligently search and discover special artisans with centuries of craft knowledge in their culture and quality artisan product suppliers without larger international representation."
export const DISCOVERING_TITLE = "Discovering value"
export const ABOUT_PEOPLE = "Key People"
export const ADVANTAGE = "Our competitive advantage"
export const About_US = [
  {
    className: "member_1",
    imageStyle: "member-image",
    imageDisplay: "left",
    designation: "Co-founder / Project Designer / Senior Developer",
    name: "Avik Sarkar",
    mail: "sayavik@gmail.com",
    about:
      "An IT Graduate with B-tech from AOT, Kolkata. Avik has over 6 years of experience. Prior to founding Heracles, Avik is a senior Member of Technical Staff at Nutanix, Bangalore, India and works on multiple ecommerce project. Avik have worked extensively delivering value to Engineering productivity & Developer happiness. Avik build Tools and Services with products in Ecommerce, Tooling and Engineering domain.",
  },
  {
    className: "member_2",
    imageStyle: "member-image-2",
    imageDisplay: "right",
    designation: "Co-founder / Senior Developer",
    name: "Kumar Ankur",
    mail: "akakankur81@gmail.com",
    about:
      "An IT Graduate with B-tech from AOT, Kolkata. Ankur has over 6 years of experience. Prior to founding Heracles, Ankur is a senior FrontEnd Developer at Sapient, Noida, India and works on many telecom & hospitality project. Ankur is deeply passionate about the technology and create several project from last 5 years.",
  },
  {
    className: "member_3",
    imageStyle: "member-image-3",
    imageDisplay: "left",
    designation: "Co-founder / Senior Developer",
    name: "Manish Gupta",
    mail: "manish@gmail.com",
    about:
      "An IT Graduate with B-tech from AOT, Kolkata. Manish has over 6 years of experience. Prior to founding Heracles, Manish is a senior Member of Technical Staff at Nutanix, Bangalore, India and works on multiple ecommerce project. Manish have worked extensively delivering value to Engineering productivity & Developer happiness. Manish build Tools and Services with products in Ecommerce, Tooling and Engineering domain.",
  },
]
