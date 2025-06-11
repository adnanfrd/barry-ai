import ChatSidebar from '@/components/dashboard/ChatSidebar'
import CodeChatUI from '@/components/dashboard/CodeChatUI'
import Header from '@/components/dashboard/Header'
import React from 'react'

const page = () => {
  return (
     <div className="flex h-screen">
      <div className="flex flex-col flex-1 overflow-hidden px-3">
        <Header />
        <div className="flex-1 ">
          <CodeChatUI />
        </div>
      </div>
      <div>
        <ChatSidebar />
      </div>
    </div>
  )
}

export default page