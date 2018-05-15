<template>
<div>
	<el-row class="header">
		<el-col :span="8"><i class="el-icon-back"></i></el-col>
  		<el-col :span="8"><div>dasf</div></el-col>
		<el-col :span="8">
      <el-dropdown @command="handleCommand" trigger="click">
  <span class="el-dropdown-link">
    UserName<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="profile">My Profile</el-dropdown-item>
    <el-dropdown-item command="setting">Setting</el-dropdown-item>
    <el-dropdown-item command="message" disabled>Message</el-dropdown-item>
    <el-dropdown-item command="logout" divided>Logout</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </el-col>
	</el-row>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        this.$message("logout success");
      } else {
        this.$notify.error({
          title: "Error",
          message: `Not implement: ${command}`
        });
      }
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  }
};
</script>


<style scoped>
.header {
  height: 80px;
  line-height: 60px;
  background-color: #fff;
}
</style>
