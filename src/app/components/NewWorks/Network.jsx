import React from 'react';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
import { OrbitingCirclesDemo } from '../HeroSection/HeroMover';
import { Iphone15ProDemo } from '../MobileScreen.jsx/MobileScreen';
import Image from 'next/image';
import mobile from '../../../assests/images/network2.jpeg';
import MobileFrame from '../MobileScreen.jsx/MobileScreenCus';

const Network = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex items-center w-full h-screen text-white mt-36">
      
        {/* Right Side: Gradient Text & Buttons */}
     
      
      {/* Left Side: Gradient Text & Buttons */}
      <div className="w-[50%] flex  " style={{marginTop:'6rem'}}>
        <div className="w-full max-w-[600px] h-auto">
          {/* <Iphone15ProDemo
          mobileSIze={'size-96'}
          InnerImageUrl={mobile}
          /> */}
          <MobileFrame src={mobile}/>
          {/* <Image
          src={mobile}
          alt="iPhone Screen"
          width={300}
          height={400} */}
        
          {/* /> */}
        </div>
      </div>


      <div className="w-[50%] flex flex-col mt-24 p-8 space-y-8">
        {/* Gradient Heading */}
        <h1 className="text-5xl leading-none font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        The KyberBits Network's initiative for banks and financial institutions is a significant step toward modernizing the global financial landscape.
        </h1>


        {/* Supporting Paragraph */}
        <p className="text-gray-500 font-sans  text-md">
        The integration of KUSD tokens with the dollar-backed Tether/Circle (USDT/USDC) introduces stability to the crypto environment, closely mirroring real-world currency values. This strategic connection between KyberBits and KUSD aims to enhance the utility of the BITS token, drawing users to its dependable and promising features.
        </p>

        {/* Buttons */}
        <div className="flex space-x-6">
          {/* <button className="px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-green-400 via-yellow-400 to-purple-500 hover:scale-105 transition-transform">
            Join Presale
          </button> */}
          <button className="px-6 py-3 rounded-full bg-black border border-gray-700 hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

        {/* <Link href={'#'}className='flex  items-center  gap-2 text-white'style={{marginTop: '4px'}} >
            <span className='text-sm font-sans'>
                     join now 
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7783 15.5355L23.3139 12L19.7783 8.46447L19.7783 15.5355Z" fill="white"></path><path d="M0.686444 12L20.4854 12" stroke="white" stroke-width="1.2"></path></svg></Link> */}
      </div>
    

      
    </section>
  );
};
export default Network;
