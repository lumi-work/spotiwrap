import Boxes from "@/components/dashboard/boxes";
import UserTopItems from "@/components/dashboard/user-top-items";
import { Toaster } from "react-hot-toast";

export default function OverviewPage() {
  return (
    <div className="grid grid-rows-[1fr_4fr] grid-cols-[4fr_1fr] gap-4 w-full h-full p-4">
      <Toaster />

      <Boxes className="row-span-1 col-span-2 w-full h-full">
        <h2 className="text-center">Üstteki Box</h2>
      </Boxes>

      <Boxes className="row-span-1 col-span-1 h-full">
        <h2>Ortadaki Box</h2>
      </Boxes>

      <Boxes className="row-span-1 col-span-1 h-full">
        <UserTopItems />
      </Boxes>
    </div>
  );
}
