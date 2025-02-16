const ContactForm = () => (
  <div className="relative isolate bg-white">
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div className="relative px-6 pb-20 pt-20 sm:pt-20 lg:static lg:px-8 lg:py-20">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg
              className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="white"
              ></rect>
              <svg x="100%" y="-1" className="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              ></rect>
            </svg>
          </div>
          {/* <h2 className="text-3xl font-bold tracking-tight text-blue-600 font-PlayfairDisplay uppercase">
            Contact Us
          </h2> */}
          <p className="mt-6 text-xl leading-8 text-masala-800 font-openSans">
            Feel free to reach out to us for any inquiries or assistance. We're
            here to help!
          </p>
          <dl className="mt-10 space-y-4 text-lg leading-7 text-masala-800">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-2 h-7 w-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
              </dt>
              <dd>
                <a
                  className="text-masala-800 text-lg font-openSans"
                  href="mailto:contact@yourcompany.com"
                >
                  gemilangciptasentosa@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-2 h-7 w-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  ></path>
                </svg>
              </dt>
              <dd className="text-masala-800 text-lg font-openSans">
                Jl. Pagesangan Agung Baru No.44, Surabaya
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-lg font-semibold leading-6 text-masala-800"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="firstName"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-lg font-semibold leading-6 text-masala-800"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="lastName"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-lg font-semibold leading-6 text-masala-800"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="email"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-lg font-semibold leading-6 text-masala-800"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="w-max  rounded-lg border-2 border-[#0057ff] bg-[#0057ff]  px-6 py-4 text-lg font-semibold text-white transition-colors duration-150 ease-in-out hover:border-blue-400 hover:bg-blue-400"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
export default ContactForm;
