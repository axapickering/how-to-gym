import * as React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Breadcrumbs from "./Breadcrumbs";
import Box from '@mui/system/Box';
import  {ComplexityToggle} from './ComplexityToggle';

const inter = Inter({ subsets: ["latin"] });
inter.className = inter.className += " bg-blue-200"

export const metadata: Metadata = {
  title: "How to gym",
  description: "Created by Axa Pickering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Breadcrumbs />
          <ComplexityToggle />
          <Box display="flex" flexDirection={"column"} alignItems="center" sx={{minWidth:"90vw", minHeight:"90vh"}} >
            {children}
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
