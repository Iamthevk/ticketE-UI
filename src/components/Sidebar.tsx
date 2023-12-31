import React from "react";
import SidebarHeader from "./SidebarHeader";
import TicketOverview from "./TicketOverview";

function Sidebar() {
  return (
    <div className="md:mr-20">
      <SidebarHeader />
      <TicketOverview />
    </div>
  );
}

export default Sidebar;
