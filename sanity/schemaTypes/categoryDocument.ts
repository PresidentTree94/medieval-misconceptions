import { defineType, defineField } from "sanity";

export default defineType({
  name: "categoryDocument",
  title: "Category",
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
      name: "icon",
      type: "string",
      initialValue: "ri-book-shelf-line"
    }),
    defineField({
      name: "description",
      type: "text"
    })
  ]
})