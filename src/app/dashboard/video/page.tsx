import ChatSidebar from "@/components/dashboard/ChatSidebar";
import VideoGenerationPage from "@/components/dashboard/VideoGenerationPage";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1  ">
        <div className=" pr-3">
          <VideoGenerationPage />
        </div>
      </div>
      <div>
        <ChatSidebar />
      </div>
    </div>
  );
};

export default page;
