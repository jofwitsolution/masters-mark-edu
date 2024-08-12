import React from "react";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <AdminDashboard>{children}</AdminDashboard>
    </div>
  );
};

export default Layout;
