import React from "react";
import { navItems } from "../constants/navItems";

const Header = () => {
    return (
        <div className="bg-white h-30">
            <div className="bg-primary h-12 flex items-center justify-center gap-5">
                <p className="text-white font-semibold">
                    Debug your Render services in Claude Code and Cursor.
                </p>
                <button className="bg-black h-8 px-5 text-white">Try it!</button>
            </div>
            <div className="flex flex-row items-center justify-between h-18 gap-14">
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
