"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/app/utils/constants";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;