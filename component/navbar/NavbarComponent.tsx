import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavbarComponent() {
  return (
    <header className="bg-slate-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-900" >
      <Navbar className="bg-gray-900 ">
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <img
            className="w-20"
            src=""
          />
          <span className=" self-center whitespace-nowrap text-2xl font-bold tracking-[.25em] text-white">
            JINA SHOP
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" className="text-white">
            Home
          </NavbarLink>

          <NavbarLink href="/aboutUs" className="text-white">
            About Us
          </NavbarLink>
          <NavbarLink href="/policy" className="text-white">
            Policy
          </NavbarLink>
          <NavbarLink href="/dashboard" className="text-white">
            Dashboard
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
