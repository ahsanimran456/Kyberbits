import React from 'react';
import { OrbitingCirclesDemo } from './HeroMover';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex w-full h-screen text-white">
      {/* Left Side: Gradient Text & Buttons */}
      <div className="w-[65%] flex flex-col mt-24 p-8 space-y-8">
        {/* Gradient Heading */}
        <h1 className="text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          KyberBits: The World's Strongest Layer 1, Web3 Aggregated Ecosystem That Unites Leading Blockchains Including Bitcoin, Ethereum, Solana & More.
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-gray-300 font-sans  text-md">
        KyberBits  is redefining blockchain technology. We aim to build a highly efficient, self-sustaining ecosystem designed to effortlessly manage a large number of transactions.
        </p>

        {/* Buttons */}
        <div className="flex space-x-6">
          <button className="px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-green-400 via-yellow-400 to-purple-500 hover:scale-105 transition-transform">
            Join Presale
          </button>
          <button className="px-6 py-3 rounded-full bg-black border border-gray-700 hover:bg-gray-800 transition">
            How to buy?
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-xs font-sans">
             Access to 12.85% of the total $BITS supply is available now during our live crypto presale soon. This unique opportunity allows you to participate early and grow with our expanding community.
        </p>
        <Link href={'#'}className='flex  items-center  gap-2 text-white'style={{marginTop: '4px'}} >
            <span className='text-sm font-sans'>
                     join now 
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7783 15.5355L23.3139 12L19.7783 8.46447L19.7783 15.5355Z" fill="white"></path><path d="M0.686444 12L20.4854 12" stroke="white" stroke-width="1.2"></path></svg></Link>
      </div>

      {/* Right Side: Orbiting Animation */}
      <div className="w-[35%] flex  mt-22">
        <div className="w-full max-w-[600px] h-auto">
          <OrbitingCirclesDemo />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
