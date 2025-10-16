import React, { useEffect, useState } from "react";
import { navItems } from "../constants/navItems";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={` ${isScrolled ? "fixed top-0 left-0 w-full h-18":"relative z-0  h-30"}`}>
            <div className={`${isScrolled ? "hidden":"flex"}  bg-primary h-12 items-center justify-center gap-5`}>
                <p className="text-white font-semibold">
                    Debug your Render services in Claude Code and Cursor.
                </p>
                <button className="bg-secondary h-8 px-5 text-white">Try it!</button>
            </div>
            <div className="flex flex-row items-center justify-between h-18 gap-14 ">
                <div className="pl-8 text-3xl font-black cursor-pointer text-secondary" onClick={()=> navigate("/")}>
                    <img src="/images/logo2.png" alt="logo" className="w-50"/>
                </div>
                <ul className="flex flex-row flex-1 gap-6 text-lg">
                    {navItems.map((item,index)=>(
                        
                        <li key={item.id} >
                            <Link to={item.path} className="flex items-center">{item.navTitle} <ChevronDown className={`${item.navicon ? "block":"hidden"}`}/></Link>
                            
                        </li>
                    ))}
                </ul>
                <div className="bg-secondary text-white h-full w-36 flex items-center justify-center text-lg">Dashboard</div>
            </div>
            <div className='bg-black h-[.5px]'></div>
        </div>
    );
};

export default Header;
