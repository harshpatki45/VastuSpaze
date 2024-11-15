import React, { useState } from 'react'
import logo from "../assets/logo.webp"
import { RiCloseLine } from '@remixicon/react'
import { RiMenu3Line } from '@remixicon/react'
import { LINKS } from '../constants/index';


const navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close the mobile menu after clicking
        }
    };
  return (
    <nav className='border-b-2'>
        <div className='max-w-7xl mx-auto flex justify-between items-center py-8 '>
            <div className='pl-2'>
                <a href='#'>
                    <img src={logo} width={150} height={15} alt="VastuSpaze" />
                </a>

            </div>
            <div className='md:hidden'>

                <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none scroll-behaviour:smooth " aria-label={isOpen ? "Close menu" : "Open menu"}>
                    {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>

            </div>
            
            <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
            {LINKS.map((link,index) => (
                    <a key={index} href={link.link} className="uppercase text-sm font-medium scroll-behaviour:smooth hover:text-gray-600" >
                        {link.name}

                    </a>
                ))}

            </div>
        </div>
        <div className={`${
            isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
                {LINKS.map((link, index) => (
                    <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide scroll-behaviour:smooth hover:text-gray-600 ">
                        {link.name}

                    </a>
                ))}

        </div>

    </nav>
  )
}

export default navbar
