import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function PaginationCompo({ page, setPage, totalPage }) {
  const [active, setActive] = React.useState(page);

  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: "gray",
    onClick: () => setPage(index),
  });

  const next = () => {
    if (page === totalPage) return;
    setPage(page + 1);
    window.scrollTo(0, 0)
  };

  const prev = () => {
    if (page === 1) return;
    setPage(page - 1);
    window.scrollTo(0, 0)
  };

  return (
    <div className="grid grid-col-5 grid-flow-col">
      <Button
        variant="text"
        className="flex items-center gap-2 py-0 px-2"
        onClick={prev}
        disabled={page === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-1 col-span-3 lg:max-w-auto md:max-w-auto max-w-32" onClick={()=>window.scrollTo(0, 0)}>
        {Array.from({ length: totalPage }).map((_, index) => (
          <IconButton {...getItemProps(index + 1)}>{index + 1}</IconButton>
        ))}
        {/* <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton> */}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 py-0 px-2"
        onClick={next}
        disabled={page === totalPage}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
