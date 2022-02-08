<template>
  <el-menu
    :router="indexAsPath"
    :default-active="activeIndex"
    class="head-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-sub-menu index="/life">
      <template #title>生活</template>
      <el-menu-item index="/life/photograph">摄影</el-menu-item>
      <el-menu-item index="/life/friends">朋友</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/technology">
      <template #title>技术</template>
      <el-menu-item index="/technology/frontend">前端</el-menu-item>
      <el-menu-item index="/technology/backend">后端</el-menu-item>
      <el-menu-item index="/technology/ai">机器学习</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/create">创造</el-menu-item>
    <el-menu-item index="/about">关于我</el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<script>
import Home from "../Home/Home.vue";
import { ref, reactive } from "vue";
export default {
  name: "Index",
  components: {},
  setup() {
    const activeIndex = ref("1");
    // el-menu的index作为vue-router的path
    const indexAsPath = true;
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      activeIndex,
      handleSelect,
      indexAsPath,
    };
  },
};
</script>
<style scoped>
.head-menu {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
