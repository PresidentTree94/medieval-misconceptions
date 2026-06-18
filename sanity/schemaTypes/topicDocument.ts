import { defineType, defineField } from "sanity";

export default defineType({
  name: "topicDocument",
  title: "Topic",
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
    })
  ]
})