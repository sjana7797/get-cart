import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import type { Product } from "database";
import { priceFormatter } from "common";
import { Badge } from "@repo/ui/components/ui/badge";

type Props = { product: Product };

function ProductCard({ product }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex gap-x-2 items-center">
          <img
            src={product.product_images[0]}
            alt=""
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="truncate">{product.name}</span>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex items-center justify-between">
        <Badge>{product.category}</Badge>
        <p>{priceFormatter(product.price)}</p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
