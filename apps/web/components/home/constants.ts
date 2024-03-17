import type { Category } from "database";
import type { LucideIcon } from "common/lucide";
import {
  Camera,
  Headphones,
  Music2,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
} from "common/lucide";

type CategoryIcon = {
  [key in Category]: LucideIcon;
};

export const categoryIcon: CategoryIcon = {
  camera: Camera,
  earphone: Music2,
  headphone: Headphones,
  laptop: Laptop,
  mobile: Smartphone,
  tablet: Tablet,
  smartwatch: Watch,
} as const;
