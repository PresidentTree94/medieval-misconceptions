import { defineType, defineField } from "sanity";

export default defineType({
  name: "articleDocument",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" }
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
      name: "category",
      type: "reference",
      to: [{ type: "categoryDocument" }]
    }),
    defineField({
      name: "topics",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topicDocument" }] }]
    }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString()
    })
  ]
})