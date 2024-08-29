import { education } from '@/app/utils/constants'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TabsContent } from '@/components/ui/tabs'

function EducationTab() {
  return (
    <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {education.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {education.items.map((item, index)=>{
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.careerName}</h3>
                            <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 text-lg'>{item.institution}</p>
                            </div>
                            <span className='text-accent'>{item.duration}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
  )
}

export default EducationTab