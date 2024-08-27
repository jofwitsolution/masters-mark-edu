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
import { memberColumns } from "./table-columns";
import { ITeamMember } from "@/lib/models/TeamMember";
import Image from "next/image";
import { Button } from "../ui/button";
import SearchInput from "../search/SearchInput";
import { useRouter } from "next/navigation";

const MemberTable = ({ members }: { members: ITeamMember[] }) => {
  const router = useRouter();

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: members,
    columns: memberColumns,
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
      <h3 className="font-medium mb-2 p-2 pt-4">Member History</h3>
      <div className="flex w-full flex-col xs:flex-row mb-2 xs:items-center justify-between gap-6">
        <div
          className={`flex h-[2.375rem] items-center rounded-[5px] border pl-1`}
        >
          <div className="flex size-[2.375rem] items-center justify-center rounded-l-[0.5rem]">
            <Image
              src="/icons/search.svg"
              width={16.38}
              height={16.38}
              alt="search"
            />
          </div>
          <SearchInput
            initialValue={globalFilter ?? ""}
            onInputChange={(value) => setGlobalFilter(String(value))}
            type="text"
            placeholder="Search..."
            className={`no-focus w-full border-none  bg-transparent text-dark-500 shadow-none outline-none placeholder:text-[0.9rem]`}
          />
        </div>
        <div className="flex gap-4 max-sm:flex-wrap max-sm:gap-2">
          <Button
            onClick={() => router.refresh()}
            className="flex items-center gap-1 text-gray-500 active:bg-tertiary-300 bg-white hover:bg-tertiary-200"
          >
            <Image
              src="/icons/refresh.svg"
              width={20}
              height={20}
              alt="refresh"
            />
            <span>Refresh</span>
          </Button>
        </div>
      </div>
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
        {members?.length > 10 && (
          <div className="my-8 flex justify-center">
            <Pagination table={table} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberTable;
