"use strict";

const getSize = require("get-folder-size");
const { exec } = require("child_process");
const rimraf = require("rimraf");
const fs = require("fs");

const object = { svelte: {}, react: {} };

const getSizes = () => {
  getSize("../../build/svelte", (err, size) => {
    if (err) {
      throw err;
    }
    object.svelte.size = {
      format: (size / 1024 / 1024).toFixed(2) + " MB",
      bytes: size
    };
  });

  getSize("../../build/react", (err, size) => {
    if (err) {
      throw err;
    }
    object.react.size = {
      format: (size / 1024 / 1024).toFixed(2) + " MB",
      bytes: size
    };
  });
};

const getCountLines = () => {
  exec(
    "cloc ../svelte-app/src --json --force-lang-def=cloc_definitions.txt",
    (error, stdout) => {
      let data = JSON.parse(stdout);
      delete data.header;

      object.svelte.countLine = data;
    }
  );

  exec(
    "cloc ../react-app/src --json --force-lang-def=cloc_definitions.txt",
    (error, stdout) => {
      let data = JSON.parse(stdout);
      delete data.header;

      object.react.countLine = data;
    }
  );
};

getSizes();
getCountLines();

process.on("exit", () => {
  if (fs.existsSync("build")) {
    rimraf.sync("build");
  }

  fs.mkdirSync("build");
  fs.appendFileSync("build/data.json", JSON.stringify(object));
});
