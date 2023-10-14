 import React from "react";

 export const Header = () => {
    return <header className={ `fixed flex justify-between top-0 w-full z-50 p-3 xl:p-4 lg:p-4 md:p-4` }>
        {/* logo */}
        <div className="flex justify-start items-center gap-2">
            <img src="/assets/images/logo.png" className={ ` w-[80px] ` }/>
            <div className="text-white text-xl font-bold ">
                INTRAINTEL<span className="text-purple-600">.AI</span>
            </div>
        </div>
        <div className="flex justify-end items-center gap-4 xl:gap-8 lg:gap-8 md:gap-8">
            <div className="hidden items-center gap-10 xl:flex lg:flex ">
                <a className={`text-white font-bold cursor-pointer`}>Home</a>
                <a className={`text-white cursor-pointer`}>About Us</a>
                <a className={`text-white cursor-pointer`}>Pricing</a>
                <a className={`text-white cursor-pointer`}>Contact</a>
            </div>
            <div className="rounded-3xl flex items-center bg-purple-600">
                <button className="rounded-3xl px-2 xl:px-4 lg:px-4 md:px-4 py-2">
                    <img src="/assets/icons/light.png" className="w-4 h-4" />
                </button>
                <button  className="bg-white rounded-3xl px-2 xl:px-4 lg:px-4 md:px-4 py-2 -ml-0 xl:-ml-3 lg:-ml-3 md:-ml-3">
                    <img src="/assets/icons/dark.png" className="w-4 h-4"/>
                </button>
            </div>
            <div  className="hidden xl:flex lg:flex  items-center gap-6">
                <button className="px-4 py-2 rounded-3xl text-white font-bold">Login</button>
                <span className="h-[28px] w-[2px] bg-white"></span>
                <button className="px-4 py-2 rounded-3xl bg-white shadow-md font-bold text-black">Sign up</button>
            </div>
            <button className="block xl:hidden lg:hidden md:hidden">
                <img src="/assets/icons/bar.png"/>
            </button>
        </div>

    </header>
}
