import Image from "next/image";
interface DesignProps {
    imgSrc: string;
    date: string;
    h1: string;
    text: string;
    alt: string
}
const Design: React.FC<DesignProps> = ({ imgSrc, date, h1, text, alt }) => {

    return (
        <div className=" font-Montserrat my-5 bg-white">
            <div className="md:w-80 h-[402px]  flex flex-col hover:scale-105 hover:cursor-pointer ease-in-out duration-300 shadow-lg ">
                <Image className="w-[640px] h-52" src={imgSrc} alt={alt} width={400} height={200} />
                <div className="ml-3">
                    <h2 className="my-3 text-sm">
                        {date}
                    </h2>
                    <h1 className=" my-3 font-bold">
                        {h1}
                    </h1>
                    <p className="text-sm h-20">
                        {text}
                    </p>
                    <a className="flex gap-x-4 item-center my-3" href="">Read more <span>
                        <Image src="/designInspire/arrow-right.png" alt="arrow-right" width={20} height={20} />
                    </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Design;
const DesignInsp = () => {
    return (
        <div className="bg-[#F7F7F7] h-48 flex flex-col place-content-center items-center space-y-5">
            <div className=" text-center mt-10">
                <h1 className="sm:text-4xl text-2xl font-bold">
                    Design Insights and Inspiration
                </h1>
            </div>
            <div >
                <p className="mx-auto sm:text-lg text-base mb-4 sm:mb-0 text-center ">
                    Discover industry insights, expert tips, and design inspiration. Stay updated with the latest trends in web design
                    and user experience.
                </p>
            </div>
        </div>
    )
}
export {DesignInsp};