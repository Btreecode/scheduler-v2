const POSTS = [
  {
    id: 1,
    title: "1st Place in Orange County 🎉",
    content:
      "Congratulations for placing 1st in the first CAML! Let's keep up the good work :)",
    author: "Mr. Di Antonio",
    date: "October 27th, 2023",
  },
];

export default function Posts() {
  return (
    <div className="w-full">
      {POSTS.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="w-full space-y-5">
      <div className="bg-purple-200 font-bold text-3xl p-5">{post.title}</div>
      <div className="mx-10">{post.content}</div>
      <div className="flex justify-between items-center px-5">
        <div className="italic"> - {post.author}</div>
        <div>{post.date}</div>
      </div>
      <hr />
    </div>
  );
}
