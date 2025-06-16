import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <h1 className="text-6xl font-extrabold text-red-600">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </p>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition cursor-pointer"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
