'use client';
import Image from "next/image"
const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }

    };
    return (
        <div className="bg-[#1F1F1F] flex flex-col justify-center sm:items-center font-Montserrat text-white w-full h-96">
            <div className="flex flex-col justify-around sm:items-center ml-10 sm:ml-0 w-2/3 sm:flex-col sm:w-full">
                <div className="flex flex-col sm:flex-row sm:items-center items-start">
                    <a onClick={() => scrollToSection('home')} className="sm:hidden block hover:cursor-pointer">
                        <Image src="/logo/Logo.png" alt="Logo1" width={150} height={100} />
                    </a>
                    <a href="#about" className="text-lg font-bold mb-4 sm:mb-0 sm:mr-10">
                        About
                    </a>
                    <a href="#services" className="text-lg font-bold sm:mr-10">
                        Services
                    </a>
                    <a onClick={() => scrollToSection('home')} className="hidden md:block sm:mr-10 hover:cursor-pointer">
                        <Image src="/logo/Logo.png" alt="Logo1" width={150} height={100} />
                    </a>
                    <a href="#portfolio" className="text-lg font-bold sm:mr-10 mt-4 sm:mt-0">
                        Portfolio
                    </a>
                    <a href="#blog" className="text-lg font-bold mt-4 sm:mt-0">
                        Blog
                    </a>
                </div>
                <div className="flex flex-col sm:items-center sm:ml-0 justify-center mt-8">
                    <p className="my-2 font-light">Follow me on social media:</p>
                    <div className="flex gap-x-8">
                        <a href="">
                            <Image src="/icons/Instagram.png" alt="instagram" className="hover:scale-125 ease-in-out duration-300 w-6 h-6" width={20} height={20} />
                        </a>
                        <a href="">
                            <Image src="/icons/Twitter01.png" alt="Twitter01" className="hover:scale-125 ease-in-out duration-300 w-6 h-6" width={20} height={30} />
                        </a>
                        <a href="">
                            <Image src="/icons/Dribbble.png" alt="Dribbble" className="hover:scale-125 ease-in-out duration-300 w-6 h-6" width={20} height={20} />
                        </a>
                        <a href="">
                            <Image src="/icons/Facebook01.png" alt="Facebook01" className="hover:scale-125 ease-in-out duration-300 w-4 h-6" width={20} height={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Footer;