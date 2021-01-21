import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const GET_JOKE = gql`
  query getRandomJoke($category: String!) {
    getRandomJoke(category: $category) {
      categories
      value
    }
  }
`;

function Jokes() {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const params = useParams();

  const { loading, error, data } = useQuery(GET_JOKE, {
    variables: { category: params.categoryName },
  });

  if (loading) return <CircularProgress />;
  if (error) return `Error! ${error.message}`;

  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider theme={theme}>
      <Typography variant="h4">{params.categoryName}</Typography>
      <div>{data.getRandomJoke.value}</div>
      </ThemeProvider>
    </Container>
  );
}


export default Jokes;
