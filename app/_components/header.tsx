'use client'

import React, { useState, useEffect } from 'react'
import { FaShare, FaCopy, FaEnvelope } from 'react-icons/fa6'

export default function Header() {
    const [isShareOpen, setIsShareOpen] = useState(false)
    const [shareUrl, setShareUrl] = useState('https://nostal.app')
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setShareUrl(window.location.href)
        }
    }, [])

    const shareTitle = 'Join Nostal — the first Web3-powered social app where your posts pay!'

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            alert('Failed to copy link')
        }
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
                    <button className="bg-white cursor-pointer text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
                        Join Waitlist
                    </button>
                </div>

                {/* Mobile Share Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsShareOpen(true)}
                        className="flex gap-2 items-center bg-[#f1f1f1] text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
                        aria-label="Share"
                    >
                        <FaShare />
                        Share
                    </button>
                </div>
            </div>

            {/* Fullscreen Share Popup */}
            {isShareOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
                    onClick={() => setIsShareOpen(false)} // Close on overlay click
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="bg-white/10 backdrop-blur rounded-2xl p-6 max-w-sm w-full text-white shadow-2xl flex flex-col items-center gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-2 font-poppins">Share Nostal</h2>

                        <div className="flex justify-center gap-12 w-full">
                            {/* Email link */}
                            <a
                                href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`}
                                onClick={() => setIsShareOpen(false)}
                                className="flex flex-col items-center cursor-pointer hover:text-gray-300 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaEnvelope size={48} />
                                <span className="mt-2 text-base font-medium">Email</span>
                            </a>

                            {/* Copy Link Button */}
                            <button
                                onClick={handleCopy}
                                className="flex flex-col items-center cursor-pointer hover:text-gray-300 transition focus:outline-none"
                                aria-label="Copy link"
                                type="button"
                            >
                                <FaCopy size={48} />
                                <span className="mt-2 text-base font-medium">{copied ? 'Copied!' : 'Copy Link'}</span>
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </header>
    )
}
