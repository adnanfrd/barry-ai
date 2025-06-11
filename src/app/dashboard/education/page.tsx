import ChatSidebar from '@/components/dashboard/ChatSidebar'
import EducationSciencePage from '@/components/dashboard/EducationSciencePage'
import Header from '@/components/dashboard/Header'
import PromptInput from '@/components/subcomponents/PromptInput'
import React from 'react'

const page = () => { 
  const msg = "Education & Science";
  return (
    <div className="flex h-screen">
     <div className="flex flex-col flex-1 px-3">
       <Header />
       
       <div className="flex flex-col flex-1 ">
         <div className="flex-1  ">
           <EducationSciencePage/>
         </div >
         <PromptInput/>
       </div>
     </div>
   
     <div >
       <ChatSidebar />
     </div>
   </div>
  )
}

export default page