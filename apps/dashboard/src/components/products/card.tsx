import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import { product } from "database";
import { priceFormatter } from "common";

type Props = { product: product };

function ProductCard({ product }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex gap-x-2 items-center">
          <img
            src={product.productImages[0]}
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
