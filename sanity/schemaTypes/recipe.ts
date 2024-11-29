import { defineField, defineType } from 'sanity';

export const recipe = defineType({
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options:{
        source: 'title'
      }
    }),
    defineField({
      name: "ingredients",
      type: "string",
    }),
    defineField({
      name: "instruction",
      type: "string",
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "image",
      type: "url",
    }),
  ]
})
