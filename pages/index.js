import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-500 ">
      <h1 className="text-center underline text-sky-400/100">
        Welcome to <Link href="/posts/first-post">first_link</Link>
      </h1>
    </div>
  );
}
