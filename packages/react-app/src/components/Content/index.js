import React from "react";
import { Link } from "react-router-dom";

import style from "./Content.module.css";

const ContentComponent = ({ children }) => (
  <div className={style.root}>
    <header className={style.header}>
      <Link to="/">
        <img
          alt="Pokemon"
          className={style.logo}
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
        />
      </Link>
    </header>
    <div className={style.content}>{children}</div>
  </div>
);

export default ContentComponent;
