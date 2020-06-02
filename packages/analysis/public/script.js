fetch("data.json")
  .then(response => response.json())
  .then(json => {
    showStats(json.react, "react-list");
    showStats(json.svelte, "svelte-list");
    showStats(json.vue, "vue-list");
  });

function showStats(data, id) {
  const ul = document.getElementById(id);

  const interactive = (data.time.details.items[0].interactive / 1000).toFixed(
    2
  );

  const firstMeaningfulPaint = (
    data.time.details.items[0].firstMeaningfulPaint / 1000
  ).toFixed(2);

  ul.insertAdjacentHTML(
    "beforeend",
    `<li>Size: <strong>${data.size.format}</strong></li>`
  );
  ul.insertAdjacentHTML(
    "beforeend",
    `<li>Lines: <strong>${data.countLine.SUM.code}</strong></li>`
  );
  ul.insertAdjacentHTML(
    "beforeend",
    `<li>Interactive: <strong>${interactive}s</strong></li>`
  );
  ul.insertAdjacentHTML(
    "beforeend",
    `<li>First Paint: <strong>${firstMeaningfulPaint}s</strong></li>`
  );
  ul.insertAdjacentHTML(
    "beforeend",
    `<li>Build Time: <strong>${data.buildTime.format}</strong></li>`
  );
}
