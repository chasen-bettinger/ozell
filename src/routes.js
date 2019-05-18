import React from "react";
import { Redirect, Switch } from "react-router-dom";

import Layout from "./hoc/Layout";
import Main from "./pages/main/Main";

export const makeMainRoutes = () => {
  return (
    <Switch>
      <Layout path="/main" component={Main} />
      <Redirect to={"/main"} />
    </Switch>
  );
};
