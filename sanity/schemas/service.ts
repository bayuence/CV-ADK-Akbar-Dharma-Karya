import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Layanan",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Layanan",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Nama icon: building, hammer, palette, wrench, cube, chat",
      options: {
        list: [
          { title: "🏗️ Building", value: "building" },
          { title: "🔨 Hammer", value: "hammer" },
          { title: "🎨 Palette", value: "palette" },
          { title: "🔧 Wrench", value: "wrench" },
          { title: "📦 Cube", value: "cube" },
          { title: "💬 Chat", value: "chat" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Urutan",
      type: "number",
      description: "Urutan tampil (1 = paling atas)",
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
    select: { title: "title", subtitle: "icon" },
  },
});
