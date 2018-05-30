<template>
    <div>
        <div class="row">
            <div class="col-sm-9">
                <div class="wrapper wrapper-content animated fadeInUp">
                    <div class="ibox">
                        <div class="ibox-content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="m-b-md">
                                        <a href="" class="btn btn-white btn-xs pull-right">编辑项目</a>
                                        <h2>{{ project.name }}</h2>
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
                                        <dd>{{project.manager_name}}</dd>
                                        <dt>版本：</dt>
                                        <dd>{{project.version}}</dd>
                                    </dl>
                                </div>
                                <div class="col-sm-7" id="cluster_info">
                                    <dl class="dl-horizontal">
                                        <dt>最后更新：</dt>
                                        <dd>2014年 11月7日 22:03</dd>
                                        <dt>创建于：</dt>
                                        <dd>2014年 2月16日 03:01</dd>
                                    </dl>
                                </div>
                                <div class="col-sm-12" id="cluster_info">
                                    <dl class="dl-horizontal">
                                        <dt>团队成员：</dt>
                                        <dd class="project-people">
                                            <a>
                                                <img alt="image" class="img-circle" src="@/assets/logo.png">张瑀楠
                                            </a>
                                            <a>
                                                <img alt="image" class="img-circle" src="@/assets/logo.png">张瑀楠
                                            </a>
                                            <a>
                                                <img alt="image" class="img-circle" src="@/assets/logo.png">张瑀楠
                                            </a>
                                            <a>
                                                <img alt="image" class="img-circle" src="@/assets/logo.png">张瑀楠
                                            </a>
                                            <a>
                                                <img alt="image" class="img-circle" src="@/assets/logo.png">张瑀楠
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <dl class="dl-horizontal">
                                        <dt>当前进度</dt>
                                        <dd>
                                            <div class="progress progress-striped active m-b-sm">
                                                <div style="width: 60%;" class="progress-bar"></div>
                                            </div>
                                            <small>当前已完成项目总进度的 <strong>60%</strong></small>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="row m-t-sm">
                                <div class="col-sm-12">
                                    <div class="panel blank-panel">
                                        <div class="panel-heading">
                                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                                <el-tab-pane label="项目动态" name="first">
                                                    <div class="feed-activity-list">
                                                        <div class="feed-element">
                                                            <a href="profile.html#" class="pull-left">
                                                                <img alt="image" class="img-circle" src="img/a1.jpg">
                                                            </a>
                                                            <div class="media-body ">
                                                                <small class="pull-right text-navy">1天前</small>
                                                                <strong>奔波儿灞</strong> 关注了灞波儿奔.
                                                                <br>
                                                                <small class="text-muted">54分钟前 来自 皮皮时光机</small>
                                                                <div class="well">
                                                                    抽奖，人民币2000元，从转发这个微博的粉丝中抽取一人。11月16日平台开奖。随手一转，万一中了呢？
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </el-tab-pane>
                                                <el-tab-pane label="发布信息" name="second">啥都没有</el-tab-pane>
                                            </el-tabs>
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
                    <img src="img/wenku_logo.png" class="img-responsive">
                    <p class="small">
                        <br>在线互动式文档分享平台，在这里，您可以和千万网友分享自己手中的文档，全文阅读其他用户的文档，同时，也可以利用分享文档获取的积分下载文档
                    </p>
                    <p class="small font-bold">
                        <span><i class="fa fa-circle text-warning"></i> 高优先级</span>
                    </p>
                    <h5>项目标签</h5>
                    <ul class="tag-list" style="padding: 0">
                        <li><a href="project_detail.html"><i class="fa fa-tag"></i> 文档</a>
                        </li>
                        <li><a href="project_detail.html"><i class="fa fa-tag"></i> 分享</a>
                        </li>
                        <li><a href="project_detail.html"><i class="fa fa-tag"></i> 下载</a>
                        </li>
                    </ul>
                    <h5>项目文档</h5>
                    <ul class="list-unstyled project-files">
                        <li><a href="project_detail.html"><i class="fa fa-file"></i> Project_document.docx</a>
                        </li>
                        <li><a href="project_detail.html"><i class="fa fa-file-picture-o"></i> Logo_zender_company.jpg</a>
                        </li>
                        <li><a href="project_detail.html"><i class="fa fa-stack-exchange"></i> Email_from_Alex.mln</a>
                        </li>
                        <li><a href="project_detail.html"><i class="fa fa-file"></i> Contract_20_11_2014.docx</a>
                        </li>
                    </ul>
                    <div class="m-t-md">
                        <a href="project_detail.html#" class="btn btn-xs btn-primary">添加文档</a>
    
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
            activeName: 'first',
            project: {
                name: "售后项目",
                manager_name: '777',
                version: 'v0.0.1',
                status: 1,
            }
        }
    }
}
</script>

<style scoped>

</style>
