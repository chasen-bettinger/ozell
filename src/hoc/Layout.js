import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

const Layout = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      exact
      render={props => {
        return (
          <Container>
            <Component {...props} />
          </Container>
        );
      }}
    />
  );
};

export default Layout;
