import ChatSidebar from '@/components/dashboard/ChatSidebar'
import Header from '@/components/dashboard/Header'
import VoiceToolsPage from '@/components/dashboard/VoiceToolsPage'
import PromptInput from '@/components/subcomponents/PromptInput'
import React from 'react'

const voice = () => {
  return (
    <div className="flex h-screen">
                    <div className="flex flex-col flex-1 px-3">
                      <Header />
                      
                      <div className="flex flex-col flex-1  ">
                        <div className="flex-1 ">
                          <VoiceToolsPage/>
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

export default voice