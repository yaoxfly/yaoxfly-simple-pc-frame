<template>
  <div class="example">
    <eve-container layout="center" padding="20px">
      <!-- 边框、卡片 -->
      <section>
        <span class="example-title">边框</span>
        <div class="eve-common-border example-border">常规边框</div>
        <div class="eve-common-border--base-shadow example-border">基础投影</div>
        <div class="eve-common-border--lighter-shadow example-border">浅色投影</div>
        <div style="margin-bottom: 38px"></div>
      </section>

      <section>
        <span class="example-title">卡片</span>
        <el-card class="box-card example-margin-top">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >操作按钮</el-button
            >
          </div>
          1111
        </el-card>
      </section>

      <!--消息框 -->

      <section>
        <span class="example-title example-margin-top">消息框</span>
        <div style="margin-top: 10px">
          <el-button size="small" @click="open">打开消息框</el-button>
        </div>
      </section>

      <!--对话框 -->
      <section>
        <span class="example-title example-margin-top">对话框</span>
        <div style="margin-top: 10px">
          <el-button size="small" @click="visible = true">
            打开对话框
          </el-button>
        </div>
      </section>

      <!--min-width 自己决定大小 当前属性只是范例 -->
      <section>
        <eve-dialog :visible.sync="visible" min-width="700">
          <eve-rich-text
            v-model="activeName"
            ref="eve-rich-text"
          ></eve-rich-text>
        </eve-dialog>
      </section>

      <!--标签页 -->

      <!-- 基础用法 -->
      <section>
        <span class="example-title example-margin-top">标签页--常规</span>
        <el-tabs v-model="activeName" class="example-margin-top">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </section>

      <!-- 选项卡样式 -->

      <section>
        <span class="example-title  example-margin-top">标签页--选项卡样式1</span>
        <el-tabs v-model="activeName" type="card" class="example-margin-top">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </section>

      <section>
        <span class="example-title example-margin-top">标签页--选项卡样式2</span>
        <div class="eve-common-tabs--division">
          <el-tabs v-model="activeName" type="card" class="example-margin-top">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          </el-tabs>
        </div>
      </section>

      <!-- 按钮样式 -->
      <section>
        <span class="example-title example-margin-top">标签页--按钮</span>
        <div class="eve-common-tabs--button">
          <el-tabs v-model="activeName" type="card" class="example-margin-top">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="按钮管理" name="thir">按钮管理</el-tab-pane>
          </el-tabs>
        </div>
      </section>

      <!-- 纵向-->
      <section>
        <span class="example-title example-margin-top">标签页--纵向</span>
        <el-tabs v-model="activeName" tab-position="left" class="example-margin-top">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </section>
      <!--步骤条 -->

      <section>
        <span class="example-title example-margin-top">步骤条</span>
        <!--细线步骤条 -->
        <div class="example-flex">
          <div style="width: 60%">
            <el-steps :active="active" align-center style="margin-top: 38px">
              <el-step title="步骤 1"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
          </div>
        </div>

        <!--进度条 -->
        <div class="example-flex">
          <div style="width: 60%">
            <el-steps :active="active" simple style="margin-top: 20px">
              <el-step title="步骤 1"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step title="步骤 3"></el-step>
            </el-steps>
          </div>
        </div>

        <div class="example-flex">
          <el-button style="margin-top: 12px" @click="next" size="mini">
            下一步</el-button
          >
        </div>
      </section>
      <!--表格分页-->

      <section>
        <span class="example-title example-margin-top">表格分页</span>
        <span class="margin-top">表格分页--常规表格</span>
        <eve-table-pagination
          class="example-margin-top"
          header-cell-class-name="eve-common-table-pagination__header"
          @btn-operate="btnOperate"
          :delete-message-box="deleteMessageBox"
          @current-change="currentChange"
          :page-size="pageSize"
          :columns="columns"
          :data="tableData"
          :button="button"
        >
        </eve-table-pagination>
      </section>

      <!--树-->
      <section>
        <span class="example-title example-margin-top">树</span>
        <eve-tree :data="treeData" class="example-margin-top" width="20%"></eve-tree>
      </section>

      <!--时间线(时间轴)-->
      <section>
        <span class="example-title example-margin-top">时间线(时间轴)</span>
        <el-timeline class="example-margin-top">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :color="activity.color"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </section>
      <!--时间线(时间轴)-->
      <section>
        <span class="example-title example-margin-top">带信息面板时间轴</span>
        <div style="width: 339px">
          <el-timeline class="example-margin-top">
            <el-timeline-item timestamp="网上申报" placement="top">
              <el-card>
                <p>2021-01-01 12:03:34</p>
                <p>审核意见：已提交，请审核</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="网上预审" placement="top">
              <el-card>
                <p>2021-01-01 12:03:34</p>
                <p>审核意见：已提交，请审核</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="受理" placement="top">
              <el-card>
                <p>2021-01-01 12:03:34</p>
                <p>审核意见：已提交，请审核</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </section>

      <div style="margin-bottom: 48px"></div>
    </eve-container>

    <!-- 放在eve-container容器外 -->
    <div class="eve-common-footer-button">
      <!-- 组件外部要嵌套个div -->
      <div>
        <el-button>取消</el-button>
        <el-button type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Example',
  data () {
    return {
      // 删除的对话框
      deleteMessageBox: {
        content: '代码是写给人看的，顺便在程序里运行',
        text: '删除'
      },
      active: 0, // 步骤条的位置
      visible: false, // 是否显示对话框
      activeName: 'second', // 卡片选项卡高亮
      pageSize: 20, // 分页的页码
      // 时间线
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }],
      // 树的数据
      treeData: [
        {
          id: 1,
          label: '一级 1',
          disabled: true, // 设置某个节点不能被选择
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1',
            children: [{
              id: 6,
              label: '三级 2-1-1'
            }]
          }, {
            id: 3,
            label: '二级 2-2',

            children: [{
              id: 7,
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          id: 8,
          children: [{
            id: 10,
            label: '二级 3-1',
            children: [{
              id: 11,
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            id: 12,
            children: [{
              id: 13,
              label: '三级 3-2-1'
            }]
          }]
        }
      ],
      /* ----表格----- */
      // 表头
      columns: [
        {
          label: 'Name',
          prop: 'name',
          type: 'tree'
        },
        {
          label: 'Name',
          prop: 'name'
        },
        {
          label: 'Age',
          prop: 'age',
          sortable: 'custom', // 接受一个Boolean，默认为false,如果需要后端排序，需将sortable设置为custom
          filters: [{ text: 18, value: 18 }, { text: 19, value: 19 }, { text: 20, value: 20 }]
        },
        {
          label: 'Address',
          prop: 'address',
          render: (h, params) => {
            return h('div', {
            }, params.row.address + '我是被转换超级近')
          }
        },
        {
          label: '操作',
          type: 'operate',
          width: 285
        }
      ],
      // 表格
      tableData: [
        {
          id: 1,
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
          children: [{
            id: 31,
            name: 'John Brown',
            age: 200,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
            children: [{
              id: 313333,
              name: 'John Brown',
              age: 200,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03',
              children: [{
                id: 3133333333,
                name: 'John Brown',
                age: 200,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
              }, {
                id: 2003344333,
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
              }]
            }, {
              id: 2003344,
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            }]
          }, {
            id: 200,
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          }]

        },
        {
          id: 2,
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'

        },
        {
          id: 3,
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          id: 4,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          id: 5,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          id: 6,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          children: [{
            id: 3133,
            name: 'John Brown',
            age: 200,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          }, {
            id: 20033,
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          }]
        },
        {
          id: 7,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          id: 8,
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],

      // 表格按钮
      button: [
        {
          value: '新增',
          type: 'text'
        },
        {
          value: '查看',
          type: 'text'
        },

        {
          value: '修改',
          type: 'text'
        },
        {
          value: '删除',

          type: 'text'
        }
      ]
    }
  },

  mounted () { },
  methods: {

    // 表格上的按钮的点击事件
    btnOperate (emit) {
      console.log(emit)
      // this.visible = !this.visible
    },

    // 分页切换
    currentChange (emit) {
      console.log(emit)
    },

    // 步骤条 下一步
    next () {
      if (this.active++ > 2) this.active = 0
    },

    // 打开消息框
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }

  }
}
</script>

<style  scoped>
/*以下只是范例上的样式*/
.example-border {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 150px;
  margin-top: 10px;
  font-size: 13px;
}

.example-margin-top {
  margin-top: 38px;
  display: block;
}

.example-title {
  font-size: 16px;
  font-weight: bold;
}

.example-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
