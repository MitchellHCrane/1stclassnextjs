export default function HeroOne() {
  return (
    <div className="w-full">
      <div
        style={{ height: "calc(100vh - 6rem" }}
        className="bg-cover bg-center bg-no-repeat bg-[url('/images/homeBackground.png')]"
      >
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-3xl text-[#004e82] sm:text-5xl">
              First Class Home Mortgage
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-gray-600">
              We take the hassle out of your home buying experience. Contact us
              today and we will find the right solution for you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#f5bb54] hover:bg-[#f5bb54]/85 px-3.5 py-2.5 font-semibold text-white shadow-sm focus-visible:outline-offset-2 focus-visible:outline-[#f5bb54]"
              >
                Call 385-999-1871
              </a>
              <a
                href="#getStarted"
                className="font-semibold text-[#004e82] hover:text-[#004e82]/80"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
