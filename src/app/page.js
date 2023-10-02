import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <div className="mt-[100px] flex flex-col items-center justify-center align-center ">
        <h3 className="how_it_works">How It Works</h3>
        <div className="flex gap-[83px] align-end mt-[59px]">
          <div className="flex flex-col items-center align-center justify-center gap-[28px]">
            <Image src={"/Icon-1.png"} width={45} height={45} alt="logo" />

            <h4 className="text-center text-[#1B233D] font-[Inter] text-[28px] font-semibold">
              Record Screen
            </h4>
            <p className="text-center text-[#616163] text-center font-[Work Sans] text-[20px] font-normal leading-[31px] max-w-[350px]">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <Image
              src={"/record.png"}
              width={356}
              height={250}
              className="rounded-lg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col items-center align-center justify-center gap-[28px]">
            <Image src={"/Icon-2.png"} width={45} height={45} alt="logo" />

            <h4 className="text-center text-[#1B233D] font-[Inter] text-[28px] font-semibold">
              Share Your Recording
            </h4>
            <p className="text-center text-[#616163] text-center font-[Work Sans] text-[20px] font-normal leading-[31px] max-w-[350px]">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <Image
              src={"/record.png"}
              width={356}
              height={250}
              className="rounded-lg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col items-center align-center justify-center gap-[28px]">
            <Image src={"/Icon-3.png"} width={45} height={45} alt="logo" />
            <h4 className="text-center text-[#1B233D] font-[Inter] text-[28px] font-semibold">
              Learn Effortlessly
            </h4>
            <p className="text-center text-[#616163] text-center font-[Work Sans] text-[20px] font-normal leading-[31px] max-w-[350px]">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <Image
              src={"/record.png"}
              width={356}
              height={250}
              className="rounded-lg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
