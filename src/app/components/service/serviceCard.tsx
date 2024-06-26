import Image from "next/image"
export default function Services() {
    return (
        <div className=" font-Montserrat">
            <div className="my-10 ">
                <h1 className="md:text-4xl text-2xl font-bold text-center ">
                    Services
                </h1>
                <p className="mx-auto md:text-lg text-base text-center lg:w-2/3 md:w-3/3 my-10">
                    Explore my design services, from user interface and experience to prototyping and testing. Let&apos;s
                    craft exceptional digital experiences together.
                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-x-10 lg:gap-x-2 my-10 gap-y-5 xl:gap-x-10">
                <div className="border-2 rounded-xl sm:w-64 lg:w-60 xl:w-64 mx-5 md:mx-0 h-56 hover:scale-105 hover:cursor-pointer ease-in-out duration-300">
                    <div className="mt-2 ml-2">
                        <Image className="flex origin-bottom-left w-12 h-12" src="/Vector.png" alt="Vector" width={50} height={50} />
                        <h2 className="text-xl font-bold my-5">
                            Design
                        </h2>
                        <p className=" text-sm">
                            I specialize in web development and design, creating visually appealing, user-friendly digital experiences.
                        </p>
                    </div>
                </div>
                <div className="border-2 rounded-xl sm:w-64 lg:w-60 xl:w-64 mx-5 md:mx-0 h-56 hover:scale-105 hover:cursor-pointer ease-in-out duration-300">
                    <div className="mt-2 ml-2">
                        <Image className="flex origin-bottom-left w-14 h-12" src="/Vector2.png" alt="Vector" width={50} height={50} />
                        <h2 className="text-xl font-bold my-5">
                        Branding
                        </h2>
                        <p className=" text-sm">
                        I&apos;m a branding expert, crafting unique visual identities that tell your story and resonate with your audience.
                        </p>
                    </div>
                </div>
                <div className="border-2 rounded-xl sm:w-64 mx-5 lg:w-60 xl:w-64 md:mx-0 h-56 hover:scale-105 hover:cursor-pointer ease-in-out duration-300">
                    <div className="mt-2 ml-2">
                        <Image className="flex origin-bottom-left" src="/search-status.png" alt="Vector" width={50} height={50} />
                        <h2 className="text-xl font-bold my-5">
                        UX Research
                        </h2>
                        <p className=" text-sm">
                        I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.                        </p>
                    </div>
                </div>
                <div className="border-2 rounded-xl sm:w-64 mx-5 lg:w-60 xl:w-64 md:mx-0 h-56 hover:scale-105 hover:cursor-pointer ease-in-out duration-300">
                    <div className="mt-2 ml-2">
                        <Image className="flex origin-bottom-left" src="/Vector3.png" alt="Vector" width={50} height={50} />
                        <h2 className="text-xl font-bold my-5">
                        Usability Testing
                        </h2>
                        <p className=" text-sm">
                        I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}