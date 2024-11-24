import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names
function cn(...inputs: (string | undefined | null)[]) {
  return twMerge(clsx(inputs));
}

// Define the type for the component props
interface HoverEffectWrapperProps {
  children: React.ReactNode;
  className?: string; // Optional className for the wrapper
  hoverBackgroundClass?: string; // Optional background class during hover
  roundedClass?: string; // Optional rounded class for the hover background
}

export const HoverEffectWrapper: React.FC<HoverEffectWrapperProps> = ({
  children,
  className,
  hoverBackgroundClass = "bg-zinc-500",
  roundedClass = "rounded-3xl",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={cn("relative group block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={cn(
              "absolute inset-0 h-full w-full",
              hoverBackgroundClass,
              roundedClass
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
