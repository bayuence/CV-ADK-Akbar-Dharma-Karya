import { defineType, defineField } from "sanity";

export const processStep = defineType({
  name: "processStep",
  title: "Langkah Proses",
  type: "document",
  fields: [
    defineField({
      name: "step",
      title: "Nomor Langkah",
      type: "number",
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: "Langkah",
      name: "stepAsc",
      by: [{ field: "step", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "step" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `Langkah ${subtitle}`,
      };
    },
  },
});
