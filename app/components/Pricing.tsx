import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Pricing() {
    return (
        <div className="py-[48px] lg:py-[60px]">
            <h1 className="text-[#172026] text-center text-2xl font-medium text-2xl lg:text-[42px]">Flexible plans for you</h1>
            <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">No hidden fees!</p>

            <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-[24px]">
                <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div className="">
                        <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Free Trial</h3>
                        <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for developing a website</p>
                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">0$
                            <span className="text-[#5F7896]">
                                /mo
                            </span>
                        </h2>
                        <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
                            <li className="flex items-center gap-x-2">
                                <span><Image src={Check} alt="Check" /></span>
                                Application Testing
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={Check} alt="Check" /></span>
                                Analysis
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={Check} alt="Check" /></span>
                                Design
                            </li>
                        </ul>
                    </div>
                    <button className="mt-[16px] py-[14px] text-[#4328EB] bg-white rounded-[4px] cursor-pointer font-medium">
                            Start Trial
                    </button>
                </div>

                <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="font-medium text-white text-[18px] lg:text-xl">Business</h3>
                        <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">Perfect for business website</p>
                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-white">500$
                            <span className="text-[#F4F8FA]">
                                /mo
                            </span>
                        </h2>
                        <ul className="flex flex-col gap-y-2 pt-4 text-white">
                            <li className="flex items-center gap-x-2">
                                <span><Image src={Check} alt="Check" /></span>
                                Application Testing
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={Check} alt="Check" /></span>
                                Analysis
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={Check} alt="Check" /></span>
                                Design
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={Check} alt="Check" /></span>
                                Support
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={Check} alt="Check" /></span>
                                Development
                            </li>
                        </ul>
                    </div>
                    <button className="mt-[16px] py-[14px] text-[#4328EB] bg-white rounded-[4px] cursor-pointer font-medium">
                            Get Started
                    </button>
                </div>

                <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Enterprise</h3>
                        <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for big projects</p>
                        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
                            Custom
                        </h2>
                        <p className="pt-4 text-[16px] text-[#36485C]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic libero aut, ad assumenda quia rerum in odio.
                        </p>
                        <p className="pt-2 text-[16px] text-[#36485C]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, ullam! Dolore commodi exercitationem eveniet earum.
                        </p>
                    </div>
                    <button className="mt-[16px] py-[14px] text-[#4328EB] bg-white rounded-[4px] cursor-pointer font-medium">
                            Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}