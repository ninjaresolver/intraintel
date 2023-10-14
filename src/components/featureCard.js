import React from "react";

const FeatureCard = (props) => {
    const { src, title, children } = props

    return <div className="mb-4 px-2  w-full xl:w-1/3 lg:w-1/3">
        <div className="p-4 bg-custom-gradient rounded-md shadow-md shadow-black h-[250px] overflow-hidden">
            <div className="flex gap-4 items-center">
                <img src={src} className=" h-[80px]"/>
                <h1 className="text-2xl text-white font-bold">{ title }</h1>
            </div>
            <div className="text-white mt-2 text-left text-xl font-bold px-3">{children}</div>
        </div>
    </div>
}

export default FeatureCard;