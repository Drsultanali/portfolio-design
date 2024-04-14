import Image from "next/image"
export default function About() {
    return (
        <div className="flex">
            <div className=" flex justify-center items-center">
                <div className=" font-Montserrat grid grid-col-1">
                    <div className="mx-auto text-center mt-10 ">
                        <h1 className="text-white font-bold sm:text-4xl text-2xl ">
                            About Me
                        </h1>
                        <p className="mx-auto md:text-lg sm:text-base text-sm px-2  text-white my-10 lg:w-2/3 md:w-3/4 ">
                            I&apos;m Sultan Ali, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences.
                            With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let&aapos;s
                            collaborate and shape the future of design together.
                        </p>
                    </div>
                    <div className="flex place-content-center text-center md:gap-x-20 gap-x-10 ">
                        <div>
                            <h1 className="text-[#FFD4D0] sm:text-4xl text-2xl font-bold">
                                502
                            </h1>
                            <p className="md:text-bold md:text-lg sm:text-base text-sm text-white">
                                Projects Done
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#FFD4D0] sm:text-4xl text-2xl  font-bold">
                                10+
                            </h1>
                            <p className="md:text-bold md:text-lg sm:text-base text-sm text-white">
                                Years of Experience
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#FFD4D0] sm:text-4xl text-2xl  font-bold">
                                273+
                            </h1>
                            <p className="md:text-bold md:text-lg sm:text-base text-sm text-white">
                                Clients Served
                            </p>
                        </div>

                    </div>
                    <div className="flex justify-center mt-3">
                        <Image className=" hidden md:block" src="/background/Background02.png" alt="background02" width={200} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}