import React, { useEffect, useState } from "react";
import { navItems } from "../constants/navItems";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 630 }); 
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={` ${isScrolled ? "fixed top-0 left-0 w-full h-18 bg-background":"relative z-0  h-30 bg-white"}`}>
            <div className={`${isScrolled ? "hidden":"flex"} ${isMobile ? "hidden":""}  bg-primary h-12 items-center justify-center gap-5`}>
                <p className="text-white font-semibold">
                    Debug your Render services in Claude Code and Cursor.
                </p>
                <button className="bg-secondary h-8 px-5 text-white">Try it!</button>
            </div>
            <div className="flex flex-row items-center justify-between h-18 gap-14">

                <img src="/images/logo2.png" alt="logo" className="w-30 lg:w-50 ml-10" onClick={()=> navigate("/")}/>

                <ul className="flex-row flex-1 gap-6 text-lg hidden md:flex">
                    {navItems.map((item,index)=>(
                        
                        <li key={item.id} >
                            <Link to={item.path} className="flex items-center text-sm lg:text-lg">{item.navTitle} <ChevronDown className={`${item.navicon ? "block":"hidden"}`}/></Link>
                            
                        </li>
                    ))}
                </ul>
                <div className="bg-secondary text-white h-full w-30 md:w-36 flex items-center justify-center text-sm md:text-lg">Dashboard</div>
            </div>
            <div className='bg-black h-[.5px]'></div>
        </div>
    );
};

export default Header;
