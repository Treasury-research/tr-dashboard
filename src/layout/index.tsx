import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { layoutRouters } from "../routers";

import "./index.less";

const LayoutRoot = (props) => {
  return (
    <Router>
      <Switch>
        {layoutRouters.map((rt) => (
          <Route
            key={rt.key}
            exact={rt.exact}
            path={rt.path}
            component={rt.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

ReactDOM.render(<LayoutRoot />, document.querySelector("#layout_root"));
