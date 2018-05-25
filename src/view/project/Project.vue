<template>
    <div>
        <div class="main-content no-padding">
            <div class="container-fluid">
                <div class="panel" v-show="!showList">
                    <div class="panel-body">
                        <el-row>
                            <el-button round @click="showList=true" icon="el-icon-back">返回</el-button>
                            <el-button type="danger" icon="el-icon-delete" round class="pull-right">停止项目</el-button>
                            <el-button type="success" icon="el-icon-document" round class="pull-right" @click="goToApi">接口文档</el-button>
                            <el-button type="primary" round icon="el-icon-star-off" class="pull-right">关注</el-button>
                        </el-row>
                        <el-row>
                            <el-col :span="18">
                                <div class="m-b-md">
                                    <a href="" class="btn btn-white btn-xs pull-right">编辑项目</a>
                                    <h2>{{ project.name }} </h2>
                                </div>
                                <dl class="dl-horizontal">
                                    <dt>状态：</dt>
                                    <dd>
                                        <span class="label label-primary" v-if="project.status == 0">进行中</span>
                                        <span class="label label-primary" v-else-if="project.status == 1">暂停开发</span>
                                        <span class="label label-primary" v-else-if="project.status == 2">开发完成</span>
                                        <span class="label label-primary" v-else-if="project.status == 3">已废弃</span>
                                        <span class="label label-primary" v-else>鬼知道这个项目什么状态</span>
                                    </dd>
                                </dl>
                            </el-col>
                            <el-col>
                                <div class="col-sm-5">
                                    <dl class="dl-horizontal">
                                        <dt>项目经理：</dt>
                                        <dd>{{ project.manager_name }}</dd>
                                        <dt>所属部门：</dt>
                                        <dd>{{ project.department_name }}</dd>
                                        <dt>版本：</dt>
                                        <dd>{{ project.version }}</dd>
                                    </dl>
                                </div>
                                <div class="col-sm-7" id="cluster_info">
                                    <dl class="dl-horizontal">
                                        <dt>最后更新：</dt>
                                        <dd>{{ project.update_time }}</dd>
                                        <dt>创建于：</dt>
                                        <dd>{{ project.create_time }}</dd>
                                        <dt>团队成员：</dt>
                                        <dd class="project-people">
                                            <a href="">
                                                <img alt="image" class="img-circle">
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="panel blank-panel">
                                    <div class="panel-heading">
                                        <div class="panel-options">
                                            <ul class="nav nav-tabs">
                                                <li><a data-toggle="tab">团队消息</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tab-1">
                                                <div class="feed-activity-list">
                                                    <div class="feed-element">
                                                        <a class="pull-left">
                                                            <img alt="image" class="img-circle">
                                                        </a>
                                                        <div class="media-body ">
                                                            <small class="pull-right text-navy">1天前</small>
                                                            <strong>奔波儿灞</strong> 关注了 <strong>灞波儿奔</strong>.
                                                            <br>
                                                            <small class="text-muted">54分钟前 来自 皮皮时光机</small>
                                                            <div class="actions">
                                                                <a class="btn btn-xs btn-white"><i
                                                                    class="fa fa-thumbs-up"></i> 赞 </a>
                                                                <a class="btn btn-xs btn-danger"><i
                                                                    class="fa fa-heart"></i> 收藏</a>
                                                            </div>
                                                        </div>
                                                    </div>
    
    
                                                    <div class="feed-element">
                                                        <a class="pull-left">
                                                            <img alt="image" class="img-circle">
                                                        </a>
                                                        <div class="media-body ">
                                                            <small class="pull-right">2小时前</small>
                                                            <strong>作家崔成浩</strong> 抽奖中了20万
                                                            <br>
                                                            <small class="text-muted">今天 09:27 来自 Koryolink iPhone
                                                        </small>
                                                            <div class="well">
                                                                抽奖，人民币2000元，从转发这个微博的粉丝中抽取一人。11月16日平台开奖。随手一转，万一中了呢？
                                                            </div>
                                                            <div class="pull-right">
                                                                <a class="btn btn-xs btn-white"><i
                                                                    class="fa fa-thumbs-up"></i> 赞 </a>
                                                                <a class="btn btn-xs btn-white"><i
                                                                    class="fa fa-heart"></i> 收藏</a>
                                                                <a class="btn btn-xs btn-primary"><i
                                                                    class="fa fa-pencil"></i> 评论</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="panel" v-show="showList">
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
                                    <el-table-column prop="name" label="项目名称" width="180" />
                                    <el-table-column prop="name" label="项目经理" width="130" />
                                    <el-table-column prop="version" label="版本" width="180" />
                                    <el-table-column prop="remark" label="描述" />
                                    <el-table-column fixed="right" label="操作" width="200">
                                        <template slot-scope="scope">
                                            <el-button @click="project = scope.row, dialogTableVisible = true, dialogTitle='编辑项目', dialogButtonTitle='保存'" type="text">编辑</el-button>
                                            <el-button @click="projectDetail(scope.row)" type="text">详情</el-button>
                                            <router-link :to="'/api?projectId=' + scope.row.id">Api 管理</router-link>
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
        <el-form-item label="公开项目">
            <el-select v-model="project.public" placeholder="请选择" class='width100'>
                <el-option label="私有" value="0"/>
                <el-option label="公开" value="1"/>
                <el-option label="组内公开" value="2" disabled="true"/>
            </el-select>
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
    import {
        getProjectList
    } from "@/api/api";
    
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
                projects: [{
                    id: 1,
                    name: "冥王星",
                    version: "V1.0.1",
                    remark: "冥王星不是一个行星"
                }],
                project_name: ""
            };
        },
        created: function() {
            this.searchProjects();
        },
        methods: {
            searchProjects() {
                let _this = this;
                getProjectList({
                        project_name: _this.project_name
                    })
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
                this.$router.push({
                    path: "/api",
                    query: {
                        projectId: this.project.id
                    }
                });
            }
        }
    };
</script>

<style scoped>
    
</style>
