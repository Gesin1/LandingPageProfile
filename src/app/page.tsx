import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import Grid from "@/component/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
