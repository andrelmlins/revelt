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
    -webkit-appearance: none;
    margin-top: 3px;
  }

  progress::-webkit-progress-bar {
    border-radius: 5px;
    height: 10px;
    background-color: #9e9e9e;
  }

  progress::-webkit-progress-value {
    border-radius: 5px;
    background-color: #386aad;
  }

  progress::-moz-progress-value {
    border-radius: 5px;
    background-color: #386aad;
  }

  progress::-moz-progress-bar {
    border-radius: 5px;
    height: 10px;
    background-color: #9e9e9e;
  }
</style>

<div class="root">
  <label for={label}>{label}</label>
  <progress id={label} {value} max="100" />
</div>
