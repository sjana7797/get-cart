import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import { product } from "database";

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
          <span>{product.name}</span>
        </CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <p>Price {product.price}</p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
