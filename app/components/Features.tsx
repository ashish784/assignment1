import Image from "next/image";
import Features1 from "../../public/assets/feature-1.svg";
import Features2 from "../../public/assets/feature-2.svg";
import Features3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import BlueButton from "../../public/assets/blue-button.svg";
import GreenButton from "../../public/assets/green-button.svg";
import PinkButton from "../../public/assets/pink-button.svg";

export function Features() {
    return (
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Features1} alt="Features image1" className="hidden w-1/2 sm:block" />
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="text-[#0085FF] font-medium lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Simplify your sales monitoring</h1>

                    <Image src={Features1} alt="feature1" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">Our Software development company is truly proud of the wonderful clients we have worked with.We enjoy a long-term partnership.</p>

                    <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span className="">
                                <Image src={Check} alt="Checkmark" />
                            </span>
                               Social Media
                        </li>
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span className="">
                                <Image src={Check} alt="Checkmark" />
                            </span>
                               Fitness and Sport
                        </li>
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span className="">
                                <Image src={Check} alt="Checkmark" />
                            </span>
                               Bank
                        </li>
                    </ul>

                    <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px] cursor-pointer">
                        Learn more{" "} <span className=""><Image src={BlueButton} alt="button" /></span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row">
                <Image src={Features2} alt="Features image1" className="hidden w-1/2 sm:block" />
                <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
                    <h3 className="text-[#00A424] font-medium lg:text-[18px]">Customer Support</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Get in touch with your Customers</h1>

                    <Image src={Features2} alt="feature2" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">Our Software development company is truly proud of the wonderful clients we have worked with.We enjoy a long-term partnership.</p>

                    <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span className="">
                                <Image src={Check} alt="Checkmark" />
                            </span>
                               Social Media
                        </li>
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span className="">
                                <Image src={Check} alt="Checkmark" />
                            </span>
                               Fitness and Sport
                        </li>
                        <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span className="">
                                <Image src={Check} alt="Checkmark" />
                            </span>
                               Bank
                        </li>
                    </ul>

                    <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px] cursor-pointer">
                        Learn more{" "} <span className=""><Image src={GreenButton} alt="button" /></span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Features3} alt="Features image3" className="hidden w-1/2 sm:block" />
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="text-[#EB2891] font-medium lg:text-[18px]">Growth Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]"></h1>

                    <Image src={Features3} alt="feature3" className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">Our Software development company is truly proud of the wonderful clients we have worked with.We enjoy a long-term partnership.</p>

                    <div className="flex w-full gap-x-[24px] pt-[24px]">
                        <div className="w-1/2 flex-col flex gap-y-3">
                            <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
                            <p className="text-[#36485C]">Projects</p>
                        </div>
                        <div className="w-1/2 flex-col flex gap-y-3">
                            <h3 className="text-[20px] font-medium text-[#172026]">7 years</h3>
                            <p className="text-[#36485C]">in IT sphere</p>
                        </div>
                    </div>

                    <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px] cursor-pointer">
                        Learn more{" "} <span className=""><Image src={PinkButton} alt="button" /></span>
                    </p>
                </div>

            </div>
        </div>
    )
}