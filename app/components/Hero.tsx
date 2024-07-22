import BlueArrow from "../../public/assets/blue-button.svg";
import Image from "next/image";
import Gradient from "../../public/assets/gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg";
import CNN from "../../public/assets/cnn.svg";
import Cluth from "../../public/assets/Clutch.svg";

export function Hero() {
    return (
        <div className="pt-4 lg:pt-10">
            <div className="px-[20px] lg:px-[280px]">
                <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">User-Centric Excellence:App Development Services</h1>
                <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">Fynerience a Seamless Diaital Journey with Desun - Where every Line of Code Resolves Your Challenges and Elevates Your App Expe to unparaleled heignts.</p>

                <div className="flex w-full pt-8 justify-center gap-x-6">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">Try for Free</button>
                    <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-1.5 lg:w-fit whitespace-nowrap">Get Consultation <span className=""><Image src={BlueArrow} alt="Learn More" /></span></button>
                </div>
            </div>

            <div className="relative flex h-full w-full justify-center">
                <Image src={Gradient} alt="Gradient" className="min-h-[500px] w-full object-cover lg:h-auto" />

                <div className="absolute bottom-5 flex w-full flex-col items-center">
                    <Image src={HeroImage} alt="hero image" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]" />

                    <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
                        <p className="text-[#FFFFFF] text-center lg:text-[18px]">Trusted by these companies</p>
                        <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                            <Image src={Google} alt="Google" />
                            <Image src={Slack} alt="Slack" />
                            <Image src={Trustpilot} alt="Trustpilot" />
                            <Image src={CNN} alt="CNN" />
                            <Image src={Cluth} alt="Clutch" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};