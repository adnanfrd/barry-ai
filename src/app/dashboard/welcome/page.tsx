import ChatSidebar from "@/components/dashboard/ChatSidebar";
import Header from "@/components/dashboard/Header";
import WelcomePage from "@/components/dashboard/WelcomePage";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      

        <div className="flex flex-col flex-1  ">
          <div className=" pr-3">
            <WelcomePage />
          </div>
        </div>
      <div>
        <ChatSidebar />
      </div>
    </div>
  );
};

export default page;
