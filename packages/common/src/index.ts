export function priceFormatter(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
}

export const categories = [
  "camera",
  "earphone",
  "headphone",
  "laptop",
  "mobile",
  "smartwatch",
  "tablet",
] as const;
