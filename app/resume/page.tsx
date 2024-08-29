"use client"

import { Tabs, TabsContent } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import ResumeTab from '@/components/resume/ResumeTab'
import ExperienceTab from '@/components/resume/ExperienceTab'
import EducationTab from '@/components/resume/EducationTab'
import SkillsTab from '@/components/resume/SkillsTab'
import AboutTab from '@/components/resume/AboutTab'


function Resume() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={
      {
      opacity: 1,
      transition:{
        delay: 2.4,
        duration: 0.4,
        ease: "easeIn"
        }
      }
    }
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <ResumeTab/>
          <div className='min-h-[70vh] w-full'>
            <ExperienceTab />
              <EducationTab />
              <SkillsTab />
              <AboutTab />
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume