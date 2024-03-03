import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  ShoppingCart,
  PackagePlus,
  GalleryHorizontalEnd,
} from "lucide-react";

export type Nav = {
  title: string;
  LucideIcon: LucideIcon;
  href: string;
};

const dashboard: Nav = {
  href: "/dashboard",
  LucideIcon: LayoutDashboard,
  title: "dashboard",
};

const products: Nav = {
  href: "/products",
  LucideIcon: ShoppingCart,
  title: "products",
};

const addProduct: Nav = {
  href: "/add-product",
  LucideIcon: PackagePlus,
  title: "Add Product",
};

const banner: Nav = {
  href: "/banner",
  LucideIcon: GalleryHorizontalEnd,
  title: "Banner",
};

const navItems: Nav[] = [dashboard, products, addProduct, banner];

export { navItems };
