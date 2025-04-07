import React from 'react';
import { NavLink } from "react-router";

const HeaderComponent : React.FC = () => {

    return (
        <header className="bg-white flex justify-between p-1 md:p-4">
            <h1 className="block p-2 text-s md:text-base">Rainbowfern.com</h1>
            <div className="flex">
                <NavLink 
                    className="text-xs md:text-base block p-2 hover:text-gray-400 hover:underline"
                    to="/skills">Skills</NavLink>
                <NavLink 
                    className="text-xs md:text-base block p-2 hover:text-gray-400 hover:underline"
                    to="/projects">Projects</NavLink>
                <NavLink 
                    className="text-xs md:text-base block p-2 hover:text-gray-400 hover:underline"
                    to="/experience">Experience</NavLink>
                <NavLink 
                    className="text-xs md:text-base block p-2 hover:text-gray-400 hover:underline"
                    to="/education">Education</NavLink>
                <NavLink 
                    className=" block rounded-md text-xs md:text-base leading-[22px] bg-gray-800 text-white mx-auto p-2 hover:text-black hover:bg-gray-400"
                    to="/contact">Contact</NavLink>
            </div>
        </header>
    );
};

export default HeaderComponent;