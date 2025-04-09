import React from 'react';
import { NavLink } from "react-router";
import rainbowFernLogo from '../assets/fern-colors-web.svg';

const HeaderComponent : React.FC = () => {

    const links = [
        {
            title: "Skills",
            to: "/skills",
        },
        {
            title: "Projects",
            to: "/projects",
        },
        {
            title: "Experience",
            to: "/experience",
        },
        {
            title: "Education",
            to: "/education",
        },
    ];

    return (
        <header className="bg-white flex justify-between p-1 md:p-4">
            <div className="flex">
                <a href="/#" className="block">
                    <img src={rainbowFernLogo} alt="Rainbowfern logo" className="block mt-2 ml-1 md:mt-0 md:ml-0 max-w-[20px] max-h-[20px] md:max-w-[32px] md:max-h-[32px]"/>
                </a>
                <h1 className="block p-2 text-s md:text-base">
                    Rainbowfern.com
                </h1>
            </div>
            <div className="flex">

                {links.map(({title, to}) => (
                    <NavLink className="text-xs md:text-base block p-2 hover:text-gray-400 hover:underline" to={to}>{title}</NavLink>
                ))}

                <NavLink className="text-xs md:text-base block p-2 rounded-md leading-[22px] bg-gray-800 text-white mx-auto hover:text-black hover:bg-gray-400" to="/contact">Contact</NavLink>
            </div>
        </header>
    );
};

export default HeaderComponent;