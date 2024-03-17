import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  ShoppingCart,
  PackagePlus,
  GalleryHorizontalEnd,
  CreativeCommons,
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

const brand: Nav = {
  href: "/brand",
  LucideIcon: CreativeCommons,
  title: "Brand",
};

const navItems: Nav[] = [dashboard, products, addProduct, banner, brand];

export { navItems };
