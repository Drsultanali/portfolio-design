import Image from "next/image"
export default function GetInTouch() {
    return (
        <div className="bg-[#FFD4D0] gap-x-10 font-Montserrat flex ">
            <div className=" flex items-center">
                <Image className=" w-14 h-48 " src="/background/Background03.png" alt="Background03" width={100} height={100} />
            </div>
            <div className="flex flex-col justify-between w-[600px] my-20">
                <h1 className="text-4xl font-bold">
                    Get in Touch
                </h1>
                <p className="my-5">
                    Have a question or a project in mind? I&apos;d love to hear from you. Let&apos;s chat and make something amazing
                    together.
                </p>
                <div className="">
                    <div className="flex gap-x-5 mt-10">
                        <Image src="/icons/phone-call.png" alt="phone-call" width={25} height={25} />
                        +92 302 9210252
                    </div>
                    <div className="flex gap-x-5 my-5">
                        <Image src="/icons/email.png" alt="email" width={25} height={25} />
                        sultan_ali338@yahoo.com
                    </div>
                    <div className="flex gap-x-5 my-5">
                        <Image src="/icons/location.png" alt="location" width={25} height={25} />
                        Peoples Colony No 2, Faisalabad, Punjab, Pakistan.
                    </div>
                </div>
                <div className="flex gap-x-5 mt-[110px] ">
                    <a href="">
                    <Image src="/icons/twitter.png" alt="twitter" className=" hover:scale-125 ease-in-out duration-300" width={30} height={30} />
                    </a>
                    <a href="">
                    <Image src="/icons/insta.png" alt="instagram" className=" hover:scale-125 ease-in-out duration-300" width={30} height={30} />
                    </a>
                    <a href="">
                    <Image src="/icons/dribble.png" alt="dribble" className=" hover:scale-125 ease-in-out duration-300" width={30} height={30} />
                    </a>
                    <a href="">
                    <Image src="/icons/facebook.png" alt="facebook" className=" hover:scale-125 ease-in-out duration-300" width={30} height={30} />
                    </a>
                </div>
            </div>
            <div className=" ">

                <form className=" mt-20 w-[500px]">
                    <input type="text" name="name" className="block w-full border-0 my-5 py-2 pl-2 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:leading-6" placeholder="First Name" />
                    <input type="email" name="email" className="block w-full py-2 pl-2 border-0 my-5 ring-1 ring-inset ring-gray-100 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-400 " placeholder="Email" />
                    <input type="number" name="phoneNumber" className="block w-full py-2 pl-2 border-0 my-5 ring-1 ring-inset ring-gray-100 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-400 " placeholder="Phone Number" />
                    <textarea name="message" className="block w-full my-5 h-44 pl-2 py-2 ring-1 ring-inset ring-gray-100 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-400" placeholder="Your Message" />
                </form>
                <button className="px-4 py-2 mt-8 bg-black hover:bg-white font-semibold hover:text-black hover:cursor-pointer duration-300 text-white">
                    Send Message

                </button>



            </div>

        </div>
    )
}