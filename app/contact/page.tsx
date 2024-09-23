'use client'

import { motion } from "framer-motion"
import { contactInfo } from "../utils/constants"
import ContactForm from "@/components/contactForm/ContactForm"


function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className="py-6"
    >
      <div className="container mx-auto flex flex-col xl:flex-row gap-[30px]">
        <ContactForm />
        <div className="flex-1 flex flex-col xl:justify-center order-1 xl:order-none mb-8 xl:mb-0 gap-10">
          <div className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-[28px]">
              <contactInfo.icon />
            </div>
            <div className="flex-1">
              <p className="text-white/60">{contactInfo.title}</p>
              <h3 className="text-l">{contactInfo.content}</h3>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact