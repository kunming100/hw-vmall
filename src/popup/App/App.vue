<template>
  <div class="main_app">
    <div class="select-module">
      <div class="module-title">手机</div>
      <div class="module-content">
        <el-checkbox-group>
          <el-checkbox v-for="(phone, index) in phoneList" :key="index" :label="phone" />
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      phoneList: [
        { key: 1, label: 'Mate 40' },
        { key: 2, label: 'Mate 40 Pro' },
        { key: 3, label: 'Mate 30 E' },
      ]
    };
  }
});
</script>

<style>

</style>
