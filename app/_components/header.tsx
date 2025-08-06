'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EmailPopup from '@/components/EmailPopup'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handlePopupVisibility = () => {
        setIsMenuOpen(false)
        setIsPopupOpen(!isPopupOpen)
    }

    return (
        <header className="relative z-50 md:px-6 md:py-4">
            <div className="max-w-6xl mx-auto flex items-center bg-white md:bg-transparent justify-between border-b border-white/10 px-4 md:px-0 py-6 md:py-0 md:pb-4 relative">
                {/* Brand Name */}
                <h1 className="text-2xl font-bold tracking-wide font-comfortaa text-white md:text-white">
                    <span className="md:hidden text-black">nostal</span>
                    <span className="hidden md:inline">nostal</span>
                </h1>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button className="bg-white cursor-pointer text-black px-5 py-2 cursor-pointer rounded-full hover:bg-gray-200 transition" onClick={handlePopupVisibility}>
                        Join Waitlist
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden relative">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-black cursor-pointer focus:outline-none"
                        aria-label="Open Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Mobile Menu with Animation */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 bg-white text-black w-48 px-6 py-4 rounded-md shadow-lg z-50"
                            >
                                <button className="block cursor-pointer w-full text-center bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition" onClick={handlePopupVisibility}>
                                    Join Waitlist
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            { isPopupOpen && <EmailPopup/>}
        </header>
    )
}
