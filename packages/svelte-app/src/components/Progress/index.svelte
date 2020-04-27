<script>
  export let label;
  export let value;
</script>

<style>
  .root {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  progress {
    width: 100%;
  }
</style>

<div class="root">
  <label for="file">{label}</label>
  <progress id="file" {value} max="100" />
</div>
