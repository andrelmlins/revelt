import React from "react";

import style from "./Content.module.css";

const ContentComponent = ({ children }) => (
  <div className={style.root}>
    <header className={style.header}>
      <img
        alt="Pokemon"
        className={style.logo}
        src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
      />
    </header>
    <div className={style.content}>{children}</div>
  </div>
);

export default ContentComponent;
