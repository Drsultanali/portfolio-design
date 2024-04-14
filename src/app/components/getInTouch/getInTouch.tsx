import Image from "next/image"
export default function GetInTouch() {
    return (
        <div className="bg-[#FFD4D0]  ">
            <div className="gap-x-10 font-Montserrat max-w-screen container flex lg:flex-row items-center sm:justify-center sm:items-center  lg:justify-normal flex-col md:w-full flex-wrap">
                <div className=" flex items-center">
                    <Image className=" w-14 h-48 lg:block hidden " src="/background/Background03.png" alt="Background03" width={100} height={100} />
                </div>
                <div className="flex flex-col justify-between   md:w-[600px] sm:w-[450px] xs:w-[280px] lg:w-[400px] xl:w-[600px] sm:my-20 mt-20">
                    <h1 className="md:text-4xl text-2xl font-bold text-center lg:text-start">
                        Get in Touch
                    </h1>
                    <p className="my-5 text-center  lg:text-start  ml-0 ">
                        Have a question or a project in mind? I&apos;d love to hear from you. Let&apos;s chat and make something amazing
                        together.
                    </p>
                    <div className="ml-10 md:ml-0">
                        <div className="flex gap-x-5 sm:mt-10 mt-5">
                            <Image src="/icons/phone-call.png" alt="phone-call" width={25} height={25} />
                            +92 302 9210252
                        </div>
                        <div className="flex gap-x-5 my-5">
                            <Image src="/icons/email.png" alt="email" className="md:w-6 md:h-6 w-6 h-6 " width={25} height={25} />
                            sultan_ali338@yahoo.com
                        </div>
                        <div className="flex gap-x-5 my-5">
                            <Image src="/icons/location.png" alt="location" className="md:w-6 md:h-6 w-6 h-6 " width={25} height={25} />
                            Peoples Colony No 2, Faisalabad, Punjab, Pakistan.
                        </div>
                    </div>
                    <div className="flex gap-x-5 sm:mt-[110px] mt-5 ml-10 md:ml-0 ">
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
                <div className="my-5 md:my-0 ">

                    <form className=" sm:mt-20 mt-10 md:w-[500px] lg:w-[400px] xl:w-[500px]  sm:w-96 w-72 ml-2 sm:ml-0 md:ml-0 lg:ml-0">
                        <input type="text" name="name" className="block w-full border-0 my-5 py-2 pl-2 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:leading-6" placeholder="First Name" />
                        <input type="email" name="email" className="block w-full py-2 pl-2 border-0 my-5 ring-1 ring-inset ring-gray-100 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-400 " placeholder="Email" />
                        <input type="number" name="phoneNumber" className="block w-full py-2 pl-2 border-0 my-5 ring-1 ring-inset ring-gray-100 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-400 " placeholder="Phone Number" />
                        <textarea name="message" className="block w-full my-5 h-44 pl-2 py-2 ring-1 ring-inset ring-gray-100 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-400" placeholder="Your Message" />
                    </form>
                    <button className="px-4 mb-2 py-2 mt-8 ml-2 sm:ml-0 bg-black hover:bg-white font-semibold hover:text-black hover:cursor-pointer duration-300 text-white">
                        Send Message

                    </button>



                </div>
            </div>
        </div>
    )
}