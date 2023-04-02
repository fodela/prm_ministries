import React from "react";

const Aside = () => {
  const comments = [
    { author: "Fo Dela", article: "Divine Health" },
    { author: "Keli Booster", article: "Divine Wealth" },
  ];
  return (
    <aside className="flex flex-col gap-10 w-full mx-2">
      <aside className="bg-black/10 p-8 min-w-72">
        <header className="text-xl uppercase text-color_primary font-semibold ">
          Comments
        </header>
        <br />
        <ul>
          {comments.map((comment, index) => (
            <li className="list-disc" key={index}>
              <span>{comment.author}</span> on <span>{comment.article}</span>
            </li>
          ))}
        </ul>
      </aside>

      <aside className="bg-black/10 p-8">
        <header className="text-xl uppercase text-color_primary font-semibold ">
          Posts Categories
        </header>{" "}
        <br />
        <select name="categories" id="" className="w-full p-2">
          <option value="0">Select Category</option>
          <option value="1">One</option>
          <option value="2">two</option>
          <option value="3">three</option>
          <option value="4">four</option>
        </select>
      </aside>

      <aside className="bg-black/10 p-8">
        <header className="text-xl uppercase text-color_primary font-semibold ">
          Posts
        </header>

        <br />
        <ul>
          {comments.map((comment, index) => (
            <li className="list-disc" key={index}>
              <span>{comment.author}</span> on <span>{comment.article}</span>
            </li>
          ))}
        </ul>
      </aside>
    </aside>
  );
};

export default Aside;
