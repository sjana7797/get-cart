import { Category } from "database";
import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Headphones,
  Music2,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
} from "lucide-react";

export const categoryIcon: {
  [key in Category]: LucideIcon;
} = {
  camera: Camera,
  earphone: Music2,
  headphone: Headphones,
  laptop: Laptop,
  mobile: Smartphone,
  tablet: Tablet,
  smartwatch: Watch,
} as const;
