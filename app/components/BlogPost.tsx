import React from "react";

const BlogPost = ({ post }: { post: Post }) => {
  return (
    <article
      key={post.id}
      className=" relative mt-20 pt-60 ml-20 mr-5 border border-black p-5 "
    >
      <figure className="blog_image absolute -top-10 -left-10 right-10"></figure>
      <header className="font-semibold">{post.title}</header>
      <p className="mb-5">{post.body}</p>
      icons
    </article>
  );
};

export default BlogPost;
