<template>
  <div id="app">
    <Header />
    <Content> <router-view /> </Content>
  </div>
</template>

<script>
import Header from "../components/Header";
import Content from "../components/Content";

export default {
  name: "App",
  components: {
    Header,
    Content
  }
};
</script>
