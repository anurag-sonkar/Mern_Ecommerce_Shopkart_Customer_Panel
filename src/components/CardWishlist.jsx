import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { toast, Bounce } from "react-toastify";
import { addToWishlist } from "../features/products/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function CardWishlist(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const getUserFromLocalStorage = JSON.parse(localStorage.getItem('user'))
  
  const handleWishlistClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if(getUserFromLocalStorage?.result?.token !== undefined){
      const addWishlistPromise = dispatch(addToWishlist(props._id)).unwrap();
      toast.promise(
        addWishlistPromise,
        {
          pending: "Adding to wishlist...",
          success: {
            render() {
              // Trigger the parent's refresh function after success
              props.refreshWishlist();
              return "Added to wishlist";
            }
          },
          error: "Failed to add to wishlist",
        },
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
    }else{
      navigate('/auth')
      toast.info('Login now', {
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

  return (
    <Card className="w-64 relative">
      <CardHeader shadow={false} floated={false} className="h-56">
        <img
          src={props.images[0].url}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <div
        className="absolute top-0 right-0 cursor-pointer"
        onClick={handleWishlistClick}
      >
        ❌
      </div>
      <CardBody>
        <div className="mb-1 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {props.title || "Product Title"}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${props.price || "0.00"}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {props.description || "No description available."}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
