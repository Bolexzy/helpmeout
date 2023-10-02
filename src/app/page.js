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
    </main>
  );
}
