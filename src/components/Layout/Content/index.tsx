import React, { useState, useEffect } from "react";

import "./index.less";

export default (props) => {
  return <div className="layout_content">{props.children}</div>;
};
