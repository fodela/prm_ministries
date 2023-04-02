export async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const posts: Post[] = await res.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}
