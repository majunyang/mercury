<template>
<div>
	<el-row class="header">
		<el-col :span="8"><i class="el-icon-back"></i></el-col>
  		<el-col :span="8"><div>dasf</div></el-col>
		<el-col :span="8"><div>dasf1</div></el-col>
	</el-row>
</div>
</template>

<script>
export default {
  data() {
    return {};
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
	height: 60px;
	line-height: 60px;
}
</style>
