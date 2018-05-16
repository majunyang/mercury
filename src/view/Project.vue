<template>
  <div>
      <!-- MAIN CONTENT -->
    <div class="main-content no-padding">
        <div class="container-fluid">
            <div class="panel panel-headline">
                <div class="panel-heading">
                    <h3 class="panel-title" style="display: inline">项目管理</h3>
                </div>
                <div class="panel-body">
                    <el-row>
                        <el-col :span="20">
                            <div class="panel-body">
                                <div class="input-group">
                                    <input class="form-control" v-model="project_name" placeholder="项目名称" type="text">
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button" @click="searchProjects()">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="panel-body">
                                <div class="input-group">
                                    <el-button type="primary" icon="el-icon-plus">添加项目</el-button>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span='24'>
                            <el-table
                                :data="tableData3"
                                height="450"
                                border
                                style="width: 100%">
                                <el-table-column
                                prop="name"
                                label="项目名称"
                                width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="version"
                                    label="版本"
                                    width="180">
                                </el-table-column>
                                <el-table-column
                                    prop="manager"
                                    label="负责人"
                                >
                                </el-table-column>
                                <el-table-column
                                fixed="right"
                                label="操作"
                                width="200">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text">编辑</el-button>
                                    <el-button type="text">Api 管理</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [],
      departments: [],
      project: {},
      projects: [],
      project_name: "",
      tableData3: [
        {
          id: 1,
          version: "2016-05-03",
          name: "王小虎",
          manager: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          version: "2016-05-02",
          name: "王小虎",
          manager: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 3,
          version: "2016-05-04",
          name: "王小虎",
          manager: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 4,
          version: "2016-05-01",
          name: "王小虎",
          manager: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 5,
          version: "2016-05-08",
          name: "王小虎",
          manager: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 6,
          version: "2016-05-06",
          name: "王小虎",
          manager: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 7,
          version: "2016-05-07",
          name: "王小虎",
          manager: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    searchProjects() {
      let _this = this;
    },
    saveProject() {},
    settingProject(project) {},
    modifyProject() {},
    searchDepartments() {}
  }
};
</script>

<style scoped>

</style>
