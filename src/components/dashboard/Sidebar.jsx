import { sidebarItems } from "@/data/dashBoardSidebar";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="sidebar -dashboard">
      {sidebarItems.map((elm, i) => (
        <div
          key={i}
          className={`sidebar__item   ${
            pathname == elm.href ? "-is-active" : ""
          } `}
        >
          <Link
            key={i}
            to={elm.href}
            className="d-flex items-center text-17 lh-1 fw-500 "
          >
            <i className={`${elm.iconClass} mr-15`}></i>
            {elm.text}
          </Link>
        </div>
      ))}
    </div>
  );
}
