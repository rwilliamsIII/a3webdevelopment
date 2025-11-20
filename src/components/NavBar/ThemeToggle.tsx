import { useTheme } from "../ThemeProvider";
import { IconMoon, IconSun } from "@tabler/icons-react";
 
export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2  rounded-[40%] cursor-pointer border border-transparent hover:border hover:border-neutral-200  hover:rounded-[40%] hover:shadow-[0_4px_8px_rgba(211,211,211,0.1)] transition-[border,shadow]"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <IconSun className="w-4 h-4" />
            ) : (
                <IconMoon className="w-4 h-4" />
            )}
        </button>
    );
};

