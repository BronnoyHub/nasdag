"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { siteSettings } from "./src/sanity/schema";
export default defineConfig({
  name: "nasdag",
  title: "Nasdag – innhold",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Innhold")
          .items([
            S.listItem()
              .title("Bedrift og nettsted")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
          ]),
    }),
  ],
  schema: { types: [siteSettings] },
});
