import Image from "next/image"
import Link from "next/link"


const Categories = () => {
    return (
        <section className="flex w-full h-max bg-BG mt-14">
            <div className="max-w-screen-xl w-full mx-auto mb-32 max-xl:mb-24 max-lg:mb-20 max-md:mb-14">
                <div className="flex flex-col justify-center mt-20 md:mt-44">
                    <p className="text-lg text-center text-brand-600 font-light md:font-normal md:tracking-[0.25rem]">YOUR RIDE START HERE.</p>
                    <h1 className="text-4xl text-center md:font-semibold text-gray-100 mt-4">Our Categories</h1>
                    <p className="hidden md:block max-lg:w-[26rem] text-md text-center text-white mt-10 mx-60 max-lg:mx-auto">Our road bikes are built for speed, with lightweight frames and aerodynamic features that slice through the air effortlessly. Feel the rush as you pedal along the open road.</p>
                </div>

                <div className="flex max-lg:flex-col max-xl:flex-wrap justify-around max-w-6xl max-xl:max-w-5xl max-lg:w-max max-lg:gap-y-8 h-max mx-auto mt-16">
                    <div className="flex flex-col justify-center w-[33rem] max-xl:w-[30rem] max-md:w-[25rem] max-lg:h-[35rem] max-md:mx-auto bg-white rounded-lg">
                        <h1 className="text-4xl font-semibold text-center text-black mt-2">KIDS BIKES</h1>
                        <p className="text-center text-gray-900 mt-2">Close-out pricing on dozens of products</p>
                        <div className="flex items-center justify-center w-max mt-2 mx-auto">
                            <Image 
                                width={400} 
                                height={300} 
                                src={"/bike3.png"} 
                                alt={"bike3 image"} 
                                className="z-10"
                            />
                        </div>
                        <Link href={"#"} className="-mt-4 mx-auto"><span className="text-xl font-semibold bg-brand-600 hover:bg-white text-white hover:text-brand-600 rounded-md border-2 hover:border hover:border-brand-600 transition-all duration-300 px-16 py-4">Discover More</span></Link>
                    </div>

                    <div className="flex flex-col gap-y-5 w-[33rem] max-xl:w-[30rem] max-md:w-[25rem] h-max">
                        <div className="flex justify-around border-2 border-white rounded-md h-[50%] bg-white w-full">
                            <div className="flex flex-col max-md:ml-4 mt-8 max-md:mt-5 w-[50%] h-max">
                                <h1 className="text-xl text-center font-semibold">ACCESSOORIES</h1>
                                <p className="text-lg text-center max-xl:text-sm text-gray-900 w-[85%] max-md:w-full mt-5 max-md:mt-3 self-center">Close-out pricing on dozens of products</p>
                                <Link href={"#"} className="text-brand-600 hover:text-white border-2 border-brand-600 hover:bg-brand-600 w-max rounded px-14 max-xl:px-10 max-md:px-8 py-4 mx-auto mt-6 max-md:mt-3 max-md:mb-4 transition-all duration-300"><span className="text-xl">Shop Now</span></Link>
                            </div>
                            <div className="flex justify-end items-center w-max">
                                <Image 
                                    width={270} 
                                    height={200} 
                                    src={"/chainstay.png"} 
                                    alt={"chainstay image"} 
                                    className="rounded-e-md max-md:w-[85%] max-md:h-[100%]"
                                />
                            </div>
                        </div>
                        <div className="flex justify-around border-2 border-white rounded-md h-[50%] bg-white w-full">
                            <div className="flex flex-col max-md:ml-4 mt-8 max-md:mt-5 w-[50%] h-max">
                                <h1 className="text-xl text-center font-semibold">ACCESSOORIES</h1>
                                <p className="text-lg text-center max-xl:text-sm text-gray-900 w-[85%] max-md:w-full mt-5 max-md:mt-3 self-center">Close-out pricing on dozens of products</p>
                                <Link href={"#"} className="text-brand-600 hover:text-white border-2 border-brand-600 hover:bg-brand-600 w-max rounded px-14 max-xl:px-10 max-md:px-8 py-4 mx-auto mt-6 max-md:mt-3 max-md:mb-4 transition-all duration-300"><span className="text-xl">Shop Now</span></Link>
                            </div>
                            <div className="flex justify-end items-center w-max">
                                <Image 
                                    width={270} 
                                    height={200} 
                                    src={"/chainstay.png"} 
                                    alt={"chainstay image"} 
                                    className="rounded-e-md max-md:w-[85%] max-md:h-[100%]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories
