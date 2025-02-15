"use client";
import React, { useState, useEffect } from "react";
import { products } from "@/app/constants";
import Image from "next/image";


const Products = () => {
    const [visibleProducts, setVisibleProducts] = useState(2);
    const [isLargeScreen, setIsLargeScreen] = useState(true); 
    const [showMore, setShowMore] = useState(false);
    
    const updateVisibleProducts = () => {
        if (window.innerWidth < 768) {
            setIsLargeScreen(false);
            setVisibleProducts(2);
        } else {
            setIsLargeScreen(true);
            setVisibleProducts(products.length);
        }
    };

    useEffect(() => {
        updateVisibleProducts();

        window.addEventListener('resize', updateVisibleProducts);


        return () => window.removeEventListener('resize', updateVisibleProducts);
    }, [products]);

    const handleShowMore = () => {
        setShowMore(true);
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + (products.length - visibleProducts));
    };

    const handleShowLess = () => {
        setShowMore(false);
        setVisibleProducts(prevVisibleProducts => Math.min(2, prevVisibleProducts));
    };


    return (
        <section className="flex w-full h-max bg-black">
            <div className="max-w-screen-xl w-full h-max mx-auto mb-36 max-xl:mb-24 max-lg:mb-16 max-md:mb-12">
                <div className="flex flex-col w-max h-max mx-auto mt-16">
                    <p className="text-lg text-center text-brand-500 md:tracking-[0.4rem]">OUR PRODUCTS</p>
                    <h1 className="text-4xl text-center text-white font-semibold max-md:font-normal mt-4 max-md:mt-5">Featured Products</h1>
                    <p className="text-lg text-center text-gray-50 w-[55rem] max-xl:w-[45rem] max-lg:w-[35rem] max-md:w-[24.5rem] max-xs:w-[22rem] mt-2 max-md:mt-6">Ultra-premium components, engineered by Probike. The ultimate upgrade. Wherever you ride, we’ve got a bike for the joyrider in you</p>
                </div>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-8 max-xl:gap-x-6 max-lg:gap-x-10 gap-y-10 max-xl:gap-y-8 max-lg:gap-y-10 max-md:gap-y-6 max-w-max mt-20 h-max mx-auto">
                    {products.slice(0, visibleProducts).map(({ key, url }) => (
                        <div key={key} className="bg-gray-50 w-[22rem] max-xl:w-[20rem] max-md:w-[23rem] max-xs:w-[21rem] h-max rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center w-full h-[55%] bg-BG rounded-t-md">
                                <Image 
                                    width={300} 
                                    height={200} 
                                    src={url} 
                                    alt="product image" 
                                    className="mt-5 max-md:w-[75%]"
                                />
                                <h1 className="text-lg text-gray-100 my-8">Mondraker CHASER RX</h1>
                            </div>
                            <div className="">
                                <div className="flex justify-end w-full">
                                    <div className="bg-brand-600 w-max rounded-bl-md px-4 py-2">
                                        <p className="text-white">E-BIKE</p>
                                    </div>
                                </div>
                                <div className="flex max-md:justify-center gap-x-6 max-xs:gap-x-4 mt-4 mb-10 mx-2">
                                    <ul className="flex flex-col gap-y-2 text-sm text-gray-950">
                                        <li><span className="font-medium">Brand:</span> Mondrake</li>
                                        <li><span className="font-medium">Material:</span> Steel</li>
                                        <li><span className="font-medium">Color:</span> Violet</li>
                                        <li><span className="font-medium">Weight:</span> 26.7 Kg</li>
                                    </ul>
                                    <ul className="flex flex-col gap-y-2 text-sm text-gray-950">
                                        <li><span className="font-medium">Frame size:</span> 51 cm</li>
                                        <li><span className="font-medium">Torque:</span> 50 Nm -70 NM</li>
                                        <li><span className="font-medium">Chain:</span> Violet</li>
                                        <li><span className="font-medium">Chain:</span> Sram SX Eagle, 12s</li>
                                    </ul>
                                </div>
                                <button className="w-full h-16 text-lg font-semibold bg-brand-600 hover:bg-brand-200 text-white hover:text-brand-600 transition-all duration-300 rounded-b-md">Shop Now</button>
                            </div>
                        </div>
                    ))}
                </div>
                {!isLargeScreen && (
                    <div className="text-center mt-6">
                        {showMore ? (
                            <button onClick={handleShowLess} className="text-lg font-medium text-brand-600 hover:text-white bg-black hover:bg-brand-600 border border-brand-600 hover:border-white transition-all duration-300 rounded-lg px-10 py-4 md:hidden">Show Less</button>
                        ) : (
                            <button onClick={handleShowMore} className="text-lg font-medium text-brand-600 hover:text-white bg-black hover:bg-brand-600 border border-brand-600 hover:border-white transition-all duration-300 rounded-lg px-10 py-4 md:hidden">Show More</button>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products
