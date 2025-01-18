import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Navbar from "@/components/landing/navbar";
import Strip from "@/components/landing/strip";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center w-full h-full">
        <div className="max-w-[1600px] w-full flex flex-col items-center justify-center">
          <Navbar />
          <Header />
          <Footer />
        </div>
      </div>
      <Strip />
    </main>
  );
}
