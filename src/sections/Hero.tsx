"use client";

import robotImg from "../assets/images/dalle-path-1.jpg";
// import Brain3D from "@/components/Brain3D";
import Image from 'next/image';
import { Button } from "../components/Button";
import underlineImage from "../assets/images/underline.svg?url";
import Loader from "../assets/images/loader-animated.svg"
import { Orbit } from "../components/Orbit";
import { Planet } from "../components/Planet";
import { SectionBorder } from "../components/SectionBorder";
import { SectionContent } from "./SectionContent";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useMousePosition = () => { 
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);

  const xProgress = useTransform(clientX, [0, innerWidth],[0,1]);
  const yProgress = useTransform(clientY, [0, innerHeight],[0,1]);

  useEffect(()=>{
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);

    window.addEventListener("resize",()=>{
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    });
  }, []);

  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    })
  },[]);

  return { xProgress, yProgress };
};

export const Hero = () => {
  const {xProgress, yProgress } = useMousePosition();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset:[ 'end start','start end']
  });

  const transformedY = useTransform(scrollYProgress, [0,1], [150,-200]);

  const springX = useSpring(xProgress);
  const springY = useSpring(yProgress);

  const translateLargeX = useTransform(springX, [0,1], ['-25%','25%']);

  const translateLargeY = useTransform(springY, [0,1],["-25%","25%"]);

  const translateMediumX = useTransform(springX, [0,1], ["-50%","50%"]);

  const translateMediumY = useTransform(springY, [0,1], ["-50%","50%"]);

  const translateSmallX = useTransform(springX, [0,1], ["-200%","200%"]);

  const translateSmallY = useTransform(springY, [0,1], ["-200%","200%"]);

  return(
  <section ref={sectionRef}>
    <div className="container">
      <SectionBorder>
        <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute-center">
              <Orbit className="size-[350px]"/>
            </div>
            <div className="absolute-center">
              <Orbit className="size-[600px]"/>
            </div>
            <div className="absolute-center">
              <Orbit className="size-[850px]"/>
            </div>
            <div className="absolute-center">
              <Orbit className="size-[1100px]"/>
            </div>
            <div className="absolute-center">
              <Orbit className="size-[1350px]"/>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
            Experience and Discover the Power of AI Conversations with{" "}
            <span className="relative">
              <span>HAI7.ai</span>
              <span className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"
                style={{
                  maskImage: `url(${underlineImage.src})`,
                  maskSize: "contain",
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat',
                }}
              >
              </span>
            </span>
          </h1>
          <p className="text-center text-lg md:text-xl mt-8 mx-w-3xl mx-auto">
          Hai7.ai is a suite of AI-driven assistants built for modern businesses. From customer support to internal operations, our platform enables seamless, intelligent interactions through chat-based tools designed for productivity, automation, and scale.
          </p>
          <div className="flex justify-center">
            {/* <Button variant="secondary" className="mt-10">
              Start Chatting
            </Button> */}
          </div>
            <div className="relative isolate max-w-5xl mx-auto">
                  <div className="absolute left-1/2 top-0">
                    <motion.div 
                      style={{
                        x: translateLargeX,
                        y: translateLargeY,
                    }}>
                        <Planet size="lg" color="violet" className="-translate-x-[316px] -translate-y-[76px] rotate-135" />
                      </motion.div> 
                      <motion.div 
                      style={{
                        x: translateLargeX,
                        y: translateLargeY,
                    }}>
                        <Planet size="lg" color="violet" className="-translate-y-[188px] translate-x-[334px] -rotate-135" />
                      </motion.div>
                      <motion.div 
                      style={{
                        x: translateSmallX,
                        y: translateSmallY,
                    }}>
                        <Planet size="sm" color="fuchsia" className="-translate-y-[372px] -translate-x-[508px] rotate-135" />
                      </motion.div>
                      <motion.div 
                      style={{
                        x: translateMediumX,
                        y: translateMediumY,
                    }}>
                        <Planet size="md" color="teal" className="-translate-y-[342px] translate-x-[488px] -rotate-135" />
                      </motion.div>             
                  </div>
                  <div className="absolute left-0 z-10 top-[30%] -translate-x-10 hidden lg:block">
                    <motion.div 
                        className="bg-indigo-950/80 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                        style={{
                          y: transformedY
                        }}
                    >
                        <div>
                          <strong>User:</strong> Can you provide the latest data insights from the custom data I uploaded?
                        </div>
                        <div className="text-right text-gray-400 text-sm font-sm font-semibold">1m ago</div>
                    </motion.div>
                  </div>
                  <div className="absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block">
                    <motion.div 
                        className="bg-blue-950/80 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                        style={{
                          y: transformedY
                        }}
                    >
                        <div>
                          <strong>HAI7 AI:</strong> Absolutely! I can analyze and provide the latest data insights from the custom data you uploaded, including NoSQL, SQL, and other sources!!
                        </div>
                        <div className="text-right text-gray-400 text-sm font-sm font-semibold">Just now</div>
                    </motion.div>
                  </div>
                <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative flex">
                  <Image src={robotImg} alt="Robot Image"/>
                    <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4">
                      <div className="bg-purple-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                      <Loader className="text-blue-300" />
                        <div className="font-semibold text-xl text-gray-100">
                          HAI7 AI is generating<span className="animate-cursor-blink">|</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </SectionContent>
      </SectionBorder>
      </div>
    {/* <Brain3D /> */}
  </section>
)};

export default Hero;
