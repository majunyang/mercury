<template>
  <div>
    <div class="main-content no-padding">
      <div class="container-fluid">
          <div class="panel panel-headline">
                <div class="panel-heading">
                    <h3 class="panel-title" style="display: inline">成员管理</h3>
                    <div class="pull-right">
                        <a class="btn btn-primary btn-block" @click="dialogTableVisible = true">添加成员</a>
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
                                        <a href="#" class="list-group-item list-group-item-info">全部</a>
                                        <a v-for="department in departments" :data-id="department.id" href="#" class="list-group-item list-group-item-info">{{ department.name }}</a>
                                    </div>
                                    <button type="button" @click="settingDepartment()" class="btn btn-primary btn-block">管理部门</button>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="19">
                            <el-table :data="tableData3" max-height="530" stripe style="width: 100%">
                                <el-table-column prop="name" label="姓名" width="180"/>
                                <el-table-column prop="department_name" label="所属部门"/>
                                <el-table-column prop="projects" label="参加项目"/>
                                <el-table-column fixed="right" label="操作" width="100">
                                    <template slot-scope="scope">
                                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                        <el-button type="text" size="small">编辑</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                </div>
          </div>
      </div>
    </div>
    <el-dialog title="添加成员" :visible.sync="dialogTableVisible">
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
            <el-select v-model="member.region" placeholder="请选择所属部门">
            <el-option v-for="item in departments" :key="item.name" :label="item.name" :value="item.name"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [],
      member: { department: 0 },
      member_name: "",
      departments: [{
          name: 'abc'
      },{
          name: 'abcd'
      },{
          name: 'abce'
      }],
      department: {},
      department_name: "",
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          department_name: 'dd',
          projects: 3
        }
      ],
      dialogTableVisible: false,
    };
  },
  methods: {
    searchMember() {
      let _this = this;
    },
    addMember() {},
    settingMember(member) {
      this.member = member;
    },
    modifyMember() {},
    deleteMember() {},
    searchDepartments() {
      let _this = this;
    },
    settingDepartment() {},
    addDepartment() {
      let _this = this;
    }
  }
};
</script>

<style scoped>

</style>
