import Image from "next/image"
export default function Maincard() {
    return (
        <div className="px-14 flex xl:justify-between gap-x-2 justify-start flex-wrap max-w-[1500px] mx-auto ">
            <div className=" font-Montserrat md:w-[300px] lg:w-[370px] xl:w-[500px] w-[400px]">
                <h2 className="text-xl sm:text-2xl ">
                    UX Designer
                </h2>
                <h1 className="sm:text-4xl text-2xl font-bold my-5">
                    Hi There, I’m
                </h1>
                <h1 className="text-[#FC3314] sm:text-4xl text-3xl font-bold my-5">
                    Sultan Ali
                </h1>
                <p className=" sm:text-lg text-base my-5 text-start">
                    Welcome to my portfolio of captivating digital experiences. Explore my work and let&apos;s create something extraordinary together.
                </p>
                <div className=" my-5 md:space-x-5 flex text-nowrap  ">
               <button className="bg-black border font-semibold border-black text-white hover:bg-white hover:text-black hover:cursor-pointer duration-300 sm:px-8 sm:py-2 px-4 py-px mr-2 ">
                        Hire Me
                    </button>
                    <button className="bg-white font-semibold border hover:bg-black hover:text-white duration-300 hover:cursor-pointer border-black text-black sm:px-8 sm:py-2 px-4 py-px ">
                        Portfolio
                    </button>
                </div>
            </div>
            <div className="">
                <Image className="xl:w-[700px]  md:mt-10 xl:mt-0 md:w-[330px] lg:w-[500px] xl:h-[400px] sm:w-[450px] sm:h-[300px] h-[250px] w-[400px] " src="/Ui.png" alt="UX" width={400} height={400} />
            </div>
        </div>
    )
}