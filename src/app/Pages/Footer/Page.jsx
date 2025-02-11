"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
    const [year, setYear] = useState(null);
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    }, [])


    return (
        <footer className="bg-BG md:bg-black h-max">
            <div className="max-w-screen-lg w-full h-full mx-auto">
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-md:gap-x-12 justify-items-center mb-12">
                    <div className="flex flex-col mt-12 max-md:ml-8">
                        <Image 
                            width={75} 
                            height={75} 
                            src={"/footer.png"} 
                            alt={"logo image"} 
                            className="max-md:ml-10"
                        />
                        <ul className="flex flex-col gap-y-5 max-md:gap-y-3 mt-8 max-md:ml-6">
                            <li className="flex items-center gap-x-5">
                                <figure className="flex justify-center w-12 h-12 bg-BG object-none rounded-full"><Image width={25} height={15} src={"/location.svg"} alt={"location icon"} /></figure>
                                <p className="text-sm text-gray-100">23 Revelation Street<br /><span className="font-semibold"> Paris France.</span></p>
                            </li>
                            <li className="flex items-center gap-x-5">
                                <figure className="flex justify-center w-12 h-12 bg-BG object-none rounded-full"><Image width={25} height={15} src={"/call.svg"} alt={"call icon"} /></figure>
                                <p className="text-sm text-gray-100">+1630548590375</p>
                            </li>
                            <li className="flex items-center gap-x-5">
                                <figure className="flex justify-center w-12 h-12 bg-BG object-none rounded-full"><Image width={25} height={15} src={"/message.svg"} alt={"message icon"} /></figure>
                                <p className="text-sm text-brand-600 font-semibold">ashimroy@Gmail.com</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col w-max mt-24 max-md:ml-6">
                        <h1 className="text-sm font-semibold text-white">Company</h1>
                        <ol className="flex flex-col text-white text-sm dot gap-y-4 mt-4">
                            <li className="hover:text-brand-600 transition-all w-max duration-300"><Link href={"#"}>About Us</Link></li>
                            <li className="hover:text-brand-600 transition-all w-max duration-300 max-md:hidden"><Link href={"#"}>Our Bikes</Link></li>
                            <li className="hover:text-brand-600 transition-all w-max duration-300"><Link href={"#"}>Our Services</Link></li>
                            <li className="hover:text-brand-600 transition-all w-max duration-300"><Link href={"#"}>Article & News</Link></li>
                            <li className="hover:text-brand-600 transition-all w-max duration-300"><Link href={"#"}>Contact</Link></li>
                        </ol>
                    </div>

                    <hr className="md:hidden col-span-2 border border-gray-900 w-full mt-6" />

                    <div className="flex max-md:items-center flex-col max-md:col-span-2 mt-24 max-md:mt-8">
                        <h1 className="text-sm max-md:text-center font-semibold text-gray-100">About The Company</h1>
                        <p className="text-sm max-md:text-center text-gray-100 w-60 max-md:w-[17rem] mt-4">I am specialized in Graphic Design & UI/UX Design.</p>
                        
                        <ul className="flex max-md:justify-center gap-x-6 mt-12 max-md:mt-6">
                            <li>
                                <Link href={"#"}><figure className="flex justify-center w-12 h-12 bg-BG hover:bg-brand-700 transition-all duration-300 hover:shadow-outer object-none rounded-2xl"><Image width={30} height={15} src={"/facebook.svg"} alt={"facebook icon"} /></figure></Link>
                            </li>
                            <li>
                                <Link href={"#"}><figure className="flex justify-center w-12 h-12 bg-BG hover:bg-brand-700 transition-all duration-300 hover:shadow-outer object-none rounded-2xl"><Image width={30} height={15} src={"/instagram.svg"} alt={"instagram icon"} /></figure></Link>
                            </li>
                            <li>
                                <Link href={"#"}><figure className="flex justify-center w-12 h-12 bg-BG hover:bg-brand-700 transition-all duration-300 hover:shadow-outer object-none rounded-2xl"><Image width={30} height={15} src={"/linkedin.svg"} alt={"linkedin icon"} /></figure></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black md:bg-BG h-max">
                <h1 className="text-sm text-center text-white py-3">{year} Copyright Act: www.mpvngt.com</h1>
            </div>
        </footer>
    )
}

export default Footer
