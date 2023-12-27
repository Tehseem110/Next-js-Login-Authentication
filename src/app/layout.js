import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "@/context/userProvider";
import Navbar from "@/components/Navbar";
// import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Irs-Supplier-Portal",
  description: "This is a Full-Stack Web application!",
};

export default function RootLayout({ children }) {
  // console.log(children)
  // const pathname = usePathname()
  // console.log(pathname)
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <UserProvider> */}
          {/* <div className="mt-2"> */}
            {/* <Navbar/> */}
            {children}
        {/* </UserProvider> */}
      </body>
    </html>
  );
}
