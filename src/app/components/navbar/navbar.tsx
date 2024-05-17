'use client';
import Image from "next/image";
import { useState } from "react";

const Nav: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [showPagesList, setPagesList] = useState(false);

    return (
        <div className="bg-[#FFD4D0] ">
            <div className="flex items-center justify-between h-20 px-14 max-w-[1500px] mx-auto ">
            
                <div>
                    <a onClick={() => scrollToSection('home')} className="hover:cursor-pointer">
                        <Image className="w-32 h-12" src="/logo/Logo1.png" alt="logo" width={100} height={100} />
                    </a>
                </div>
                <div className="flex flex-row md:flex-col"> 
                    <ul className={`flex justify-center items-center text-center gap-x-10 gap-y-5 text-black font-bold ${showPagesList ? 'flex-col absolute text-red-600 bg-gray-950 underline right-7 mt-2 p-3' : 'hidden lg:flex'}`}>
                        <li onClick={() => scrollToSection('about')}><a className="hover:cursor-pointer">About</a></li>
                        <li onClick={() => scrollToSection('services')}><a className="hover:cursor-pointer">Services</a></li>
                        <li onClick={() => scrollToSection('portfolio')}><a className="hover:cursor-pointer">Portfolio</a></li>
                        <li onClick={() => scrollToSection('blog')}><a className="hover:cursor-pointer">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <button className="bg-black text-white hover:bg-white hidden lg:block whitespace-nowrap hover:text-black hover:cursor-pointer duration-300 px-8 font-semibold py-2">
                        Let&apos;s talk
                    </button>
                </div>
                <Image id="menuToggle" className="cursor-pointer lg:hidden" src="/icons/menu.png" alt="menu" width={25} height={25} onClick={() => setPagesList(!showPagesList)} />
            </div>
        </div>
    );
};

export default Nav;
