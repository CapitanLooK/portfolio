import { ResumeTabs } from '@/app/utils/constants'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'

function ResumeTab() {
  return (
    <TabsList className='flex flex-col w-full max-w-[308px] mx-auto xl:mx-0 gap-6'>
      {ResumeTabs.map((tab, index)=>{
        return (
          <TabsTrigger key={index} value={tab.value}>{tab.text}</TabsTrigger>
        )
      })}
  </TabsList>
  )
}

export default ResumeTab