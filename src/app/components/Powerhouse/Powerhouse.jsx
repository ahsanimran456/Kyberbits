import React from 'react';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
import { OrbitingCirclesDemo } from '../HeroSection/HeroMover';
import { Iphone15ProDemo } from '../MobileScreen.jsx/MobileScreen';
import Image from 'next/image';
import mobile from '../../../../public/aaa.svg';
import MobileFrame from '../MobileScreen.jsx/MobileScreenCus';

const PowerHouse = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex items-center w-full h-screen text-white mt-24">
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

      {/* Right Side: Gradient Text & Buttons */}
      <div className="w-[50%] flex flex-col mt-24 p-8 space-y-8">
        {/* Gradient Heading */}
        <h1 className="text-5xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        The KyberBits All-In-One Crypto Powerhouse
        </h1>

{/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-5xl font-bold">
        The Qubetics All-In-One Crypto Powerhouse
      </h1> */}
        {/* Supporting Paragraph */}
        <p className="text-gray-500 font-sans  text-md">
        Meet the KyberBits multi-chain crypto Wallet—a non-custodial, open-source powerhouse. Enjoy feeless $BITS transfers in-app, debit & virtual cards, seamless Apple Pay and Google Pay integration, a decentralized VPN (dVPN) service, and access to a tokenized asset marketplace, all conveniently housed in one application.
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

        {/* <Link href={'#'}className='flex  items-center  gap-2 text-white'style={{marginTop: '4px'}} >
            <span className='text-sm font-sans'>
                     join now 
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7783 15.5355L23.3139 12L19.7783 8.46447L19.7783 15.5355Z" fill="white"></path><path d="M0.686444 12L20.4854 12" stroke="white" stroke-width="1.2"></path></svg></Link> */}
      </div>

      {/* Right Side: Orbiting Animation */}
      
    </section>
  );
};
export default PowerHouse;
