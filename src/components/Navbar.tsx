"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/performance", label: "Performance" },
    { href: "/reliability", label: "Reliability" },
    { href: "/scale", label: "Scale" },
  ];

  return (
    <nav className="flex flex-row">
      {navItems.map((item) => (
        <div key={item.href} className="flex items-center">
          <Link
            href={item.href}
            className={`px-2 py-1 transition-colors ${
              pathname === item.href
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-gray-600"
            }`}
          >
            {item.label}
          </Link>
          {item.href !== "/scale" && <div className="p-2" />}
        </div>
      ))}
    </nav>
  );
}
