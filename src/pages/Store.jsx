import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import HelmetTitle from "../components/HelmetTitle";
import { Input, Button, Chip } from "@material-tailwind/react";
import CardRandom from "../components/CardRandom";
import { FaFilter } from "react-icons/fa";
import { DrawerFilter } from "../components/DrawerFilter";
import PopularProductsCard from "../components/PopularProductsCard";
import { PaginationCompo } from "../components/PaginationCompo";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllFilterProducts,
  getAllProducts,
} from "../features/products/productSlice";
import { Rating } from "@material-tailwind/react";
import { GoDash } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useParams } from "react-router-dom";
import { DotChartOutlined } from '@ant-design/icons';
import { Skeleton} from 'antd';


function Store() {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [tags, setTags] = useState(null);
  const [colors, setColors] = useState(null);

  const dispatch = useDispatch();
  let location = useLocation()

  const { filteredProducts, products, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.products);

  // filter states
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [color, setColor] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [tag, setTag] = useState(null);
  const [star, setStar] = useState(null);

  // sort states
  const [sortBy , setSortBy] = useState('createdAt')
  const [sortOrder , setSortOrder] = useState('desc')


  // pagination states
  const [limit , setLimit] = useState(9) // max-limit = 9 set at backend
  const [page , setPage] = useState(1)
  const [totalPage , setTotalPage] = useState(Math.ceil(products?.length/limit) || '')
  // console.log(totalPage)
  // console.log(category, brand, color, tag, star);

  /* handle sort */
  function handleSort(e){
    setSortBy(e.target.value.split(",")[0])
    setSortOrder(e.target.value.split(",")[1])
  }

  useEffect(() => {
    let category = new Set();
    let brand = new Set();
    let tag = new Set();
    let color = [];
    products?.forEach((product) => {
      category.add(product.category);
      brand.add(product.brand);

      product.tags.forEach((ele) => {
        tag.add(ele);
      });

      product?.color.forEach((ele) => {
        const targetColor = ele.color;
        const targetId = ele._id;

        const foundColor = color.find(
          (item) => item.color === targetColor && item.id === targetId
        );

        if (!foundColor) {
          color.push({ color: ele.color, id: ele._id });
        }
      });
    });

    setCategories([...category]);
    setBrands([...brand]);
    setTags([...tag]);
    setColors([...color]);
  }, [products]);

  // console.log(categories, brands, tags, colors);
  //   console.log(products);

  const handleResetAllFilters = () => {
    setCategory(null);
    setBrand(null);
    setColor(null);
    setMinPrice("");
    setMaxPrice("");
    setTag(null);
    setStar(null);
  };



  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(()=>{
    setTotalPage(Math.ceil(products?.length/limit))

  },[products,limit])

  

  useEffect(() => {
    dispatch(
      getAllFilterProducts({
        category,
        brand,
        color,
        minPrice,
        maxPrice,
        tag,
        star,
        sortBy, sortOrder,
        limit,
        page
      })
    );
  }, [category, brand, color, minPrice, maxPrice, tag, star,sortBy,sortOrder,limit,page]);

  // home page select based on category
  useEffect(() => {
    // Extract the search (query string) from the location
    const queryParams = new URLSearchParams(location.search);
    
    const type = queryParams.get('type')
    const value = queryParams.get('value')

    if(type === 'category'){
     setCategory(value)
    }

    if(type === 'brand'){
     setBrand(value)
    }

    if(type === 'tags'){
     setTag(value)
    }
    
 }, [location]);


 
 
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
          <div className="filter-card">
            {/* title + reset all */}
            <div className="flex justify-between items-center">
              <h1 className="filter-title">filters</h1>
              <div>
                <Button
                  variant="filled"
                  className="px-3 py-0"
                  onClick={handleResetAllFilters}
                >
                  reset all
                </Button>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {category && (
                <div className="flex items-center justify-between gap-2 bg-black text-white rounded-[4px] py-[0.2rem] px-[0.5rem] text-[0.8rem] ">
                  <span className="">{category}</span>
                  <span
                    onClick={() => {
                      setCategory(null);
                    }}
                    className="cursor-pointer hover:text-red-400 hover:scale-125"
                  >
                    <RxCross2 />
                  </span>
                </div>
              )}
              {/* brand*/}
              {brand && (
                <div className="flex items-center justify-between gap-2 bg-black text-white rounded-[4px] py-[0.2rem] px-[0.5rem] text-[0.8rem] ">
                  <span className="">{brand}</span>
                  <span
                    onClick={() => {
                      setBrand(null);
                    }}
                    className="cursor-pointer hover:text-red-400 hover:scale-125"
                  >
                    <RxCross2 />
                  </span>
                </div>
              )}

              {/* max - min price */}
              <div className="flex items-center">
                {minPrice && (
                  <div className="flex items-center justify-between gap-2 bg-black text-white rounded-[4px] py-[0.1rem] px-[0.5rem] text-[0.8rem] ">
                    <span className="">{minPrice}</span>
                    <span
                      onClick={() => {
                        setMinPrice(null);
                      }}
                      className="cursor-pointer hover:text-red-400 hover:scale-125"
                    >
                      <RxCross2 />
                    </span>
                  </div>
                )}
                {minPrice && maxPrice && <GoDash />}
                {maxPrice && (
                  <div className="flex items-center justify-between gap-2 bg-black text-white rounded-[4px] py-[0.1rem] px-[0.5rem] text-[0.8rem] ">
                    <span className="">{maxPrice}</span>
                    <span
                      onClick={() => {
                        setMaxPrice(null);
                      }}
                      className="cursor-pointer hover:text-red-400 hover:scale-125"
                    >
                      <RxCross2 />
                    </span>
                  </div>
                )}
              </div>

                {/* color */}
              {color && (
                <div className="flex items-center justify-between gap-2 bg-black text-white rounded-[4px] py-[0.2rem] px-[0.5rem] text-[0.8rem] ">
                <div
                    className="w-5 h-5 rounded-full border-2"
                    style={{
                      backgroundColor: colors?.filter(
                        (ele) => ele.id === color
                      )[0]?.color,
                    }}
                  ></div>
                  <span
                    onClick={() => {
                      setColor(null);
                    }}
                    className="cursor-pointer hover:text-red-400 hover:scale-125"
                  >
                    <RxCross2 />
                  </span>
                </div>
              )}

              {/* rating */}
              {star && (
                <div className="flex items-center justify-between gap-2 bg-black text-white rounded-[4px] py-[0.2rem] px-[0.5rem] text-[0.8rem] ">
                  <span className="">{Array.from({ length: star }, (_, index) => (
                      <span key={index}>⭐</span>
                    ))}</span>
                  <span
                    onClick={() => {
                      setStar(null);
                    }}
                    className="cursor-pointer hover:text-red-400 hover:scale-125"
                  >
                    <RxCross2 />
                  </span>
                </div>
              )}

              {/* tags */}
              {tag && (
                <div className="flex items-center justify-between gap-2 bg-black text-white rounded-[4px] py-[0.2rem] px-[0.5rem] text-[0.8rem] ">
                  <span className="">{tag}</span>
                  <span
                    onClick={() => {
                      setTag(null)
                    }}
                    className="cursor-pointer hover:text-red-400 hover:scale-125"
                  >
                    <RxCross2 />
                  </span>
                </div>
              )}
              

            </div>
          </div>
          {/* filter-card :shop by categories*/}
          <div className="filter-card">
            <div className="flex justify-between items-center">
              <h1 className="filter-title">shop by categories</h1>
              <div>
                <Button
                  variant="outlined"
                  className="px-3 py-0"
                  onClick={() => setCategory(null)}
                >
                  reset
                </Button>
              </div>
            </div>
            <div>
              <ul>
                {categories?.map((ele, index) => (
                  <li
                    onClick={() => setCategory(ele)}
                    style={{
                      color: category === ele ? "#000000" : "#000000", // Example color
                      backgroundColor: category === ele ? "#E91E63" : "#FFFFFF", // Example background color
                      padding: "2px 12px",
                      cursor: "pointer",
                      borderRadius: "20px",
                      transition: "all ease-in-out 0.2s",
                    }}
                  >
                    {ele}
                  </li>
                ))}

                {/* <li>watch</li>
                <li>tv</li>
                <li>camera</li>
                <li>laptop</li> */}
              </ul>
            </div>
          </div>
          {/* filter by brands */}
          <div className="filter-card">
            <div className="flex justify-between items-center">
              <h1 className="filter-title">shop by brands</h1>
              <div>
                <Button
                  variant="outlined"
                  className="px-3 py-0"
                  onClick={() => setBrand(null)}
                >
                  reset
                </Button>
              </div>
            </div>
            <div>
              <ul>
                {brands?.map((ele) => (
                  <li
                    onClick={() => setBrand(ele)}
                    style={{
                      color: brand === ele ? "#000000" : "#000000",
                      backgroundColor: brand === ele ? "#009688" : "#FFFFFF",
                      padding: "2px 12px",
                      cursor: "pointer",
                      borderRadius: "20px",
                      transition: "all ease-in-out 0.2s",
                    }}
                  >
                    {ele}
                  </li>
                ))}
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
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
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
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/*colors */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <h1 className="filter-title">colors</h1>
                <div>
                  <Button
                    variant="outlined"
                    className="px-3 py-0"
                    onClick={() => setColor(null)}
                  >
                    reset
                  </Button>
                </div>
              </div>
              <ul className="colors grid grid-cols-8 gap-1">
                {colors?.map((ele) => (
                  <li
                    onClick={() => setColor(ele.id)}
                    className=""
                    style={{
                      backgroundColor: `${ele.color}`,
                      outline: color === ele.id ? "2px solid skyblue" : "",
                      border: color === ele.id ? "2px solid #fff" : "",
                      padding: "2px",
                      // transition: "all ease-in-out 0.1s",
                    }}
                  ></li>
                ))}
              </ul>
            </div>

            {/* size */}
            {/* <div className="mb-6">
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
            </div> */}

            {/* filter by ratings */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <h1 className="filter-title">filter by ratings</h1>
                <div>
                  <Button
                    variant="outlined"
                    className="px-3 py-0"
                    onClick={() => setStar(null)}
                  >
                    reset
                  </Button>
                </div>
              </div>
              <Rating value={star} onChange={(value) => setStar(value)} />
            </div>
          </div>

          {/* filter-card:product tags */}
          <div className="filter-card">
            <div className="flex justify-between items-center">
              <h1 className="filter-title">product tags</h1>
              <div>
                <Button
                  variant="outlined"
                  className="px-3 py-0"
                  onClick={() => setTag(null)}
                >
                  reset
                </Button>
              </div>
            </div>
            <div className="tags-container">
              {tags?.map((ele) => (
                <span
                  className="tags"
                  onClick={() => setTag(ele)}
                  style={{
                    backgroundColor: ele === tag ? "black" : "",
                    color: ele === tag ? "#fff" : "#000",
                  }}
                >
                  {ele}
                </span>
              ))}
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
              <select className="bg-gray-100 px-2 py-2 capitalize outline-none border-none rounded-md text-sm text-gray-600" onChange={(e)=>handleSort(e)}>
                <option value="title,asc">A - Z</option>
                <option value="title,desc">Z - A</option>
                <option value="price,asc">low to high</option>
                <option value="price,desc">high to low</option>
                <option value="createdAt,asc">old to new</option>
                <option value="createdAt,desc">new to old</option>
                <option value="totalrating,asc">low to high rating</option>
                <option value="totalrating,desc">high to low ratings</option>
              </select>
              
              <div className="flex gap-2 items-center">
                {category && <Chip color="pink" value={category} />}
                {brand && <Chip color="teal" value={brand} />}
                {minPrice && (
                  <Chip
                    color="teal"
                    value={minPrice}
                    variant="outlined"
                    className="px-2 py-0 text-sm"
                  />
                )}
                {minPrice && maxPrice && <GoDash />}
                {maxPrice && (
                  <Chip
                    color="teal"
                    value={maxPrice}
                    variant="outlined"
                    className="px-2 py-0 text-sm"
                  />
                )}
                {color && (
                  <div
                    className="w-7 h-7 rounded-full border-2"
                    style={{
                      backgroundColor: colors?.filter(
                        (ele) => ele.id === color
                      )[0]?.color,
                    }}
                  ></div>
                )}
                {tag && (
                  <div className="bg-black text-white rounded-[4px] py-[0.2rem] px-[0.5rem] text-[0.8rem] ">
                    {tag}
                  </div>
                )}
                {
                  <div>
                    {Array.from({ length: star }, (_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>
                }
              </div>
            </div>

            {/* grid view */}
            {/* <div className="lg:flex md:flex gap-3 hidden">
              <div className="text-gray-500 text-sm">{products?.length} Products</div>
              <div className="flex gap-1 items-center">
                <div className="bg-blue-gray-100 p-1 rounded-sm cursor-pointer hover:bg-blue-gray-700 transition-colors ease-in-out duration-150">
                  <img
                    className="w-3 h-3 object-contain"
                    src="/assets/gr.svg"
                  />
                </div>
                <div className="bg-blue-gray-100 p-1 rounded-sm cursor-pointer hover:bg-blue-gray-700 transition-colors ease-in-out duration-150">
                  <img
                    className="w-3 h-3 object-contain"
                    src="/assets/gr2.svg"
                  />
                </div>
                <div className="bg-blue-gray-100 p-1 rounded-sm cursor-pointer hover:bg-blue-gray-700 transition-colors ease-in-out duration-150">
                  <img
                    className="w-3 h-3 object-contain"
                    src="/assets/gr3.svg"
                  />
                </div>
                <div className="bg-blue-gray-100 p-1 rounded-sm cursor-pointer hover:bg-blue-gray-700 transition-colors ease-in-out duration-150">
                  <img
                    className="w-3 h-3 object-contain"
                    src="/assets/gr4.svg"
                  />
                </div>
              </div>
            </div> */}
          </div>
          {/* second-row :  products -  */}
          {
            !isLoading ? <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-white px-4 py-4 rounded-sm min-h-[160vh]">
            {filteredProducts &&
              filteredProducts.length > 0 &&
              filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <PopularProductsCard product={product} />{" "}
                </div>
              ))}
          </div>
          {/* third row - pagination */}
          <div className="grid place-items-end mt-2 py-3 px-2 rounded-md bg-white w-full">
            <PaginationCompo page={page} setPage={setPage} totalPage={totalPage}/>
          </div>
            </>
             : <div className="grid lg:grid-cols-3 place-items-center md:grid-cols-2 grid-cols-1 gap-4 py-4">
             {[...Array(limit)].map((_, index) => (
        <div key={index}>
        <Skeleton.Input active="true" block="false" style={{width:"275px" , height:"360px"}}/>
        </div>
      ))}

             </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Store;
