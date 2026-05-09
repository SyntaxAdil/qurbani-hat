"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, cn, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={`${cn} ${isActive && "text-primary"}`}>
      {children}
    </Link>
  );
};

export default NavLink;
