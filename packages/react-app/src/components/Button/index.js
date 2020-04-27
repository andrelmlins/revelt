import React from "react";
import { Link } from "react-router-dom";

import style from "./Button.module.css";

const ButtonComponent = ({ className, ...props }) => (
  <Link className={`${style.root} ${className}`} {...props} />
);

export default ButtonComponent;
