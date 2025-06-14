import ChatSidebar from "@/components/dashboard/ChatSidebar";
import VoiceToolsPage from "@/components/dashboard/VoiceToolsPage";
import React from "react";

const voice = () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1  ">
        <div className=" pr-3">
          <VoiceToolsPage />
        </div>
      </div>
      <div>
        <ChatSidebar />
      </div>
    </div>
  );
};

export default voice;
