import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    // ── Title ─────────────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // ── Industry ──────────────────────────────────────────────────────────
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      description: "Displayed alongside the title, e.g. Financial Services, Public Sector, Hospitality",
      validation: (Rule) => Rule.required(),
    }),

    // ── Client Logo ───────────────────────────────────────────────────────
    defineField({
      name: "clientLogo",
      title: "Client Logo",
      type: "image",
      description: "Optional. If uploaded, replaces the industry tag on the case studies page and homepage row.",
      options: { hotspot: false },
      fields: [
        { name: "alt", type: "string", title: "Alternative text" },
      ],
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

    // ── Published Date ────────────────────────────────────────────────────
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
    }),

    // ── Cover Image ───────────────────────────────────────────────────────
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ── Overview (left column) ────────────────────────────────────────────
    defineField({
      name: "overview",
      title: "Overview",
      type: "blockContent",
      description: "Left column of the two-column section below the cover image.",
    }),

    // ── Observations (right column) ───────────────────────────────────────
    defineField({
      name: "observations",
      title: "Observations",
      type: "blockContent",
      description: "Right column of the two-column section.",
    }),

    // ── Image 1 (after Overview / Observations) ───────────────────────────
    defineField({
      name: "image1",
      title: "Image — After Overview",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative text" },
      ],
    }),

    // ── The Challenge ─────────────────────────────────────────────────────
    defineField({
      name: "challenge",
      title: "The Challenge",
      type: "blockContent",
    }),

    // ── Methodology (after Challenge) ─────────────────────────────────────
    defineField({
      name: "methodology",
      title: "Methodology",
      type: "blockContent",
    }),

    // ── Image 2 (after Challenge) ─────────────────────────────────────────
    defineField({
      name: "image2",
      title: "Image — After Challenge",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative text" },
      ],
    }),

    // ── The Approach ──────────────────────────────────────────────────────
    defineField({
      name: "approach",
      title: "The Approach",
      type: "blockContent",
    }),

    // ── Image 4 (after Approach) ──────────────────────────────────────────
    defineField({
      name: "image4",
      title: "Image — After Approach",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative text" },
      ],
    }),

    // ── The Solution ──────────────────────────────────────────────────────
    defineField({
      name: "solution",
      title: "The Solution",
      type: "blockContent",
    }),

    // ── Image 3 (after Solution) ──────────────────────────────────────────
    defineField({
      name: "image3",
      title: "Image — After Solution",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alternative text" },
      ],
    }),

    // ── The Outcomes ──────────────────────────────────────────────────────
    defineField({
      name: "outcomes",
      title: "The Outcomes",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      industry: "industry",
      media: "coverImage",
    },
    prepare({ title, industry, media }) {
      return {
        title,
        subtitle: industry ?? "",
        media,
      };
    },
  },
});
