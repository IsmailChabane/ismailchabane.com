"use client";

import { motion } from "framer-motion";
import { GripHorizontal, RefreshCcw } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const ThemeToggleButton = ({
    className = "",
  }: {
    className?: string;
  }) => {
    const { theme, setTheme } = useTheme();
    // const [isDark, setIsDark] = useState(theme === "dark");
    return (
      <button
        type="button"
        className={cn(
          "rounded-[var(--radius)] h-full w-11 p-2 transition-all flex justify-center items-center duration-300 bg-sidebar text-sidebar-foreground active:scale-95 hover:bg-primary/10 cursor-pointer",          className,
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="var(--muted-foreground)"
          strokeLinecap="round"
          viewBox="0 0 32 32"
        >
          <clipPath id="skiper-btn-2">
            <motion.path
              animate={{ y: theme === "dark" ? 10 : 0, x: theme === "dark" ? -12 : 0 }}
              transition={{ ease: "easeInOut", duration: 0.35 }}
              d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
            />
          </clipPath>
          <g clipPath="url(#skiper-btn-2)">
            <motion.circle
              animate={{ r: theme === "dark" ? 10 : 8 }}
              transition={{ ease: "easeInOut", duration: 0.35 }}
              cx="16"
              cy="16"
            />
            <motion.g
              animate={{
                rotate: theme === "dark" ? -100 : 0,
                scale: theme === "dark" ? 0.5 : 1,
                opacity: theme === "dark" ? 0 : 1,
              }}
              transition={{ ease: "easeInOut", duration: 0.35 }}
              stroke="var(--muted-foreground)"
              strokeWidth="1.5"
            >
              <path d="M16 5.5v-4" />
              <path d="M16 30.5v-4" />
              <path d="M1.5 16h4" />
              <path d="M26.5 16h4" />
              <path d="m23.4 8.6 2.8-2.8" />
              <path d="m5.7 26.3 2.9-2.9" />
              <path d="m5.8 5.8 2.8 2.8" />
              <path d="m23.4 23.4 2.9 2.9" />
            </motion.g>
          </g>
        </svg>
      </button>
    );
  };
