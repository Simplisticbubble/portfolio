
import Switch from './Switch'
import { useGlobalState } from '../GlobalStateContext';

function Landing() {
    const { state } = useGlobalState();
    return (
        <div className={` w-screen flex items-center flex-col font-roboto-mono transition-all duration-300 ${state.isSelect ? "bg-[#222626]" : "bg-[#E6CCB2]"}`}>
            <div className={`w-10/12 h-28 rounded-3xl flex  justify-center md:justify-end items-center px-0 md:px-5 transition-all duration-300 ${state.isSelect ? "bg-[#D9D9D9]" : "bg-[#EDE0D4]"}`}>
                {/* Adjusted text size classes */}
                <p className="text-2xl mx-3">Home</p><p>|</p><p className="text-2xl mx-3">About</p><p>|</p><p className="text-2xl mx-3">Projects</p>
            </div>
            <div className={`w-10/12 h-[40rem] rounded-3xl  my-12 md:my-24 flex flex-col md:flex-row transition-all duration-300 ${state.isSelect ? "bg-[#414444]" : "bg-[#9C6644]"}`}>
                <div className=" w-full md:w-1/2  h-1/2 md:h-full flex justify-center items-center flex-col">
                    <div className="pb-32">
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

                <div className=" w-full md:w-1/2  h-1/2 md:h-full flex justify-center items-center flex-col">
                    <div className="pb-1">
                            <p></p>
                        </div>
                        <div className=" bg-mob bg-center bg-cover h-[20rem] w-[20rem] rounded-full">

                        </div>
                        <div className="pt-20 text-xl text-[#EDE0D4]">
                            <p>GITHUB | LinkedIn</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4]"></div>{/*WHITE LINE */}
            <div className= {`w-10/12 rounded-3xl my-12 md:my-24 p-12 sm:px-44 text-[#EDE0D4] transition-all duration-300 ${state.isSelect ? "bg-[#414444]" : "bg-[#9C6644]"}`}>
                <p className='text-5xl mt-12 mb-16'>About Me</p>
                <p className='text-3xl my-4'>Bio</p>
                <p className='my-4 text-xl'>Hello! I'm Kevin, a Software Engineer and Computer Science graduate from the University of Technology Sydney, majoring in AI and Data Analytics. During my time at university, I spent my free time learning web development, specialising in full stack development. As a result, I have honed skills in the frontend, especially in React.js.</p>
                <p className='my-4 text-xl'>With a passion for innovation and a drive for continuous learning, I am taking the necessary steps improve my abilities as a software engineer. After being mentored by several senior engineers and tech leads, I am driven to be a part of technical leadership, drive change and teach fellow junior colleagues.</p>
                <p className='my-4 text-xl'>To cater this process, I have been learning how to design scalable systems to serve millions of users in my spare time. Books I've been reading include Alex Xu's System Design Interview (Highly recommend) and Designing Data Intensive Applications. In addition, I'm also trying to learn more about the DevOps world, recently picking up skills in GoLang, Shell Scripting and Docker.</p>
                <p className='my-4 text-xl'>Outside of work related stuff, you will catch me in the gym, cooking food that would not bode well with Chef Ramsay, going on coffee runs, and listening to dance music. :D</p>
            </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4]"></div>{/*WHITE LINE */}
        </div>
    );
}
export default Landing