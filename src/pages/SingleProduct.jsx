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
import {
  addProductReview,
  getAllProducts,
  getProduct,
} from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { toast, Bounce } from "react-toastify";
import { Rating, Progress } from "@material-tailwind/react";
import { Flex, Input } from "antd";
const { TextArea } = Input;
import PopularProductsCard from "../components/PopularProductsCard";

function SingleProduct() {
  const [star, setStar] = useState("");
  const [comment, setComment] = useState("");
  const [toggleReviewForm, setToggleReviewForm] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, product, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.products);
  console.log(product);
  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.color?.[0]?.color
  );

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

  const handleColor = (event, color) => {
    event.target.border = "1px solid red";
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    const addToCartPromise = dispatch(
      addToCart({
        productId: product._id,
        color: selectedColor,
        count: count,
      })
    ).unwrap();

    addToCartPromise.then(() => {
      toast.info("🦄 Wow! item added to cart!", {
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
    });
  };

  const handleSubmitReview = () => {
    if (star === "" || comment === "") {
      alert("select star out 5 and write your review");
      return;
    }

    const submitPromise = dispatch(
      addProductReview({ star, comment, prodId: product?._id })
    ).unwrap();

    toast.promise(
      submitPromise,
      {
        pending: "uploading...",
        success: "review uploaded successfully!",
        error: `failed!`,
      },
      {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );

    setStar("");
    setComment("");
    setToggleReviewForm(false);
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    const day = String(newDate.getDate()).padStart(2, "0"); // Get day and pad with '0' if necessary
    const month = newDate.toLocaleString("en-US", { month: "long" }); // Get full month name
    const year = newDate.getFullYear(); // Get full year

    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setImgSrc(product.images[0].url);
    }

    if (product?.color?.length > 0) {
      setSelectedColor(product.color[0].color);
    }
  }, [product]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  /* percentage of ratings */
  /* 5⭐ ? => 1/2 * 100 = 50% */
  /* 4⭐ ? => 1/2 * 100 = 50%*/

  function ratingPercentage(num) {
    const rating = num;
    let count = 0;

    if (product?.ratings?.length === 0) {
      return 0;
    }

    product?.ratings?.forEach((ele) => {
      if (ele?.star === rating) count++;
    });

    const totalRatings = product?.ratings?.length;
    const result = (count / totalRatings) * 100;
    return result.toFixed(0);
  }

  return (
    <div className="w-full bg-gray-200">
      <HelmetTitle title={product?.title || "Product Name"} />
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
                {product?.images?.length > 0
                  ? product.images.map((ele) => (
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
                  : "No image available"}
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
                {product && product.totalrating && (
                  <RatingMUI rating={product?.totalrating} />
                )}
                <p className="text-gray-500">
                  ({product?.ratings?.length}) Reviews
                </p>
              </div>
            </div>

            <div className="tiles flex flex-col gap-1">
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">category:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">
                  {product.category}
                </div>
              </div>
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">brand:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">
                  {product.brand}
                </div>
              </div>
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">qt. left:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">
                  {product.quantity}
                </div>
              </div>

              {/* color */}
              <div className="flex gap-12 text-lg my-3">
                <div className="font-semibold capitalize w-32">colors:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700 flex gap-1 flex-wrap">
                  {product?.color?.map((ele) => (
                    <div
                      key={ele._id}
                      className={`w-7 h-7 rounded-full cursor-pointer ${
                        selectedColor === ele.color
                          ? "border-2 border-red-500 p-1"
                          : "border-2 border-transparent p-1"
                      }`}
                      style={{ backgroundColor: `${ele.color}` }}
                      onClick={(event) => handleColor(event, ele.color)}
                    ></div>
                  ))}
                </div>
              </div>
              {/* tags */}
              <div className="flex gap-12 lg:text-lg md:text-lg text-xs my-3">
                <div className="font-semibold  capitalize w-32 text-lg">tags:</div>
                <div className="flex flex-wrap gap-2 items-center w-full text-left font-semibold text-gray-700">
                  {product.tags?.map((ele) => (
                    <span className="bg-[#FF9199] text-white lg:px-4 md:px-4 px-2 rounded-full text-center">
                      {ele + " "}
                    </span>
                  ))}
                </div>
              </div>

              {/* availability */}
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">
                  availability:
                </div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">
                  {product.quantity > 0 ? "instock" : "out of stock"}
                </div>
              </div>

              {/* listing date */}
              <div className="flex gap-12 text-lg">
                <div className="font-semibold  capitalize w-32">listed on:</div>
                <div className="capitalize w-full text-left font-semibold text-gray-700">
                  {new Date(product?.createdAt).toLocaleString()}
                </div>
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
                  onChange={(e) => setCount(e.target.value)}
                />
              </div>

              <div className="flex gap-4 items-center col-span-2">
                <Button
                  className="rounded-full bg-[#F44336]"
                  onClick={handleAddToCart}
                >
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
              <img src="../src/assets/pay.png" />
            </div>
          </main>
        </section>

        {/* discription section */}
        {product?.description ? (
          <section className="lg:mx-10 md:mx-4 mx-2 mt-6">
            <h1 className="font-semibold text-2xl my-2">Description</h1>
            <div className="bg-white rounded-md lg:p-5 md:p-5 p-3 text-sm text-justify grid gap-5">
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
              <p>
                Waiting and watching. It was all she had done for the past
                weeks. When you’re locked in a room with nothing but food and
                drink, that’s about all you can do anyway. She watched as birds
                flew past the window bolted shut. She couldn’t reach it if she
                wanted too, with that hole in the floor. She thought she could
                escape through it but three stories is a bit far down. He read
                about a hike called the incline in the guidebook. It said it was
                a strenuous hike and to bring plenty of water. “A beautiful hike
                to the clouds” described one review. “Not for the
                faint-hearted,” said another. “Not too bad of a workout”,
                bragged a third review. I thought I’d hike it when I fly in from
                Maryland on my day off from the senior citizen's wellness
                conference. I hiked 2 miles a day around the neighborhood so I
                could handle a 1.1-mile hike. What a foolish mistake that was
                for a 70-year-old low-lander.
              </p>
            </div>
          </section>
        ) : (
          ""
        )}

        {/*  */}
        <section className="lg:mx-10 md:mx-4 mx-2 mt-6 bg-white px-6 py-12 mb-12 rounded-lg ">
          {/* review section pending */}
          <div className="grid grid-cols-6 gap-2">
            {/* left col - rating */}
            <div className="lg:col-span-3 col-span-6 flex flex-col gap-10">
              <h1 className="text-3xl capitalize font-bold">
                Ratings & Reviews
              </h1>
              <div className="flex gap-5 items-center font-semibold text-gray-600">
                <p className="text-lg">{product?.totalrating}.0</p>
                {product && product.totalrating && (
                  <RatingMUI rating={product?.totalrating} />
                )}
                <p>Based on {product?.ratings?.length} Reviews</p>
              </div>

              {/* rating numbers */}
              <div>
                <div className="flex items-center gap-1 font-semibold text-gray-600 text-lg">
                  <p>5</p>
                  <p>⭐</p>
                  <p>
                    <Progress
                      value={ratingPercentage(5)}
                      size="sm"
                      className="w-[100vw] lg:max-w-96 md:max-w-96 max-w-48"
                      color="green"
                    />
                  </p>
                  <p>{ratingPercentage(5)}%</p>
                </div>
                <div className="flex items-center gap-1 font-semibold text-gray-600 text-lg">
                  <p>4</p>
                  <p>⭐</p>
                  <p>
                    <Progress
                      value={ratingPercentage(4)}
                      size="sm"
                      className="w-[100vw] lg:max-w-96 md:max-w-96 max-w-48"
                      color="green"
                    />
                  </p>
                  <p>{ratingPercentage(4)}%</p>
                </div>
                <div className="flex items-center gap-1 font-semibold text-gray-600 text-lg">
                  <p>3</p>
                  <p>⭐</p>
                  <p>
                    <Progress
                      value={ratingPercentage(3)}
                      size="sm"
                      className="w-[100vw] lg:max-w-96 md:max-w-96 max-w-48"
                      color="amber"
                    />
                  </p>
                  <p>{ratingPercentage(3)}%</p>
                </div>
                <div className="flex items-center gap-1 font-semibold text-gray-600 text-lg">
                  <p>2</p>
                  <p>⭐</p>
                  <p>
                    <Progress
                      value={ratingPercentage(2)}
                      size="sm"
                      className="w-[100vw] lg:max-w-96 md:max-w-96 max-w-48"
                      color="pink"
                    />
                  </p>
                  <p>{ratingPercentage(2)}%</p>
                </div>
                <div className="flex items-center gap-1 font-semibold text-gray-600 text-lg">
                  <p>1</p>
                  <p>⭐</p>
                  <p>
                    <Progress
                      value={ratingPercentage(1)}
                      size="sm"
                      className="w-[100vw] lg:max-w-96 md:max-w-96 max-w-48"
                      color="pink"
                    />
                  </p>
                  <p>{ratingPercentage(1)}%</p>
                </div>
              </div>

              <div className="grid gap-2">
                <h1 className="text-2xl font-bold">We value your opinion</h1>
                <p className="text-gray-600 text-lg max-w-[90%]">
                  The time is now for it to be okay to be great. People in this
                  world shun people for being great.
                </p>
                {!toggleReviewForm && (
                  <Button
                    className="max-w-[90%] mt-10"
                    onClick={() => setToggleReviewForm(true)}
                  >
                    write a review
                  </Button>
                )}
              </div>

              {/* review form */}

              {toggleReviewForm && (
                <form className="grid gap-5">
                  <h1 className="text-2xl font-bold capitalize">
                    write a review
                  </h1>
                  <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                    {star}
                    <Rating value={star} onChange={(value) => setStar(value)} />
                  </div>
                  <TextArea
                    showCount
                    maxLength={500}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="comment your review"
                    style={{
                      height: 120,
                      resize: "none",
                      maxWidth: "90%",
                    }}
                  />

                  <Button
                    className="max-w-96 mt-10"
                    onClick={handleSubmitReview}
                  >
                    submit review
                  </Button>
                </form>
              )}
            </div>

            {/* right col - rating */}
            <div className="lg:col-span-3 col-span-6">
              {product &&
                product?.ratings?.map((ele) => (
                  <div
                    className="grid gap-5 py-6"
                    style={{ borderBottom: "1px solid #ccc" }}
                  >
                    <div>
                      <Rating value={ele.star} readonly />
                    </div>
                    <p>{ele.comment}</p>
                    <div className="flex items-center gap-4">
                      <div
                        style={{ border: "1px solid orange" }}
                        className="rounded-lg p-[1px]"
                      >
                        <img
                          src={
                            ele?.postedby?.imgpath?.url ||
                            "../src/assets/profile-fallback.svg"
                          }
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </div>
                      <div className="">
                        <p className="font-semibold">{ele?.postedby?.name}</p>
                        <p className="text-gray-600">{formatDate(ele?.date)}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* popular products */}
        <section className="px-10 py-16 bg-white">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 capitalize my-2 mb-5 lg:text-left md:text-left text-center px-4">
            our popular products
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
            {products &&
              products.length > 0 &&
              products.map((product) => {
                if (product.tags.includes("popular")) {
                  return (
                    <div key={product?.id} className="group relative">
                      <PopularProductsCard product={product} />{" "}
                    </div>
                  );
                }
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SingleProduct;
