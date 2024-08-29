"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/app/utils/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from "react-icons/tb";
import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns'

function Work() {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);    
  }

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className='min-h-[80vh] flex flex-col justify-center items-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50px]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.title}</h2>
              <h3 className='text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h3>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.url} target='_blank' className='group'>
                  <TbWorldWww className='text-white text-3xl group-hover:text-accent'/>
                </Link>
                <Link href={project.github} target='_blank' className='group'>
                  <FaGithub className='text-white text-3xl group-hover:text-accent'/>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}
            >

              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      <div className='relative w-full h-full'>
                        <Image
                        src={project.image}
                        fill
                        className='object-cover'
                        alt="Imagen del proyecto"
                        />
                      </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
              containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
              btnStyles=' bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work