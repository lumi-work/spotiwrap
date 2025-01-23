import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import TeamCard from "@/components/team/teamCard";
import profile1 from "@/assets/profile1.jpg";
import profile2 from "@/assets/profile2.jpg";
import hiring from "@/assets/logo.svg";

import React from "react";

function teamPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="max-w-[1600px] w-full flex flex-col items-center">
        <Navbar />
        <div className="w-[1200px]">
          <h1 className="text-center text-[50px] font-semibold mt-20 text-green-600">
            Team
          </h1>
          <p className="text-center text-xl mt-2 text-white">
            Hello, welcome to our team. We are best app and web developer.
            <br />U can join our team. We are friendly. Join our community
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 text-white">
            <TeamCard
              username="@Harun"
              color="#FF0000"
              rolename="Software Developer"
              image={profile1}
            />
            <TeamCard
              username="@Berke"
              color="#0058DD"
              rolename="Software Developer"
              image={profile2}
            />
            <TeamCard
              username="@hiring"
              color="#FFCD1B"
              rolename="UI/UX Designer"
              image={hiring}
            />
            <TeamCard
              username="@hiring"
              color="#8276FF"
              rolename="Bug Tester"
              image={hiring}
            />
            <TeamCard
              username="@hiring"
              color="#51CBDC"
              rolename="Backend Developer"
              image={hiring}
            />
            <TeamCard
              username="@hiring"
              color="#FF8ABB"
              rolename="Project Manager"
              image={hiring}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default teamPage;
