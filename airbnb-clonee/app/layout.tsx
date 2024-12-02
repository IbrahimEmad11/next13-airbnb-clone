import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

import ToasterProvider from "./providers/ToasterProvider";

import RegisterModal from "./components/modal/RegisterModal";
import LoginModal from "./components/modal/LoginModal";
import RentModal from "./components/modal/RentModal";

import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import SearchModal from "./components/modal/SearchModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Book unique homes and experiences all over the world.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal/>
          <RegisterModal />
          <Navbar currentUser = {currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-40">
          {children}
        </div>
      </body>
    </html>
  );
}
