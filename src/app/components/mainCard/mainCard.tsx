import Image from "next/image"
export default function Maincard() {
    return (
        <div className="mx-14 flex xl:justify-between  justify-start flex-wrap ">
            <div className=" font-Montserrat  md:w-[450px] w-[400px]">
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
                <Image className="xl:w-[600px] lg:[530px] xl:h-[400px] sm:w-[450px] sm:h-[350px] h-[300px] " src="/UXD.png" alt="UX" width={400} height={400} />
            </div>
        </div>
    )
}