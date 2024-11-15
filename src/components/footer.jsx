import { RiFacebookFill, RiInstagramFill, RiTwitterXFill } from '@remixicon/react'
import React from 'react'

const footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
            <div className="flex space-x-6 mb-2">
                <a href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page">
                    <RiFacebookFill />
                </a>
                <a href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TwitterX page">
                    <RiTwitterXFill />
                </a>
                <a href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagra page">
                    <RiInstagramFill />
                </a>
            </div>
            <p className="text-sm"> &copy; 2024 VastuSpaze. All rights reserved.</p>
            <p className="text-sm"> Made by Harsh Patki</p>

        </div>

    </footer>
  )
}

export default footer
