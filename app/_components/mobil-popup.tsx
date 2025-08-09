'use client'
import EmailPopup from '@/components/EmailPopup'
import React, { useState } from 'react'

export default function MobilePopup() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handlePopupVisibility = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    return (
        <>
            <button className="bg-white cursor-pointer text-black text-sm px-10 py-3 cursor-pointer rounded-full hover:bg-gray-200 transition font-sans" onClick={handlePopupVisibility}>
                Join Waitlist
            </button>
            {isPopupOpen && <EmailPopup />}
        </>
    )
}
