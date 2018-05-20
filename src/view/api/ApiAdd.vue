<template>
    <div class="main-content no-padding">
        <div class="container-fluid">
            <div class="panel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="ibox" style="margin-bottom: 12px;">
                                <router-link :to="'/api/list?projectId=' + this.$route.query.projectId" class="btn btn-sm btn-info">
                                    <span class="lnr lnr-chevron-left"></span> 返回列表</router-link>
                                <button class="btn btn-sm btn-success" @click="save">保存</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="panel">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-12">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label class="control-label pull-left p-mmd">名称</label>
                                    <div class="pull-left col-md-10">
                                        <input type="text" v-model="api_param.name" class="form-control" placeholder="名称">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label pull-left p-mmd">URL</label>
                                    <div class="pull-left col-sm-10">
                                        <div class="input-group m-b">
                                            <div class="input-group-btn">
                                                <select class="form-control" v-model="api_param.http" style="width: 100px;">
                                                            <option value="1">HTTP</option>
                                                            <option value="2">HTTPS</option>
                                                        </select>
                                            </div>
                                            <div class="input-group-btn">
                                                <select class="form-control" v-model="api_param.method" style="width: 120px;">
                                                            <option value="0" selected="selected">POST</option>
                                                            <option value="1">GET</option>
                                                            <option value="2">PUT</option>
                                                            <option value="3">DELETE</option>
                                                            <option value="4">HEAD</option>
                                                            <option value="5">OPTIONS</option>
                                                            <option value="6">PATCH</option>
                                                        </select>
                                            </div>
                                            <input type="text" class="form-control" v-model="api_param.url" placeholder="url">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="panel">
                <el-tabs type="border-card">
                    <el-tab-pane label="请求参数(URL)">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style="width: 200px;">参数名</th>
                                    <th style="width: 150px;">类型</th>
                                    <th style="width: 50px;">必填</th>
                                    <th>示例</th>
                                    <th>说明</th>
                                    <th style="width: 150px;">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in request_params" :key="item.name">
                                    <td class="no-padding">
                                        <input v-model="item.name" placeholder="参数名" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td class="no-padding">
                                        <select v-model="item.type" class="form-control no-border width100" style="border: none;">
                                                                <option value="1">[string]</option>
                                                                <option value="2">[json]</option>
                                                                <option value="3">[int]</option>
                                                                <option value="4">[float]</option>
                                                                <option value="5">[double]</option>
                                                                <option value="6">[date]</option>
                                                                <option value="7">[datetime]</option>
                                                                <option value="8">[boolean]</option>
                                                                <option value="9">[byte]</option>
                                                                <option value="10">[short]</option>
                                                                <option value="11">[long]</option>
                                                                <option value="12">[array]</option>
                                                            </select>
                                    </td>
                                    <td><input type="checkbox" v-model="item.required"></td>
                                    <td class="no-padding" style="width: 200px;">
                                        <input v-model="item.example_value" placeholder="参数名" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td class="no-padding">
                                        <input v-model="item.remark" placeholder="参数名" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td>
                                        <i class="el-icon-delete" @click="deleteRequestParam(item.id,index)"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="no-padding">
                                        <input v-model="request_param.name" placeholder="参数名" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td class="no-padding">
                                        <select v-model="request_param.type" class="form-control no-border width100" style="border: none;">
                                                                <option value="1">[string]</option>
                                                                <option value="2">[json]</option>
                                                                <option value="3">[int]</option>
                                                                <option value="4">[float]</option>
                                                                <option value="5">[double]</option>
                                                                <option value="6">[date]</option>
                                                                <option value="7">[datetime]</option>
                                                                <option value="8">[boolean]</option>
                                                                <option value="9">[byte]</option>
                                                                <option value="10">[short]</option>
                                                                <option value="11">[long]</option>
                                                                <option value="12">[array]</option>
                                                            </select>
                                    </td>
                                    <td><input type="checkbox" v-model="request_param.required"></td>
                                    <td class="no-padding" style="width: 200px;">
                                        <input v-model="request_param.example_value" placeholder="示例" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td class="no-padding">
                                        <input v-model="request_param.remark" placeholder="说明" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td>
                                        <i class="el-icon-plus" @click="addRequestParam"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </el-tab-pane>
                    <el-tab-pane label="Body">Body</el-tab-pane>
                    <el-tab-pane label="Header">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style="width: 200px;">键</th>
                                    <th style="width: 150px;">值</th>
                                    <th style="width: 150px;">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in request_headers" :key="item.key">
                                    <td class="no-padding">
                                        <input v-model="item.key" placeholder="key" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td class="no-padding" style="width: 200px;">
                                        <input v-model="item.value" placeholder="value" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td>
                                        <i class="el-icon-delete" @click="deleteRequestHeader(item.id,index)"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="no-padding">
                                        <input v-model="request_header.key" placeholder="key" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td class="no-padding" style="width: 200px;">
                                        <input v-model="request_header.value" placeholder="value" class="form-control no-border width100" style="border: none;">
                                    </td>
                                    <td>
                                        <i class="el-icon-plus" @click="addRequestHeader"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </el-tab-pane>
                    <el-tab-pane label="鉴权">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
    
            <div class="panel">
    
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ibox float-e-margins">
                            <div class="ibox-content p-md">
                                <h4><span class="text-navy">返回参数</span></h4>
                                <div class="panel-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 200px;">参数名</th>
                                                <th style="width: 150px;">类型</th>
                                                <th style="width: 50px;">必含</th>
                                                <th>示例</th>
                                                <th>说明</th>
                                                <th style="width: 150px;">操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in response_params">
                                                <td class="no-padding">
                                                    <input v-model="item.name" placeholder="参数名" class="form-control no-border width100" style="border: none;">
                                                </td>
                                                <td class="no-padding">
                                                    <select v-model="item.type" class="form-control no-border width100" style="border: none;">
                                                            <option value="1">[string]</option>
                                                            <option value="2">[json]</option>
                                                            <option value="3">[int]</option>
                                                            <option value="4">[float]</option>
                                                            <option value="5">[double]</option>
                                                            <option value="6">[date]</option>
                                                            <option value="7">[datetime]</option>
                                                            <option value="8">[boolean]</option>
                                                            <option value="9">[byte]</option>
                                                            <option value="10">[short]</option>
                                                            <option value="11">[long]</option>
                                                            <option value="12">[array]</option>
                                                        </select>
                                                </td>
                                                <td><input type="checkbox" v-model="item.required"></td>
                                                <td class="no-padding" style="width: 200px;">
                                                    <input v-model="item.example_value" placeholder="参数名" class="form-control no-border width100" style="border: none;">
                                                </td>
                                                <td class="no-padding">
                                                    <input v-model="item.remark" placeholder="参数名" class="form-control no-border width100" style="border: none;">
                                                </td>
                                                <td>
                                                    <span class="lnr lnr-cog" style="padding-right: 10px;"></span>
                                                    <span class="lnr lnr-trash" @click="deleteResponseParam(item.id,index)"></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="no-padding">
                                                    <input v-model="response_param.name" placeholder="参数名" class="form-control no-border width100" style="border: none;">
                                                </td>
                                                <td class="no-padding">
                                                    <select v-model="response_param.type" class="form-control no-border width100" style="border: none;">
                                                            <option value="1">[string]</option>
                                                            <option value="2">[json]</option>
                                                            <option value="3">[int]</option>
                                                            <option value="4">[float]</option>
                                                            <option value="5">[double]</option>
                                                            <option value="6">[date]</option>
                                                            <option value="7">[datetime]</option>
                                                            <option value="8">[boolean]</option>
                                                            <option value="9">[byte]</option>
                                                            <option value="10">[short]</option>
                                                            <option value="11">[long]</option>
                                                            <option value="12">[array]</option>
                                                        </select>
                                                </td>
                                                <td><input type="checkbox" v-model="response_param.required"></td>
                                                <td class="no-padding" style="width: 200px;">
                                                    <input v-model="response_param.example_value" placeholder="示例" class="form-control no-border width100" style="border: none;">
                                                </td>
                                                <td class="no-padding">
                                                    <input v-model="response_param.remark" placeholder="说明" class="form-control no-border width100" style="border: none;">
                                                </td>
                                                <td>
                                                    <span class="lnr lnr-plus-circle" style="padding-right: 10px;" @click="addResponseParam"></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <el-tabs type="border-card">
                <el-tab-pane label="成功示例">
                    <textarea class="form-control" rows="6">成功示例</textarea>
                </el-tab-pane>
    
                <el-tab-pane label="失败示例">
                    <textarea class="form-control" rows="6">失败示例</textarea>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                api_param: {
                    name: "",
                    http: 1,
                    method: 1
                },
                project: {},
                request_params: [],
                request_headers: [],
                request_header: {},
                request_param: {
                    type: 1,
                    required: true
                },
                response_params: [],
                response_param: {
                    type: 1,
                    required: true
                }
            };
        },
        mounted: function() {
            this.getProject();
        },
        methods: {
            save() {
                let _this = this;
                let params = {
                    api_param: _this.api_param,
                    project_id: _this.$route.query.project_id,
                    request_params: _this.request_params,
                    response_params: _this.response_params
                };
                //   addApi(params).then(response => {
                //       if (response.data.code === 200) {
                //         _this.$router.push({ path: "/console/home/api/list?project_id=" + _this.$route.query.project_id });
                //       }
                //   }).catch(error => {
                //       console.info(error);
                //   })
            },
            addGroup() {
                $("#modal_group").modal("hide");
            },
            getProject() {
                let _this = this;
            },
            addRequestParam() {
                this.request_params.push(this.request_param);
                this.request_param = {
                    type: 1,
                    required: true
                };
            },
            addRequestHeader() {
                this.request_headers.push(this.request_header);
                this.request_header = {};
            },
            addResponseParam() {
                this.response_params.push(this.response_param);
                this.response_param = {
                    type: 1,
                    required: true
                };
            },
            deleteRequestParam(id, i) {
                this.request_params.splice(i, 1);
            },
            deleteRequestHeader(id, i) {
                this.request_headers.splice(i, 1);
            },
            deleteResponseParam(id, i) {
                this.response_params.splice(i, 1);
            }
        }
    };
</script>

<style scoped>
    
</style>

