import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PowerHouse from "./components/Powerhouse/Powerhouse";
import PlateForm from "./components/PlateForm/PlateForm";
import Network from "./components/NewWorks/Network";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <HeroSection/>
    <PowerHouse/>
    <PlateForm/>
    <Network/>
  </div>
  );
}
