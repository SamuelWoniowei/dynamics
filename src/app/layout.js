import { Inter } from "next/font/google";
import "./globals.css";
import { MyProvider } from "../../Context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dynamics",
  description: "Frontend Development test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
