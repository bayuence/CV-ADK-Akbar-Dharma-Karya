import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimoni",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama Klien",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Peran/Jabatan",
      type: "string",
      description: 'Contoh: "Pemilik Rumah", "Pemilik Cafe"',
    }),
    defineField({
      name: "content",
      title: "Isi Testimoni",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (r) => r.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "order",
      title: "Urutan",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Urutan",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
