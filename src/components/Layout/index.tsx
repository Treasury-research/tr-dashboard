import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";

import "./index.less";

const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};

Layout.Sidebar = Sidebar;

Layout.Content = Content;

export default Layout;
