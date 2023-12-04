"use client";
import "../../src/styles/scss/_main.scss";
import { Inter } from "next/font/google";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import ReactHotToast from "@/components/ReactHotToast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// export const metadata = {
//   title: "Frienducation",
//   description: "India’s best tech learning company",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
          {hasWindow && <ReactHotToast />}
        </Provider>
      </body>
    </html>
  );
}
