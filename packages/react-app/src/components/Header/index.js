import React from "react";

import style from "./Header.module.css";

const HeaderComponent = () => (
  <header className={style.header}>
    <a href="/" className={style.title}>
      <strong>React</strong> x Svelte
    </a>
  </header>
);

export default HeaderComponent;
