import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PowerHouse from "./components/Powerhouse/Powerhouse";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <HeroSection/>
    <PowerHouse/>
  </div>
  );
}
