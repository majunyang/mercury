<template>
  <div>
      <el-container>
  <el-header><m-header/></el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  components: {
    "m-header": Header
  }
};
</script>

<style scoped>

</style>
