import React from "react";
import style from "./Progress.module.css";

const ProgressComponent = ({ label, value }) => (
  <div className={style.root}>
    <label for="file">{label}</label>
    <progress className={style.progress} id="file" value={value} max="100" />
  </div>
);

export default ProgressComponent;
