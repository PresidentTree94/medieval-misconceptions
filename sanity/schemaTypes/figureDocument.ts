import { defineType, defineField } from "sanity";

export default defineType({
  name: "figureDocument",
  title: "Historical Figure",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" }
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string"
        })
      ]
    }),
    defineField({
      name: "born",
      type: "string"
    }),
    defineField({
      name: "died",
      type: "string"
    }),
    defineField({
      name: "tagline",
      type: "string"
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }]
    })
  ]
})