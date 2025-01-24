import Playlists from "@/components/dashboard/playlists";

export default function PlaylistsPage() {
  return (
    <div className="w-full h-screen p-4 overflow-hidden">
      <div className="w-full h-full overflow-auto bg-boxes rounded-xl scrollbar-hide">
        <Playlists />
      </div>
    </div>
  );
}
