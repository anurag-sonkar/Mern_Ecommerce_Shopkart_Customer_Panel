import React, { useEffect, useState } from "react";
import HelmetTitle from "../components/HelmetTitle";
import { BreadCrumb } from "../components/BreadCrumb";
import { useParams } from "react-router-dom";
import CarousalSingleProduct from "../components/CarousalSingleProduct";
import RatingMUI from "../components/RatingMUI";
import { Button } from "@material-tailwind/react";
import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import ImageMagnifier from "../components/ImageMagnifier";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { toast, Bounce } from "react-toastify";

function SingleProduct() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const { product, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.products
  );
  const [count , setCount] = useState(1)
  const [selectedColor ,setSelectedColor] = useState(product?.color?.[0]?.color)
  // console.log(product  , "ID:" , id , "COLOR",color)
 
  
  const [imgSrc, setImgSrc] = useState("");
  const toggleProductMouseIn = (e, ele) => {
    setImgSrc(ele.url);
    const parent = e.target.parentElement;
    if (parent) {
      parent.style.outline = "2px solid #007185";
    }
  };

  const toggleProductMouseOut = (e) => {
    const parent = e.target.parentElement;
    if (parent) {
      parent.style.outline = "2px solid #fff";
    }
  };

  const handleColor = (event,color)=>{
    event.target.border = '1px solid red'
    setSelectedColor(color)

  }
  const handleAddToCart = ()=>{
    const addToCartPromise =  dispatch(addToCart({
      productId:product._id,
      color:selectedColor,
      count:count,
    })).unwrap()

    addToCartPromise.then(()=>{
      toast.info('🦄 Wow! item added to cart!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    })

  }

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch,id]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setImgSrc(product.images[0].url);
    }

    if (product?.color?.length > 0) {
      setSelectedColor(product.color[0].color);
    }
  }, [product]);


  return (
    <div className="w-full bg-gray-200">
      <HelmetTitle title="Product Name" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <BreadCrumb title={product?.title || "product"} />
      </div>

      {/* grid container - 3/2/1 */}
      <div className="grid gap-12">
        <section className="grid grid-cols-8 lg:mx-10 md:mx-4 sm:mx-2 mt-6 bg-white p-4 lg:grid-flow-col grid-flow-row">
          {/* Image column 1 - for lg (option)*/}
          <main className="col-span-4 lg:block hidden">
            {/* grid again - divided 1/8 */}
            <div className="grid grid-cols-9 gap-4">
              <div className="flex flex-col gap-4 py-10">
                {product?.images?.length > 0 ?  (
                  product.images.map((ele) => (
                  <div
                    key={ele.public_id}
                    className="border-2 rounded-xl overflow-hidden flex justify-center items-center"
                  >
                    <img
                      src={ele.url}
                      className="max-w-[4rem] h-auto max-h-[4rem] object-cover cursor-pointer"
                      onMouseOver={(e) => toggleProductMouseIn(e, ele)}
                      onMouseOut={(e) => toggleProductMouseOut(e)}
                    />
                  </div>
                ))
                ) : "No image available"}
              </div>
              <div className="col-span-8 bg-gray-50 rounded-xl lg:px-3 lg:py-4 w-fit px-1 py-1">
                <ImageMagnifier imgSrc={imgSrc} />
              </div>
            </div>
          </main>

          {/* Image column 2 - for md, sm (option) */}
          <main className="lg:col-span-4 col-span-8 lg:hidden block">
            <CarousalSingleProduct images={product?.images} />
          </main>

          {/* disp column */}
          <main className="lg:col-span-4 col-span-8 bg-gray-50 px-6 py-4">
            <div className="tiles">
              <h1 className="font-semibold lg:text-2xl md:text-2xl text-xl">
                {product?.title}
              </h1>
            </div>

            <div className="tiles grid gap-2">
              <p className="font-semibold text-xl">${product?.price}</p>
              <div className="flex gap-2">
                <RatingMUI />
                <p className="text-gray-500">(2 reviews)</p>
              </div>
            </div>

            <div className="tiles flex flex-col gap-1">
              {/* {product.info &&
                Object.keys(product.info).map((key) => {
                  if (key === "color") {
                    return (
                      <div
                        key={key}
                        className="flex capitalize justify-between max-w-52"
                      >
                        <div className="font-semibold">{key} :</div>
                        <div className="flex space-x-1 items-center">
                          {product.info[key].map((color) => (
                            <div
                              key={color}
                              className="lg:w-5 lg:h-5 h-3 w-3 rounded-full"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    );
                  } else if (key === "Size") {
                    return (
                      <div
                        key={key}
                        className="flex capitalize justify-between max-w-52"
                      >
                        <div className="font-semibold">{key} :</div>
                        <div className="flex space-x-1 items-center">
                          {product.info[key].map((size) => (
                            <button
                              key={size}
                              className="bg-gray-200 px-2 hover:bg-black hover:text-white transition-all ease-linear 0.5s rounded"
                              onClick={() => console.log(size)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={key}
                        className="flex capitalize justify-between max-w-52"
                      >
                        <div className="font-semibold">{key} :</div>
                        <div className="min-w-16 text-right">
                          {product.info[key]}
                        </div>
                      </div>
                    );
                  }
                })} */}

              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">category:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">{product.category}</div>
              </div>
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">brand:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">{product.brand}</div>
              </div>
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">qt. left:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">{product.quantity}</div>
              </div>

              {/* color */}
              <div className="flex gap-12 text-lg my-3">
      <div className="font-semibold capitalize w-32">colors:</div>
      <div className="capitalize w-full text-left font-semibold text-gray-700 flex gap-1 flex-wrap">
        {product?.color?.map((ele) => (
          <div
            key={ele._id}
            className={`w-7 h-7 rounded-full cursor-pointer ${selectedColor === ele.color ? 'border-2 border-red-500 p-1' : 'border-2 border-transparent p-1'}`}
            style={{ backgroundColor: `${ele.color}` }}
            onClick={(event) => handleColor(event, ele.color)}
          ></div>
        ))}
      </div>
    </div>
              {/* tags */}
              <div className="flex gap-12 text-lg my-3">
                <div className="font-semibold  capitalize w-32">tags:</div>
                <div className="flex flex-wrap gap-4 items-center w-full text-left font-semibold text-gray-700">{product.tags?.map((ele)=><span className="bg-[#FF9199] text-white px-4 rounded-full text-center">{ele + " "}</span>)}</div>
              </div>

              {/* availability */}
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">availability:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">{product.quantity > 0 ? "instock" : "out of stock"}</div>
              </div>

              {/* listing date */}
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">listed on:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">{new Date(product?.createdAt).toLocaleString()}</div>
              </div>


              
              


            </div>


            {/** field & btn */}
            <div className="tiles grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 grid-rows-3 gap-6">
              <div className="flex items-center gap-4">
                <label className="font-semibold">Quantity</label>
                <input
                  type="number"
                  className="w-12 text-center border border-gray-500 rounded-sm"
                  value={count}
                  onChange={(e)=>setCount(e.target.value)}
                />
              </div>

              <div className="flex gap-4 items-center col-span-2">
                <Button className="rounded-full bg-[#F44336]" onClick={handleAddToCart}>
                  add to cart
                </Button>
                <Button className="rounded-full ">buy it now</Button>
              </div>

              <Button className="rounded-full bg-[#ff9100] text-xs">
                  wishlist
                </Button>
                <Button className="rounded-full ">compare</Button>
              
            </div>


            <div className="py-[1rem] grid place-items-center gap-4">
            <h1 className=" font-semibold capitalize">payment methods</h1>
              <img src="../src/assets/pay.png"/>
            </div>
          </main>
        </section>


                {/* discription section */}
        {
          product?.description ? (<section className="lg:mx-10 md:mx-4 sm:mx-2 mt-6">
          <h1 className="font-semibold text-2xl my-2">Description</h1>
          <div  className="bg-white rounded-md p-5 text-sm text-justify grid gap-5">
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
          <p >
            Waiting and watching. It was all she had done for the past weeks.
            When you’re locked in a room with nothing but food and drink, that’s
            about all you can do anyway. She watched as birds flew past the
            window bolted shut. She couldn’t reach it if she wanted too, with
            that hole in the floor. She thought she could escape through it but
            three stories is a bit far down. He read about a hike called the
            incline in the guidebook. It said it was a strenuous hike and to
            bring plenty of water. “A beautiful hike to the clouds” described
            one review. “Not for the faint-hearted,” said another. “Not too bad
            of a workout”, bragged a third review. I thought I’d hike it when I
            fly in from Maryland on my day off from the senior citizen's
            wellness conference. I hiked 2 miles a day around the neighborhood
            so I could handle a 1.1-mile hike. What a foolish mistake that was
            for a 70-year-old low-lander.
          </p>
          </div>
        </section>) : ""
        }

        
        <section className="lg:mx-10 md:mx-4 sm:mx-2 mt-6 bg-white p-4">
          {/* review section pending */}
        </section>
      </div>
    </div>
  );
}

export default SingleProduct;
