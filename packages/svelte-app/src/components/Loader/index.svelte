<script>
  import DocumentTitle from "svelte-document-title";
</script>

<style>
  .root {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 64px;
    left: 0;
    align-items: center;
    justify-content: center;
  }
</style>

<DocumentTitle title="loading...">
  <div role="alert" aria-busy="true" class="root">
    <img alt="Loader" src="assets/spinner.gif" />
  </div>
</DocumentTitle>
