import React, { useState } from "react";

export default function Switch() {
    const [isSelect, setIsSelect] = useState(false);

    return (
        <div>
            <div onClick={() => setIsSelect(!isSelect)} className={`h-[2.9rem] w-[5rem] rounded-full flex items-center transition-all duration-300 ${isSelect ? "bg-[#64FF64]": "bg-[#D9D9D9]"}`}>
                <span className={`h-[2.7rem] w-[2.7rem] rounded-full bg-[#432818] transition-all duration-300 ${isSelect ? 'ml-[2.3rem]' : 'ml-0'}`}></span>
            </div>
        </div>
    );
}