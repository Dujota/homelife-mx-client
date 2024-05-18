export function formatPrice(price: number | string | undefined) {
  let formattedPrice;

  if (typeof price !== "number") {
    formattedPrice = Number(price);

    if (!formattedPrice || isNaN(formattedPrice)) return "";
  } else {
    formattedPrice = price;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(formattedPrice || 0);
}
