"use client";

import React, { useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import Pagination from "./Pagination";
import { fuzzyFilter } from "./helper";
import { reviewColumns } from "./table-columns";
import { IReview } from "@/lib/models/Review";

const ReviewTable = ({ reviews }: { reviews: IReview[] }) => {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: reviews,
    columns: reviewColumns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full">
      <h3 className="font-medium mb-2 p-2 pt-4">Review History</h3>
      <div className="overflow-x-auto">
        <table className="w-full max-sm:text-[0.75rem]">
          <thead className="font-medium">
            {table?.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-y text-nowrap bg-tertiary-200"
              >
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="py-2 md:py-3 ps-3 text-start">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table?.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b text-start text-nowrap">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="dist-table-style py-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {reviews?.length > 10 && (
          <div className="my-8 flex justify-center">
            <Pagination table={table} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewTable;
