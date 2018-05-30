<template>
    <div>
        <div class="main-content no-padding">
            <div class="container-fluid">
                <div class="panel">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-sm-10">
                                <div class="font20">A friend is one of the nicest things you can have, and one of the best things you can be.</div>
                                <div class="chat-element">
                                    <div class="pull-left imga">
                                        <img alt="image" class="img-circle" src="@/assets/logo.png">
                                    </div>
                                    <div class="media-body ">
                                        <h2>{{welcome_msg}}</h2>
                                        <p class="m-b-xs">
                                            跑步呐，最重要的是要有动力
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="row">
                                    <div class="col-sm-12 forum-info">
                                        <span class="views-number">123</span>
                                        <div>
                                            <small>任务数</small>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 forum-info p-xl">
                                        <span class="views-number">140</span>
                                        <div>
                                            <small>文章</small>
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
</template>

<script>
    const weekDays = ["日", "一","二", "三","四","五","六"];

    function getMsg(hour) {
        let msg;
        if(hour < 5) {
            msg = "是不是又熬夜了，注意身体哦！"
        } else if (hour < 8) {
            msg = "一日之计在于晨！做好一天的计划"
        } else if (hour < 10) {
            msg = "上班开始！每天都是元气满满"
        } else if (hour < 12) {
            msg = "多和同事沟通能提高效率哦"
        } else if (hour < 13){
            msg = "该吃饭了吧，人是铁，饭是钢哦！"
        } else if (hour < 14){
            msg = "休息一下，下午才有力气搬砖！"
        } else if (hour < 17) {
            msg = "努力中...."
        } else if (hour < 18) {
            msg = "工作了一天，适当休息一下吧！"
        } else if (hour < 19) {
            msg = "看看自己劳动成功，好好的犒劳一下自己吧!"
        } else if (hour < 23) {
            msg = "不会在加班吧，努力吧骚年!"
        } else if (hour == 23) {
            msg = "偷偷告诉我：你最近是不是又胖了！"
        } else {
            msg = "鬼知道这是什么时间"
        }
        return msg;
    }

    export default {
        data() {
            let myDate = new Date();
            myDate.getHours();       //获取当前小时数(0-23)
            return {
                welcome_msg: "告诉我现在几点了？",
                dayOfWeek: "星期几",
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                setInterval(this.timer, 1000);
            })
        },
        methods: {
            timer: function () {
                let now = new Date();
                this.dayOfWeek = weekDays[now.getDay()];
                this.welcome_msg = getMsg(now.getHours());
            }
        }
    }
</script>

<style scoped>
    img {
        width: 80px !important;
        height: 80px !important;
    }
</style>
