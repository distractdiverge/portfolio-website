import React from 'react';
import { NavLink } from "react-router";

const HeaderComponent : React.FC = () => {

    const common = "text-xs md:text-base block p-2";
    const linkClassname = `${common} hover:text-gray-400 hover:underline`;
    const buttonClassname = `${common} rounded-md leading-[22px] bg-gray-800 text-white mx-auto hover:text-black hover:bg-gray-400`;

    return (
        <header className="bg-white flex justify-between p-1 md:p-4">
            <h1 className="block p-2 text-s md:text-base">Rainbowfern.com</h1>
            <div className="flex">
                <NavLink className={linkClassname}   to="/skills">Skills</NavLink>
                <NavLink className={linkClassname}   to="/projects">Projects</NavLink>
                <NavLink className={linkClassname}   to="/experience">Experience</NavLink>
                <NavLink className={linkClassname}   to="/education">Education</NavLink>
                <NavLink className={buttonClassname} to="/contact">Contact</NavLink>
            </div>
        </header>
    );
};

export default HeaderComponent;