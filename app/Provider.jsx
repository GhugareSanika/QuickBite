"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "./_components/Header";

function Provider({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/sign-in" || pathname === "/sign-up";

  return (
    <div>
      {!isAuthPage && <Header />}
      {children}
    </div>
  );
}

export default Provider;
