import React from "react";
import { NavLink, Outlet } from "react-router";

function Navbar() {
  
  return (
    <div className="h-screen grid grid-cols-[250px_1fr] overflow-hidden">

      {/* Sidebar */}
      <div className="p-4 flex flex-col border-r border-gray-400 rounded-2xl  overflow-y-auto">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-semibold">
            Production
          </h1>
        </div>


        {/* Navigation */}
        <div className="flex flex-col gap-10 mt-25">

<NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500 pb-2"
                : "border-b border-gray-500 pb-2"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500 pb-2"
                : "border-b border-gray-500 pb-2"
            }
            to="/task"
            end
          >
            Todo_list
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500 pb-2"
                : "border-b border-gray-500 pb-2"
            }
            to="/weather"
          >
            Weather_App
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500 pb-2"
                : "border-b border-gray-500 pb-2"
            }
            to="/promodo"
          >
            promodo_timer
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500 pb-2"
                : "border-b border-gray-500 pb-2"
            }
            to="/quotes"
          >
            Motivaional_quotes
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500 pb-2"
                : "border-b border-gray-500 pb-2"
            }
            to="/planner"
          >
            daily_planner
          </NavLink>

        </div>

        
      </div>

      {/* Main Content */}
      <div className="h-full overflow-y-auto p-4">
        <Outlet />
      </div>

    </div>
  );
}

export default Navbar;