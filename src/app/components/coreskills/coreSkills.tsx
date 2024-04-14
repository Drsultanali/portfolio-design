import Image from "next/image"
export default function CoreSkills() {
    return (
        <div className="bg-[#F7F7F7] flex flex-col flex-wrap  font-Montserrat">
            <div className="md:text-center place-content-center h-60 ml-2 md:ml-0 ">
                <h1 className="mx-auto sm:text-4xl text-2xl font-bold my-5 ">
                    Core Design Skills
                </h1>
                <p className="sm:mx-auto left-0 md:text-lg sm:text-base text-sm w-3/4 mb-4 ">
                    I excel in essential design skills, creating visually stunning and functional digital experiences.
                    From UI design to UX research, my passion is to craft effective and memorable digital solutions.
                </p>
            </div>
            <div className="flex md:justify-around ml-2 xl:ml-0 flex-wrap lg:flex-row flex-col ">
                <div className="">
                    <div className="mb-2">
                        <div className="text-lg font-bold">Interaction</div>
                        <div className="flex items-center text-lg font-bold">

                            <div className="sm:w-[400px] w-[260px] bg-gray-400 rounded-md h-2 relative mr-2">

                                <div className="absolute flex flex-wrap sm:w-[240px] w-[156px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            60%
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="text-lg font-bold">Useability Testing</div>
                        <div className="flex items-center text-lg font-bold">
                            <div className="sm:w-[400px] w-[260px] bg-gray-400 rounded-md h-2 relative mr-2">
                                <div className="absolute sm:w-[260px] w-[182px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            70%
                        </div>
                    </div>
                    <div className=" mb-4">
                        <div className="text-lg font-bold">User Research</div>
                        <div className="flex items-center text-lg font-bold">
                            <div className="sm:w-[400px] w-[260px] bg-gray-400 rounded-md h-2 relative mr-2">

                                <div className="absolute sm:w-[240px] w-[117px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            45%
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <div className="text-lg font-bold">Figma</div>
                        <div className="flex items-center text-lg font-bold">

                            <div className="sm:w-[400px] w-[260px] bg-gray-400 rounded-md h-2 relative mr-2">

                                <div className="absolute sm:w-[380px] w-[247px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            95%
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="text-lg font-bold">Prototyping</div>
                        <div className="flex items-center text-lg font-bold">
                            <div className="sm:w-[400px] w-[260px] bg-gray-400 rounded-md h-2 relative mr-2">
                                <div className="absolute sm:w-[320px] w-[208px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            80%
                        </div>
                    </div>
                    <div className=" mb-4">
                        <div className="text-lg font-bold">Information Architecture</div>
                        <div className="flex items-center text-lg font-bold">
                            <div className="sm:w-[400px] w-[260px] bg-gray-400 rounded-md h-2 relative mr-2">

                                <div className="absolute sm:w-[200px] w-[130px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            50%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}