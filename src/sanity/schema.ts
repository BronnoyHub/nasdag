import { defineField, defineType } from "sanity";
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Bedrift og nettsted",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Bedriftsnavn",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "headline",
      title: "Overskrift på forsiden",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "introduction", title: "Introduksjon", type: "text" }),
    defineField({
      name: "services",
      title: "Tjenester",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Navn",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "description",
              title: "Beskrivelse",
              type: "text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "email",
      title: "E-post",
      type: "string",
      validation: (r) => r.email(),
    }),
    defineField({ name: "phone", title: "Telefon", type: "string" }),
  ],
});
