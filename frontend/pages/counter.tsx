import Head from "next/head";
import Link from "next/link";
import { Counter } from "../components/Counter";

export default function CounterPage() {
  return (
    <div className="w-full h-full bg-slate-900">
      <Head>
        <title>Counter | Kuliah Helper</title>
        <meta name="description" content="Kuliah Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full w-full items-center justify-center gap-10">
        <Counter />
        <div className="flex gap-4 mt-4 text-xl text-sky-500">
          <Link
            href="/"
            className="hover:bg-sky-400/20 transition duration-150 ease-out uppercase px-4 py-2 bg-sky-500/10 rounded-md"
          >
            go back
          </Link>
        </div>
      </main>
    </div>
  );
}
