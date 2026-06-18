import { type SchemaTypeDefinition } from 'sanity'
import topicDocument from './topicDocument'
import categoryDocument from './categoryDocument'
import articleDocument from './articleDocument'
import figureDocument from './figureDocument'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    topicDocument,
    categoryDocument,
    articleDocument,
    figureDocument
  ],
}
