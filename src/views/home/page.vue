<!--
 * @Author: your name
 * @Date: 2019-11-22 09:16:52
 * @LastEditTime: 2020-04-28 19:06:57
 * @LastEditors: jun
 * @Description: In User Settings Edit
 * @FilePath: \custom_html\src\views\home\page.vue
 -->
<template>
<div class="container">
  <div class="common-box wait">
    <div class="qx-title">
      <div class="bg"></div>
      <div class="font">待办事宜</div>
    </div>
    <div class="content qx-flexCenter">
      <div class="item">
        <div class="pic">
          <img src="../../assets/public/wait1.png" alt />
        </div>
        <div class="txt">专利业务111</div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="../../assets/public/wait2.png" alt />
        </div>
        <div class="txt">专利业务</div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="../../assets/public/wait3.png" alt />
        </div>
        <div class="txt">专利业务</div>
      </div>
    </div>
    <!-- <div class="content qx-flexCenter">
      <div class="item">
        <div class="pic"><img src="../../assets/public/wait1.png" alt=""></div>
        <div class="txt">专利业务111</div>
      </div>
      <div class="item">
        <div class="txt">专利业务111</div>
      </div>
      <div class="item">
        <div class="txt">专利业务111</div>
      </div>
      </div>-->
  </div>
  <div class="common-box task-list">
    <div class="qx-title">
      <div class="bg"></div>
      <div class="font">任务列表</div>
    </div>
    <div class="content">
      <el-tabs type="border-card" @tab-click="tabClick">
        <el-tab-pane label="待办任务列表">
          <el-table :data="tableData" border stripe height="calc(100vh - 520px)">
            <el-table-column label="序号" prop="num" width="80px"></el-table-column>
            <el-table-column label="任务名称"></el-table-column>
            <el-table-column label="创建时间"></el-table-column>
            <el-table-column label="操作" width="100px">
              <template slot-scope="scope">
                <div>
                  <el-button class="comfirm-ico" title="确认" @click="comfirmBtn(scope.row)"></el-button>
                  <el-button class="reject-icon" title="驳回"></el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已办任务">
          <el-table :data="tableData" border stripe height="calc(100vh - 520px)">
            <el-table-column label="序号" prop="num" width="80px"></el-table-column>
            <el-table-column label="任务名称"></el-table-column>
            <el-table-column label="创建时间"></el-table-column>
            <el-table-column label="操作" width="100px">
              <template>
                <div>
                  <el-button class="comfirm-ico" title="确认"></el-button>
                  <el-button class="reject-icon" title="取消" @click="rejectBtn"></el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <affirm :componentData="contentData"></affirm>
</div>
</template>

<script>
import affirm from "../conformSheet/affirm";
import loginApi from "@/api/login";
export default {
  components: {
    affirm
  },
  data() {
    return {
      tableData: [{
          num: "1"
        },
        {
          num: "2"
        },
        {
          num: "3"
        },
        {
          num: "1"
        },
        {
          num: "2"
        },
        {
          num: "3"
        }
      ],
      contentData: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let data = {
        deptId: "4ecb6ae0-7603-450e-9c8d-d662a596f041",
        test: '1111'
      };
      loginApi.getClient(data).then(res => {

      });

      let d = {
        roleId: 'role-6',
        aaa: '123123'
      }
      loginApi.getData(d).then(res => {

      })
    },
    comfirmBtn(row) {
      this.contentData = Object.assign({}, row);
    },
    rejectBtn() {},
    tabClick(type) {
      if (type.paneName == "1") {
        this.init();
      }
      if (type.paneName == "2") {
        this.init();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 10px 0 30px;

  .el-row {
    width: 100%;
  }

  .item {
    width: calc(100% / 3 - 50px);
    position: relative;
    margin: 0 20px;
    height: 120px;
    margin-bottom: 10px;

    .pic {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;

      img {
        width: 100%;
        height: 120px;
      }
    }

    .txt {
      width: 100%;
      text-align: left;
      font-size: 30px;
    }
  }
}
</style>
