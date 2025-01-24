import Episode from "@/components/dashboard/episode";
import React from "react";

function EpisodePage() {
  return (
    <div className="w-full h-screen p-4 overflow-hidden">
      <div className="w-full h-full overflow-auto bg-boxes rounded-xl scrollbar-hide">
        <Episode />
      </div>
    </div>
  );
}

export default EpisodePage;
