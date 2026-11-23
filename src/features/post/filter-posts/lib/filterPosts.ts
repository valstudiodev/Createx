import { Post } from "@/entities/post/model/post-types";
import { PostFilters } from "../model/filterPosts.types";


function filterPosts(posts: Post[], filters: PostFilters): Post[] {
  const { type, category, seacrh } = filters

  const normalizedSearch = seacrh.trim().toLowerCase()

  return posts.filter((post) => {
    const matchesType = type === 'all' || post.label === type

    const matchesCategory = category === 'all' || post.category === category

    const matchesSearch =
      !normalizedSearch ||
      post.title.toLowerCase().includes(normalizedSearch) ||
      post.text.toLowerCase().includes(normalizedSearch)

    return matchesType && matchesCategory && matchesSearch
  })
}

export default filterPosts;