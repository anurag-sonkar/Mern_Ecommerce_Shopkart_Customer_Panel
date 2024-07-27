import React from "react";
import HelmetTitle from "../components/HelmetTitle";
import { BreadCrumb } from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { PaginationCompo } from "../components/PaginationCompo";

function Blogs() {
  return (
    <div className="w-full bg-gray-200">
      <HelmetTitle title="Blogs" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <BreadCrumb title="Blogs" />
      </div>

      <div className="grid grid-cols-4 capitalize lg:px-10 px-5 py-5 gap-4">
        <div className="lg:block hidden">
          <div className="filter-card">
            <h1 className="filter-title">shop by categories</h1>
            <div>
              <ul>
                <li>watch</li>
                <li>tv</li>
                <li>camera</li>
                <li>laptop</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex flex-wrap gap-4 justify-center">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        <div className="grid place-items-end py-3 px-2 rounded-md bg-white w-full">
            <PaginationCompo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
