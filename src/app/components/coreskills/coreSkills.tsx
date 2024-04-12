import Image from "next/image"
export default function CoreSkills() {
    return (
        <div className="bg-[#F7F7F7]  font-Montserrat">
            <div className="text-center place-content-center h-60 ">
                <h1 className="mx-auto text-4xl font-bold my-5 ">
                    Core Design Skills
                </h1>
                <p className="mx-auto text-lg w-2/3">
                    I excel in essential design skills, creating visually stunning and functional digital experiences.
                    From UI design to UX research, my passion is to craft effective and memorable digital solutions.
                </p>
            </div>
            <div className="flex justify-around h-60">
                <div className="">
                    <div className="mb-2">
                        <div className="text-lg font-bold">Interaction</div>
                        <div className="flex items-center text-lg font-bold">

                            <div className="w-[400px] bg-gray-400 rounded-md h-2 relative mr-2">

                                <div className="absolute w-[240px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            60%
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="text-lg font-bold">Useability Testing</div>
                        <div className="flex items-center text-lg font-bold">
                            <div className="w-[400px] bg-gray-400 rounded-md h-2 relative mr-2">
                                <div className="absolute w-[280px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            70%
                        </div>
                    </div>
                    <div className=" mb-4">
                        <div className="text-lg font-bold">User Research</div>
                        <div className="flex items-center text-lg font-bold">
                            <div className="w-[400px] bg-gray-400 rounded-md h-2 relative mr-2">

                                <div className="absolute w-[240px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            45%
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <div className="text-lg font-bold">Figma</div>
                        <div className="flex items-center text-lg font-bold">

                            <div className="w-[400px] bg-gray-400 rounded-md h-2 relative mr-2">

                                <div className="absolute w-[380px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            95%
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="text-lg font-bold">Prototyping</div>
                        <div className="flex items-center text-lg font-bold">
                            <div className="w-[400px] bg-gray-400 rounded-md h-2 relative mr-2">
                                <div className="absolute w-[320px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            80%
                        </div>
                    </div>
                    <div className=" mb-4">
                        <div className="text-lg font-bold">Information Architecture</div>
                        <div className="flex items-center text-lg font-bold">
                            <div className="w-[400px] bg-gray-400 rounded-md h-2 relative mr-2">

                                <div className="absolute w-[200px] hover:bg-blue-500 bg-black h-2"></div>
                            </div>
                            50%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}