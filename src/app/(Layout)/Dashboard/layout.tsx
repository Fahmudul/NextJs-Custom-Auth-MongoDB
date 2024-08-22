import { RiMenu2Fill } from "react-icons/ri";
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
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
