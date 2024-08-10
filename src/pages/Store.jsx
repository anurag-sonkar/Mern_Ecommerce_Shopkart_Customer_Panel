import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import HelmetTitle from "../components/HelmetTitle";
import { Input } from "@material-tailwind/react";
import CardRandom from "../components/CardRandom";
import { FaFilter } from "react-icons/fa";
import { DrawerFilter } from "../components/DrawerFilter";
import PopularProductsCard from "../components/PopularProductsCard";
import { PaginationCompo } from "../components/PaginationCompo";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",

//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc: "../src/assets/tab.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 3,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 4,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 5,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   // More products...
// ];

function Store() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const dispatch = useDispatch();

  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getAllProducts())
  }, []);
  return (
    <div className="w-full bg-gray-200">
      <HelmetTitle title="Store" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <div>
          <BreadCrumb title="Store" />
        </div>
        <div className="lg:hidden block" onClick={openDrawerRight}>
          <FaFilter size={25} />
        </div>
      </div>

      {/* drawer */}
      <DrawerFilter openRight={openRight} setOpenRight={setOpenRight} />

      {/* store */}
      <div className="grid grid-cols-12 capitalize lg:px-10 px-5 py-5 gap-4">
        {/* filter - for only lg screen  , md&sm-screen filter is in DrawerFilter*/}

        <div className="col-span-3 lg:block hidden">
          {/* filter-card :shop by categories*/}
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
          {/* filter-card :filter by*/}
          <div className="filter-card">
            <h1 className="filter-title">filter by</h1>
            {/*availability */}
            <div className="mb-6">
              <h1 className="sub-title">availablility</h1>
              <div>
                <input
                  type="checkbox"
                  id="instock"
                  className="custom-checkbox"
                />
                <label htmlFor="instock">in stock</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="outofstock"
                  className="custom-checkbox"
                />
                <label htmlFor="outofstock">out of stock(0)</label>
              </div>
            </div>

            {/*price */}
            <div className="mb-6">
              <h1 className="sub-title">price</h1>
              <div className="flex gap-2">
                <div className="w-28">
                  <Input
                    placeholder="From"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[50px]" }}
                  />
                </div>
                <div className="w-28">
                  <Input
                    placeholder="To"
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[50px]" }}
                  />
                </div>
              </div>
            </div>

            {/*colors */}
            <div className="mb-6">
              <h1 className="sub-title">colors</h1>
              <ul className="colors grid grid-cols-8 gap-1">
                <li className="bg-gray-900"></li>
                <li className="bg-teal-700"></li>
                <li className="bg-pink-900"></li>
                <li className="bg-red-500"></li>
                <li className="bg-yellow-400"></li>
                <li className="bg-red-200"></li>
                <li className="bg-blue-600"></li>
                <li className="bg-teal-900"></li>
                <li className="bg-blue-600"></li>
                <li className="bg-red-500"></li>
                <li className="bg-gray-900"></li>
                <li className="bg-teal-700"></li>
                <li className="bg-pink-900"></li>
                <li className="bg-red-500"></li>
                <li className="bg-red-200"></li>
                <li className="bg-gray-900"></li>
                <li className="bg-red-500"></li>
                <li className="bg-yellow-400"></li>
                <li className="bg-red-200"></li>
                <li className="bg-pink-900"></li>
                <li className="bg-red-500"></li>
                <li className="bg-red-200"></li>
                <li className="bg-teal-200"></li>
              </ul>
            </div>

            {/* size */}
            <div className="mb-6">
              <h1 className="sub-title">size</h1>
              <div>
                <input type="checkbox" id="small" className="custom-checkbox" />
                <label htmlFor="small">S</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="medium"
                  className="custom-checkbox"
                />
                <label htmlFor="medium">M</label>
              </div>
              <div>
                <input type="checkbox" id="large" className="custom-checkbox" />
                <label htmlFor="large">L</label>
              </div>
              <div>
                <input type="checkbox" id="xl" className="custom-checkbox" />
                <label htmlFor="xl">XL</label>
              </div>
              <div>
                <input type="checkbox" id="xxl" className="custom-checkbox" />
                <label htmlFor="xxl">XXL</label>
              </div>
            </div>
          </div>

          {/* filter-card:product tags */}
          <div className="filter-card">
            <h1 className="filter-title">product tags</h1>
            <div className="tags-container">
              <span className="tags">Headphone</span>
              <span className="tags">tablet</span>
              <span className="tags">speaker</span>
              <span className="tags">speaker</span>
              <span className="tags">Mouse</span>
              <span className="tags">desktop</span>
              <span className="tags">Mouse</span>
              <span className="tags">desktop</span>
            </div>
          </div>

          {/* filter-card :random product*/}
          <div className="filter-card">
            <h1 className="filter-title">random product</h1>
            <div className="">{/* <CardRandom /> */}</div>
          </div>
        </div>

        {/* second half grid*/}
        <div className="lg:col-span-9 col-span-12">
          {/* first row */}
          <div className="bg-white px-4 py-2 rounded-sm flex justify-between items-center">
            {/* sort by */}
            <div className="flex gap-3 items-center lg:justify-normal md:justify-normal justify-between w-full max-w-72">
              <label>sort</label>
              <select className="bg-gray-100 px-2 py-2 capitalize outline-none border-none rounded-md text-sm text-gray-600">
                <option value="popular">most popular</option>
                <option value="best-rating">best rating</option>
                <option value="newest">newest</option>
                <option value="price-asc">low to high</option>
                <option value="price-desc">high to low</option>
                <option value="time-asc">old to new</option>
                <option value="time-desc">new to old</option>
                <option value="title-asc">A - Z</option>
                <option value="title-desc">Z - A</option>
              </select>
            </div>
            {/* grid view */}
            <div className="lg:flex md:flex gap-3 hidden">
              <div className="text-gray-500 text-sm">21 Products</div>
              {/* <div className="flex gap-1 items-center">
                <div className="bg-blue-gray-100 p-1 rounded-sm cursor-pointer hover:bg-blue-gray-700 transition-colors ease-in-out duration-150">
                  <img
                    className="w-3 h-3 object-contain"
                    src="../src/assets/gr.svg"
                  />
                </div>
                <div className="bg-blue-gray-100 p-1 rounded-sm cursor-pointer hover:bg-blue-gray-700 transition-colors ease-in-out duration-150">
                  <img
                    className="w-3 h-3 object-contain"
                    src="../src/assets/gr2.svg"
                  />
                </div>
                <div className="bg-blue-gray-100 p-1 rounded-sm cursor-pointer hover:bg-blue-gray-700 transition-colors ease-in-out duration-150">
                  <img
                    className="w-3 h-3 object-contain"
                    src="../src/assets/gr3.svg"
                  />
                </div>
                <div className="bg-blue-gray-100 p-1 rounded-sm cursor-pointer hover:bg-blue-gray-700 transition-colors ease-in-out duration-150">
                  <img
                    className="w-3 h-3 object-contain"
                    src="../src/assets/gr4.svg"
                  />
                </div>
              </div> */}
            </div>
          </div>
          {/* second-row :  products -  */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-white px-4 py-4 rounded-sm">
            {products && products.length > 0 && products.map((product) => (
              <div key={product.id} className="group relative">
                <PopularProductsCard product={product} />{" "}
              </div>
            ))}
          </div>
          {/* third row - pagination */}
          <div className="grid place-items-end mt-2 py-3 px-2 rounded-md bg-white w-full">
            <PaginationCompo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
