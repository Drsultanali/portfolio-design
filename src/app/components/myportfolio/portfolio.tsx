import Image from "next/image";
import { text } from "stream/consumers";
interface PortfolioProps {
    imageSrc: string;
    text: string;
    h2: string;
    parapgraph: string;
    imgSrc: string;
}
const MyPortfolio: React.FC<PortfolioProps> = ({ imageSrc, text, h2, parapgraph, imgSrc }) => {
    return (

        <div className="relative font-Montserrat">
            <div className=" md:w-80 flex flex-col hover:scale-105 hover:cursor-pointer ease-in-out duration-300 shadow-sm">
                <Image src={imageSrc} alt={text} width={400} height={200} />

                <div className="flex justify-between">
                    <div>
                        <h2 className=" font-bold my-3">
                            {h2}
                        </h2>
                        <p className="text-sm">
                            {parapgraph}
                        </p>
                    </div>
                    <div className="mt-10">
                        <Image src={imgSrc} alt="send" width={30} height={30} />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MyPortfolio;
const Portfolio = () => {
    return (
        <div className="bg-[#FFD4D0]">

            <div className="flex ">
                <div className=" text-center my-10 font-Montserrat">
                    <h1 className="md:text-4xl text-2xl font-bold ">
                        My Portfolio
                    </h1>
                    <p className="mx-auto md:text-lg text-base lg:w-2/3 md:3/3 mt-5 ">
                        Explore my design services, from user interface and experience to prototyping and testing.
                        Let&apos;s craft exceptional digital experiences together.
                    </p>
                </div>
            </div>
            <div className="absolute w-full h-14 bg-[#FFD4D0] bg-cover">

            </div>
        </div>
    )
};
export { Portfolio };