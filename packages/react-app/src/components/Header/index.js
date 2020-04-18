import React from "react";

import style from "./Header.module.css";

const HeaderComponent = () => (
  <header className={style.header}>
    <p className={style.title}>
      <strong>React</strong> x Svelte
    </p>
  </header>
);

export default HeaderComponent;
