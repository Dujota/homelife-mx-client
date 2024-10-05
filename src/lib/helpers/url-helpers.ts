export const buildQueryString = (params: {
  [key: string]: string | string[] | undefined;
}) => {
  const query = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach((val) => query.append(key, val));
    } else if (value !== undefined) {
      query.append(key, value);
    }
  });

  return query.toString();
};
