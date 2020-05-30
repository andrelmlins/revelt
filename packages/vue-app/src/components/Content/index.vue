<template>
  <div class="root">
    <header>
      <router-link to="/">
        <img
          alt="Pokemon"
          src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
        />
      </router-link>
    </header>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style scoped>
.root {
  margin: 0 auto;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
}

header {
  background-image: url("https://ak3.picdn.net/shutterstock/videos/1456663/thumb/1.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;
  height: 80px;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

img {
  height: 64px;
}
</style>
