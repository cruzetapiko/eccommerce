import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';

export default function LoginScreen() {
  const { data: session, status } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [session, router, redirect]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="login" className="bg-black">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-72 border-2 my-36 mx-auto rounded-md p-2 bg-slate-400"
      >
        <h1 className="mt-2 ml-6 mb-2 text-left font-bold text-4xl">Sign in</h1>
        <div className="flex flex-col my-4">
          <label className="mx-auto my-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Please enter valid email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            className="border mx-auto w-52"
            id="email"
          ></input>
          {errors.email && (
            <p className="text-red-500 text-center">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mx-auto my-2 font-semibold " htmlFor="password">
            Password
          </label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: {
                value: 6,
                message: 'Password must have at least 6 characters',
              },
            })}
            id="password"
            className="border mx-auto w-52"
            autoFocus
          ></input>
          {errors.password && (
            <p className="text-red-500 text-center">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="flex px-4 my-2 items-center justify-center hover:text-yellow-50
            bg-amber-500 hover:bg-amber-600 border-stone-900 border rounded-sm"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="flex items-center justify-center">
          <h6 className="text-sm">Don&apos;t have an account? &nbsp;</h6>
          <Link
            className="underline underline-offset-2 text-sm "
            href="register"
          >
            Register
          </Link>
        </div>
      </form>
    </Layout>
  );
}
