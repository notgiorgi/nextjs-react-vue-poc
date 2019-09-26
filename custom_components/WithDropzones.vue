<template>
  <div class="with-dropzones-root">
    <div id="mounted_yet"></div>
    <h3>I'm a custom component with 2 dropzones</h3>

    <div class="first">
      <p>first dropzone content appears under me</p>
      <div class="shogun-dropzone" :id="getDropzoneId(instanceId, 'first')"></div>
    </div>

    <div class="second">
      <p>second dropzone content appears under me</p>
      <div class="shogun-dropzone" :id="getDropzoneId(instanceId, 'second')"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["instanceId", "getDropzoneId"],
}
</script>

<style scoped>
h3,
p {
  font-family: Lato;
}
.with-dropzones-root {
  border: 1px solid blue;
}
.shogun-dropzone {
  position: relative;
  border: 1px dashed palevioletred;
}

.shogun-dropzone::after {
  content: "This is dropzone content";
  position: absolute;
  top: 0;
  right: 0;
  background: papayawhip;
  border: 1px solid salmon;
  opacity: 0.5;
}

.shogun-dropzone {
  min-height: 20px;
}
</style>