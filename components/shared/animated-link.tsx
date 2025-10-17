import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const AnimatedLink = ({
  children,
  href,
  className,
}: AnimatedLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center",
        className,
        "before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[0.05em] before:w-full before:bg-current before:content-['']",
        "before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:before:origin-left hover:before:scale-x-100",
      )}
    >
      {children}
    </Link>
  );
};
