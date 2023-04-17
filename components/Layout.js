import Head from 'next/head';
import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import { Store } from '../utils/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const [cartItemsCount, setcartItemsCount] = useState(0);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  {
    console.log(session);
  }

  return (
    <>
      <Head>
        <title>{title ? title : 'Amazona'}</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

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
              {status === 'loading' ? (
                'Loading...'
              ) : session?.user ? (
                <div>
                  {session.user.name} &nbsp;
                  <button className="text-red-500" onClick={() => signOut()}>
                    sign Out
                  </button>
                </div>
              ) : (
                <Link href="/login">Sign In</Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner ">
          footer
        </footer>
      </div>
    </>
  );
}
