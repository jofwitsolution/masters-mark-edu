import { createColumnHelper } from "@tanstack/react-table";
import { IPost } from "@/lib/models/Post";
import { getDate_1 } from "@/lib/utils";
import Link from "next/link";
import EventDeleteAction from "./EventDeleteAction";
import { IEvent } from "@/lib/models/Event";
import PostDeleteAction from "./PostDeleteAction";
import { ITeamMember } from "@/lib/models/TeamMember";
import MemberDeleteAction from "./MemberDeleteAction";
import { IReview } from "@/lib/models/Review";
import ReviewDeleteAction from "./ReviewDeleteAction";
import ReviewApproveAction from "./ReviewApproveAction";

const postColumnHelper = createColumnHelper<IPost>();
const eventColumnHelper = createColumnHelper<IEvent>();
const memberColumnHelper = createColumnHelper<ITeamMember>();
const reviewColumnHelper = createColumnHelper<IReview>();

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

export const eventColumns = [
  eventColumnHelper.accessor("title", {
    id: "title",
    header: "Title",
    cell: (info) => (
      <Link
        href={`/mastersmark-admin/events/edit/${info.row.original._id}`}
        className="text-primary-100 hover:text-primary font-medium font-inter"
      >
        <span className="line-clamp-1">{info.getValue()}</span>
      </Link>
    ),
  }),
  eventColumnHelper.accessor("organizer", {
    id: "organizer",
    header: "Organizer",
    cell: (info) => info.getValue(),
  }),
  eventColumnHelper.accessor("venue", {
    id: "venue",
    header: "Venue",
    cell: (info) => info.getValue(),
  }),
  eventColumnHelper.accessor("createdAt", {
    id: "createdAt",
    header: "Published",
    cell: (info) => {
      const date = getDate_1(info.getValue());

      return <span className="">{date}</span>;
    },
  }),
  eventColumnHelper.accessor("updatedAt", {
    id: "updatedAt",
    header: "Last Modified",
    cell: (info) => {
      const date = getDate_1(info.getValue());

      return <span className="">{date}</span>;
    },
  }),
  eventColumnHelper.accessor("_id", {
    id: "_id",
    header: "Action",
    cell: (info) => {
      const event = info.row.original;

      return <EventDeleteAction event={event} />;
    },
  }),
];

export const memberColumns = [
  memberColumnHelper.accessor("rank", {
    id: "rank",
    header: "Rank",
    cell: (info) => info.getValue(),
  }),
  memberColumnHelper.accessor("name", {
    id: "name",
    header: "Name",
    cell: (info) => (
      <Link
        href={`/mastersmark-admin/team-members/edit/${info.row.original._id}`}
        className="text-primary-100 hover:text-primary font-medium font-inter"
      >
        <span className="line-clamp-1">{info.getValue()}</span>
      </Link>
    ),
  }),
  memberColumnHelper.accessor("role", {
    id: "role",
    header: "Role",
    cell: (info) => info.getValue(),
  }),
  memberColumnHelper.accessor("createdAt", {
    id: "createdAt",
    header: "Created",
    cell: (info) => {
      const date = getDate_1(info.getValue());

      return <span className="">{date}</span>;
    },
  }),
  memberColumnHelper.accessor("updatedAt", {
    id: "updatedAt",
    header: "Last Modified",
    cell: (info) => {
      const date = getDate_1(info.getValue());

      return <span className="">{date}</span>;
    },
  }),
  memberColumnHelper.accessor("_id", {
    id: "_id",
    header: "Action",
    cell: (info) => {
      const member = info.row.original;

      return <MemberDeleteAction member={member} />;
    },
  }),
];

export const reviewColumns = [
  reviewColumnHelper.accessor("name", {
    id: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  reviewColumnHelper.accessor("occupation", {
    id: "occupation",
    header: "Occupation",
    cell: (info) => info.getValue(),
  }),
  reviewColumnHelper.accessor("comment", {
    id: "comment",
    header: "Review",
    cell: (info) => (
      <p className="text-wrap text-primary-100">{info.getValue()}</p>
    ),
  }),
  reviewColumnHelper.accessor("createdAt", {
    id: "createdAt",
    header: "Created",
    cell: (info) => {
      const date = getDate_1(info.getValue());

      return <span className="">{date}</span>;
    },
  }),
  reviewColumnHelper.accessor("_id", {
    id: "_id",
    header: "Status",
    cell: (info) => {
      const review = info.row.original;

      return <ReviewApproveAction review={review} />;
    },
  }),
  reviewColumnHelper.accessor("_id", {
    id: "_id",
    header: "Action",
    cell: (info) => {
      const review = info.row.original;

      return <ReviewDeleteAction review={review} />;
    },
  }),
];
