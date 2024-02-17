import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Breadcrumbs from "./Breadcrumbs";
import Box from '@mui/system/Box';

const inter = Inter({ subsets: ["latin"] });

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
          <Box display="flex" alignItems="center" sx={{minWidth:"90vw"}}  className="bg-blue-200">
            {children}
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
