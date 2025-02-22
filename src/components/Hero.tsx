import React from "react";
import Button from "./Button";

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[90vh] px-6 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white text-center">
      {/* Floating Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] opacity-30"></div>

      <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
        Refer & Earn Rewards 🎉
      </h1>
      <p className="mt-4 text-lg max-w-lg mx-auto text-white/80">
        Invite your friends and get exciting rewards! Start earning today.
      </p>

      <div className="mt-8">
        <Button onClick={openModal} className="bg-white/20 backdrop-blur-lg hover:bg-white/30 transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold shadow-md">
          Refer Now 🚀
        </Button>
      </div>
    </section>
  );
};

export default Hero;
