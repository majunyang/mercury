<template>
  <div>
    <div class="main-content no-padding">
      <div class="container-fluid">
          <div class="panel panel-headline">
                <div class="panel-heading">
                    <h3 class="panel-title" style="display: inline">成员管理</h3>
                    <div class="pull-right">
                        <a class="btn btn-primary btn-block" @click="dialogTableVisible = true, saveDialog=true, dialogTitle='添加成员', dialogButtonTitle='立即创建'">添加成员</a>
                    </div>
                    <hr>
                </div>
                <div class="panel-body">
                    <el-row :gutter="5">
                        <el-col :span="5">
                            <div class="input-group">
                                <input class="form-control" v-model="member_name" id="search_name" placeholder="搜索员工姓名、手机号" type="text">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button" @click="searchMember()">Go!</button>
                                </span>
                            </div>
                            <br>
                            <ul>
                                <li>所有成员</li>
                            </ul>
                            <h4>部门</h4>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="list-group">
                                        <a data-id=0 class="list-group-item list-group-item-info">全部</a>
                                        <a v-for="department in departments" :key="department.id" :data-id="department.id" class="list-group-item list-group-item-info">{{ department.name }}</a>
                                    </div>
                                    <button type="button" @click="settingDepartment()" class="btn btn-primary btn-block">管理部门</button>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="19">
                            <el-table :data="members" max-height="530" stripe style="width: 100%">
                                <el-table-column prop="name" label="姓名" width="180"/>
                                <el-table-column prop="department_id" label="所属部门"/>
                                <el-table-column prop="email" label="邮箱"/>
                                <el-table-column fixed="right" label="操作" width="100">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small">查看</el-button>
                                        <el-button @click="member = scope.row, dialogTableVisible = true, dialogTitle='编辑成员', dialogButtonTitle='保存'" type="text" size="small">编辑</el-button>
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
        <el-form ref="form" :model="member" label-width="130px">
        <el-form-item label="姓名">
            <el-input v-model="member.name" placeholder="员工姓名"></el-input>
        </el-form-item>
        <el-form-item label="登录用户名">
            <el-input v-model="member.account" placeholder="员工姓名"></el-input>
        </el-form-item>
        <el-form-item label="登录密码">
            <el-input type="password" v-model="member.account" placeholder="登录密码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="member.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="所属部门">
            <el-select v-model="member.department_id" placeholder="请选择所属部门">
                <el-option v-for="item in departments" :key="item.name" :label="item.name" :value="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="saveMember">{{ dialogButtonTitle }}</el-button>
            <el-button @click="dialogTableVisible=false, saveDialog=false, member = {}">取消</el-button>
        </el-form-item>
        </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getDepartments, addMember, getMembers } from "@/api/api";

export default {
  data() {
    return {
      dialogTitle: '添加成员',
      dialogButtonTitle: '立即创建',
      members: [],
      member: { department: 0 },
      member_name: "",
      departments: [],
      department: {},
      department_name: "",
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          department_name: "dd",
          projects: 3
        }
      ],
      dialogTableVisible: false,
      saveDialog: false
    };
  },
  created: function() {
      this.getDepartments();
      this.searchMember();
  },
  methods: {
    getDepartments: function(params) {
      let _this = this;
      getDepartments({ department_name: _this.department_name })
        .then(response => {
          if (response.data.code === 200) {
            _this.departments = response.data.records;
          }
        })
        .catch(error => {
          console.info(error);
        });
    },
    searchMember: function(department_id) {
      let _this = this;
      getMembers({ department_name: _this.department_name })
        .then(response => {
          if (response.data.code === 200) {
            _this.members = response.data.records;
          }
        })
        .catch(error => {
          console.info(error);
        });
    },
    saveMember: function() {
        let _this = this;
        if (_this.saveDialog) {
         addMember(_this.member).then(response => {
          if (response.data.code === 200) {
              _this.dialogTableVisible = false
              _this.searchMember()
          } else {
              alert('添加失败')
          }
        }).catch(error => {
            console.error(error)
        })
        } else {
            alert(_this.saveDialog)
        }
        
    },
  }
};
</script>

<style scoped>
</style>
