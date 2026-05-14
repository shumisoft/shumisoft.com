"use client";

import {
    ThemeProvider as NextThemesProvider,
    type ThemeProviderProps,
} from "next-themes";

import { LucideIcon } from "lucide-react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export interface LinkConfig {
    icon: LucideIcon;
    label: string;
    variant: "default" | "outline" | "ghost";
    iconOnly?: boolean;
}
