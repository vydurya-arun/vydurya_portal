import React, { useEffect, useState } from "react";
import { navItems } from "../constants/navItems";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={` ${isScrolled ? "fixed top-0 left-0 w-full h-18":"relative z-0  h-30"}   bg-white`}>
            <div className={`${isScrolled ? "hidden":"flex"}  bg-primary h-12 items-center justify-center gap-5`}>
                <p className="text-white font-semibold">
                    Debug your Render services in Claude Code and Cursor.
                </p>
                <button className="bg-black h-8 px-5 text-white">Try it!</button>
            </div>
            <div className="flex flex-row items-center justify-between h-18 gap-14 ">
                <div className="pl-8">Vydurya</div>
                <ul className="flex flex-row flex-1 gap-6">
                    {navItems.map((item,index)=>(
                        <li key={item.id}>
                            {item.navTitle}
                        </li>
                    ))}
                </ul>
                <div>User</div>
            </div>
        </div>
    );
};

export default Header;
