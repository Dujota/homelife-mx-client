// PropertyType structure
export interface PropertyTypeAttributes {
  name: string;
  label: string;
  label_spanish: string | null;
}

export interface PropertyTypeData {
  id: string;
  type: string;
  attributes: PropertyTypeAttributes;
  relationships: {};
}

export interface PropertyTypes {
  data: PropertyTypeData[];
}
