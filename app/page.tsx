import { Inter } from "next/font/google";
import BlogPost from "./components/BlogPost";
import { getPosts } from "./api/blogPost";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PRM Ministries - The word of God that changes the world",
  description:
    "Prophet Richardson Mensah MINISTRIES (PRMM) is a movement for God presided over and led by Prophet Richardson Mensah, who also is the founder of the SPIRIT LIFE NETWORK(SLN) – a vision laid in His Spirit by Elohim for the perfection of His assignments.",
};

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="max-w-[800px]">
      {posts && posts.map((post) => <BlogPost post={post} />)}
      <p className="blue-500">Home</p>
    </main>
  );
}
