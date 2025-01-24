import Boxes from "@/components/dashboard/boxes";
import { Toaster } from "react-hot-toast";

export default function PlaylistsPage() {
  return (
    <div className="w-full h-screen p-4 overflow-hidden">
      <Toaster />

      <Boxes className="w-full h-full overflow-auto">1</Boxes>
    </div>
  );
}
