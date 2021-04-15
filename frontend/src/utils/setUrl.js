import { slugify } from "."

const setUrl = (post, name) => {
  const author = name || post?.authors[0]?.author_name
  switch (post.type) {
    case "project":
      return `/projects/${slugify(post.title)}`
    case "blog":
      return `/${slugify(author)}/${slugify(post.title)}`
    case "release":
      return `/releases/${slugify(post.title)}`
    case "community":
      return `/community/${slugify(post.title)}`
  }
}

export default setUrl
