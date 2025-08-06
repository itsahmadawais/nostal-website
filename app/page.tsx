import Image from "next/image";
import React from "react";
import Header from "./_components/header";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-black relative text-white overflow-hidden">
      {/* Radial Gradient (wide and circular, from top to center) */}
      <div className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 w-[200%] h-[200%] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
      </div>

      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        {/* Logo Image from public/logo.png */}
        <div className="relative mb-8">
          <Image
            src="/logo.png"
            alt="Nostal Logo"
            // fill
            width={200}
            height={200}
            // className="object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-[#a6a6a6] font-sans text-4xl md:text-6xl mb-6">Coming soon...</h1>

        {/* Paragraph */}
        <p className="text-lg md:text-lg font-poppins max-w-xl text-white/80">
          Join Nostal — the first Web3-powered social app where your posts pay. Drop content,
          bring your crew, and earn rewards while you scroll.
        </p>
      </main>
    </div>
  );
};

export default ComingSoonPage;
