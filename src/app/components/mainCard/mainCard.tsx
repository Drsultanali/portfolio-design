import Image from "next/image"
export default function Maincard() {
    return (
        <div className="mx-6 flex justify-around place-items-center ">
            <div className=" font-Montserrat w-[520px]">
                <h2 className="text-2xl ">
                    UX Designer
                </h2>
                <h1 className="text-4xl font-bold my-5">
                    Hi There, I’m
                </h1>
                <h1 className="text-[#FC3314] text-4xl font-bold my-5">
                    Sultan Ali
                </h1>
                <p className=" text-lg my-5">
                    Welcome to my portfolio of captivating digital experiences. Explore my work and let&apos;s create something extraordinary together.
                </p>
                <div className="my-5 space-x-5">
                    <button className="bg-black border font-semibold border-black text-white hover:bg-white hover:text-black hover:cursor-pointer duration-300 px-8 py-2">
                        Hire Me
                    </button>
                    <button className="bg-white font-semibold border hover:bg-black hover:text-white duration-300 hover:cursor-pointer border-black text-black px-8 py-2">
                        Portfolio
                    </button>
                </div>
            </div>
            <div className="">
                <Image className="w-[650px] " src="/UXD.png" alt="UX" width={400} height={400} />
            </div>
        </div>
    )
}