import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

import ToasterProvider from "./providers/ToasterProvider";

import RegisterModal from "./components/modal/RegisterModal";
import LoginModal from "./components/modal/LoginModal";
import RentModal from "./components/modal/RentModal";

import SearchModal from "./components/modal/SearchModal";
import ClientOnly from "./components/ClientOnly";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Book unique homes and experiences all over the world.",
};

// Separate server-side component for fetching the current user
const CurrentUserComponent = async () => {
  const getCurrentUser = (await import("./actions/getCurrentUser")).default;
  const currentUser = await getCurrentUser();

  return <Navbar currentUser={currentUser} />;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Airbnb</title>
        <meta
          name="description"
          content="Book unique homes and experiences all over the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <CurrentUserComponent /> {/* Dynamically renders Navbar */}
        </ClientOnly>
        <div className="pb-20 pt-40">{children}</div>
      </body>
    </html>
  );
}
