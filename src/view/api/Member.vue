<template>
    <div class="main-content no-padding">
        <div class="container-fluid">
            <div class="panel">
                <div class="panel-body">
                    <el-button type="primary" icon="el-icon-plus" @click="dialogTableVisible = true">添加用户</el-button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4" v-for="member in project_members" :key="member.id">
                    <div class="panel">
                        <a>
                            <div class="col-sm-4">
                                <div class="text-center">
                                    <img alt="image" class="img-circle m-t-xs img-responsive" src="@/assets/logo.png">
                                    <div class="m-t-xs font-bold">CTO</div>
                                </div>
                            </div>
                        </a>
                        <div class="col-sm-8">
                            <a>
                                <h3><strong>{{ member.name }}</strong></h3>
                            </a>
                            <address>
                                <strong>人人金控</strong><br>
                                E-mail:zyndev@gmail.com<br>
                                Weibo: 此处应该有点东西<br>
                                <abbr title="Phone">Tel:</abbr> (123) 456-7890
                            </address>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="添加用户" :visible.sync="dialogTableVisible">
            <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="选择导入" name="fourth">
                    <el-select v-model="select_members" multiple placeholder="请选择">
                        <el-option v-for="item in members" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>

                    <el-button>导入</el-button>
                </el-tab-pane>
                <el-tab-pane label="部门导入" name="first">
                    <el-select v-model="select_department" placeholder="请选择">
                        <el-option v-for="item in departments" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>

                    <el-button>导入</el-button>
                </el-tab-pane>
                <el-tab-pane label="团队导入" name="second">
                    <el-select v-model="select_team" placeholder="请选择">
                        <el-option v-for="item in teams" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>

                    <el-button>导入</el-button>
                </el-tab-pane>
                <el-tab-pane label="项目导入" name="third">
                    <el-select v-model="select_project" placeholder="请选择">
                        <el-option v-for="item in projects" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>

                    <el-button>导入</el-button>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogTableVisible: false,
                activeName: 'fourth',
                select_project: null,
                select_team: null,
                select_department: null,
                select_members: [],
                projects: [{
                    name: "mercury",
                    id: 1,
                }],
                teams: [{
                    name: "大猩猩",
                    id: 1,
                }],
                departments: [{
                    name: "二猩猩",
                    id: 1,
                }],
                members: [{
                    name: '张瑀楠',
                    id: 1
                }],
                project_members: [{
                    name: '张瑀楠',
                    id: 1
                }]
            }
        },
        methods: {
    
        },
        created: function() {
    
        }
    }
</script>

<style scoped>
    
</style>
