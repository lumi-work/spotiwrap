import Logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src={Logo}
        alt="logo"
        width={200}
        height={200}
        priority
        className="w-auto h-auto"
      />
    </main>
  );
}
