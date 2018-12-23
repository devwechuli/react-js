import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const ids = [
    {
      id: "1",
      name: "Post 1"
    },
    {
      id: "2",
      name: "Post 3"
    },
    {
      id: "3",
      name: "Post 3"
    },
    {
      id: "4",
      name: "Post 4"
    }
  ];
  // const list = ids.map(item => { //we could use this logic to return arrays as jsx or we could just include this method in the jsx, works the same way
  //   return (
  //     <Link key={item.id} to={`/posts/${item.id}`}>
  //       {item.name}
  //     </Link>
  //   );
  // });
  return (
    <div className="postlist">
      {ids.map(item => {
        return (
          <Link key={item.id} to={`/posts/${item.id}`}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
export default Posts;
