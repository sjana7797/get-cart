import { Outlet } from "react-router-dom";
import SideBar from "~/components/global/sidebar";

function Root() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Root;
