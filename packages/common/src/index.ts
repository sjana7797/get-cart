export * from "./types";

export function priceFormatter(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
}
