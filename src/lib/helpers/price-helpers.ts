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

export function formatMXN(price: number | string | undefined) {
  const options = {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  // @ts-ignore
  const numberFormat = new Intl.NumberFormat("es-MX", options);

  let formattedPrice;

  if (typeof price !== "number") {
    formattedPrice = Number(price);

    if (!formattedPrice || isNaN(formattedPrice)) return "";
  } else {
    formattedPrice = price;
  }

  return `${numberFormat.format(formattedPrice)} MXN`;
}
