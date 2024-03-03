"use client";
import Link from "next/link";
import React from "react";
import { ShoppingCart, UserRound, Search } from "lucide-react";
import { Input } from "@repo/ui";

type Props = {};

function Header({}: Props) {
  return (
    <header className="p-5 flex justify-between items-center shadow-sm bg-slate-50">
      <h1 className="text-3xl font-semibold font-mono">
        <Link href="/">Get Cart</Link>
      </h1>
      <div className="max-w-sm flex gap-x-2 items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-600 rounded-lg border ring-offset-white border-emerald-400 bg-emerald-400 overflow-hidden">
        <Input className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none w-full rounded-none" />
        <Search className="w-8 h-8 pr-2 text-slate-50 cursor-pointer" />
      </div>
      <nav>
        <ul className="flex gap-x-5">
          <li>
            <Link href="/cart">
              <UserRound className="w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <ShoppingCart className="w-8 h-8" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
