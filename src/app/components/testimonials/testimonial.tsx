import Image from "next/image"
export default function Testimonials() {
    return (
        <div className="flex flex-col items-center h-[350px] gap-y-5 font-Montserrat bg-[#FFD4D0]">
            <div className="">
                <Image src="/background/Background.png" alt="Background" width={100} height={50} />
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    Testemonials
                </h1>
                <p className="mx-auto text-lg w-2/3 my-5">
                    Sultan Ali&apos;s designs are both visually captivating and highly effective. He transformed our website,
                    enhancing user engagement and conversions. His attention to detail and creative approach are top-notch.
                    Highly recommended!
                </p>
            </div>
            <div className="flex items-center gap-x-5">
                <Image className="rounded-full" src="/profilePic.jpg" alt="profile" width={70} height={70} />
                <div>
                    <p className="text-lg">
                    <span className="font-bold text-lg">Sultan Ali</span> / Student at PIAIC
                    </p>
                </div>
            </div>
        </div>
    )
}