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
                <el-menu-item :index="'/console/dashboard?projectId=' + this.$route.query.projectId">
                    <i class="el-icon-back"></i>
                    <span slot="title">Return</span>
                </el-menu-item>
                <el-menu-item :index="'/api/project?projectId=' + this.$route.query.projectId">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Project</span>
                </el-menu-item>
                <el-menu-item :index="'/api/list?projectId=' + this.$route.query.projectId">
                    <i class="el-icon-document"></i>
                    <span slot="title">API</span>
                </el-menu-item>
                <el-menu-item :index="'/api/environment?projectId=' + this.$route.query.projectId">
                    <i class="el-icon-menu"></i>
                    <span slot="title">环境配置</span>
                </el-menu-item>
                <el-menu-item :index="'/api/member?projectId=' + this.$route.query.projectId">
                    <i class="el-icon-menu"></i>
                    <span slot="title">团队成员</span>
                </el-menu-item>
                <el-menu-item :index="'/api/dynamic?projectId=' + this.$route.query.projectId">
                    <i class="el-icon-menu"></i>
                    <span slot="title">项目动态</span>
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
