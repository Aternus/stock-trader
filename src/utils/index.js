function formatCurrency(number, currency = "USD") {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return currencyFormatter.format(number);
}

export { formatCurrency };
