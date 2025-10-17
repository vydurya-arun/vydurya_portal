import React from "react";
import { mainLinks, payments, socialMedia } from "../constants/footeritems";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-secondary h-[70vh] px-35 pb-4">
            <ul className="h-[60%] flex flex-row justify-between py-4">
                {mainLinks.map((item) => (
                    <li key={item.id} className="">
                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>

                        {/* Render sublinks only if they exist */}
                        {item.sublinks && item.sublinks.length > 0 && (
                            <ul className="mt-2 space-y-1 text-sm text-background">
                                {item.sublinks.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={link.urlpath}
                                            className="hover:text-primary transition-colors duration-200"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
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
                                <img
                                    className="w-13"
                                    key={item.id}
                                    src={item.imagepath}
                                    alt={item.title}
                                />
                            ))}
                        </div>
                        <ul className="flex gap-2 text-background text-sm">
                            <Link className="footerlink">Privacy policy</Link>
                            <Link className="footerlink">Refund policy</Link>
                            <Link className="footerlink">Terms of service</Link>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center text-background h-[25%] text-sm">
                    <p>
                        © 2004-2025 Vydurya digital – Launch, grow, and succeed online,
                        supported by AI that puts the power in your hands.
                    </p>
                    <p>Prices are listed without VAT</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
