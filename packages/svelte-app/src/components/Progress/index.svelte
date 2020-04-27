<script>
  export let label;
  export let value;
</script>

<style>
  .root {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  progress {
    width: 100%;
  }
</style>

<div class="root">
  <label for={label}>{label}</label>
  <progress id={label} {value} max="100" />
</div>
