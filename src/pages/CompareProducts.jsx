import React from 'react'
import HelmetTitle from "../components/HelmetTitle"
import {BreadCrumb} from "../components/BreadCrumb"
import CompareCard from '../components/CompareCard'

const products = [
  {
    id: 1,
    name: "Basic Tee",
    price: "$35",
    discountedPrice : "$22",
    href: "#",
    imageSrc:
    "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    
    imageAlt: "Front of men's Basic Tee in black.",
    info:{
    type:"Electronics",
    color: ["#586952","#458520" , "yellow" , "#658520" , "skyblue"],
    brand:"Havells",
    SKU: "SKU033",
    Size: ["S" , "M" , "L"],
    Availability : "In Stock",
    ratings : 4
    }
  },
  {
    id: 2,
    name: "Tablet",
    href: "#",
    imageSrc: "../src/assets/tab.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    discountedPrice:"$30",
    info:{
    type:"Electronics",
    color: ["crimson","#458520" , "#658520"],
    brand:"Havells",
    SKU: "SKU033",
    Size: ["S" , "M" , "L"],
    Availability : "In Stock"
    }
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    price: "$35",
    discountedPrice :"$26",
    info:{
    type:"Electronics",
    color: ["#125685","#458520" , "#658520"],
    brand:"Havells",
    SKU: "SKU033",
    Size: ["S" , "M" , "L"],
    Availability : "In Stock"
    }
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    discountedPrice:"$28",
    info:{
    type:"Electronics",
    color: ["#125685","#458520" , "#658520"],
    brand:"Havells",
    SKU: "SKU033",
    Size: ["S" , "M" , "L"],
    Availability : "In Stock"
    }
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    discountedPrice:"$28",
    info:{
    type:"Electronics",
    color: ["#125685","#458520" , "#658520"],
    brand:"Havells",
    SKU: "SKU033",
    Size: ["S" , "M" , "L"],
    Availability : "In Stock"
    }
  },
  // More products...
];
function CompareProducts() {
  return (
    <div>

      <HelmetTitle title="Compare Products" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <BreadCrumb title="Compare Products" />
      </div>

      <div className='lg:px-10 grid lg:grid-cols-4 md:grid-cols-2 place-items-center gap-4 lg:py-12 '>
      {products.map((product) => (
              <div key={product.id} className="group relative">
                {" "}
                <CompareCard product={product} />
              </div>
      ))}

      </div>
    </div>
  )
}

export default CompareProducts