import "./globals.css";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata, Viewport } from "next";

// Prevent fontawesome from adding its CSS since we manually imported it above:
config.autoAddCss = false;

import { Header } from "./components/Header/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Moad Fethallah",
  description:
    "Moad Fethallah is a software engineer passionate about designing and building digital solutions for business problems.",
  alternates: {
    canonical: "https://moadfethallah.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="font-sans text-base text-primary-300">
      <body className="bg-background-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
