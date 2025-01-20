import Boxes from "@/components/dashboard/boxes";
import UserTopItems from "@/components/dashboard/user-top-items";
import { Toaster } from "react-hot-toast";

export default function OverviewPage() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[1fr_auto] gap-4 w-full h-full p-4">
      <Toaster />

      <Boxes className="row-span-1 col-span-2 w-full h-48">
        <h1 className="text-center">Üstteki Full Box</h1>
      </Boxes>

      <Boxes className="row-span-1 col-span-1 h-80">
        {/* <UserTopItems /> */}
        orta box
      </Boxes>

      {/* Sağdaki Box */}
      <Boxes className="row-span-2 col-span-1 h-[calc(100%-4rem)]">
        <h1 className="text-center">Sağdaki Box</h1>
      </Boxes>
    </div>
  );
}
