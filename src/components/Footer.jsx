import React from "react";
import { payments, socialMedia } from "../constants/footeritems";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-secondary h-[70vh] px-35 pb-4">
            <div className="h-[60%]">top</div>
            <div className="h-[40%]">
                <div className="flex flex-col h-[75%]">
                    <div className="flex justify-between items-center w-full">
                        <img
                            src="/images/logo.png"
                            className="w-60 h-25 object-cover"
                            alt="footerlogo"
                        />
                        <div className="flex gap-2">
                            {socialMedia.map((item) => (
                                <Link key={item.id} to={item.link}>
                                    <img className="w-10" src={item.imagepath} alt={item.title} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex gap-2">
                            {payments.map((item) => (
                               
                                <img className="w-13" key={item.id} src={item.imagepath} alt={item.title} />
                                
                            ))}
                        </div>
                            <ul className="flex gap-2">
                                <Link>Privacy policy</Link>
                                <Link>Refund policy</Link>
                                <Link>Terms of service</Link>
                            </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center text-background h-[25%]">
                    <p>
                        © 2004-2025 Hostinger – Launch, grow, and succeed online, supported
                        by AI that puts the power in your hands.
                    </p>
                    <p>Prices are listed without VAT</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
