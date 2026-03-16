import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    // ── Type ──────────────────────────────────────────────────────────────
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Research", value: "Research" },
          { title: "Perspective", value: "Perspective" },
          { title: "Spotlight", value: "Spotlight" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Title & Subheading ─────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),

    // ── Slug ──────────────────────────────────────────────────────────────
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Category (Spotlight articles) ─────────────────────────────────────
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Technology, Finance, Policy — used for Spotlight articles",
    }),

    // ── Reading Time ───────────────────────────────────────────────────────
    defineField({
      name: "readingTime",
      title: "Reading Time (minutes)",
      type: "number",
      validation: (Rule) => Rule.min(1).integer(),
    }),

    // ── Published Date ─────────────────────────────────────────────────────
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Main Image ─────────────────────────────────────────────────────────
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    // ── Body ───────────────────────────────────────────────────────────────
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),

    // ── Author ─────────────────────────────────────────────────────────────
    defineField({
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "jobTitle",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "linkedIn",
          title: "LinkedIn URL",
          type: "url",
          validation: (Rule) =>
            Rule.uri({ scheme: ["https"] }).warning(
              "Should be a valid LinkedIn URL"
            ),
        }),
      ],
    }),

    // ── Company Factsheet (Spotlight articles only) ────────────────────────
    defineField({
      name: "companyFactsheet",
      title: "Company Factsheet",
      type: "object",
      description: "Only shown for Spotlight articles.",
      fields: [
        defineField({
          name: "founded",
          title: "Founded",
          type: "number",
          description: "Year founded, e.g. 2018",
          validation: (Rule) => Rule.min(1800).max(2100).integer(),
        }),
        defineField({
          name: "coreTechnology",
          title: "Core Technology",
          type: "string",
        }),
        defineField({
          name: "keyProduct",
          title: "Key Product",
          type: "string",
        }),
        defineField({
          name: "primaryInvestors",
          title: "Primary Investors",
          type: "array",
          of: [{ type: "string" }],
          description: "Add one investor per entry",
        }),
      ],
    }),

    // ── Research Ledger ────────────────────────────────────────────────────
    defineField({
      name: "researchLedger",
      title: "Research Ledger",
      type: "array",
      description: "Cited sources and references displayed at the end of the article.",
      of: [{ type: "researchLedgerEntry" }],
    }),

    // ── Related Content ────────────────────────────────────────────────────
    defineField({
      name: "relatedContent",
      title: "Related Content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      type: "type",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare({ title, type, media, date }) {
      return {
        title,
        subtitle: `${type ?? ""}${date ? ` · ${date}` : ""}`,
        media,
      };
    },
  },
});
