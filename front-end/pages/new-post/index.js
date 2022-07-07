import React from 'react';

const NewPost = () => {
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
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-6o00">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-900  rounded border border-gray-300  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Image
                  </label>
                  <input
                    type="file"
                    id="name"
                    name="name"
                    className="w-full bg-slate-900  rounded border border-gray-300  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Creator
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-900  rounded border border-gray-300  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="content" class="leading-7 text-sm text-gray-600 ">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    class="w-full bg-slate-900 rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-grey-300 bg-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Update Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default NewPost;
