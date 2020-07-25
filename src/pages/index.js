import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <motion.div>
      <Link href="/about-us">
        <a>About us</a>
      </Link>
    </motion.div>
  )
}
