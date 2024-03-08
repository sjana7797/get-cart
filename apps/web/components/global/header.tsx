"use client";
import Link from "next/link";
import React from "react";
import { UserRound, Search, ShoppingCart } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import CartSidebar from "./cart-sidebar";
import { useDispatch } from "react-redux";
import { toggleCartSidebar } from "~/lib/store/features/cartSlice";
import { UserButton, useAuth } from "@clerk/nextjs";

function Header() {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleCartSidebar());
  };

  // clerk auth hook
  const { isSignedIn } = useAuth();

  return (
    <>
      <header className="p-5 flex justify-between items-center shadow-sm bg-slate-50">
        <h1 className="text-3xl font-semibold font-mono">
          <Link href="/">Get Cart</Link>
        </h1>
        <div className="max-w-sm flex gap-x-2 items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-600 rounded-lg border ring-offset-white border-blue-400 bg-blue-400 overflow-hidden">
          <Input
            className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none w-full rounded-none"
            placeholder="Search for products"
          />
          <Search className="w-8 h-8 pr-2 text-slate-50 cursor-pointer" />
        </div>
        <nav>
          <ul className="flex gap-x-5">
            <li>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <Link href="/sign-in">
                  <UserRound className="w-8 h-8" />
                </Link>
              )}
            </li>
            <li>
              <Button variant={"ghost"} size={"icon"} onClick={toggleSidebar}>
                <ShoppingCart className="w-8 h-8" />
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <CartSidebar />
    </>
  );
}

export default Header;
