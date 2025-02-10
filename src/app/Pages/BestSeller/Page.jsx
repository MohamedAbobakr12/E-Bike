import Image from "next/image"


const BestSeller = () => {
    return (
        <section className="flex w-full h-max bg-gray-50 mx-auto mb-8">
            <div className="w-full h-full">
                <div className="max-w-screen-xl mx-auto mt-16 h-max">
                    <div className="">
                        <h1 className="text-4xl text-center font-semibold text-gray-950 max-md:hidden">Best Sellers Products <br /> This Weeks</h1>
                        <p className="text-xl text-center text-brand-600 font-light md:hidden mb-6">YOUR RIDE START HERE.</p>
                        <p className="text-4xl max-md:text-2xl font-semibold max-md:font-normal text-center text-gray-900 uppercase mb-16 md:hidden">Our Features & Facilities</p>
                    </div>

                    <div className="flex flex-wrap flex-row justify-between max-xl:justify-around max-md:justify-center max-w-7xl mx-auto mt-12 max-md:mx-4">
                        <div className="h-full md:w-[38%]">
                            <div className="flex flex-col items-center h-[50%] bg-brand-600 rounded-t-lg">
                                <h2 className="text-2xl text-center font-semibold text-brand-950 mt-5">The Most Popular Bike <br /> Of The Season</h2>
                                <button className="text-lg font-medium w-max bg-gray-50 hover:bg-brand-600 text-brand-600 hover:text-gray-50 border hover:border-white translation-all duration-300 rounded-lg my-8 px-12 py-3">Show More</button>
                            </div>
                            <div className="flex flex-col gap-y-6 mt-6 px-4 py-2">
                                <p className="text-lg text-brand-600 font-semibold">The Most Popular</p>
                                <h1 className="text-3xl font-semibold text-black">Want To Take Cycling To The Next Level</h1>
                                <p className="text-xl">Be creative and organized to find more time to ride.</p>
                            </div>
                        </div>

                        <div className="w-[98%] md:w-[60%] max-md:mt-16">
                            <div className="w-full h-full bg-BG rounded-lg max-md:mx-auto">
                                <div className="flex max-md:grid">
                                    <div className="flex flex-col gap-y-6 mx-4 max-md:mx-auto pt-32 max-md:pt-8 max-md:w-max h-max">
                                        <h1 className="text-4xl max-md:text-3xl font-bold text-brand-200">Super Deluxe <br /> Tandem 7i</h1>
                                        <p className="text-white w-60 max-md:w-[21rem]">Lightweight 16-inch steel frame is the perfect bike for rides around your neighborhood or trails.</p>
                                    </div>
                                    <div className="flex flex-col h-max pt-16 max-md:pt-8 max-md:-order-1">
                                        <Image 
                                            width={400} 
                                            height={200} 
                                            src={"/bike2.png"} 
                                            alt={"bike2 image"} 
                                            className="max-md:w-[18rem] self-center"
                                        />
                                        <hr className="h-1 bg-white blur-md md:block hidden" />
                                    </div>
                                </div>
                                <div className="flex max-lg:flex-col items-center gap-x-16 mt-10 mx-4 max-md:mx-8">
                                    <div className="flex flex-col max-md:w-full my-6">
                                        <button className="text-lg font-medium w-max max-md:w-full h-max bg-brand-600 hover:bg-gray-50 text-gray-50 hover:text-brand-600 border border-gray-100 hover:border-brand-600 translation-all duration-300 rounded-lg my-8 px-12 py-3">Show More</button>
                                    </div>
                                    <div className="flex justify-center items-center gap-x-24 max-xl:gap-x-10 max-md:gap-x-14 max-md:-order-1 max-lg:mb-8">
                                        <ul className="flex text-gray-50 flex-col">
                                            <li className="text-lg w-max">Fork Travel</li>
                                            <li className="text-lg font-extrabold">205MM</li>
                                        </ul>
                                        <ul className="flex text-gray-50 flex-col">
                                            <li className="text-lg">Material</li>
                                            <li className="text-lg font-extrabold">Carbon</li>
                                        </ul>
                                        <ul className="flex text-gray-50 flex-col">
                                            <li className="text-lg">Weight</li>
                                            <li className="text-lg font-extrabold">55.5KG</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSeller