export const easingValues = {
  "ease-1": [0.6, 0.01, -0.05, 0.9],
  "ease-2": [0.43, 0.13, 0.23, 0.96],
}

export const defaultTransition = {
  duration: 2,
  ease: easingValues["ease-1"],
}

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
