import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

type RngPageProps = {
  number: string;
};

export default function RngPage(props: RngPageProps) {
  return (
    <div className="w-full h-full bg-slate-900">
      <Head>
        <title>Counter | Kuliah Helper</title>
        <meta name="description" content="Kuliah Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full w-full items-center justify-center gap-10">
        <span className="text-4xl text-sky-100 font-bold">{props.number}</span>
        <p className="font-light text-sky-100 text-xl">The number is generated server side. Try to go back home and back to this page and see the number changes.</p>
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

export const getServerSideProps: GetServerSideProps<{
  number: number;
}> = async (_context) => {
  const number = Math.round(Math.random() * 100);
  return {
    props: { number },
  };
};
