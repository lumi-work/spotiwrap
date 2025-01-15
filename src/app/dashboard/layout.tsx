import Leftbar from "@/components/dashboard/leftbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center h-full w-full text-white">
      <div className="flex-shrink-0 flex-grow-0 basis-[15%] max-w-[15%] h-screen border-r border-gray-300/20">
        <Leftbar />
      </div>
      <div className="flex-shrink-0 flex-grow-0 basis-[85%] max-w-[85%] h-screen">
        {children}
      </div>
    </div>
  );
}
