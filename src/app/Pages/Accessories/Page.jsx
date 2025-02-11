"use client";
import React, {useState, useEffect} from "react";
import { accessories } from "@/app/constants";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularFaStar } from "@fortawesome/free-regular-svg-icons";


const Accessories = () => {
    const [visibleAccessories, setVisibleAccessories] = useState(2);
    const [isLargeScreen, setIsLargeScreen] = useState(true); 
    const [showMore, setShowMore] = useState(false);


    const updateVisibleAccessories = () => {
        if (window.innerWidth < 768) {
            setIsLargeScreen(false);
            setVisibleAccessories(2);
        } else {
            setIsLargeScreen(true);
            setVisibleAccessories(accessories.length);
        }
    };

    useEffect(() => {
        updateVisibleAccessories();

        window.addEventListener('resize', updateVisibleAccessories);


        return () => window.removeEventListener('resize', updateVisibleAccessories);
    }, [accessories]);

    const handleShowMore = () => {
        setShowMore(true);
        setVisibleAccessories(prevVisibleAccessories => prevVisibleAccessories + (accessories.length - visibleAccessories));
    };

    const handleShowLess = () => {
        setShowMore(false);
        setVisibleAccessories(prevVisibleAccessories => Math.min(2, prevVisibleAccessories));
    };


    return (
        <section className="max-w-screen-xl h-max mx-auto mb-32 max-lg:mb-24 max-md:mb-14">
            <div className="w-max h-full mx-auto">
                <div className="flex flex-col items-center mt-28">
                    <h4 className="text-lg text-center font-medium md:tracking-[0.3rem] text-brand-500">PARTS & ACCESSORIES</h4>
                    <h1 className="text-4xl max-md:text-3xl text-center font-semibold max-md:font-medium text-gray-950 mt-3">Shop Gear & Accessories</h1>
                    <p className="text-lg text-center text-gray-900 w-[54rem] max-xl:w-[45rem] max-lg:w-[40rem] max-md:w-[24rem] mt-4">Load up and head out. Explore the route less travelled or accelerate your daily routine with one of these rugged&#44; versatile e-bikes.</p>
                </div>

                <div className="grid grid-cols-4 max-xl:grid-cols-3  max-lg:grid-cols-2 max-md:grid-cols-1 gap-7 max-xl:w-max h-max mt-36 max-xl:mt-32 max-lg:mt-24 max-md:mt-16 max-xl:mx-auto">
                    {accessories.slice(0, visibleAccessories).map(({ key, url })=> (
                        <div key={key} className="flex flex-col justify-center items-start w-[18rem] max-md:w-[25rem] h-[28rem] max-md:h-max rounded-xl cursor-pointer hover:shadow-xl hover:shadow-brand-300 hover:scale-[1.05] transition-all duration-300">
                            <Image 
                                width={350} 
                                height={150} 
                                src={url} 
                                alt="accessory image" 
                                className="object-contain max-md:self-center mt-4 max-md:mt-12"
                            />
                            <div className="flex flex-col w-full h-max mt-6 mx-auto px-5">
                                <p className="text-md text-gray-950 opacity-50">Accessories</p>
                                <ul className="flex flex-col gap-y-2">
                                    <li className="font-medium">Lightweight Bike Helmet</li>
                                    <li>Violet</li>
                                    <li><span className="font-medium">Weight:</span> 26.7 Kg</li>
                                    <li>
                                        <FontAwesomeIcon className="cursor-pointer" icon={solidFaStar}  color="#FFAA72" />
                                        <FontAwesomeIcon className="cursor-pointer" icon={solidFaStar}  color="#FFAA72" />
                                        <FontAwesomeIcon className="cursor-pointer" icon={solidFaStar}  color="#FFAA72" />
                                        <FontAwesomeIcon className="cursor-pointer" icon={solidFaStar}  color="#FFAA72" />
                                        <FontAwesomeIcon className="cursor-pointer" icon={regularFaStar}  color="#FFAA72" />
                                        </li>
                                </ul>
                            </div>
                            <button className="text-lg text-center font-medium self-center text-brand-600 hover:text-white hover:bg-brand-600 border-2 border-brand-600 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600 transition-all duration-300 rounded-lg px-24 max-md:px-32 py-3 mt-5 mb-10">Buy Now</button>
                        </div>
                    ))}
                </div>
                {!isLargeScreen && (
                    <div className="text-center mt-6">
                        {showMore ? (
                            <button onClick={handleShowLess} className="text-lg font-medium text-brand-600 hover:text-white hover:bg-brand-600 border-2 border-brand-600 hover:border-brand-300 transition-all duration-300 rounded-lg px-10 py-4 md:hidden">Show Less</button>
                        ) : (
                            <button onClick={handleShowMore} className="text-lg font-medium text-brand-600 hover:text-white hover:bg-brand-600 border-2 border-brand-600 hover:border-brand-300 transition-all duration-300 rounded-lg px-10 py-4 md:hidden">Show More</button>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Accessories
