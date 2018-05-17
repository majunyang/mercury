<template>
  <div style="height: 100%;">
      <el-container style="height: 100%;">
        <el-header class="no-padding header">
            <m-header/>
        </el-header>
        <el-container class="content-v">
          <el-aside class="aside">
              <el-menu default-active="/console/dashboard" class="el-menu-vertical-demo" @open="handleOpen" 
                @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff"
                active-text-color="#ffd04b" :router="true">
                <el-menu-item index="/console/dashboard">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Dashboard</span>
                </el-menu-item>
                <el-menu-item index="/console/project">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Project</span>
                </el-menu-item>
                <el-menu-item index="/console/member">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Member</span>
                </el-menu-item>
                <el-menu-item index="/console/share">
                    <i class="el-icon-share"></i>
                    <span slot="title">Share</span>
                </el-menu-item>
              </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  data() {
    return {
      isCollapse: false
    };
  },
  components: {
    "m-header": Header
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.content-v {
  height: calc(100% - 80px) !important;
}

.aside{
  width: 200px !important;
  height: 100% !important;
  background-color: #545c64;
}

.header {
  height: 80px !important;
}
</style>
