import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "-hola" : "Amazona"}</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className=" flex h-12 items-center justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              Amazona
            </Link>
            <div>
              <Link href="/cart">Cart</Link>
              <Link href="/signin">Sign In</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
