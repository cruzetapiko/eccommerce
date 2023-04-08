import Head from 'next/head';
import Link from 'next/link';
import { use, useContext, useState, useEffect } from 'react';
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
  const [cartItemsCount, setcartItemsCount] = useState(0);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title : 'Amazona'}</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className=" flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              Amazona
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 ">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner ">
          footer
        </footer>
      </div>
    </>
  );
}
