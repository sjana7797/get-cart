import { categories } from "common/index";
import { categoryIcon } from "./constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@get-cart/ui/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function CategoryItem() {
  return (
    <section className="p-5">
      <h2 className="text-3xl font-semibold text-blue-500 capitalize text-center">
        shop by category
      </h2>
      <motion.div
        className="flex flex-wrap gap-4 p-4 justify-center items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {categories.map((category) => {
          const Icon = categoryIcon[category];
          return (
            <TooltipProvider key={category}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <MotionLink
                    href={`/category/${category}`}
                    className="p-5 hover:bg-blue-500 rounded-md hover:text-emerald-100 text-blue-700 transition duration-200 ease-in-out cursor-pointer"
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-10 h-10" />
                  </MotionLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{category}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </motion.div>
    </section>
  );
}

export default CategoryItem;
