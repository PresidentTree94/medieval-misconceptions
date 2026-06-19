export const getAllCategories = `
  *[_type == "categoryDocument"]{
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