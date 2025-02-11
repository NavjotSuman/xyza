import { FaLocationArrow, FaXTwitter } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { companies, socialMedia } from "@/data";
import Link from "next/link";
import React from "react";
import { TextGenerateEffectPadding } from "./ui/TextGenerateEffectPadding";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p> */}

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="I&apos;m Inderpal Taur."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-[18px]">
          {/* Full Stack AI Engineer */}
          {/* <TextGenerateEffectPadding words="Full Stack AI Engineer" /> */}
          {/* <TextGenerateEffectPadding words="Crafting seamless digital experiences with precision and innovation." /> */}
          <TextGenerateEffectPadding words="Full Stack AI Engineer | Crafting seamless digital experiences with precision and innovation." />
            {/* Crafting seamless digital experiences while managing projects with precision and innovation. */}
          </div>

          <a href="#about">
            <MagicButton
              title="LET'S GO"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          {/* background: black;
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    height: 40px;
    display: grid
; */}
    {/* place-items: center; */}
          {/* <div className="flex items-center md:gap-3 gap-6 sm:order-2 pt-14">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              key={info.id}
              className="grid rounded-full overflow-hidden w-10 h-10 bg-[#000332] place-items-center"
            >
              <img src={info.img} alt="icons" width={33} height={33} className="opacity-40 hover:opacity-100" />
            </Link>
          ))} */}
            {/* <a href="http://" target="_blank" rel="noopener noreferrer" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">1</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">2</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">3</a> */}
          {/* </div> */}
          {/* height: 9rem;
    justify-content: flex-end;
    align-items: center;
    width: 100%; */}
          <div className="flex flex-col max-lg:mt-10 h-[14.2rem] justify-between items-center w-full">
            <div className="flex gap-3">
              <div className="relative inline-flex md:mt-2 overflow-hidden rounded-full p-[1px] focus:outline-none w-9 h-9 md:w-9 opacity-0 animate-fade-in">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <Link href={'https://github.com/inderpaltaur'} className="flex h-full w-full cursor-pointer items-center justify-center rounded-full
             bg-slate-950 text-sm text-white backdrop-blur-3xl undefined font-thin" target="_blank">
                  <FiGithub className="font-thin w-5 h-5" />
                </Link>
              </div>
              <div className="relative inline-flex md:mt-2 overflow-hidden rounded-full p-[1px] focus:outline-none w-9 h-9 md:w-9 opacity-0 animate-fade-in">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <Link href={'https://x.com/inderpal_taur'} className="flex h-full w-full cursor-pointer items-center justify-center rounded-full
             bg-slate-950 text-sm text-white backdrop-blur-3xl undefined font-thin" target="_blank">
                  <FaXTwitter className="font-thin w-5 h-5" />
                </Link>
              </div>
              <div className="relative inline-flex md:mt-2 overflow-hidden rounded-full p-[1px] focus:outline-none w-9 h-9 md:w-9 opacity-0 animate-fade-in">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <Link href={'https://www.linkedin.com/in/inderpaltaur001/'} className="flex h-full w-full cursor-pointer items-center justify-center rounded-full
             bg-slate-950 text-sm text-white backdrop-blur-3xl undefined font-thin" target="_blank">
                  <TiSocialLinkedin className="font-thin w-6 h-6" />
                </Link>
              </div>
              <div className="relative inline-flex md:mt-2 overflow-hidden rounded-full p-[1px] focus:outline-none w-9 h-9 md:w-9 opacity-0 animate-fade-in">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <Link href={'https://www.instagram.com/inderpal_taur/'} className="flex h-full w-full cursor-pointer items-center justify-center rounded-full
             bg-slate-950 text-sm text-white backdrop-blur-3xl undefined font-thin" target="_blank">
                  <IoLogoInstagram className="font-thin w-5 h-5" />
                </Link>
              </div>
            </div>
                  {/* <div
                    // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
                    className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                  >
                    <InfiniteMovingCards
                      items={testimonials}
                      direction="right"
                      speed="slow"
                    />
                  </div> */}
          
                  <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 max-lg:mt-10">
                    {companies.map((company) => (
                      <React.Fragment key={company.id}>
                        <div className={`flex md:max-w-60 opacity-0 animate-[fadeIn_3s_ease-in_forwards] max-w-32 gap-2`}>
                          <img
                            src={company.img}
                            alt={company.name}
                            className="md:w-12 w-6"
                          />
                          {/* <img
                            src={company.nameImg}
                            alt={company.name}
                            width={company.id === 4 || company.id === 5 ? 100 : 150}
                            className="md:w-24 w-20"
                          /> */}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
