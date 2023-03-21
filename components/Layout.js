import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-hola' : 'Amazona'}</title>
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
              </Link>
              <Link className="p-2" href="/signin">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <body className="bg-slate-300">
          <main className="container m-auto mt-4 px-4 ">{children}</main>
        </body>
        <footer className="flex h-10 justify-center items-center shadow-inner ">
          footer
        </footer>
      </div>
    </>
  );
}
