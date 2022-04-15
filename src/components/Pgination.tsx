import { useState } from "react";

interface IProps {
  total_pages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<IProps> = ({
  setPage,
  page,
  total_pages,
}) => {
  const handleChange = (incremente: number) => {
    if (page + incremente <= total_pages && page + incremente >= 1) {
      setPage(page + incremente);
    }
  };
  return (
    <div className="self-center">
      <button
        className="rounded-md bg-zinc-200 px-3 hover:shadow-sm hover:bg-zinc-300 mx-1 duration-200"
        onClick={() => handleChange(-1)}
      >
        Prev
      </button>
      <span className="text-neutral-500">
        {page} of {total_pages}
      </span>
      <button
        className="rounded-md bg-zinc-200 px-3 hover:shadow-sm hover:bg-zinc-300 mx-1 duration-200"
        onClick={() => handleChange(1)}
      >
        Next
      </button>
    </div>
  );
};
