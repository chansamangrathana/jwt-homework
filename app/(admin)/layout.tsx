"use client";
import SideBarComponent from "@/component/sidebar/SideBarComponent";
import "@/app/globals.css";
import { useState } from "react";
import{ MenuIcon} from "@/component/icons/FontAwsome"


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);
  return (
    <html>
      <body className="flex none-scroll-bar overflow-y-auto" >
        <MenuIcon
         onClick={() => setIsShowSideBar(!isShowSideBar)}
         classname="h-8 z-20 w-8 fixed bottom-0 m-4 cursor-pointer lg:hidden"

        />
        <aside className={`sticky left-0 z-10 h-screen ${
						isShowSideBar && "hidden"
					} lg:block`}>
          <SideBarComponent />
        </aside>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

