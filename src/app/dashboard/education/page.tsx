import ChatSidebar from '@/components/dashboard/ChatSidebar'
import EducationSciencePage from '@/components/dashboard/EducationSciencePage'
import React from 'react'

const page = () => { 
  return (
   <div className="flex">
         <div className="flex flex-col flex-1  ">
           <div className=" pr-3">
             <EducationSciencePage />
           </div>
         </div>
         <div>
           <ChatSidebar />
         </div>
       </div>
  )
}

export default page