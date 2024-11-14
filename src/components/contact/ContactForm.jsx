const ContactForm = () => (
  <section className="bg-white" id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex items-stretch justify-center">
        <div className="grid md:grid-cols-2">
          {/* contact */}
          <div className="h-full pr-6 ">
            <h2 className="mb-4 text-lg font-bold border-b border-b-blue-200 pt-2 pb-4 text-blue-600 uppercase">
              Contact info
            </h2>
            <ul className="mb-6 md:mb-0">
              <li className="flex border-b border-b-blue-200 my-4">
                <div className="flex h-10 w-10 items-center justify-center bg-blue-600 text-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <p className="text-gray-500">
                    Jl. Pagesangan Agung Baru No.44,
                  </p>
                  <p className="text-gray-500">Surabaya</p>
                </div>
              </li>
              <li className="flex border-b border-b-blue-200 my-4">
                <div className="flex h-10 w-10 items-center justify-center bg-blue-600 text-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <p className="text-gray-500">+62 31 8522710</p>
                  <p className="text-gray-500">
                    gemilangciptasentosa@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex border-b border-b-blue-200 my-4">
                <div className="flex h-10 w-10 items-center justify-center  bg-blue-600 text-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div className="ml-4 mb-4">
                  <p className="text-gray-500 ">Monday - Friday: 9 AM - 5 PM</p>
                  <p className="text-gray-500 ">
                    <br />
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* form */}
          <div className="card h-fit max-w-6xl px-8" id="form">
            <div className="flex font-bold border-b border-b-blue-200 pt-2 text-blue-600">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 mr-2 text-blue-600"
                >
                  <g fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect width={16} height={12} x={4} y={6} rx={2}></rect>
                    <path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9"></path>
                  </g>
                </svg>
              </div>
              <div>
                <h2 className="mb-4 text-xl uppercase">Leave a message</h2>
              </div>
            </div>
            <form id="contactForm">
              <div className="mb-6 mt-8">
                <div className="mx-0 mb-1 sm:mb-4">
                  <div className="flex mx-0 mb-1 sm:mb-4">
                    <input
                      type="text"
                      id="name"
                      autoComplete="given-name"
                      placeholder="First Name"
                      className="mb-2 mr-4 w-full border border-blue-400 py-2 pl-2 pr-4 shadow-sm dark:text-blue-300 sm:mb-0 focus:outline-blue-600 placeholder:text-gray-400"
                      name="name"
                    />
                    <input
                      type="text"
                      id="name"
                      autoComplete="given-name"
                      placeholder="Last Name"
                      className="mb-2 w-full border border-blue-400 py-2 pl-2 pr-4 shadow-sm dark:text-blue-300 sm:mb-0 focus:outline-blue-600 placeholder:text-gray-400"
                      name="name"
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="email"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <input
                      type="text"
                      id="phoneNumber"
                      autoComplete="phoneNumber"
                      placeholder="Phone Number"
                      className="mb-2 w-full border border-blue-400 py-2 pl-2 pr-4 shadow-sm dark:text-blue-300 sm:mb-0 focus:outline-blue-600 placeholder:text-gray-400"
                      name="phoneNumber"
                      maxLength={13}
                    />
                  </div>
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="textarea"
                    className="pb-1 text-xs uppercase tracking-wider focus:outline-blue-600"
                  ></label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className="mb-2 w-full border border-blue-400 py-2 pl-2 pr-4 shadow-sm sm:mb-0 focus:outline-blue-600 placeholder:text-gray-400"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-600 text-white px-6 py-3 font-xl sm:mb-0"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default ContactForm;
