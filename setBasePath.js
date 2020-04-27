const cheerio = require("cheerio");
const fs = require("fs");

const prefixLinks = (file, base) => {
  const result = fs.readFileSync(file);
  const $ = cheerio.load(result.toString());
  $("base").attr("href", base);
  fs.writeFileSync(file, $.html());
};

prefixLinks("build/react/index.html", "/react/");
prefixLinks("build/svelte/index.html", "/svelte/");
