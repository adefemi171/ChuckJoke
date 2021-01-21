import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_JOKE = gql`
  query getRandomJoke($category: String!) {
    getRandomJoke(category: $category) {
      categories
      value
    }
  }
`;

function Jokes() {
  const params = useParams();

  const { loading, error, data } = useQuery(GET_JOKE, {
    variables: { category: params.categoryName },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>{params.categoryName}</h1>
      <div>{data.getRandomJoke.value}</div>
    </div>
  );
}
// const jokes = props => {
//     return (
//         <div>

//         </div>
//     )
// }

export default Jokes;
