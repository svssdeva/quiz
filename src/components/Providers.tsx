"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//
// const queryClient = new QueryClient();

const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
};

export default Providers;