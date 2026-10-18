"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

export default function AdminNavi() {
    const navigationLinks = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    label: "Email Records",
    href: "/admin/dashboard/email",
  },
  {
    label: "Search Emails",
    href: "/admin/dashboard/searchemail",
  },
  {
    label: "Email Messages",
    href: "/admin/dashboard/emailmessage",
  },
];

  const pathname = usePathname();
  return (
    <>
    
      <nav className="w-full mb-6 rounded-lg bg-white p-4 text-white">
      <h2 className="mb-4 text-lg font-bold">
        NOGTECH Admin Panel
      </h2>

      <div className="flex flex-wrap gap-3">
        {navigationLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  
    </>
  )
}
