import React from "react";

import style from "./Content.module.css";

const ContentComponent = ({ children }) => (
  <div className={style.root}>{children}</div>
);

export default ContentComponent;
