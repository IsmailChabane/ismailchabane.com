"use client";

import React, { useState, useEffect } from 'react'
import { ThemeToggleButton } from '@/components/shared/theme-toggle-button'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`bg-card fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-8 h-16 rounded-[var(--radius)] border border-border px-4 py-3 transition-all duration-500 ${
            isScrolled ? 'xl:max-w-6xl container xl:w-full' : 'container mx-auto w-full'
        }`}>
            {/* Logo */}
            <div className='flex items-center'>
                <div className='text-2xl font-bold text-foreground'>IC</div>
            </div>

            {/* Navigation Links */}
            <div className='flex items-center space-x-8 mr-auto'>
                <a href='/' className='text-muted-foreground hover:text-foreground transition-colors'>
                    Home
                </a>
                <a href='/projects' className='text-muted-foreground hover:text-foreground transition-colors'>
                    Projects
                </a>
                <a href='/contact' className='text-muted-foreground hover:text-foreground transition-colors'>
                    Contact
                </a>
            </div>

            {/* Right side - Let's Talk button and Theme Toggle */}
            <div className='flex items-center space-x-4 ml-auto'>
                <ThemeToggleButton />
                <Button className=' h-full bg-primary text-primary-foreground    hover:bg-primary/90'>
                    Let's Talk
                </Button>

            </div>
        </nav>
    )
}
