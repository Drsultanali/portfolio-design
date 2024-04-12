'use client';
import Image from "next/image"
const Nav: React.FC = () => {
    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
if (element) {
    element.scrollIntoView ({ behavior: 'smooth'});
}
    };
    return (
        <div className="bg-[#FFD4D0] relative">

            <div className="relative flex justify-evenly mx-16">
                <div className="flex">
                    <Image className="w-full h-20" src="/background/NavbarCover.png" alt="logo" width={500} height={100} />
                </div>
                <div className="absolute flex justify-between place-content-center items-center w-full h-full bg-cover bg-center z-0">
                    <div>
                        <a onClick={() => scrollToSection ('home')} className="hover:cursor-pointer">
                            <Image className="w-32" src="/logo/Logo1.png" alt="logo" width={100} height={100} />
                        </a>
                    </div>
                    <ul className="flex font-bold gap-x-8">
                        <li><a onClick={() => scrollToSection ('about')} className="hover:cursor-pointer">About</a></li>
                        <li><a onClick={() => scrollToSection ('services')} className="hover:cursor-pointer">Services</a></li>
                        <li><a onClick={() => scrollToSection ('portfolio')} className="hover:cursor-pointer">Portfolio</a></li>
                        <li><a onClick={() => scrollToSection ('blog')} className="hover:cursor-pointer">Blog</a></li>
                    </ul>
                    <div>
                        <button className="bg-black text-white hover:bg-white hover:text-black hover:cursor-pointer duration-300 px-8 font-semibold py-2">
                            Let&apos;s talk
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Nav;