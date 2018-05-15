<template>
  <div>
    <div class="main-content">
      <div class="container-fluid">
          <div class="panel panel-headline">
                <div class="panel-heading">
                    <h3 class="panel-title" style="display: inline">成员管理</h3>
                    <div class="pull-right">
                        <a data-toggle="modal" style="background-color: #00aaff;border-color: #00a0f0;height: 30px;"
                           class="btn btn-primary btn-block" href="#modal-form">添加成员</a>
                    </div>
                    <hr>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="panel-body">
                                <div class="input-group">
                                    <input class="form-control" v-model="member_name" id="search_name"
                                           placeholder="搜索员工姓名、手机号" type="text">
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button"
                                                @click="searchMember()">Go!</button>
                                    </span>
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="list-group">
                                            <a href="#" class="list-group-item list-group-item-info">全部</a>
                                            <a v-for="department in departments" :data-id="department.id" href="#" class="list-group-item list-group-item-info">{{ department.name }}</a>
                                        </div>
                                        <button type="button" @click="settingDepartment()" class="btn btn-primary btn-block">管理部门</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                            </div>
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>姓名</th>
                                    <th>手机号/邮箱</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item,index) in members">
                                    <td>[[ index + 1 ]]</td>
                                    <td>[[ item.name ]]</td>
                                    <td>[[ item.phone ]] / [[ item.email ]]</td>
                                    <td><a @click="settingMember(item)">设置</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
      member: { department: 0 },
      member_name: "",
      departments: [],
      department: {},
      department_name: ""
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
