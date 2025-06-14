import ChatSidebar from "@/components/dashboard/ChatSidebar";
import PhotoGenerationPage from "@/components/dashboard/PhotoGeneration";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1  ">
        <div className=" pr-3">
          <PhotoGenerationPage />
        </div>
      </div>
      <div>
        <ChatSidebar />
      </div>
    </div>
  );
};

export default page;
