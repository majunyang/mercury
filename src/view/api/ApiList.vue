<template>
  <div>
    <div class="main-content no-padding">
        <div class="container-fluid">
            <div class="panel">
                <div class="panel-heading">
                    <el-row>
                        <el-col :span="4">
                            <el-button type="success" icon="el-icon-plus" @click="dialogTableVisible=true, dialogTitle='添加分组', dialogButtonTitle='立即创建'">添加分组</el-button>
                        </el-col>
                        <el-col :span="20">
                            <router-link :to="'/api/add?projectId=' + this.$route.query.projectId" class='btn btn-primary'>添加接口</router-link>
                            <el-button type="primary" icon="el-icon-plus" round >添加接口</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div class="panel-body">
                    <el-row>
                        <el-col :span="4">
                            df
                        </el-col>
                        <el-col :span="20">
                            <el-table :data="projects" height="450" border style="width: 100%">
                                <el-table-column prop="name" label="接口名称" width="140"/>
                                <el-table-column prop="url" label="接口URL" width="180"/>
                                <el-table-column prop="create_user" label="创建者" width="80"/>
                                <el-table-column prop="update_user" label="最近更新" width="80"/>
                                <el-table-column prop="update_time" label="更新日期" width="170"/>
                                <el-table-column fixed="right" label="操作" width="200">
                                    <template slot-scope="scope">
                                        <el-button @click="projectDetail(scope.row)" type="text">详情</el-button>
                                        <el-button @click="project = scope.row, dialogTableVisible = true, dialogTitle='编辑项目', dialogButtonTitle='保存'" type="text">编辑</el-button>
                                        <router-link :to="'/api?projectId=' + scope.row.id">删除</router-link>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
        <el-form ref="form" :model="project" label-width="130px">
        <el-form-item label="项目名称">
            <el-input v-model="project.name" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item label="版本号">
            <el-input v-model="project.version" placeholder="版本号"></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="project.remark" placeholder="项目描述"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="saveProject">{{ dialogButtonTitle }}</el-button>
            <el-button @click="dialogTableVisible=false, saveDialog=false, project = {}">取消</el-button>
        </el-form-item>
        </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getProjectList } from "@/api/api";

export default {
  data() {
    return {
      saveDialog: true,
      dialogTableVisible: false,
      dialogButtonTitle: "立即创建",
      dialogTitle: "添加项目",
      members: [],
      departments: [],
      project: {},
      projects: [
        {
          id: 1,
          url: '/project/detail',
          name: "冥王星",
          version: "V1.0.1",
          create_user: '张瑀楠',
          update_user: '张瑀楠',
          remark: "冥王星不是一个行星",
          update_time: '2018-05-19 22:39:46'
        }
      ],
      project_name: ""
    };
  },
  created: function() {
    this.searchProjects();
  },
  methods: {
    searchProjects() {
      let _this = this;
      getProjectList({ project_name: _this.project_name })
        .then(response => {
          if (response.data.code === 200) {
            _this.projects = response.data.records;
          }
        })
        .catch(error => {
          console.info(error);
        });
    },
    projectDetail: function(project) {
      let _this = this;
      this.project = project;
      _this.showList = false;
    },
    saveProject() {},
    searchDepartments() {},
    goToApi: function() {
      this.$router.push({ path: "/api", query: { projectId: this.project.id } });
    }
  }
};
</script>

<style scoped>

</style>
