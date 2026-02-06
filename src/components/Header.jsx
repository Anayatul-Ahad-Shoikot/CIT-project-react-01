import { useState } from "react";
import menuIcon from "../assets/menu_icon.svg";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className={`wrapper bg-secondaryGreen py-[15px] fixed top-0 z-10 md:py-[25px] transition-all duration-200 ease-in-out ${isOpen ? "h-screen" : ''}`}>
            <div className={`sectionContent flex transition-all duration-200 ease-in-out ${isOpen ? "flex-col items-start h-full" : ""}`}>
                <div className="w-full md:w-fit flex justify-between">
                    <img
                        src="/logo.svg"
                        alt="Brand Logo"
                        className="w-[120px] md:w-[148px]"
                    />
                    <div className="flex md:hidden">
                        <img
                            src={menuIcon}
                            alt="Hamburger menu"
                            onClick={openMenu}
                        />
                    </div>
                </div>
                <div className={`${isOpen ? "flex flex-col items-center justify-center" : "hidden"} transition-all duration-200 ease-in-out gap-6.5 w-full h-full md:flex md:justify-end  md:items-center`}>
                    <div className="flex items-center">
                        <a href="" className="navLink">
                            Home
                        </a>
                        <img
                            src="/chevron-down.svg"
                            alt="Dropdown icon"
                            width="20"
                        />
                    </div>
                    <div className="flex items-center">
                        <a href="" className="navLink">
                            Pages
                        </a>
                        <img
                            src="/chevron-down.svg"
                            alt="Dropdown icon"
                            width="20"
                        />
                    </div>
                    <div>
                        <a href="" className="navLink">
                            About Us
                        </a>
                    </div>
                    <div>
                        <a href="" className="navLink">
                            Services
                        </a>
                    </div>
                    <div>
                        <a href="" className="navLink">
                            Blog
                        </a>
                    </div>
                    <div>
                        <a href="" className="navLink">
                            Contact
                        </a>
                    </div>
                    <button className="text-white px-5.5 py-2.5 border-white border rounded-[8px] cursor-pointer hover:text-secondaryGreen hover:bg-white transition-all duration-300">
                        Let's talk
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
