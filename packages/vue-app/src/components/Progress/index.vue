<template>
  <div class="root-progress">
    <label :for="label">{{label}}</label>
    <progress :id="label" :value="value" max="100" />
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    label: String,
    value: String
  }
};
</script>

<style scoped>
.root-progress {
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

