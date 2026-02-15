import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Proyek",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Proyek",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Arsitektur", value: "Arsitektur" },
          { title: "Interior", value: "Interior" },
          { title: "Konstruksi", value: "Konstruksi" },
          { title: "Renovasi", value: "Renovasi" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Foto Proyek",
      type: "image",
      options: { hotspot: true },
      description: "Upload foto proyek (rasio 4:3 disarankan)",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "✅ Selesai", value: "completed" },
          { title: "🔄 Dalam Pengerjaan", value: "in-progress" },
        ],
      },
      initialValue: "in-progress",
    }),
    defineField({
      name: "progress",
      title: "Progress (%)",
      type: "number",
      validation: (r) => r.min(0).max(100),
      initialValue: 0,
    }),
    defineField({
      name: "location",
      title: "Lokasi",
      type: "string",
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
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
