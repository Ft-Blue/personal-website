import type { Metadata, Viewport } from "next";

import "./globals.css";
import { Header } from "./components/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Moad Fethallah",
  description:
    "Moad Fethallah is a software engineer passionate about designing and building digital solutions for business problems.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="font-sans">
      <body className="bg-pickled-bluewood px-64">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
