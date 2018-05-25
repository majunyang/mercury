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
                                <router-link :to="'/api/add?create=true&projectId=' + this.$route.query.projectId" class='btn btn-primary'>添加接口</router-link>
                                <el-button type="primary" icon="el-icon-plus" round>添加接口</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="panel-body">
                        <el-row :gutter="15">
                            <el-col :span="4">
                                <el-collapse v-model="activeName" accordion @change="groupChange">
                                    <el-collapse-item v-for="item in groups" :key="item.name" :title="item.name" :name="item.name">
                                        <div>{{ item.remark }}</div>
                                    </el-collapse-item>
                                </el-collapse>
                            </el-col>
                            <el-col :span="20">
                                <el-table :data="apis" height="450" border style="width: 100%">
                                    <el-table-column prop="name" label="接口名称" width="140" />
                                    <el-table-column prop="url" label="接口URL" width="180" />
                                    <el-table-column prop="create_user" label="创建者" width="80" />
                                    <el-table-column prop="create_user" label="备注" />
                                    <el-table-column prop="update_user" label="最近更新" width="80" />
                                    <el-table-column prop="update_time" label="更新日期" width="170" />
                                    <el-table-column fixed="right" label="操作" width="150">
                                        <template slot-scope="scope">
                                            <router-link :to="'/api/detail?apiId=' + scope.row.id  + '&projectId=' + scope.row.project_id">详情</router-link>
                                            <router-link :to="'/api/add?create=false&apiId=' + scope.row.id  + '&projectId=' + scope.row.project_id">修改</router-link>
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
        <el-form ref="form" :model="group" label-width="130px">
        <el-form-item label="分组名称">
            <el-input v-model="group.name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input type="textarea" v-model="group.remark"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="saveGroup">{{ dialogButtonTitle }}</el-button>
            <el-button @click="dialogTableVisible=false, saveDialog=false">取消</el-button>
        </el-form-item>
        </el-form>
    </el-dialog>
  </div>
</template>

<script>    
    export default {
        data() {
            return {
                activeName: 1,
                saveDialog: true,
                dialogTableVisible: false,
                dialogButtonTitle: "立即创建",
                dialogTitle: "添加项目",
                group: {},
                groups: [],
                apis: [{
                    id: 1,
                    url: '/project/detail',
                    name: "冥王星",
                    version: "V1.0.1",
                    project_id: 1,
                    create_user: '张瑀楠',
                    update_user: '张瑀楠',
                    remark: "冥王星不是一个行星",
                    update_time: '2018-05-19 22:39:46'
                }],
            };
        },
        created: function() {
        },
        methods: {
            groupChange: function(group) {
                alert(group);
            },
            saveGroup() {
                this.groups.push(this.group);
                this.group = {};
                this.dialogTableVisible = false;
            }
        }
    };
</script>

<style scoped>
    
</style>
