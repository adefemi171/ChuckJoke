import { gql, useQuery } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {useHistory} from 'react-router-dom'


const query = gql`
  query {
    allCategories {
      categories
    }
  }
`;

const Categories = (props) => {
  const { data, loading, error } = useQuery(query);

  const history = useHistory()
  if (loading) return <CircularProgress />;
  if (error) return <h1>Error</h1>;

  return (
    <div className="category-container">
      {data?.allCategories.categories.map((each, key) => (
        <div className="category" onClick={()=> history.push(`/categories/${each}`)}>{each}</div>
      ))}
    </div>
  );
};

export default Categories;
