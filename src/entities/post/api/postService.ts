import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { Post, PostDetailsInterface } from "../model/post-types";
import db from "@/shared/config/firebase/firebase-config";

// export async function getPosts(): Promise<Post[]> {
//   const postsCollection = collection(db, 'posts')

//   const snapShot = await getDocs(postsCollection)

//   const posts: Post[] = []

//   snapShot.forEach((doc) => {
//     const post: Post = {
//       id: doc.id,
//       ...(doc.data() as Omit<Post, 'id'>)
//     }

//     posts.push(post)
//   })

//   return posts
// }

type PostDocument = Omit<Post, 'id' | 'isRecommended'> & {
  isRecommended?: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const postsCollection = collection(db, 'posts');
  const snapshot = await getDocs(postsCollection);

  return snapshot.docs.map(doc => {
    const data = doc.data() as PostDocument;

    return {
      ...data,
      id: doc.id,
      isRecommended: data.isRecommended ?? false
    };
  });
}

export async function getLatestPosts(): Promise<Post[]> {
  const postsCollection = collection(db, 'posts');

  const postQuery = query(
    postsCollection,
    orderBy('date', 'desc'),
    limit(3)
  );

  const snapshot = await getDocs(postQuery);

  return snapshot.docs.map(doc => {
    const data = doc.data() as PostDocument;

    return {
      ...data,
      id: doc.id,
      isRecommended: data.isRecommended ?? false
    };
  });
}

export async function getRecommendedPosts(): Promise<Post[]> {
  const postsCollection = collection(db, 'posts');

  const postQuery = query(
    postsCollection,
    where('isRecommended', '==', true)
  );

  const snapshot = await getDocs(postQuery);

  return snapshot.docs.map(doc => {
    const data = doc.data() as PostDocument;

    return {
      ...data,
      id: doc.id,
      isRecommended: true
    };
  });
}


export async function getPostById(postId: string): Promise<PostDetailsInterface | null> {
  console.log('Requested post ID:', postId);
  const postDocRef = doc(db, 'posts', postId)

  const postSnap = await getDoc(postDocRef)

  console.log('Document exists:', postSnap.exists());

  if (!postSnap.exists()) {
    console.log(`Document with ID ${postId} is not found!`);
    return null
  }

  const postData = postSnap.data()

  return {
    id: postSnap.id,
    ...postData
  } as PostDetailsInterface
}