import { Post } from "@/entities/post/model/post-types";


function getTrendingPosts(posts: Post[], currentPostId: string): Post[] {

  const trendingPosts = posts.filter(
    (p) => p.id !== currentPostId && p.isTrending === true
  )

  const sortedTrendingPosts = trendingPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3)


  return sortedTrendingPosts

}

export default getTrendingPosts;   