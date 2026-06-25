const articleFields = `
  title,
  slug,
  image{
    asset,
    alt
  },
  category->{
    title,
    slug
  },
  topics[]->{
    title,
    slug
  },
  body,
  publishedAt
`

const categoryFields = `
  title,
  slug,
  icon,
  description
`

const topicFields = `
  title,
  slug
`

const figureFields = `
  name,
  slug,
  image{
    asset,
    alt
  },
  born,
  died,
  tagline,
  body
`

export const getAllArticles = `
  *[_type == "articleDocument"]
    | order(publishedAt desc) {
    ${articleFields}
  }
`

export const getArticlesByCategory = `
  *[_type == "articleDocument" && category->slug.current == $slug]
    | order(publishedAt desc) {
    ${articleFields}
  }
`

export const getArticlesByTopic = `
  *[_type == "articleDocument" && $slug in topics[]->slug.current]
    | order(publishedAt desc) {
    ${articleFields}
  }
`

export const getArticleBySlug = `
  *[_type == "articleDocument" && slug.current == $slug][0] {
    ${articleFields}
  }
`

export const getAllCategories = `
  *[_type == "categoryDocument"]
    | order(title asc) {
    ${categoryFields}
  }
`

export const getCategoryBySlug = `
  *[_type == "categoryDocument" && slug.current == $slug][0] {
    ${categoryFields}
  }
`

export const getAllTopics = `
  *[_type == "topicDocument"]
    | order(title asc) {
    ${topicFields}
  }
`

export const getTopicBySlug = `
  *[_type == "topicDocument" && slug.current == $slug][0] {
    ${topicFields}
  }
`

export const getAllFigures = `
  *[_type == "figureDocument"] {
    ${figureFields}
  }
`

export const getFigureBySlug = `
  *[_type == "figureDocument" && slug.current == $slug][0] {
    ${figureFields}
  }
`