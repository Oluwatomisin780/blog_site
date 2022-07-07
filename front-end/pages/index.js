export default function Home() {
  return (
    <body className="bg-slate-900">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0 border-solid border-current">
            <span className="ml-3 text-grey-300 text-xl  ">BLOG SITE</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-300">Feeds</a>
            <a className="mr-5 hover:text-gray-300">Login</a>
            <a className="mr-5 hover:text-gray-300">Signup</a>
          </nav>
        </div>
      </header>
      <main>
        <div className=" mt-12 py-8  px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2">
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <a className="flex title-font font-medium items-center text-slate-900 ml-24 mb-4 md:mb-0 border-solid border-current">
                <span className="ml-3 text-grey-300 text-xl  ">BLOG SITE</span>
              </a>
              <form onSubmit>
                <input
                  type="text"
                  name="task"
                  id="task"
                  className="mt-4 ml-8 border border-slate-900 rounded-l-md rounded-r-md placeholder-shown:border-gray-500 text-center"
                />
                <button className="px-4 py-1 ml-24 mt-4 text-sm text-slate-800 font-semibold rounded-full border border-slate-900 hover:text-white hover:bg-slate-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2">
                  New Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
