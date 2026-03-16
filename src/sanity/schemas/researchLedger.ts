import { defineField, defineType } from "sanity";

export default defineType({
  name: "researchLedgerEntry",
  title: "Research Ledger Entry",
  type: "object",
  fields: [
    defineField({
      name: "sourceTitle",
      title: "Source Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "leadInstitution",
      title: "Lead Institution",
      type: "string",
      description: "e.g. IMF, Ministry of Finance, World Bank",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keyDataPoint",
      title: "Key Data Point",
      type: "text",
      rows: 3,
      description: "A brief summary of the core finding or statistic.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(2024).max(2026).integer().error("Year must be between 2024 and 2026."),
    }),
    defineField({
      name: "link",
      title: "Source URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["https", "http"] }).warning("Should be a valid URL."),
    }),
    defineField({
      name: "categoryTag",
      title: "Category Tag",
      type: "string",
      options: {
        list: [
          { title: "Economic", value: "Economic" },
          { title: "Environmental", value: "Environmental" },
          { title: "Technical", value: "Technical" },
          { title: "Policy", value: "Policy" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "sourceTitle",
      institution: "leadInstitution",
      year: "year",
      category: "categoryTag",
    },
    prepare({ title, institution, year, category }) {
      return {
        title,
        subtitle: `${institution ?? ""}${year ? ` · ${year}` : ""}${category ? ` · ${category}` : ""}`,
      };
    },
  },
});
