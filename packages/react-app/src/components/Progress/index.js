import React from "react";
import style from "./Progress.module.css";

const ProgressComponent = ({ label, value }) => (
  <div className={style["root-progress"]}>
    <label for={label}>{label}</label>
    <progress className={style.progress} id={label} value={value} max="100" />
  </div>
);

export default ProgressComponent;
