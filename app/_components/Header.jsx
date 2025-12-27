"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={220}
            height={70}
            className="h-auto w-44 md:w-56 lg:w-64"
            priority
          />
        </div>

        <div className="hidden flex-1 max-w-xl mx-8 lg:flex">
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search for products, brands, and more..."
              className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-orange-400 focus:bg-white focus:shadow-sm"
            />
          </div>
        </div>

        {isSignedIn ? (
          <UserButton />
        ) : (
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex border-gray-300 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 transition-colors"
              onClick={handleSignIn}
            >
              Login
            </Button>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white transition-colors"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>

            {/* Mobile Search Icon */}
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Search Bar - Shows on small screens */}
      <div className="lg:hidden border-t px-4 py-3">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-orange-400 focus:bg-white"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
