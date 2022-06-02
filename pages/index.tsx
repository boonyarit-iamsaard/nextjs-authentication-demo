import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js App with Auth0</title>
      </Head>

      <div className="container min-h-screen bg-gray-100 p-4">
        <p className="text-center text-xl font-semibold">
          Next.js App with Auth0
        </p>
      </div>
    </>
  );
};

export default Home;
