import { skills } from '@/app/utils/constants'
import { TabsContent } from '@/components/ui/tabs'


function SkillsTab() {
  return (
    <TabsContent value='skills' className='w-full h-full'>
    <div className="flex flex-col gap-[30px]">
      <div className='fkex flex-col gap-[30px] xl:text-left'>
        <h3 className='text-4xl font-bold'>{skills.title}</h3>
        <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
      </div>
      <div className='flex items-center justify-center xl:justify-start'>
        <h4 className='text-2xl font-bold capitalize'>tecnologias generales</h4>
      </div>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
        {skills.techAll.map((skill, index)=>{
          return (
            <li key={index}>
                  <div className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group'>
                    <p className='capitalize group-hover:text-accent'>{skill.name}</p>
                    <div className='text-6xl group-hover:text-accent transition-all duration-300'><skill.icon/></div>
                  </div>

            </li>
          )
        })}
      </ul>
      <div className='flex items-center justify-center xl:justify-start'>
        <h4 className='text-2xl font-bold capitalize'>tecnologias backend</h4>
      </div>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
        {skills.techBE.map((skill, index)=>{
          return (
            <li key={index}>
                  <div className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group'>
                    <p className='capitalize group-hover:text-accent'>{skill.name}</p>
                    <div className='text-6xl group-hover:text-accent transition-all duration-300'><skill.icon/></div>
                  </div>

            </li>
          )
        })}
      </ul>
      <div className='flex items-center justify-center xl:justify-start'>
        <h4 className='text-2xl font-bold capitalize'>tecnologias frontend</h4>
      </div>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
        {skills.techFE.map((skill, index)=>{
          return (
            <li key={index}>
                  <div className='w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group'>
                    <p className='capitalize group-hover:text-accent'>{skill.name}</p>
                    <div className='text-6xl group-hover:text-accent transition-all duration-300'><skill.icon/></div>
                  </div>

            </li>
          )
        })}
      </ul>
    </div>
  </TabsContent>
  )
}

export default SkillsTab