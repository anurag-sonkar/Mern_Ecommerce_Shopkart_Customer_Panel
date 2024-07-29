import React, { useState } from "react";
import HelmetTitle from "../components/HelmetTitle";
import { BreadCrumb } from "../components/BreadCrumb";
import { useParams } from "react-router-dom";
import CarousalSingleProduct from "../components/CarousalSingleProduct";
import RatingMUI from "../components/RatingMUI";
import { Button } from "@material-tailwind/react";
import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";

let dummyImages = [
  {
    asset_id: 1,
    url: "../src/assets/shirt1.jpg",
  },
  {
    asset_id: 2,
    url: "../src/assets/shirt2.jpg",
  },
  {
    asset_id: 3,
    url: "../src/assets/shirt3.jpg",
  },
  {
    asset_id: 4,
    url: "../src/assets/shirt4.jpg",
  },
  {
    asset_id: 5,
    url: "../src/assets/shirt5.jpg",
  },
  {
    asset_id: 6,
    url: "../src/assets/shirt6.jpg",
  },
];
const product = {
  id: 1,
  name: "Basic Tee",
  price: "$35",
  discountedPrice: "$22",
  href: "#",
  imageSrc:
    "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",

  imageAlt: "Front of men's Basic Tee in black.",
  info: {
    type: "Electronics",
    color: ["#586952", "#458520", "yellow", "#658520", "skyblue"],
    brand: "Havells",
    SKU: "SKU033",
    Size: ["S", "M", "L"],
    Availability: "In Stock",
  },
};

function SingleProduct() {
  const [imgSrc, setImgSrc] = useState(dummyImages[0].url);

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

  return (
    <div className="w-full bg-gray-200">
      <HelmetTitle title="Product Name" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <BreadCrumb title="Product Name" />
      </div>

      {/* grid container - 3/2/1 */}
      <div className="grid gap-12">
        <section className="grid grid-cols-8 lg:mx-10 md:mx-4 sm:mx-2 mt-6 bg-white p-4 lg:grid-flow-col grid-flow-row">
          {/* Image column 1 - for lg (option)*/}
          <main className="col-span-4 lg:block hidden">
            {/* grid again - divided 1/8 */}
            <div className="grid grid-cols-9 gap-4">
              <div className="flex flex-col gap-4 py-10">
                {dummyImages.map((ele) => (
                  <div
                    key={ele.asset_id}
                    className="border-2 rounded-xl overflow-hidden flex justify-center items-center"
                  >
                    <img
                      src={ele.url}
                      className="max-w-[4rem] h-auto max-h-[4rem] object-cover cursor-pointer"
                      onMouseOver={(e) => toggleProductMouseIn(e, ele)}
                      onMouseOut={(e) => toggleProductMouseOut(e)}
                    />
                  </div>
                ))}
              </div>
              <div className="col-span-8 bg-gray-50 rounded-xl lg:px-3 lg:py-4 w-fit px-1 py-1">
                <img
                  src={imgSrc}
                  className="max-h-[36rem] w-[100%] max-w-[36rem] object-cover rounded-xl"
                />
              </div>
            </div>
          </main>

          {/* Image column 2 - for md, sm (option) */}
          <main className="lg:col-span-4 col-span-8 lg:hidden block">
            <CarousalSingleProduct images={dummyImages} />
          </main>

          {/* disp column */}
          <main className="lg:col-span-4 col-span-8 bg-gray-50 px-6 py-4">
            <div className="tiles">
              <h1 className="font-semibold ">
                POSHAX Men Shirt || Shirt for Men || Casual Shirt for Men
                (Bubble) || Casual Shirt for Men (Bubble)
              </h1>
            </div>

            <div className="tiles">
              <p className="font-semibold">$100.00</p>
              <div className="flex gap-2">
                <RatingMUI />
                <p className="text-gray-500">(2 reviews)</p>
              </div>
            </div>

            <div className="tiles flex flex-col gap-1">
              {product.info &&
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
                })}
            </div>

            <div className="tiles grid lg:grid-cols-3 grid-cols-2 lg:grid-rows-2 grid-rows-3 gap-6">
              <div className="flex items-center gap-4">
                <label className="font-semibold">Quantity</label>
                <input
                  type="number"
                  className="w-12 text-center border border-gray-500 rounded-sm"
                />
              </div>

              <div className="flex gap-4 items-center col-span-2">
                <Button className="rounded-full bg-[#F44336]">
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
        <section className="lg:mx-10 md:mx-4 sm:mx-2 mt-6">
          <h1 className="font-semibold text-2xl my-2">Description</h1>
          <div  className="bg-white rounded-md p-5 text-sm text-justify grid gap-5">
          <p>
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
        </section>

        
        <section className="lg:mx-10 md:mx-4 sm:mx-2 mt-6 bg-white p-4">
          {/* review section pending */}
        </section>
      </div>
    </div>
  );
}

export default SingleProduct;
