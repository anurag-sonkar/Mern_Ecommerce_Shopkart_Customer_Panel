import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
function BlogCard() {
  return (
    <div>
              <Card className="my-6 lg:w-96 md:w-80">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src="/assets/blog-1.jpg"
                    className="transition-all ease-in-out duration-500 hover:scale-110"
                  />
                </CardHeader>
                <CardBody>
                
                  <Typography variant="h6" className="mb-2 text-xs text-gray-400">
                    11 JUNE, 2024 
                  </Typography>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                  </Typography>
                  <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
            </div>
  )
}

export default BlogCard