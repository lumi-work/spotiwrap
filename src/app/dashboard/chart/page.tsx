import Boxes from "@/components/dashboard/boxes";
import BarChart from "@/components/ui/bar-chart";
import LineChart from "@/components/ui/line-chart";
import RadarChart from "@/components/ui/radar-chart";
import React from "react";

function ChartPage() {
  return (
    <div className="grid grid-rows-[2fr_3fr] grid-cols-[3fr_1fr] gap-4 w-full h-screen p-4 overflow-hidden">
      <Boxes className="row-span-1 col-span-2 w-full h-full overflow-auto px-4">
        <LineChart />
      </Boxes>

      <Boxes className="row-span-1 col-span-1 h-full overflow-auto px-4">
        <BarChart />
      </Boxes>

      <Boxes className="row-span-1 col-span-1 h-full overflow-auto px-4">
        <RadarChart />
      </Boxes>
    </div>
  );
}

export default ChartPage;
