import ChatSidebar from "@/components/dashboard/ChatSidebar";
import CodeChatUI from "@/components/dashboard/CodeChatUI";
import React from "react";

const page = () => {
  return (
     <div className="flex">
          <div className="flex flex-col flex-1  ">
            <div className=" pr-3">
              <CodeChatUI />
            </div>
          </div>
          <div>
            <ChatSidebar />
          </div>
        </div>
  );
};

export default page;
