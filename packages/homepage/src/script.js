fetch("data.json")
  .then(response => response.json())
  .then(json => {
    const ulReact = document.getElementById("react-list");
    const ulSvelte = document.getElementById("svelte-list");

    ulReact.insertAdjacentHTML(
      "beforeend",
      `<li>Size: <strong>${json.react.size.format}</strong></li>`
    );
    ulReact.insertAdjacentHTML(
      "beforeend",
      `<li>Lines: <strong>${json.react.countLine.SUM.code}</strong></li>`
    );

    ulSvelte.insertAdjacentHTML(
      "beforeend",
      `<li>Size: <strong>${json.svelte.size.format}</strong></li>`
    );
    ulSvelte.insertAdjacentHTML(
      "beforeend",
      `<li>Lines: <strong>${json.svelte.countLine.SUM.code}</strong></li>`
    );
  });
