import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import Grid from "@/component/Grid";
import Project from "@/component/Project";
import Testimonia from "@/component/Testimonia";
import Expirence from "@/component/Expirence";
import Step from "@/component/Step";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto px-5 sm:px-10 overflow-clip">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Grid />
        <Project />
        <Testimonia />
        <Expirence />
        <Step />
        <Footer />
      </div>
    </main>
  );
}
