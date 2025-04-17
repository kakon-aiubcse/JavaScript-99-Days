import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex justify-evenly">
        <Link
          href="/"
          className={pathname === "/" ? "text-green-900" : "text-red-600"}
        >
          home
        </Link>
        <Link
          href="/(auth)/register"
          className={pathname === "/(auth)/register" ? "text-green-900" : "text-red-600"}
        >
          Register
        </Link>
        <Link
          href="/(auth)/login"
          className={pathname === "/(auth)/login" ? "text-green-900" : "text-red-600"}
        >
          Login
        </Link>
        <Link
          href="/products/kakon"
          className={pathname === "/products/kakon" ? "text-green-900" : "text-red-600"}
        >
          Products
        </Link>
      </div>
    </>
  );
};

export default Navbar;
