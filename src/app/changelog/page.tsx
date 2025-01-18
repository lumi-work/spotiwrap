import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import { TimelineOverview } from "@/components/landing/timeline";
import React from "react";

function changelogPage() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="max-w-[1600px] w-full flex flex-col items-center justify-center">
        <Navbar />
        <TimelineOverview />
        <Footer />
      </div>
    </div>
  );
}

export default changelogPage;
