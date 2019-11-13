import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../containers/home/Home";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AppRouter = () => {
  return (
    <Router>
      <Container>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default AppRouter;
