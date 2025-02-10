"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const Header = () => {
    const [isClick, setIsClick] = useState(false)

    const toggleButton = () => {
        setIsClick(!isClick)
    }

    const handleLinkClick = () => {
        setIsClick(false)
    }

    return (
        <header className="bg-gray-950 h-20">
            <nav className="block h-full max-md:justify-around">
                <div className="flex max-w-screen-xl w-full justify-center px-4 mx-auto items-center gap-20 max-xl:gap-12 h-full max-md:justify-around max-md:px-6">
                    <div className="flex items-center h-full gap-8">
                        <button className="relative top-0.5" onClick={toggleButton}>
                            {!isClick ? (
                                <Image 
                                    className="hidden max-md:block"
                                    width={30} 
                                    height={30} 
                                    src={"/menu.ico"} 
                                    alt={"menu"}
                            />
                            ) : (
                                <Image 
                                    className="hidden max-md:block"
                                    width={30} 
                                    height={30} 
                                    src={"/close.ico"} 
                                    alt={"close"}
                            />
                            )}
                        </button>

                        <Link href={"/"}>
                            <Image 
                                width={80} 
                                height={70} 
                                src={"/Logo.png"} 
                                alt={"logo"}
                            />
                        </Link>
                    </div>

                    <div className="flex items-center justify-between max-xl:w-[14rem] rounded-sm border border-gray-800 bg-gray-900 px-2 mx-2 max-md:hidden">
                        <input type="text" className="flex focus:outline-none h-9 w-[15rem] max-xl:w-[11rem] px-1 rounded-sm bg-gray-900 placeholder:text-gray-100 text-gray-100" placeholder="Search" />
                        <button>
                            <Image 
                                width={30} 
                                height={30} 
                                src={"/search.ico"} 
                                alt={"search"} 
                                className="w-6 h-auto"
                            />
                        </button>
                    </div>

                    <ul className="flex text-lg text-gray-300 gap-8 max-lg:gap-5 max-lg:text-sm max-md:hidden">
                        <li><Link href={"#home"} className="hover:text-brand-600 transition-all duration-300">Home</Link></li>
                        <li><Link href={"#shop"} className="hover:text-brand-600 transition-all duration-300">Shop</Link></li>
                        <li><Link href={"#about"} className="hover:text-brand-600 transition-all duration-300">About</Link></li>
                        <li><Link href={"#contact"} className="hover:text-brand-600 transition-all duration-300">Contact</Link></li>
                        <li><Link href={"#blog"} className=" hover:text-brand-600 transition-all duration-300">Blog</Link></li>
                    </ul>

                    <ul className="flex gap-8 max-lg:gap-4">
                        <button><Image width={24} height={24} className="md:hidden" src={"/search.ico"} alt="user icon" /></button>
                        <Link href={""}><Image width={24} height={24} src={"/shopping.ico"} alt="shopping icon" /></Link>
                        <Link href={""}><Image width={24} height={24} src={"/heart.ico"} alt="heart icon" /></Link>
                        <Link href={""}><Image width={24} height={24} src={"/user.ico"} alt="user icon" /></Link>
                    </ul>
                </div>
                {isClick && (
                    <ul className="flex flex-col relative items-center w-full pt-2 pb-5 bg-gray-950 text-gray-300 shadow-2xl md:hidden z-10">
                        <li className="li hover:text-brand-600">
                            <Link href="#home" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="li hover:text-brand-600">
                            <Link href="#shop" onClick={handleLinkClick}>Shop</Link>
                        </li>
                        <li className="li hover:text-brand-600">
                            <Link href="#about" onClick={handleLinkClick}>About</Link>
                        </li>
                        <li className="li hover:text-brand-600">
                            <Link href="#contact" onClick={handleLinkClick}>Contact</Link>
                        </li>
                        <li className="li hover:text-brand-600">
                            <Link href="#blog" onClick={handleLinkClick}>Blog</Link>
                        </li>
                    </ul>
                    )}
            </nav>
        </header>
    )
}

export default Header
