export function deriveCateogoriesFromPropertyTypes(propertyTypes: any) {
  return propertyTypes
    .filter((item: any) =>
      ["house", "apartment", "land", "pre-construction", "commercial"].includes(
        item.attributes.name,
      ),
    )
    .map((item: any) => ({
      label: item.attributes.label, // Use label_spanish if necessary
      img: `/images/categories/${item.attributes.name}.png`,
      url: `/listings?property_types=${item.id}`,
    }));
}
