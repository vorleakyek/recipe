import {defineQuery} from "next-sanity";

export const RECIPES_QUERY =
  defineQuery(`*[_type == "recipe" && defined(slug.current)] | order(_createdAt desc){
  title,
  slug,
  createdAt,
  author -> {
    name
  },
  image,
  ingredients,
  instruction
}`);
