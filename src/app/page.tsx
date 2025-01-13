import Logo from "@/assets/logo.svg";
import Banner from "@/components/banner";
import Strip from "@/components/strip";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center w-full h-full">
        {" "}
        <div className="max-w-[1200px] w-full h-full flex flex-col items-center justify-center">
          <Banner />
          {/* <Image
          src={Logo}
          alt="logo"
          width={200}
          height={200}
          priority
          className="w-auto h-auto"
        /> */}
        </div>
      </div>
      <Strip />
    </main>
  );
}
