import React from "react";
import DocumentTitle from "react-document-title";

import style from "./Loader.module.css";

const LoaderComponent = () => (
  <DocumentTitle title="loading...">
    <div role="alert" aria-busy="true" className={style.root}>
      <img alt="Loader" src="assets/spinner.gif" />
    </div>
  </DocumentTitle>
);

export default LoaderComponent;
