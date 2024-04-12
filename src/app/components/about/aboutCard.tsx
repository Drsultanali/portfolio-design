import Image from "next/image"
export default function About() {
    return (
        <div className="flex">
            <div className=" flex justify-center items-center">
                <div className=" font-Montserrat grid grid-col-1">
                    <div className="mx-auto text-center mt-10 w-2/3">
                        <h1 className="text-white font-bold text-4xl ">
                            About Me
                        </h1>
                        <p className="text-lg text-white my-10 ">
                            I&apos;m Sultan Ali, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences.
                            With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let&aapos;s
                            collaborate and shape the future of design together.
                        </p>
                    </div>
                    <div className="flex place-content-center text-center gap-x-20">
                        <div>
                            <h1 className="text-[#FFD4D0] text-6xl font-bold">
                                502
                            </h1>
                            <p className="text-bold text-lg text-white">
                                Projects Done
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#FFD4D0] text-6xl  font-bold">
                                10+
                            </h1>
                            <p className="text-bold text-lg text-white">
                                Years of Experience
                            </p>
                        </div>
                        <div>
                            <h1 className="text-[#FFD4D0] text-6xl  font-bold">
                                273+
                            </h1>
                            <p className="text-bold text-lg text-white">
                                Clients Served
                            </p>
                        </div>

                    </div>
                    <div className="flex justify-center mt-3">
                        <Image src="/background/Background02.png" alt="background02" width={200} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}