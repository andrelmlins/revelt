<template>
  <header>
    <a href="/">
      <strong>Vue</strong>
      x React x Svelte
    </a>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  color: black;
  background-color: #3eb37f;
  position: static;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  min-height: 64px;
}
a {
  font-size: 30px;
  margin: 0;
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 2px #333;
  text-decoration: none;
}
a strong {
  font-weight: 900;
}
</style>
