export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-top"
      style={{ backgroundImage: 'url("/kohli_rcb_bg.jpg")' }}
    >
      {/* Overlay for readability on top of the background image */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-20 text-center text-white">
        <h1 className="text-6xl font-semibold tracking-tight">
          Welcome to the King&apos;s Den
        </h1>

        <p className="mt-3 text-2xl">
          Please choose an option to continue.
        </p>

        <div className="flex flex-wrap items-center justify-around mt-6 sm:w-full">
          <a
            href="/signup"
            className="p-6 mt-6 text-center border-2 border-red-700 w-96 min-h-[160px] rounded-xl transition-colors hover:bg-red-800 bg-red-700 text-white flex flex-col justify-center items-center"
          >
            <h3 className="text-2xl font-bold">Sign Up &rarr;</h3>
            <p className="mt-4 text-xl">
              Create a new account to get started.
            </p>
          </a>

          <a
            href="/signin"
            className="p-6 mt-6 text-center border-2 border-red-700 w-96 min-h-[160px] rounded-xl transition-colors hover:bg-red-800 bg-red-700 text-white flex flex-col justify-center items-center"
          >
            <h3 className="text-2xl font-bold">Sign In &rarr;</h3>
            <p className="mt-4 text-xl">
              Already have an account? Sign in here.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
