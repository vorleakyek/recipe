import { type SchemaTypeDefinition } from 'sanity';
import { author } from './author';
import {recipe} from './recipe';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,recipe],
}
