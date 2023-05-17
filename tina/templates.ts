import type { TinaField } from "tinacms";
export function frenchFields() {
  return [
    {
      type: "string",
      name: "button_link",
      label: "button_link",
    },
    {
      type: "string",
      name: "colors",
      label: "colors",
      list: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "discount_price",
      label: "discount_price",
    },
    {
      type: "image",
      label: "featureImage",
      name: "featureImage",
      list: true,
  
    },
    {
      type: "string",
      name: "price",
      label: "price",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
  ] as TinaField[];
}
