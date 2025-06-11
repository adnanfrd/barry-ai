import ChatSidebar from '@/components/dashboard/ChatSidebar'
import Header from '@/components/dashboard/Header'
import VideoGenerationPage from '@/components/dashboard/VideoGenerationPage'
import PromptInput from '@/components/subcomponents/PromptInput'
import React from 'react'

const page = () => {
  return (
     <div className="flex">
             <div className="flex flex-col flex-1 px-3">
               <Header />
               
               <div className="flex flex-col flex-1  ">
                 <div className="flex-1 ">
                   <VideoGenerationPage/>
                 </div >
                 <PromptInput/>
               </div>
             </div>
           
             <div>
               <ChatSidebar/>
             </div>
           </div>
  )
}

export default page