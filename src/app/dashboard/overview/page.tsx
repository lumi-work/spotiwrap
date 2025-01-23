import Boxes from "@/components/dashboard/boxes";
import OverviewMiddle from "@/components/dashboard/overviewMiddle";
import OverviewTop from "@/components/dashboard/overviewTop";
import UserTopItems from "@/components/dashboard/user-top-items";
import { Toaster } from "react-hot-toast";

export default function OverviewPage() {
  return (
    <div className="grid grid-rows-[2fr_4fr] grid-cols-[3fr_1fr] gap-4 w-full h-full p-4">
      <Toaster />

      <Boxes className="row-span-1 col-span-2 w-full h-full">
        <OverviewTop />
      </Boxes>

      <Boxes className="row-span-1 col-span-1 h-full">
        <OverviewMiddle />
      </Boxes>

      <Boxes className="row-span-1 col-span-1 h-full">
        <UserTopItems />
      </Boxes>
    </div>
  );
}
