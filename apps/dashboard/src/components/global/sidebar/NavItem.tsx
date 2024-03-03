import { Link, useLocation } from "react-router-dom";
import type { Nav } from "./constants";
import { cn } from "@repo/ui";

type Props = Nav;

function NavItem({ title, LucideIcon, href }: Props) {
  const location = useLocation();
  return (
    <li
      className={cn(
        location.pathname === href ? "bg-indigo-500" : "bg-transparent",
        "rounded-lg px-2 py-1 transition-colors duration-200 ease-in-out",
      )}
    >
      <Link
        to={href}
        className={cn(
          "flex gap-x-2 items-center font-medium transition-colors",
          location.pathname === href
            ? "text-indigo-100"
            : "text-slate-700 hover:text-indigo-500",
        )}
      >
        <LucideIcon className="w-5 h-5" />
        <span className="capitalize">{title}</span>
      </Link>
    </li>
  );
}

export default NavItem;
