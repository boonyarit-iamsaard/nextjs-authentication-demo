import { useUser } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Head>
        <title>Next.js App with Auth0</title>
      </Head>

      <div className="min-h-screen bg-gray-100 p-4 text-center">
        <p className="mb-4 text-xl font-semibold">Next.js App with Auth0</p>

        {isLoading && <p className="text-gray-600">Loading...</p>}

        {error && <p className="text-red-500">{error.message}</p>}

        {user ? (
          <>
            <p className="mb-4 text-gray-600">{user.name}</p>
            <p className="mb-4 text-gray-600">{user.email}</p>
            <Link href="/api/auth/logout">
              <a className="inline-block rounded-md bg-gray-300 px-4 py-2 hover:bg-slate-400">
                Logout
              </a>
            </Link>
          </>
        ) : (
          <Link href="/api/auth/login">
            <a className="inline-block rounded-md bg-gray-300 px-4 py-2 hover:bg-slate-400">
              Login
            </a>
          </Link>
        )}
      </div>
    </>
  );
};

export default Home;
