import { defineType, defineField } from "sanity";

export const companyInfo = defineType({
  name: "companyInfo",
  title: "Info Perusahaan",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama Perusahaan",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'Contoh: "Dari Konsep Hingga Jadi Nyata"',
    }),
    defineField({
      name: "description",
      title: "Deskripsi Singkat",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "shortDesc",
      title: "Label Badge Hero",
      type: "string",
      description: 'Contoh: "Design • Build • Interior"',
    }),
    defineField({
      name: "phone",
      title: "No. Telepon",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Alamat",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "instagram",
      title: "Link Instagram",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "Link Facebook",
      type: "url",
    }),
    defineField({
      name: "whatsapp",
      title: "Link WhatsApp",
      type: "url",
      description: "Format: https://wa.me/62xxx",
    }),
    defineField({
      name: "linktree",
      title: "Link Linktree",
      type: "url",
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "URL dari Google Maps Embed",
    }),
    defineField({
      name: "stats",
      title: "Statistik",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Angka", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: {
            select: { title: "number", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "subBrands",
      title: "Sub-Brand",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Nama", type: "string" }),
            defineField({ name: "handle", title: "Handle", type: "string" }),
            defineField({ name: "description", title: "Deskripsi", type: "string" }),
            defineField({ name: "logo", title: "Logo", type: "image" }),
            defineField({ name: "instagram", title: "Instagram", type: "url" }),
          ],
          preview: {
            select: { title: "name", subtitle: "handle", media: "logo" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
