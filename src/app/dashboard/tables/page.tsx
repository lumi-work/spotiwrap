import Tables from "@/components/dashboard/tables";
import React from "react";

function TablesPage() {
  return (
    <div className="w-full h-screen p-4 overflow-hidden">
      <div className="w-full h-full overflow-auto bg-boxes rounded-xl scrollbar-hide">
        <Tables />
      </div>
    </div>
  );
}

export default TablesPage;
