import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import { PiSignOut } from "react-icons/pi";
import { cookies } from "next/headers";
import axios from "axios";
import LogoutBtn from "@/components/LogoutBtn";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className=" ">
        <div className="">
          <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center relative">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className=" drawer-button lg:hidden absolute left-1 top-1"
              >
                <RiMenu2Fill className="text-3xl" />
              </label>
              <div className="w-full mt-10 text-center">{children}</div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col justify-between">
                {/* Sidebar content here */}
                <div>
                  <li>
                    <Link href={`/Dashboard/profile`}>Sidebar Item 1</Link>
                  </li>
                  <li>
                    <Link href={`/Dashboard/test`}>Sidebar Item 2</Link>
                  </li>
                </div>
                <li className="text-xl">
                  <LogoutBtn />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
