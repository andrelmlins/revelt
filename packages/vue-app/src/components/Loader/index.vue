<template>
  <div role="alert" aria-busy="true" class="root">
    <vue-headful title="loading..." />
    <img alt="Loader" src="assets/spinner.gif" />
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style scoped>
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
