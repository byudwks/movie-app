import React from "react";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto py-4 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="" className="inline-block mb-6">
              <span className="text-indigo-500 font-bold text-2xl">
                Film <span className="text-white">flix</span>
              </span>
            </a>
            <p className=" mb-4 text-sm">
              Discover and explore the latest movie from arround the world.
              Flimmix gives you to a vast collection of film accross all genre
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className=" text-neutral-500 hover:text-indigo-500 transition-colors"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
