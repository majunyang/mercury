<template>
  <div class="main-content">
        <div class="row">
            <div class="col-sm-9">
                <div class="wrapper wrapper-content animated fadeInUp">
                    <div class="ibox">
                        <div class="ibox-content">
                            <div class="row">
                                <div class="col-sm-12">
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
                                </div>
                            </div>
                            <div class="row">
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
                            </div>
                            <div class="row m-t-sm">
                                <div class="col-sm-12">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="wrapper wrapper-content project-manager">
                    <h4>项目描述</h4>
                    <img class="img-responsive">
                    <p class="small">
                        <br>
                        {{ project.remark }}
                    </p>
                    <div class="m-t-md">
                        <router-link class="btn btn-xs btn-primary" :to="'/console/home/apim?project_id=' + project.id">添加文档</router-link>
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
      project: {}
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
