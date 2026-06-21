export const getAllArticles = `
  *[_type == "articleDocument"]{
    title,
    slug,
    image{
      asset,
      alt
    },
    category->{
      title
    },
    topics[]->{
      title
    },
    body,
    publishedAt
  }
`

export const getArticlesByCategory = `
  *[_type == "articleDocument" && category->slug.current == $slug]{
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
      title
    },
    body,
    publishedAt
  }
`

export const getArticlesByTopic = `
  *[_type == "articleDocument" && $slug in topics[]->slug.current]{
    title,
    slug,
    image{
      asset,
      alt
    },
    category->{
      title,
    },
    topics[]->{
      title,
      slug
    },
    body,
    publishedAt
  }
`

export const getAllCategories = `
  *[_type == "categoryDocument"]{
    title,
    slug,
    icon,
    description
  }
`

export const getCategoryBySlug = `
  *[_type == "categoryDocument" && slug.current == $slug][0]{
    title,
    slug,
    icon,
    description
  }
`

export const getAllTopics = `
  *[_type == "topicDocument"]{
    title,
    slug
  }
`

export const getTopicBySlug = `
  *[_type == "topicDocument" && slug.current == $slug][0]{
    title,
    slug
  }
`

export const getAllFigures = `
  *[_type == "figureDocument"]{
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
  }
`