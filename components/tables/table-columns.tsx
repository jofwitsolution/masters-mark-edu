import { createColumnHelper } from "@tanstack/react-table";
import { IPost } from "@/lib/models/Post";
import { getDate_1 } from "@/lib/utils";
import Link from "next/link";
import PostDeleteAction from "./PostDeleteAction";

const postColumnHelper = createColumnHelper<IPost>();

export const postColumns = [
  postColumnHelper.accessor("title", {
    id: "title",
    header: "Title",
    cell: (info) => (
      <Link
        href={`/mastersmark-admin/posts/edit/${info.row.original._id}`}
        className="text-primary-100 hover:text-primary font-medium font-inter"
      >
        <span className="line-clamp-1">{info.getValue()}</span>
      </Link>
    ),
  }),
  postColumnHelper.accessor("author", {
    id: "author",
    header: "Author",
    cell: (info) => info.getValue(),
  }),
  postColumnHelper.accessor("createdAt", {
    id: "createdAt",
    header: "Created",
    cell: (info) => {
      const date = getDate_1(info.getValue());

      return <span className="">{date}</span>;
    },
  }),
  postColumnHelper.accessor("updatedAt", {
    id: "updatedAt",
    header: "Last Modified",
    cell: (info) => {
      const date = getDate_1(info.getValue());

      return <span className="">{date}</span>;
    },
  }),
  postColumnHelper.accessor("_id", {
    id: "_id",
    header: "Action",
    cell: (info) => {
      const post = info.row.original;

      return <PostDeleteAction post={post} />;
    },
  }),
];
