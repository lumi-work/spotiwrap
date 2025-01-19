import Boxes from "@/components/dashboard/boxes";
import UserTopItems from "@/components/dashboard/user-top-items";
import { Toaster } from "react-hot-toast";

export default function OverviewPage() {
  return (
    <div className="flex w-full h-full">
      <Toaster />
      <Boxes width={300} height={800}>
        <UserTopItems />
      </Boxes>
    </div>
  );
}
