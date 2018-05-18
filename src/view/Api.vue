<template>
  <div class="main-content">
        <div class="row">
            <div class="col-sm-2">
                <div class="ibox float-e-margins">
                    <div class="ibox-content mailbox-content">
                        <div class="file-manager">
                            <a data-toggle="modal" href="#modal_group"
                               class="btn btn-block btn-info compose-mail">新建分组</a>
                            <div class="space-25"></div>
                            <h3>分组</h3>
                            <ul class="folder-list m-b-md" style="padding: 0">
                                <li>
                                    <a href="mailbox.html"> 所有接口 </a>
                                </li>
                            </ul>
                            <h5>分类</h5>
                                                        <ul class="category-list" style="padding: 0">
                                                            <li>
                                                                <a> <i class="fa fa-circle text-navy"></i> 工作</a>
                                                            </li>
                                                            <li>
                                                                <a> <i class="fa fa-circle text-danger"></i> 文档</a>
                                                            </li>
                                                            <li>
                                                                <a> <i class="fa fa-circle text-primary"></i> 社交</a>
                                                            </li>
                                                            <li>
                                                                <a> <i class="fa fa-circle text-info"></i> 广告</a>
                                                            </li>
                                                            <li>
                                                              <a> <i class="fa fa-circle text-warning"></i> 客户端</a>
                                                           </li>
                                                       </ul>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 animated fadeInRight">
                <div class="mail-box-header">
                    <router-link class="btn btn-success btn-sm pull-left" :to="'/console/home/api/add?project_id=' + this.$route.query.project_id">新建接口</router-link>
                    <form class="pull-left mail-search" style="margin-left: 10px;">
                        <div class="input-group">
                            <input type="text" class="form-control input-sm" name="search" placeholder="搜索接口名称、URL等">
                            <div class="input-group-btn">
                                <button type="button" @click="getApis" class="btn btn-sm btn-primary">
                                    搜索
                                </button>
                            </div>
                        </div>
                    </form>
                                        
                </div>
                <div class="mail-box" style="padding-top: 20px;">

                    <table class="table table-hover table-mail">
                        <thead>
                        <tr>
                            <th>接口名称</th>
                            <th>URL</th>
                            <th>创建者</th>
                            <th>最后更新</th>
                            <th>最后更新时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in apis" :key='item.id'>
                            <td>{{ item.name }}</td>
                            <td><label class="label-success label" style="padding: 3px;"> {{ item.method }} </label>
                                &nbsp;&nbsp;{{ item.url }}
                            </td>
                            <td>张瑀楠</td>
                            <td>张瑀楠</td>
                            <td>{{ item.update_time }}</td>
                            <td><router-link :to="'/console/home/api/detail?id=' + item.id + '&project_id=' + item.project_id">查看</router-link> | <a data-a="'{% url 'api/edit' %}?id=' + item.id">修改</a> | <span
                                    @click="deleteApi(item.id,index)" class="delete">删除</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div id="modal_group" class="modal fade" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3 class="m-t-none m-b">添加分组</h3>
                                <div class="input-group">
                                    <input class="form-control" placeholder="分组名称">
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button"
                                                @click="addGroup">添加</button>
                                    </span>
                                </div>

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
      project: {},
      apis: []
    };
  },
  mounted: function() {
  },
  methods: {
    getProject: function() {
      let _this = this;
      let id = this.$route.query.project_id;
    }
  }
}
</script>

<style scoped>

</style>
