import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Popover, Space,Dropdown } from "antd";
import { IoIosAdd } from "react-icons/io";
import { getConfig } from "../utils/config";
import { addToCart } from "../features/cart/cartSlice";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";


export function CardWishlist(list) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cart , isLoading} = useSelector(state=>state.cart)


  const handleWishlistClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const checkState = getConfig()
    const token = checkState?.headers?.Authorization?.split(" ")[1]

    if(token){
      dispatch(addToWishlist(list?._id))
    }else{
      navigate('/auth')
      toast.info('required login', {
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
    }
    
  };


  const handleAddToCart = (event) => {
    event.preventDefault()
    event.stopPropagation()
    event.preventDefault();
    const checkState = getConfig()
    const token = checkState?.headers?.Authorization?.split(" ")[1]

    if(token){
      const prodId = list?._id
      const cartProducts = cart?.products 
      // // console.log("PRODUCT",prodId)
      // // console.log("CART",cartProducts)
      let res = cartProducts?.filter(ele=>ele.list === prodId && ele.color === color)
      // console.log("RESULT",res)
  
      const addToCartPromise =  dispatch(addToCart({
        productId:list._id,
        color:list.color?.[0],
        count:res?.length > 0 ? res[0].count+1 : 1,
      })).unwrap()
  
      addToCartPromise.then(()=>{
        toast.info('🦄 Wow! item added to cart!', {
          position: "bottom-center",
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
      
    }else{
      navigate('/auth')
      toast.info('Login now', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  };

  // Add useState hook for popover visibility
  const [popoverVisible, setPopoverVisible] = useState(false);

  // Function to handle popover visibility
  const handlePopoverCancel = () => {
    setPopoverVisible(false);
  };


  // when on lg , md
  const content = (
    <div className="flex justify-center gap-4 uppercase">
      <div
        className="font-bold text-gray-600 cursor-pointer"
        onClick={handlePopoverCancel}
      >
        cancel
      </div>
      <div
        className="font-bold text-red-400 cursor-pointer"
        onClick={handleWishlistClick}
      >
        yes, remove
      </div>
    </div>
  );

  // when on sm 
  const items = [
    {
      key: '1',
      label: (
          <div to="" className="flex items-center gap-2" onClick={(e) => handleWishlistClick(e)}>
            <MdDelete color="red" />
            <p className=" text-red-400">Remove from collection</p>
          </div>
      ),
    },
    {
      key: '2',
      label: (
          <div to="" className="flex items-center gap-2" onClick={(e)=>handleAddToCart(e)}>
            <IoIosAdd color="blue" />
            <p className=" text-blue-400">Add to cart</p>
          </div>
      ),
    }
  ];
  // console.log("list",list);

  return (
    <div className="grid grid-col-5 lg:grid-flow-col md:grid-flow-col grid-flow-row  py-6 gap-8 relative">
      <div className="lg:col-span-1 md:col-span-1 col-span-3 mx-auto">
        <img
          src={list?.images?.[0]?.url}
          className="w-40 h-32 object-contain"
        />
      </div>
      <div className="lg:col-span-1 md:col-span-1 col-span-3 mx-auto min-w-[55vw] cursor-pointer">
        <div className="lg:text-xl md:text-xl text-lg hover:text-blue-700 lg:max-w-[65vw] max-w-96">{list?.title}</div>
        <div className="flex gap-4 items-center">
          <div className="bg-[#388E3C] rounded-sm px-1 text-center text-white font-semibold">
            {list?.totalrating}⭐
          </div>
          <div className="font-semibold text-gray-600">
            ({list?.ratings?.length})
          </div>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <div className="lg:text-2xl md:text-2xl text-xl font-semibold">₹{list?.price}</div>
          <div className="line-through font-medium text-gray-600">₹1,699</div>
          <div className="font-semibold text-green-600 text-sm">18% off</div>
        </div>
      </div>
      <div className="col-span-1 lg:grid md:grid hidden place-items-center">
        <Popover
          content={content}
          title="Are you sure you want to remove this product?"
          trigger="hover"
          placement="bottomRight"
          visible={popoverVisible}
          onVisibleChange={(visible) => setPopoverVisible(visible)}
        >
          <MdDelete
            color="gray"
            size={25}
            onClick={() => setPopoverVisible(true)}
            className="cursor-pointer"
          />
        </Popover>

        <div to="" className="flex items-center gap-2" onClick={(e)=>handleAddToCart(e)}>
            <PiShoppingCartSimpleDuotone  color="gray"
            size={25} />
            
          </div>
      </div>
      <div className="lg:hidden md:hidden block absolute top-2 right-2 border-[1px] rounded-3xl p-1 shadow-lg">
        <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <BsThreeDotsVertical />
      </Dropdown>
      </div>
    </div>
  );
}


 // <Card className="w-64 relative">
    //   <CardHeader shadow={false} floated={false} className="h-56">
    //     <img
    //       src={props.images[0].url}
    //       alt="card-image"
    //       className="h-full w-full object-cover"
    //     />
    //   </CardHeader>
    //   <div
    //     className="absolute top-0 right-0 cursor-pointer"
    //     onClick={handleWishlistClick}
    //   >
    //     ❌
    //   </div>
    //   <CardBody>
    //     <div className="mb-1 flex items-center justify-between">
    //       <Typography color="blue-gray" className="font-medium">
    //         {props.title || "Product Title"}
    //       </Typography>
    //       <Typography color="blue-gray" className="font-medium">
    //         ${props.price || "0.00"}
    //       </Typography>
    //     </div>
    //     <Typography
    //       variant="small"
    //       color="gray"
    //       className="font-normal opacity-75"
    //     >
    //       {props.description || "No description available."}
    //     </Typography>
    //   </CardBody>
    //   <CardFooter className="pt-0">
    //     <Button
    //       ripple={false}
    //       fullWidth={true}
    //       className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
    //     >
    //       Add to Cart
    //     </Button>
    //   </CardFooter>
    // </Card>