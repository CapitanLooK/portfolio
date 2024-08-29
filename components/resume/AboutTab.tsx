import { aboutMe } from '@/app/utils/constants'
import { TabsContent } from '@/components/ui/tabs'


function AboutTab() {
  return (
    <TabsContent value='about' className='w-full text-center xl:text-left'>
    <div className='flex flex-col gap-[30px]'>
      <h3 className='text-4xl font-bold capitalize'>{aboutMe.title}</h3>
      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{aboutMe.description}</p>
    </div>
  </TabsContent>
  )
}

export default AboutTab