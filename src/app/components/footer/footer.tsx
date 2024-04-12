'use client';
import Image from "next/image"
const Footer: React.FC = () => {
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if(element) {
        element.scrollIntoView ({ behavior: 'smooth'})
    }

};
    return (
        <div className="bg-[#1F1F1F] flex flex-col justify-center place-content-center font-Montserrat text-white w-full h-96">
            <div className="mx-auto flex justify-around place-content-center items-center w-2/3 ">
                <div className="flex gap-x-10 ">
                    <a href="#about" >
                        <h1 className="text-lg font-bold">About</h1>
                    </a>
                    <a href="#services" >
                        <h1 className="text-lg font-bold">Services</h1>
                    </a>
                </div>
                <div className="">
                    <a onClick={() => scrollToSection ('home')} className="hover:cursor-pointer" >
                        <Image src="/logo/Logo.png" alt="Logo1" width={150} height={100} />
                    </a>
                </div>
                <div className="flex gap-x-10">
                    <a href="#portfolio" >
                        <h1 className="text-lg font-bold">Portfolio</h1>
                    </a>
                    <a href="#blog" >
                        <h1 className="text-lg font-bold">Blog</h1>
                    </a>
                </div>
            </div>
            <div className="mx-auto flex flex-col items-center place-content-center w-2/3 h-44">
                <p className="my-10 font-light">
                    Follow me on social media:
                </p>
                <div className="flex gap-x-8">
                    <a href="">
                        <Image src="/icons/Instagram.png" alt="instagram" className=" hover:scale-125 ease-in-out duration-300 w-6 h-6" width={20} height={20} />
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
    )
};
export default Footer;