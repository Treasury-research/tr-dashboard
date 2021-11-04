import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Layout from "../../components/Layout";
import { homeSubRouters } from "../../routers";

export default (props) => {
  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Content>
        {homeSubRouters.map((rt) => (
          <Route
            key={rt.key}
            exact={rt.exact}
            path={rt.path}
            component={rt.component}
          />
        ))}
      </Layout.Content>
    </Layout>
  );
};
