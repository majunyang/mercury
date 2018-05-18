<template>
  <div>
    <div class="main-content no-padding">
        <div class="container-fluid">
            <div class="panel panel-headline" v-show="!showList">
                 <div class="panel-body">
                <el-row>
                    <el-button round @click="showList=true" icon="el-icon-back">返回</el-button>
                    <el-button type="danger" icon="el-icon-delete" round class="pull-right">停止项目</el-button>
                    <el-button type="primary" round icon="el-icon-star-off" class="pull-right">关注</el-button>
                    </el-row>
                <el-row>
                    <el-col :span="2">项目详情</el-col>
                </el-row>
                 </div>
            </div>
            <div class="panel panel-headline" v-show="showList">
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
                                    <el-button type="primary" icon="el-icon-plus" @click="dialogTableVisible=true, dialogTitle='添加项目', dialogButtonTitle='立即创建'">添加项目</el-button>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span='24'>
                            <el-table :data="projects" height="450" border style="width: 100%">
                                <el-table-column prop="name" label="项目名称" width="180"/>
                                <el-table-column prop="version" label="版本" width="180"/>
                                <el-table-column prop="remark" label="描述"/>
                                <el-table-column fixed="right" label="操作" width="200">
                                    <template slot-scope="scope">
                                        <el-button @click="project = scope.row, dialogTableVisible = true, dialogTitle='编辑项目', dialogButtonTitle='保存'" type="text">编辑</el-button>
                                        <el-button @click="projectDetail(scope.row)" type="text">详情</el-button>
                                        <router-link to="/console/api">Api 管理</router-link>
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
      showList: true,
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
          name: "冥王星",
          version: "V1.0.1",
          remark: "冥王星不是一个行星"
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
    projectDetail: function() {
      let _this = this;
      _this.showList = false;
    },
    saveProject() {},
    searchDepartments() {}
  }
};
</script>

<style scoped>

</style>
