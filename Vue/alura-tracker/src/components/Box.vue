<template>
  <div class="box has-text-weight-bold">
    <!-- O que tivar dentro do componente Box será renderizado no slot -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxComponente",
});
</script>

<style scoped>
.box {
  background-color: #faf0ca;
}
</style>
