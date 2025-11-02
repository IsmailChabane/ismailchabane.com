"use client";

import React, { useState, useEffect } from 'react'
import { ThemeToggleButton } from '@/features/shared/theme-toggle-button'
import { Button } from '@/features/shared/ui/button'
import { AnimatedLink } from '@/features/shared/animated-link'
import Link from 'next/link';
import { Home, FolderOpen, Mail } from 'lucide-react';

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
        <nav className={`bg-card fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 md:gap-8 h-16 rounded-[var(--radius)] border border-border py-3 transition-all duration-300 w-[calc(100%-1rem)] px-2 sm:container sm:px-4 ${
            isScrolled ? 'xl:max-w-6xl xl:px-4' : ''
        }`}>
            {/* Logo */}
            <div className='flex items-center'>
                <div className='text-3xl sm:text-2xl font-bold text-foreground'>IC</div>
            </div>

            {/* Desktop Navigation Links */}
            <div className='hidden md:flex items-center space-x-8 mr-auto'>
                <AnimatedLink href='/' className='text-muted-foreground hover:text-foreground transition-colors'>
                    Home
                </AnimatedLink>
                <AnimatedLink href='/projects' className='text-muted-foreground hover:text-foreground transition-colors'>
                    Projects
                </AnimatedLink>
                <AnimatedLink href='/contact' className='text-muted-foreground hover:text-foreground transition-colors'>
                    Contact
                </AnimatedLink>
            </div>

            {/* Mobile Navigation Links */}
            <div className='flex md:hidden items-center space-x-2 mr-auto'>
                <Link href='/' className='text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted/50' title="Home">
                    <Home className="w-6 h-6" />
                </Link>
                <Link href='/projects' className='text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted/50' title="Projects">
                    <FolderOpen className="w-6 h-6" />
                </Link>
                <Link href='/contact' className='text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-muted/50' title="Contact">
                    <Mail className="w-6 h-6" />
                </Link>
            </div>

            {/* Right side - Theme Toggle and CTA buttons */}
            <div className='flex items-center  ml-auto'>
                <ThemeToggleButton 
                    variant="polygon"
                    start="top-left"
                    blur={false}
                />
                {/* Resume button - visible on both desktop and mobile */}
                <Button 
                    className='ml-2 h-full bg-primary text-primary-foreground hover:bg-primary/90'
                    onClick={() => {
                        window.open('/assets/ismail_chabane_resume.pdf', '_blank');
                    }}
                >
                    Resume
                </Button>
            </div>
        </nav>
    )
}
