import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Categories from "./pages/categories";
import Jokes from "./pages/jokes";

const App = () => {
  const httpLink = new HttpLink({
    uri: "https://chuck-joke-backend.herokuapp.com/",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Categories}/>
          <Route exact path="/categories/:categoryName" component={Jokes} />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
};

export default App;
