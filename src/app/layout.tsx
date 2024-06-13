import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import ToastProviders from "@/utils/ToastProviders";
import img from '../../public/logo 1.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth BoiletPlate",
  description: "created by devang patel",
  icons: [{ rel: "icon", url: "./icon.ico" }]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="mx-auto max-w-5xl text-2xl gap-2 mb-10">
            <ToastProviders>
              {children}
            </ToastProviders>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}

