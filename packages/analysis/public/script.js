fetch("data.json")
  .then(response => response.json())
  .then(json => {
    const ulReact = document.getElementById("react-list");
    const ulSvelte = document.getElementById("svelte-list");

    const reactInteractive = (
      json.react.time.details.items[0].interactive / 1000
    ).toFixed(2);

    const reactFirstMeaningfulPaint = (
      json.react.time.details.items[0].firstMeaningfulPaint / 1000
    ).toFixed(2);

    const svelteInteractive = (
      json.svelte.time.details.items[0].interactive / 1000
    ).toFixed(2);
    const svelteFirstMeaningfulPaint = (
      json.svelte.time.details.items[0].firstMeaningfulPaint / 1000
    ).toFixed(2);

    ulReact.insertAdjacentHTML(
      "beforeend",
      `<li>Size: <strong>${json.react.size.format}</strong></li>`
    );
    ulReact.insertAdjacentHTML(
      "beforeend",
      `<li>Lines: <strong>${json.react.countLine.SUM.code}</strong></li>`
    );
    ulReact.insertAdjacentHTML(
      "beforeend",
      `<li>Interactive: <strong>${reactInteractive}s</strong></li>`
    );
    ulReact.insertAdjacentHTML(
      "beforeend",
      `<li>First Paint: <strong>${reactFirstMeaningfulPaint}s</strong></li>`
    );
    ulReact.insertAdjacentHTML(
      "beforeend",
      `<li>Build Time: <strong>${json.react.buildTime.format}</strong></li>`
    );

    ulSvelte.insertAdjacentHTML(
      "beforeend",
      `<li>Size: <strong>${json.svelte.size.format}</strong></li>`
    );
    ulSvelte.insertAdjacentHTML(
      "beforeend",
      `<li>Lines: <strong>${json.svelte.countLine.SUM.code}</strong></li>`
    );
    ulSvelte.insertAdjacentHTML(
      "beforeend",
      `<li>Interactive: <strong>${svelteInteractive}s</strong></li>`
    );
    ulSvelte.insertAdjacentHTML(
      "beforeend",
      `<li>First Paint: <strong>${svelteFirstMeaningfulPaint}s</strong></li>`
    );
    ulSvelte.insertAdjacentHTML(
      "beforeend",
      `<li>Build Time: <strong>${json.svelte.buildTime.format}</strong></li>`
    );
  });
