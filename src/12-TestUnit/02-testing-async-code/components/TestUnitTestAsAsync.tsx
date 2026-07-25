import React, { useState } from "react";
import { IHttp } from "../../../9-Http/model/IHttp";
import axios from "axios";
const TestUnitTestAsAsync = () => {
  const [posts, setPosts] = useState<IHttp[]>([]);

  const TestUnitFetch = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        const transformedMovies = response.data;

        setPosts(transformedMovies);
      });
  };

  return (
    <React.Fragment>
      <ul style={{   marginLeft: "35%",
            marginTop:"5%"}}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        <button
          style={{
            borderRadius: "20px",
            backgroundColor: "green",
            color: "white",
            height: 40,
            fontSize: "larger",
            marginLeft: "35%",
            marginTop:"5%"
          }}
          onClick={TestUnitFetch}
        >
          JSonPlaceholder
        </button>
      </div>
    </React.Fragment>
  );
};

export default TestUnitTestAsAsync;
