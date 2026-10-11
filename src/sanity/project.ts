import { defineField, defineType } from "sanity";
export const projectSchema = defineType({
  name: "project",
  title: "Kundeleveranse",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Prosjekttittel",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "customer",
      title: "Godkjent kundenavn",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publicationApproved",
      title: "Kunden har godkjent offentlig presentasjon og bildebruk",
      type: "boolean",
      initialValue: false,
      description: "Bare godkjente, publiserte leveranser vises på nettstedet.",
    }),
    defineField({
      name: "year",
      title: "Leveringsår",
      type: "number",
      validation: (r) => r.integer().min(1900).max(2100),
    }),
    defineField({
      name: "services",
      title: "Tjenester levert",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "summary",
      title: "Kort presentasjon",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Godkjent prosjektbilde",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Beskriv bildet",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({ name: "challenge", title: "Kundens behov", type: "text" }),
    defineField({ name: "solution", title: "Vår løsning", type: "text" }),
    defineField({
      name: "deliveries",
      title: "Konkrete leveranser",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "results",
      title: "Dokumenterte resultater",
      type: "text",
      description: "Ikke oppgi anslag som dokumenterte resultater.",
    }),
    defineField({
      name: "resultsVerified",
      title: "Resultatene er verifisert og kan publiseres",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "customer", media: "heroImage" },
  },
});
