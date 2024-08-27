"use client";

import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  containerClasses?: string;
}

const Filter = ({ filters, containerClasses }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramFilter = searchParams.get("filter");

  const handleUpdateParams = (value: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className={`relative ${containerClasses}`}>
      <h4 className="font-inter font-semibold mb-3 mt-6">Filter By:</h4>
      <div className="flex flex-col gap-2">
        {filters.map((filter) => (
          <span
            key={filter.value}
            onClick={() => handleUpdateParams(filter.value)}
            className="font-inter block border-b cursor-pointer active:text-primary"
          >
            {filter.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filter;
