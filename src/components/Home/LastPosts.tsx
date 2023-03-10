import { posts } from "@/mocks/post";
import { Card } from "../global/Card/Card";

export const LastPosts = () => {
  return (
    <div className="w-11/12 md:w-3/5 m-auto text-center my-16">
      <h1 className="text-5xl my-4">Posts</h1>
      {posts.map((post, i) => (
        <Card
          key={post.title}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          reverse={i % 2 === 0}
        />
      ))}
    </div>
  );
};
