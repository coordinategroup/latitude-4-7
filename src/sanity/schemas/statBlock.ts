import { defineType, defineField } from "sanity";

export default defineType({
  name: "statBlock",
  title: "Stat Block",
  type: "object",
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: 'e.g. "52%" or "1 in 3"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "The supporting sentence beneath the value.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description: "Optional — e.g. 'World Bank, 2024'",
    }),
  ],
  preview: {
    select: { value: "value", description: "description" },
    prepare({ value, description }) {
      return { title: value, subtitle: description };
    },
  },
});
