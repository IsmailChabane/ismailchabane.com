"use client";

import { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

// Avatar Component
const Avatar = forwardRef<HTMLDivElement>((props, ref) => (
  <div 
    ref={ref}
    className="flex justify-center mb-8 opacity-0"
    {...props}
  >
    <div className="relative w-35 h-35 rounded-full overflow-hidden border-2 border-success shadow-lg">
      <div className="absolute inset-0 flex justify-center items-center bg-black w-full h-full z-10 opacity-30"/>
      <Image
        src="/assets/ismailchabane.png"
        alt="Ismail Chabane Avatar"
        fill
        className="object-cover object-[center_20%]"
        priority
      />
    </div>
  </div>
));

Avatar.displayName = "Avatar";

// Open to Work Badge Component
const OpenToWorkBadge = forwardRef<HTMLAnchorElement>((props, ref) => (
  <div className="flex justify-center mb-8">
    <Link
      href="https://www.linkedin.com/in/ismail-chabane-135aba255/"
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className="inline-flex bg-success/15 items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 opacity-0 group hover:bg-success/20"
      {...props}
    >
      <span className="relative flex h-2 w-2 justify-center items-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success"></span>
      </span>
      <span className="text-sm font-bold text-success">
        Open to Software Developer Opportunities
      </span>
      <svg
        className="w-4 h-4 text-success transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  </div>
));

OpenToWorkBadge.displayName = "OpenToWorkBadge";

// Name Component
const Name = forwardRef<HTMLHeadingElement>((props, ref) => (
  <div className="mb-8 w-full">
    <h1
      ref={ref}
      className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight cursor-default select-none opacity-0 w-full"
      {...props}
    >
      Ismail Chabane
    </h1>
  </div>
));

Name.displayName = "Name";

// Description Component
const Description = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="opacity-0 space-y-3 max-w-2xl mx-auto"
    {...props}
  >
    <div className="space-y-1">
      <p className="text-xl md:text-2xl font-semibold text-foreground">
        Software Developer & DevOps Engineer
      </p>
      <p className="text-lg md:text-xl text-muted-foreground">
        Master&apos;s in Data Science & Big Data
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-muted-foreground">
      <span className="px-3 py-1 bg-card-2 rounded-full border border-border">
        Full-Stack Development
      </span>
      <span className="px-3 py-1 bg-card-2 rounded-full border border-border">
        Mobile Development
      </span>
      <span className="px-3 py-1 bg-card-2 rounded-full border border-border">
        Cloud Infrastructure
      </span>
    </div>
  </div>
));

Description.displayName = "Description";

// Main Hero Component
export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLAnchorElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Avatar animation
      tl.fromTo(
        avatarRef.current,
        { opacity: 0, scale: 0.5, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6 }
      );

      // Badge animation
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      // Name animation
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );

      // Description animation
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.6"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center bg-grid-pattern py-20 w-full min-h-[calc(80svh-112px)]">
      <div className="mx-auto px-4">
        <Avatar ref={avatarRef} />
        <OpenToWorkBadge ref={badgeRef} />
        <Name ref={nameRef} />
        <Description ref={descriptionRef} />
      </div>
    </section>
  );
}
