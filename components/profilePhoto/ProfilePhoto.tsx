"use client";

import { motion } from "framer-motion"
import Image from "next/image"

function ProfilePhoto() {
  return (
    <div className="w-full h-full relative">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}
        >
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
  className="w-[244px] h-[244px] xl:w-[498px] xl:h-[498px] mix-blend-plus-darker absolute"
>
  <Image
    src="/assets/profilephoto.png"
    alt="profile photo"
    priority
    quality={100}
    fill
    className="object-contain opacity-60"
  />
</motion.div>
<motion.svg
  fill="transparent"
  viewBox="0 0 505 505"
  xmlns="http://www.w3.org/2000/svg"
  className="w-[246px] h-[246px] xl:w-[505px] xl:h-[505px]"
>
  <motion.circle
    cx="253"
    cy="253"
    r="250"
    stroke="#00ff99"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ strokeDasharray: "24 10 0 0" }}
    animate={{
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360]
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  />
</motion.svg>
        </motion.div>
    </div>
  )
}

export default ProfilePhoto