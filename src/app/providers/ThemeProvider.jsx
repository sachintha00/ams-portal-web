"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }) => {
    return (
        <NextThemeProvider disableTransitionOnChange defaultTheme="light">
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;