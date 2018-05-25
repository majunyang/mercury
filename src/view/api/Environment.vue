<template>
    <div class="main-content no-padding">
        <div class="container-fluid">
            <div>
                <el-button type="success" @click="dialogTableVisible = true">添加环境</el-button>
            </div>
            <div class="panel margin-top-20">
                <div class="panel-body">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <div class="list-group">
                                <button type="button" class="list-group-item" v-for="item in environments" :key="item.id" @click="environment = item">
                                    {{ item.name }}
                                </button>
                            </div>
                        </el-col>
                        <el-col :span="20">
                            <form role="form" class="form-horizontal">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">环境名称</label>
                                        <div class="col-sm-10">
                                            <input placeholder="环境名称" class="form-control" :value="environment.name">
                                        </div>
                                    </div>
    
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">URL前缀</label>
                                        <div class="col-sm-10">
                                            <input placeholder="URL 前缀" class="form-control" :value="environment.url">
                                        </div>
                                    </div>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 200px;">Header</th>
                                                <th style="width: 150px;">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item) in environment.header_params" :key="item.key">
                                                <td class="no-padding">
                                                    <input :value="item.key" placeholder="header" class="form-control no-border width100" style="border: none;">
                                                </td>
                                                <td class="no-padding" style="width: 200px;">
                                                    <input :value="item.value" placeholder="value" class="form-control no-border width100" style="border: none;">
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <el-dialog title="添加环境" :visible.sync="dialogTableVisible">
            
        </el-dialog>
    </div>
</template>

<script>

export default {
  data() {
    return {
      dialogTableVisible: false,
      environments: [{
          id: 1,
          name: 'abc'
      }],
      environment: {},
      name: "",
      url: "",
      header_params: [],
      header_param: {}
    };
  },
  created: function() {
    this.search();
  },
  methods: {
    search() {
      let _this = this;
    //   getEnvironments({})
    //     .then(response => {
    //       _this.environments = response.data;
    //       _this.environments.forEach(e => {
    //         e.header_params = JSON.parse(e.header);
    //       });
    //     })
    //     .catch(error => {
    //       console.error("error" + error);
    //     });
    },
    save() {
      let _this = this;
    },
    addRequestParam() {
      this.header_params.push(this.header_param);
      this.header_param = {};
    },
    deleteRequestParam(id, i) {
      this.header_params.splice(i, 1);
    }
  }
};
</script>

<style scoped>

</style>
