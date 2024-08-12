import React from "react";
import DBNavbar from "./DBNavbar";
import DBLeft from "./DBLeft";

interface Props {
  children: React.ReactNode;
}

const AdminDashboard = ({ children }: Props) => {
  return (
    <div className="">
      <DBNavbar />
      <div className="flex">
        <DBLeft />
        <section className="px-3 w-full pb-6 pt-[4.875rem] md:px-6">
          {children}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
