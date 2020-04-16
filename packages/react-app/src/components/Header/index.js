import React from "react";

import style from "./Header.module.css";

const HeaderComponent = () => {
  console.log(style);
  return (
    <header className={style.header}>
      <div className={style.root}>
        <p className={style.title}>
          <strong>React</strong> x Svelte
        </p>
      </div>
    </header>
  );
};

export default HeaderComponent;
