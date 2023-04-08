import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function LoginScreen() {
  return (
    <Layout title="login">
      <form className="w-72 border-2 my-36 mx-auto rounded-md p-2 bg-slate-400">
        <h1 className="mt-2 ml-6 mb-2 text-left font-bold text-4xl">Sign in</h1>
        <div className="flex flex-col my-4">
          <label className="mx-auto my-2" htmlFor="email">
            Email
          </label>
          <input className="border mx-auto w-52"></input>
        </div>
        <div className="flex flex-col">
          <label className="mx-auto my-2" htmlFor="password">
            Password
          </label>
          <input className="border mx-auto w-52"></input>
        </div>
        <div className="">
          <button className="mx-auto my-2" type="submit">
            Login
          </button>
        </div>
        <div className="">
          Don&apos;t have an account? &nbsp;
          <Link href="register">Register</Link>
        </div>
      </form>
    </Layout>
  );
}
