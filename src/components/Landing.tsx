import React, { useRef } from 'react';
import Switch from './Switch'
import { useGlobalState } from '../GlobalStateContext';

function Landing() {
    const targetDivAbout = useRef<HTMLDivElement>(null);
    const targetDivProjects = useRef<HTMLDivElement>(null);
    const scrollToTargetDiv = () => {
        targetDivAbout.current?.scrollIntoView({ behavior: 'smooth' });
      };
      const scrollToProjects = () => {
        targetDivProjects.current?.scrollIntoView({ behavior: 'smooth' });
      };
      const handleClick = (url: string) => {
        // Open the URL in a new tab/window
        window.open(url, '_blank');
      };
    const { state } = useGlobalState();
    return (
        <div className={`w-screen flex items-center flex-col font-roboto-mono transition-all duration-300 overflow-auto ${state.isSelect ? "bg-[#222626]" : "bg-[#E6CCB2]"}`}>
            <div className={`w-10/12 h-28 rounded-3xl flex justify-center md:justify-end items-center px-0 md:px-5 transition-all duration-300 ${state.isSelect ? "bg-[#D9D9D9]" : "bg-[#EDE0D4]"}`}>
                {/* Adjusted text size classes */}
                <p className="text-2xl mx-3">Home</p><p>|</p><p onClick={scrollToTargetDiv} className="text-2xl mx-3">About</p><p>|</p><p onClick={scrollToProjects} className="text-2xl mx-3">Projects</p>
            </div>
            <div className={`w-10/12 rounded-3xl  my-12 md:my-24 flex flex-col md:flex-row transition-all duration-300 ${state.isSelect ? "bg-[#414444]" : "bg-[#9C6644]"}`}>
                <div className=" w-full md:w-1/2  h-1/2 md:h-full flex justify-center items-center flex-col">
                    <div className="pb-36">
                        <p></p>
                    </div>
                    <p className="font text-5xl text-[#EDE0D4]">KEVIN</p>
                    <div className="flex flex-row">
                        <p className="font text-5xl text-[#EDE0D4]">S</p>
                        {/* <span className="h-[2.9rem] w-[5rem] rounded-full bg-[#D9D9D9] flex items-center">
                            <div className="h-[2.7rem] w-[2.7rem] rounded-full bg-[#432818]"></div>
                        </span> */}
                        <Switch/>
                        <p className="font text-5xl text-[#EDE0D4]">U</p>
                    </div>
                    <div className="pt-32 text-xl text-[#EDE0D4]">
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center">

                    <div className=" w-full md:w-1/2   md:h-full flex justify-center items-center flex-col">
                        <div className="py-10">
                            <p></p>
                        </div>
                        <div className=" bg-mob bg-center bg-cover h-[20rem] w-[20rem] rounded-full">

                        </div>
                        <div className=" flex flex-row pt-10 pb-16 text-xl text-[#EDE0D4]">
                                <p className="mx-2"onClick={() => handleClick('https://github.com/Simplisticbubble')}>GITHUB</p><p> | </p><p className="mx-2" onClick={() => handleClick('https://www.linkedin.com/in/kevinseu/')}>LinkedIn</p>
                        </div>
                        </div>
                    </div>
                </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4]"></div>{/*WHITE LINE */}
            <div ref={targetDivAbout} className= {`w-10/12 rounded-3xl my-12 md:my-24 p-12 sm:px-44 text-[#EDE0D4] transition-all duration-300 ${state.isSelect ? "bg-[#414444]" : "bg-[#9C6644]"}`}>
                <p className='text-5xl mt-12 mb-16'>About Me</p>
                <p className='text-3xl my-4'>Bio</p>
                <p className='my-4 text-xl'>Hello! I'm Kevin, a Software Engineer and Computer Science graduate from the University of Technology Sydney, majoring in AI and Data Analytics. During my time at university, I spent my free time learning web development, specialising in full stack development. As a result, I have honed skills in the frontend, especially in React.js.</p>
                <p className='my-4 text-xl'>With a passion for innovation and a drive for continuous learning, I am taking the necessary steps improve my abilities as a software engineer. After being mentored by several senior engineers and tech leads, I am driven to be a part of technical leadership, drive change and teach fellow junior colleagues.</p>
                <p className='my-4 text-xl'>To cater this process, I have been learning how to design scalable systems to serve millions of users in my spare time. Books I've been reading include Alex Xu's System Design Interview (Highly recommend) and Designing Data Intensive Applications. In addition, I'm also trying to learn more about the DevOps world, recently picking up skills in GoLang, Shell Scripting and Docker.</p>
                <p className='my-4 text-xl'>Outside of work related stuff, you will catch me in the gym, cooking food that would not bode well with Chef Ramsay, going on coffee runs, and listening to dance music. :D</p>
            </div>
            <div ref={targetDivProjects} className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4]"></div>{/*WHITE LINE */}
            
            <div className='flex flex-row flex-wrap items-center justify-center gap-20 sm:gap-40 mt-20 md:mt-52'>
                <div className={`flex flex-col justify-center items-center text-[#EDE0D4]  h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem]  p-20 ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}>
                    <p className='text-xl sm:text-5xl my-4'>Party Task App</p>
                    <p className='my-4 text-sm sm:text-3xl text-center'>Created an application using GO and React Native. Enabling users to create and designate tasks. Using drag and drop component to mark specific tasks.</p>
                </div>
                <div onClick={() => handleClick('https://party-go-app-production.up.railway.app/')} className= {`bg-goParty bg-center bg-cover h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem] ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}></div>
            </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4] mt-48"></div>{/*WHITE LINE */}
            <div className='flex flex-row sm:flex-row-reverse flex-wrap items-center justify-center gap-20 sm:gap-40 mt-20 md:mt-52'>
                <div className={`flex flex-col justify-center items-center text-[#EDE0D4]  h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem]  p-20 ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}>
                    <p className='text-xl text-center sm:text-5xl my-4'>Train Math Game</p>
                    <p className='my-4 text-sm sm:text-3xl text-center'>Created a small Math Game inspired by doing math using the train carriage numbers to make 10, using javascript.</p>
                </div>
                <div onClick={() => handleClick('https://train-number-7qarpy9eb-kevins-projects-b5321f87.vercel.app/')} className= {`bg-Train bg-center bg-cover h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem] ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}></div>
            </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4] mt-48"></div>{/*WHITE LINE */}
            <div className='flex flex-row flex-wrap items-center justify-center gap-20 sm:gap-40 mt-20 md:mt-52'>
                <div className={`flex flex-col justify-center items-center text-[#EDE0D4]  h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem]  p-20 ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}>
                    <p className='text-xl text-center sm:text-5xl my-4'>Snowball fight Game</p>
                    <p className='my-4 text-sm sm:text-3xl text-center'>Created an application using JavaScript and Socket.io, enables multiple users to play a friendly game</p>
                </div>
                <div onClick={() => handleClick('https://github.com/Simplisticbubble/snowBall')} className= {`bg-snowBall bg-center bg-cover h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem] ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}></div>
            </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4] mt-48"></div>{/*WHITE LINE */}
            <div className='flex flex-row flex-wrap items-center justify-center gap-20 sm:gap-40 mt-20 md:mt-52'>
                <div className={`flex flex-col justify-center items-center text-[#EDE0D4]  h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem]  p-20 ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}>
                    <p className='text-xl text-center sm:text-5xl my-4'>Honours Project</p>
                    <p className='my-4 text-xs sm:text-3xl text-center'>Compared the efficacy of interpretable vs black-boxed models for Lung cancer image classification. I trained multiple models such as, CNN, Random forest, Logistic regression, Naive bayes, etc.</p>
                </div>
                <div onClick={() => handleClick('https://github.com/Simplisticbubble/Honours-Project')} className= {`bg-ctScan bg-center bg-cover h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem] ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}></div>
            </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4] mt-48"></div>{/*WHITE LINE */}
            <div className='flex flex-row sm:flex-row-reverse flex-wrap items-center justify-center gap-20 sm:gap-40 mt-20 md:mt-52'>
                <div className={`flex flex-col justify-center items-center text-[#EDE0D4]  h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem]  p-20 ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}>
                    <p className='text-xl text-center sm:text-5xl my-4'>Android Application</p>
                    <p className='my-4 text-sm sm:text-3xl text-center'>Created a meditation app for android using REACT, Tailwind, Expo, and TypeScript.</p>
                </div>
                <div onClick={() => handleClick('https://github.com/Simplisticbubble/meditationApp')} className= {`bg-meditate bg-center bg-cover h-[20rem] w-[20rem] sm:h-[45rem] sm:w-[45rem] rounded-[5rem] sm:rounded-[10rem] ${state.isSelect ? "bg-[#414444]" : "bg-[#432818]"}`}></div>
            </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4] mt-48"></div>{/*WHITE LINE */}
            
            
            
        </div>
    );
}
export default Landing