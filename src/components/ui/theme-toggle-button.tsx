import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleButtonProps {
  showLabel?: boolean;
  variant?: "default" | "circle" | "circle-blur" | "gif";
  start?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  url?: string;
  className?: string;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  showLabel = false,
  variant = "default",
  start = "center",
  url,
  className,
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const getStartPosition = () => {
    switch (start) {
      case "top-left":
        return { top: 0, left: 0 };
      case "top-right":
        return { top: 0, right: 0 };
      case "bottom-left":
        return { bottom: 0, left: 0 };
      case "bottom-right":
        return { bottom: 0, right: 0 };
      default:
        return { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    }
  };

  const renderGifVariant = () => (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative overflow-hidden rounded-lg border-2 border-border bg-background p-2 transition-all hover:scale-105",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {url && (
        <img
          src={url}
          alt="Theme toggle"
          className="h-8 w-8 rounded-md object-cover"
        />
      )}
      {showLabel && (
        <span className="ml-2 text-sm font-medium">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </motion.button>
  );

  const renderCircleVariant = () => (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative h-12 w-12 overflow-hidden rounded-full border-2 border-border bg-background transition-all hover:scale-105",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute h-full w-full rounded-full bg-primary"
        initial={getStartPosition()}
        animate={{
          scale: isDark ? 1 : 0,
          ...getStartPosition(),
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {isDark ? (
          <Moon className="h-5 w-5 text-primary-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-foreground" />
        )}
      </div>
      {showLabel && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </motion.button>
  );

  const renderCircleBlurVariant = () => (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative h-12 w-12 overflow-hidden rounded-full border-2 border-border bg-background/80 backdrop-blur-md transition-all hover:scale-105",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute h-full w-full rounded-full bg-gradient-to-br from-primary to-primary/60 backdrop-blur-sm"
        initial={getStartPosition()}
        animate={{
          scale: isDark ? 1.2 : 0,
          opacity: isDark ? 0.9 : 0,
          ...getStartPosition(),
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-primary-foreground" />
          ) : (
            <Sun className="h-5 w-5 text-foreground" />
          )}
        </motion.div>
      </div>
      {showLabel && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </motion.button>
  );

  const renderDefaultVariant = () => (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "flex items-center gap-2 rounded-md border-2 border-border bg-background px-3 py-2 transition-all hover:scale-105",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </motion.div>
      {showLabel && (
        <span className="text-sm font-medium">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </motion.button>
  );

  switch (variant) {
    case "gif":
      return renderGifVariant();
    case "circle":
      return renderCircleVariant();
    case "circle-blur":
      return renderCircleBlurVariant();
    default:
      return renderDefaultVariant();
  }
};

export default ThemeToggleButton;