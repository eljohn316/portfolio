import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-28 pb-32 sm:px-6 lg:pt-36">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-600 lg:text-6xl dark:text-blue-500">
          404
        </h1>
        <p className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Page not found
        </p>
        <Link
          href="/"
          className="mt-12 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-900">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
