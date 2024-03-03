import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { navItems } from "./constants";

function SideBar() {
  return (
    <header className="bg-slate-100 w-1/6 flex flex-col border-r-2 h-screen items-center shrink-0">
      <h1 className="text-3xl font-semibold capitalize cursor-pointer">
        <Link to="/">get cart</Link>
      </h1>
      <nav className="w-full">
        <ul className="flex flex-col p-2 gap-y-4">
          {navItems.map((navItem, index) => {
            return <NavItem key={index} {...navItem} />;
          })}
        </ul>
      </nav>
    </header>
  );
}

export default SideBar;
