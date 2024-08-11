function Landing() {
    return (
        <div className="bg-[#E6CCB2] w-screen flex items-center flex-col font-roboto-mono">
            <div className="bg-[#EDE0D4] w-10/12 h-28 rounded-3xl flex  justify-center md:justify-end items-center px-0 md:px-5">
                {/* Adjusted text size classes */}
                <p className="text-2xl mx-3">Home</p><p>|</p><p className="text-2xl mx-3">About</p><p>|</p><p className="text-2xl mx-3">Projects</p>
            </div>
            <div className="bg-[#9C6644] w-10/12 h-[40rem] rounded-3xl  my-12 md:my-24 flex flex-col md:flex-row">
                <div className=" w-full md:w-1/2  h-1/2 md:h-full flex justify-center items-center flex-col">
                    <div className="pb-32">
                        <p></p>
                    </div>
                    <p className="font text-5xl text-[#EDE0D4]">KEVIN</p>
                    <div className="flex flex-row">
                        <p className="font text-5xl text-[#EDE0D4]">S</p>
                        <div className="h-[2.9rem] w-[5rem] rounded-full bg-[#D9D9D9] flex items-center">
                            <div className="h-[2.7rem] w-[2.7rem] rounded-full bg-[#432818]"></div>
                        </div>
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
            <div className="bg-[#9C6644] w-10/12 h-[60rem] rounded-3xl my-12 md:my-24">
            </div>
            <div className="w-10/12 h-1 rounded-2xl bg-[#EDE0D4]"></div>{/*WHITE LINE */}
        </div>
    );
}
export default Landing