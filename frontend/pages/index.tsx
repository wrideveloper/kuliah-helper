import Head from "next/head";
import Link from "next/link";

type Route = {
  url: string;
  text: string;
};

const ROUTES: Route[] = [
  { url: "/", text: "home" },
  { url: "/counter", text: "counter" },
  { url: "/rng", text: "random" },
];

export default function Home() {
  return (
    <div className="w-full h-full bg-slate-900">
      <Head>
        <title>Home | Kuliah Helper</title>
        <meta name="description" content="Kuliah Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full w-full items-center justify-center gap-10">
        <h1 className="font-light text-[4rem] text-slate-100">
          kuliahelper.id
        </h1>
        <div className="flex gap-4 mt-4 text-xl text-sky-500">
          {ROUTES.map((route) => (
            <Link key={route.url} href={route.url} className="hover:bg-sky-400/20 transition duration-150 ease-out uppercase px-4 py-2 bg-sky-500/10 rounded-md">
              {route.text}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
