import Image from "next/image";
import logo from "../../public/assets/Logo.svg";
// import Facebook from "../../public/assets/Facebook.png";
// import Twitter from "../../public/assets/X.svg";
// import Feed from "../../public/assets/Feed.svg";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";


export function Footer() {
    return (
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]">
                <Image src={logo} alt="" />
                <p className="font-bold text-[#36485C] text-[17px]">Demo Website</p>
            </div>
            <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
                <li>
                    Services
                </li>
                <li>Pricing</li>
                <li>Cases</li>
                <li>Contacts</li>
            </ul>

            <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
                Design and Developed by Ashish
            </p>
            <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
                <ul className="flex gap-x-[12px]">
                    <li>
                        <a href="https://github.com/ashish784"
                            style={{ color: "black" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub /></a>
                    </li>
                    <li>
                        <a href="https://instagram.com/_axhish._"
                            style={{ color: "black" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillInstagram /></a>
                    </li>
                    <li>
                        <a href="https://github.com/ashish784"
                            style={{ color: "black" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineTwitter /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}