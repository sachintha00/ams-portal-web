"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Providers } from "./Providers";
import ThemeProvider from "./providers/ThemeProvider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
