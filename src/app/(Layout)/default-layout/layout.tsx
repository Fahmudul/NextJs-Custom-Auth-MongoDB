import { RiMenu2Fill } from "react-icons/ri";
import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className=" ">
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
