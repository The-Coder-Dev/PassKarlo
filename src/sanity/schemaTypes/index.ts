import { type SchemaTypeDefinition } from 'sanity'
import { seo } from './objects/seo'
import { institute } from './institute'
import { teacher } from './teacher'
import { career } from './career'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seo, institute, teacher, career],
}
