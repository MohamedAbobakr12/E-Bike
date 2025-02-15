import Image from "next/image"
import Link from "next/link"


const Hero = () => {
    return (
        <section className="flex w-full h-max mx-auto bg-BG" id="home">
            <div className="w-full h-full">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-wrap justify-between mx-4">
                        <div className="flex flex-col flex-wrap mt-12">
                            <span className="w-max text-white bg-gray-900 px-3 py-2"><p>Road Rage 2024</p></span>
                            <h1 className="text-6xl max-md:text-4xl mt-5 font-black max-md:font-medium text-gray-100 leading-[5rem] w-96 max-md:w-full">The bicycle Revolution</h1>
                            <p className="text-gray-200 text-md w-[31rem] max-md:w-[24rem] max-xs:w-[21rem] mt-12 max-md:mt-8">From sleek road bikes built for speed to rugged mountain bikes designed for off-road adventures, our slider celebrates the diversity of cycling disciplines.</p>
                            
                            <div className="flex gap-8 mt-24 max-md:hidden">
                                <button className="text-2xl px-16 py-3 rounded-md bg-brand-700 hover:bg-gray-50 text-gray-50 hover:text-brand-700 transition-colors duration-300">Shop Now</button>
                                <Link href={"#"} className="flex"><span className="text-2xl px-10 py-3 rounded-md text-brand-600 hover:text-gray-50 bg-gray-50 hover:bg-brand-600 border border-brand-300 transition-colors duration-300">Explore Products</span></Link>
                            </div>
                        </div>

                        <div className="flex flex-wrap flex-col max-md:max-w-xl max-md:w-full items-center mt-10 max-xl:mx-auto">
                            <div className="relative md:left-9 w-[28rem] max-md:w-[16rem] h-64 max-md:h-[10rem] mt-4 left-0">
                                <div className="flex relative items-center bg-brand-700 -right-16 max-xs:-right-12 w-full h-full mx-auto">
                                    <div className="flex relative items-center left-12 w-[80%]">
                                        <div className="flex flex-col relative justify-center max-md:left-16 items-center w-full max-md:w-max">
                                        <Image 
                                            width={70} 
                                            height={70} 
                                            src={"/hero.png"} 
                                            alt={"hero image"} 
                                            className="max-md:w-14 max-xs:w-12 max-md:h-14 max-xs:h-12" 
                                        />
                                        <p className="mt-4 text-lg max-md:text-md max-xs:text-sm font-medium max-md:font-normal text-white leading-7 text-center">Fast Charging <br /> Support</p>
                                        </div>
                                        <div className="flex absolute -left-64 max-md:-left-40 max-xs:-left-36 bg-gray-950 rounded-lg w-80 max-md:w-52 max-xs:w-44 h-52 max-md:h-[8rem] px-4 max-md:px-2">
                                            <Image 
                                                width={275} 
                                                height={200} 
                                                src={"/bike1.png"} 
                                                alt={"bike1 image"} 
                                                className="self-center max-md:w-48 max-xs:w-40"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex items-center w-full mt-5">
                                <Image 
                                    width={1000} 
                                    height={1000} 
                                    src={"/wallpaper.jpg"} 
                                    alt={"wallpaper image"} 
                                    className="rounded-lg w-[40.3rem] max-md:w-full h-52 max-md:h-44 max-xs:object-cover"
                                />
                                <div className="absolute flex flex-col items-center justify-center left-96 max-md:left-64 max-xs:left-52 w-36 max-md:w-28 max-xs:w-24 h-24 max-md:h-20 bg-gray-50 border-2 border-brand-600 rounded-xl md:shadow-outer">
                                    <h4 className="text-2xl max-xs:text-xl font-semibold text-brand-600">45 KM</h4>
                                    <p className="text-lg text-brand-600">PER HOUR</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex max-xs:flex-col justify-center w-full max-xs:w-max gap-8 mt-14 max-xs:mx-auto md:hidden">
                            <button className="text-lg text-center px-12 py-3 rounded-md bg-brand-700 hover:bg-gray-50 text-gray-50 hover:text-brand-700 transition-colors duration-300">Shop Now</button>
                            <Link href={"#"} className="flex"><span className="text-lg text-center px-6 py-3 rounded-md text-brand-600 hover:text-gray-50 bg-BG hover:bg-brand-600 border border-brand-300 transition-colors duration-300">Explore Products</span></Link>
                        </div>
                    </div>

                    <div className="mt-28 mb-24 max-md:mb-16">
                        <p className="text-xl text-center text-brand-600 font-light md:hidden mb-6">YOUR RIDE START HERE.</p>
                        <p className="text-4xl max-md:text-2xl font-semibold max-md:font-normal text-center text-gray-100 uppercase mb-16">Our Features & Facilities</p>

                        <div className="flex justify-center flex-wrap gap-12 py-4">
                            <div className="flex flex-col w-[16rem] h-80 bg-gray-950 hover:bg-brand-400 transation-all duration-500 cursor-pointer rounded-md hover:shadow-outer">
                                <div className="flex justify-center relative self-center w-16 h-16 bg-BG mt-9 rounded-lg shadow-lg">
                                    <Image 
                                        width={50} 
                                        height={50} 
                                        src={"/location.png"} 
                                        alt={"location icon"} 
                                        className="self-center"
                                    />
                                </div>
                                <h4 className="text-2xl font-semibold text-white text-center w-full mt-10">GPS Tracking or anti-theft</h4>
                                <p className="text-sm text-white text-center w-full mt-6">Chacking the Proxy fire and configurations running</p>
                            </div>

                            <div className="flex flex-col w-[16rem] h-80 bg-gray-950 hover:bg-brand-400 transation-all duration-500 cursor-pointer rounded-md hover:shadow-outer">
                                <div className="flex justify-center relative self-center w-16 h-16 bg-BG mt-9 rounded-lg shadow-lg">
                                    <Image 
                                        width={50} 
                                        height={50} 
                                        src={"/charging.png"} 
                                        alt={"charginf icon"} 
                                        className="self-center"
                                    />
                                </div>
                                <h4 className="text-2xl font-semibold text-white text-center w-full mt-10">Super Charging Battery</h4>
                                <p className="text-sm text-white text-center w-full mt-6">Chacking the Proxy fire and configurations running</p>
                            </div>

                            <div className="flex flex-col w-[16rem] h-80 bg-gray-950 hover:bg-brand-400 transation-all duration-500 cursor-pointer rounded-md hover:shadow-outer">
                                <div className="flex justify-center relative self-center w-16 h-16 bg-BG mt-9 rounded-lg shadow-lg">
                                    <Image 
                                        width={50} 
                                        height={50} 
                                        src={"/speed.png"} 
                                        alt={"speed icon"} 
                                        className="self-center"
                                    />
                                </div>
                                <h4 className="text-2xl font-semibold text-white text-center w-full mt-10">Monitoring Speed Trip Status</h4>
                                <p className="text-sm text-white text-center w-full mt-6">Chacking the Proxy fire and configurations running</p>
                            </div>

                            <div className="flex flex-col w-[16rem] h-80 bg-gray-950 hover:bg-brand-400 transation-all duration-500 cursor-pointer rounded-md hover:shadow-outer">
                                <div className="flex justify-center relative self-center w-16 h-16 bg-BG mt-9 rounded-lg shadow-lg">
                                    <Image 
                                        width={50} 
                                        height={50} 
                                        src={"/energy.png"} 
                                        alt={"energy icon"} 
                                        className="self-center"
                                    />
                                </div>
                                <h4 className="text-2xl font-semibold text-white text-center w-full mt-10">Power Your Ride Conditions</h4>
                                <p className="text-sm text-white text-center w-full mt-6">Chacking the Proxy fire and configurations running</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
