import React from "react";
import HelmetTitle from "../components/HelmetTitle";
import { BreadCrumb } from "../components/BreadCrumb";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

function SingleBlog() {
  return (
    <div className="w-full bg-gray-200">
      <HelmetTitle title="Dynamic Blog Title" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <div>
          <BreadCrumb title="Dynamic Blog Title" />
        </div>
      </div>

      <div className="px-10 py-5 bg-white my-5">
        <Link to="/blogs" className="flex items-center gap-2 text-gray-600 col-span-4">
          <div>
            <IoIosArrowRoundBack size={30}/>
          </div>
          <h1 className="">Go back to Blogs</h1>
        </Link>

        <div className="grid grid-cols-4">
        {/* first column */}
        <div>
        {/* content */}
        </div>

        {/* second -column */}
        <div className="lg:col-span-3 col-span-4 flex flex-col gap-4">
            <h1 className="text-black text-xl font-semibold capitalize">A beautiful sunday morning resistance</h1>
            <img src="/assets/blog-1.jpg" className="w-full max-h-96 object-cover" />
            <p className="text-gray-600">The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.</p>
        </div>

        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
