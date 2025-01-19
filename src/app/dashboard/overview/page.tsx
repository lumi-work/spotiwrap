import Boxes from "@/components/dashboard/boxes";
import Playlists from "@/components/ui/playlists";
import { Toaster } from "react-hot-toast";

export default function OverviewPage() {
  return (
    <div className="flex w-full h-full">
      <Toaster />
      <Boxes width={300} height={800}>
        <Playlists />
      </Boxes>
    </div>
  );
}
