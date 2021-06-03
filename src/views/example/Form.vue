<template>
  <!--
  @Author: cyp
  @Description: 表单页模板页，主要说明如下：
   1、所有Form组件全部使用【eve-common-Form组件名称】包裹，可以统一修改Form组件样式；eg:eve-common-input
   2、新增el-form两列和三列布局，主要使用el-row进行个性化布局模拟类表格样式，严格按照demo进行拷贝代码，否则可能会出现样式错乱；
   3、修改Form个性化错误提示,由原先的【输入框底部显示】改成显示在【输入框右侧】提示Icon,移入Icon显示详细错误信息；eg:代码参考[自定义表单错误提示]
   4、修改Radio和checkBox选中样式，实心反转；
   5、新增Radio和checkBox纵向单选和横向单选样式；eg：使用.vertical控制
   6、新增简单上传文件组件;eg:具体逻辑参考源码
   7、Form的颜色样式取自base.scss文件；
   8、新增【全局性修改css】；
   9、新增动态增减【表格类表单】组件。eg:具体逻辑参考源码；
   10、新增 class="fixed-error"，错误icon显示位置;eg：参考[下拉单选]和[日期选择]两个表单样式
   特别说明：
    1、如需修改该模板页的个性化样式，建议自定义class包裹修改样式，不建议直接调整demo页写好的样式；
  @Date: 2021-5-31
  -->
  <eve-container class="eve-form" padding="20px">
    <h4 style="margin-bottom:12px;">两列表单</h4>
    <el-form ref="form" class="eve-common-form" :model="form" :rules="rules" label-width="200px">
      <el-row type="flex" class="form-content">
        <el-col :span="24">
          <div class="eve-form__title">两列表单标题-label设置为200px</div>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item class="fixed-error" label="必填校验" prop="requestText">
            <el-input class="eve-common-input" :size="size" v-model="form.requestText" />
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="24">
          <el-form-item label="长文本长文本长文本长文本长文本长文本长文本长文本长文本">
            <el-input
              class="eve-common-input"
              :size="size"
              v-model="form.longText"
              placeholder="请输入"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="24">
          <el-form-item label="文本域">
            <el-input
              class="eve-common-input"
              type="textarea"
              maxlength="200"
              :size="size"
              :rows="3"
              show-word-limit
              v-model="form.fieldText"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="密码框">
            <el-input
              class="eve-common-input"
              :size="size"
              v-model="form.passwordText"
              show-password
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="带清空">
            <el-input class="eve-common-input" :size="size" v-model="form.clearText" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="数字加减1">
            <el-input-number
              class="eve-common-input-number"
              v-model="form.numberText"
              :size="size"
              :min="1"
              :max="10"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="带单位">
            <el-input-number class="eve-common-input-number" :size="size" v-model="form.unitText" />
            <span class="eve-info-tip">万元</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="横向单选">
            <el-radio-group
              :size="size"
              class="eve-common-radio-group horizontal"
              v-model="form.horizontalRadio"
            >
              <el-radio label="1">单选按钮1</el-radio>
              <el-radio label="2">单选按钮2</el-radio>
              <el-radio label="3">单选按钮3</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="横向多选">
            <el-checkbox-group
              :size="size"
              class="eve-common-checkbox-group horizontal"
              v-model="form.horizontalCheckBox"
            >
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
              <el-checkbox label="复选框 C"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="纵向单选">
            <el-radio-group
              :size="size"
              class="eve-common-radio-group vertical"
              v-model="form.verticalRadio"
            >
              <el-radio label="1">单选按钮1</el-radio>
              <el-radio label="2">单选按钮2</el-radio>
              <el-radio label="3">单选按钮3</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="纵向多选" prop="verticalCheckBox">
            <el-checkbox-group
              :size="size"
              class="eve-common-checkbox-group vertical"
              v-model="form.verticalCheckBox"
            >
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
              <el-checkbox label="复选框 C"></el-checkbox>
            </el-checkbox-group>
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item class="fixed-error" label="下拉选择" prop="selectText">
            <el-select
              class="eve-common-select"
              :size="size"
              clearable
              v-model="form.selectText"
              placeholder="请选择"
            >
              <el-option label="黄金糕" value="选项1"></el-option>
              <el-option label="双皮奶" value="选项2"></el-option>
              <el-option label="蚵仔煎" value="选项3"></el-option>
              <el-option label="龙须面" value="选项4"></el-option>
              <el-option label="北京烤鸭" value="选项5"></el-option>
            </el-select>
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item class="fixed-error" label="下拉多选" prop="selectMultipleText">
            <el-select
              class="eve-common-select"
              :size="size"
              clearable
              v-model="form.selectMultipleText"
              multiple
              placeholder="请选择"
            >
              <el-option label="黄金糕" value="选项1"></el-option>
              <el-option label="双皮奶" value="选项2"></el-option>
              <el-option label="蚵仔煎" value="选项3"></el-option>
              <el-option label="龙须面" value="选项4"></el-option>
              <el-option label="北京烤鸭" value="选项5"></el-option>
            </el-select>
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="支持搜索下拉选择">
            <el-select
              class="eve-common-select"
              :size="size"
              filterable
              v-model="form.selectFilterText"
              placeholder="请选择"
            >
              <el-option label="黄金糕" value="选项1"></el-option>
              <el-option label="双皮奶" value="选项2"></el-option>
              <el-option label="蚵仔煎" value="选项3"></el-option>
              <el-option label="龙须面" value="选项4"></el-option>
              <el-option label="北京烤鸭" value="选项5"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="支持搜索下拉多选">
            <el-select
              class="eve-common-select"
              :size="size"
              filterable
              v-model="form.selectFilterMultipleText"
              multiple
              placeholder="请选择"
            >
              <el-option label="黄金糕" value="选项1"></el-option>
              <el-option label="双皮奶" value="选项2"></el-option>
              <el-option label="蚵仔煎" value="选项3"></el-option>
              <el-option label="龙须面" value="选项4"></el-option>
              <el-option label="北京烤鸭" value="选项5"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="级联下拉单选">
            <el-cascader
              class="eve-common-cascader"
              :size="size"
              v-model="form.cascaderText"
              :options="cascaderOption"
            ></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="级联下拉多选">
            <el-cascader
              class="eve-common-cascader"
              :size="size"
              :options="cascaderOption"
              :props="{ multiple: true }"
            ></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="开关">
            <el-switch class="eve-common-switch" :size="size" v-model="form.switchText"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="滑块">
            <el-slider class="eve-common-slider" :size="size" v-model="form.sliderText"></el-slider>
            <span class="eve-info-tip">{{form.sliderText}}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="日期选择" prop="dateText">
            <el-date-picker
              class="eve-common-date-picker"
              :size="size"
              v-model="form.dateText"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="时间选择">
            <el-time-select
              class="eve-common-time-select"
              v-model="form.timeText"
              :size="size"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
              placeholder="选择时间"
            ></el-time-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="月份选择">
            <el-date-picker
              class="eve-common-date-picker"
              :size="size"
              v-model="form.monthText"
              type="month"
              placeholder="选择月份"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item class="fixed-error" label="简单上传" prop="fileText">
            <el-input
              class="eve-common-input"
              :size="size"
              readonly
              v-model="form.fileText"
              placeholder="未选择任何文件"
            />
            <input ref="inputUploadFile" type="file" @change="uploadChange" style="display:none" />
            <el-button
              type="primary"
              :size="size"
              style="margin-left:12px;"
              @click="uploadTextBtn"
            >上传</el-button>
            <el-button :size="size" @click="clearUploadTextBtn">清空</el-button>
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="多文件上传">
            <el-upload
              class="eve-common-upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button :size="size" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上传带缩略图">
            <el-upload
              class="eve-common-upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button :size="size" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <h4 style="margin:12px 0;">三列表单</h4>
    <el-form ref="form" :model="form" :rules="rules" label-width="160px">
      <el-row type="flex" class="form-content">
        <el-col :span="24">
          <div class="eve-form__title">三列表单标题-label设置为160px</div>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="8">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="fixed-error" label="必填校验" prop="requestText">
            <el-input class="eve-common-input" :size="size" v-model="form.requestText" />
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="8">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="fixed-error" label="必填校验" prop="requestText">
            <el-input class="eve-common-input" :size="size" v-model="form.requestText" />
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="8">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="fixed-error" label="必填校验" prop="requestText">
            <el-input class="eve-common-input" :size="size" v-model="form.requestText" />
            <!-- 自定义表单错误提示 -->
            <template slot="error" slot-scope="scope">
              <el-tooltip class="eve-form-error-tip" :content="scope.error">
                <i class="el-icon-warning-outline"></i>
              </el-tooltip>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="form-content">
        <el-col :span="12">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="常规文本框">
            <el-input class="eve-common-input" :size="size" v-model="form.text" placeholder="请输入" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <h4 style="margin:12px 0;">动态增减</h4>
    <el-form :model="tableForm" :rules="tableRules" ref="tableForm">
      <el-table :data="tableForm.list" border style="width: 100%" :size="size">
        <el-table-column type="index" label="序号" min-width="20" align="lef"></el-table-column>
        <el-table-column label="日期" align="left" width="260">
          <template slot-scope="scope">
            <el-form-item
              class="fixed-error"
              :prop="'list.' + scope.$index + '.dateText'"
              :rules="tableRules.dateText"
            >
              <el-date-picker
                class="eve-common-date-picker"
                :size="size"
                v-model="scope.row.dateText"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
              <!-- 自定义表单错误提示 -->
              <template slot="error" slot-scope="scope">
                <el-tooltip class="eve-form-error-tip" :content="scope.error">
                  <i class="el-icon-warning-outline"></i>
                </el-tooltip>
              </template>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="姓名" align="left" class-name="must">
          <template slot-scope="scope">
            <el-form-item
              class="fixed-error"
              :prop="'list.' + scope.$index + '.name'"
              :rules="tableRules.name"
            >
              <el-input class="eve-common-input" :size="size" v-model="scope.row.name" />
              <!-- 自定义表单错误提示 -->
              <template slot="error" slot-scope="scope">
                <el-tooltip class="eve-form-error-tip" :content="scope.error">
                  <i class="el-icon-warning-outline"></i>
                </el-tooltip>
              </template>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="地址" align="left">
          <template slot-scope="scope">
            <el-form-item>
              <el-input class="eve-common-input" :size="size" v-model="scope.row.address" />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column align="left" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="delRow(scope.row,scope.$index)" :size="size">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin:12px auto;text-align:center;">
        <el-button type="primary" :size="size" @click="addRow()">新增一行</el-button>
      </div>
    </el-form>
  </eve-container>
</template>
<script>

import { cascaderOption } from './cascader'
export default {
  name: 'Form',
  data () {
    return {
      size: 'mini',
      cascaderOption, // 级联option数据
      // 测试表单字段
      form: {
        text: '',
        requestText: '',
        longText: '',
        fieldText: '',
        passwordText: '',
        clearText: '',
        numberText: '',
        unitText: '',
        horizontalRadio: '1',
        horizontalCheckBox: ['复选框 A', '复选框 B'],
        verticalRadio: '1',
        verticalCheckBox: ['复选框 A', '复选框 B'],
        selectText: '选项1',
        selectMultipleText: ['选项1', '选项2'],
        selectFilterText: '选项1',
        selectFilterMultipleText: ['选项1', '选项2'],
        cascaderText: '',
        cascaderMultipleText: [],
        switchText: true,
        sliderText: 50,
        dateText: '',
        timeText: '',
        monthText: '',
        fileText: ''
      },
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      rules: {
        requestText: [
          { required: true, message: '必填项', trigger: 'blur' }
        ],
        verticalCheckBox: [
          { required: true, message: '必填项', trigger: 'change' }
        ],
        selectText: [
          { required: true, message: '必填项', trigger: 'change' }
        ],
        selectMultipleText: [
          { required: true, message: '必填项', trigger: 'change' }
        ],
        dateText: [
          { required: true, message: '必填项', trigger: 'change' }
        ],
        fileText: [
          { required: true, message: '必填项', trigger: 'change' }
        ]
      },

      tableForm: {
        list: [
          // {
          //   isReadOnly: false,
          //   dateText: '',
          //   name: '',
          //   address: ''
          // }
        ]
      },
      listTmpl: [],
      tableRules: {
        dateText: [
          { required: true, message: '必填项', trigger: 'change' }
        ],
        name: [
          { required: true, message: '必填项', trigger: 'blur' }
        ]
      }

    }
  },
  mounted () { },
  methods: {
    // 普通上传[start]-仅实现静态演示上传效果
    uploadTextBtn () {
      this.$refs.inputUploadFile.click()
    },
    uploadChange () {
      this.form.fileText = this.$refs.inputUploadFile.files[0].name
    },
    clearUploadTextBtn () {
      this.form.fileText = ''
    },
    // 普通上传[end]-仅实现静态演示上传效果

    // 复杂图片上传[end]-仅实现静态演示上传效果
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // 复杂图片上传[end]-仅实现静态演示上传效果

    // 动态增减表格表单
    addRow () {
      this.$refs.tableForm.validate((valid) => {
        if (valid) {
          this.tableForm.list.push({
            isReadOnly: false,
            dateText: '',
            name: '',
            address: ''
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    delRow (row, index) {
      this.tableForm.list.splice(index, 1)
    }

  }
}
</script>
<style lang="scss">
// 本地主题变量（调试）
@import '@/assets/style/base.scss';

//表格类表单[边框]颜色-d9ecff
$tableBorderColor: $--color-primary-light-8;

//form-item__label背景色-ecf5ff
$LabelbgColor: $--color-primary-light-9;
//form-item__label文字颜色（常规文字）- #606266
$LabelColor: $--color-text-regular;
//form-item__label文字大小 (正文小)-13px
$LabelFontSize: $--font-size-small;
//form-item__label边距设置
$LabelPadding: 3px 12px 3px 4px;

//form-item__content边距设置
$ContentPadding: 3px 30px 3px 4px;

//eve-common-input高度
$eveCommonInputHeight: 26px; //mini为28px,目前设置比mini还小
//eve-common-input内部边距
$eveCommonInputPadding: 0 4px;
//eve-common-input prefix、suffix图标距离文字间距
$eveCommonInputPrefixSuffix: 30px;

.eve-form {
  /*********表单[start]*********/
  .form-content {
    border: 1px solid $tableBorderColor;
    //解決border重叠只显示1px
    margin: 0px -1px -1px 0px;
  }
  //表单的标题属性
  .eve-form__title {
    height: 32px;
    line-height: 32px;
    padding-left: 16px;
    font-size: 14px;
    background-color: $LabelbgColor;
    font-weight: bolder;
  }
  //带单位描述css
  .eve-info-tip {
    font-size: $--font-size-extra-small;
    color: $--color-info;
    margin-left: 20px;
  }

  .el-form-item {
    margin-bottom: 0; //去掉form-item默认的底边距
    height: 100%; //很重要，不能去掉，否则form-label无法随form-content的高度变化而变化
    .el-form-item__label {
      background-color: $LabelbgColor;
      color: $LabelColor;
      font-size: $LabelFontSize;
      padding: $LabelPadding;
      height: 100%;
      line-height: 1; //元素本身的字体大小 设置行高
      //label属性右对齐垂直居中显示
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-right: 1px solid $tableBorderColor;
    }
    .el-form-item__content {
      position: relative;
      line-height: 1px;
      padding: $ContentPadding;
      height: 100%;
      //输入框有显示单位文字属性，垂直居中对齐
      display: flex;
      align-items: center;
    }
    .eve-form-error-tip {
      color: $--color-danger;
      margin-left: 5px;
    }
    &.fixed-error {
      /***重***自定义表单错误提示***点***/
      .eve-form-error-tip {
        right: 3px;
        //垂直居中css
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  /*********常规input的封装[start]*********/
  .eve-common-input {
    &.el-input {
      .el-input__inner {
        //input内边距
        padding: $eveCommonInputPadding;
        //input高度
        height: $eveCommonInputHeight;
        line-height: 1;
      }
      //改变输入框的默认内边距，前后图标的默认左右边距需要重新设置一下，否则出现图标的时候会出现css异常
      .el-input--prefix .el-input__inner,.el-input--suffix .el-input__inner {
        padding-left: $eveCommonInputPrefixSuffix;
      }
      .el-input__icon {
        line-height: 1;
      }
    }
    //多行文本框
    &.el-textarea {
      //多行文本框内边距
      .el-textarea__inner {
        padding: $eveCommonInputPadding;
      }
      //多行文本框的【计数属性】绝对定位-根据实际情况微调
      .el-input__count {
        bottom: 10px;
      }
    }
  }

  /*********InputNumber 计数器[start]*********/
  .eve-common-input-number {
    &.el-input-number {
      line-height: 2; //左右按钮根据行高设置
      .el-input__inner {
        //input内边距
        padding: $eveCommonInputPadding;
        //input高度
        height: $eveCommonInputHeight;
        line-height: 1;
      }
    }
  }

  /*********DatePicker 日期选择器[start]*********/
  .eve-common-date-picker {
    overflow: hidden;
    .el-input__inner {
      //input内边距
      padding: $eveCommonInputPadding;
      //input高度
      height: $eveCommonInputHeight;
      line-height: 1;
    }

    //改变输入框的默认内边距，前后图标的默认左右边距需要重新设置一下，否则出现图标的时候会出现css异常
    &.el-input--prefix .el-input__inner,.el-input--suffix .el-input__inner {
      padding-left:$eveCommonInputPrefixSuffix;
    }
    .el-input__icon {
      line-height: $eveCommonInputHeight;
    }
  }

  /*********timePicker 时间选择器[start]*********/
  .eve-common-time-select {
    overflow: hidden;
    .el-input__inner {
      //input内边距
      padding: $eveCommonInputPadding;
      //input高度
      height: $eveCommonInputHeight;
      line-height: 1;
    }
    //改变输入框的默认内边距，前后图标的默认左右边距需要重新设置一下，否则出现图标的时候会出现css异常
    &.el-input--prefix .el-input__inner,.el-input--suffix .el-input__inner {
      padding-left: $eveCommonInputPrefixSuffix;
    }
    .el-input__icon {
      line-height: $eveCommonInputHeight;
    }
  }

  /*********Radio 单选框[start]*********/
  .eve-common-radio-group {
    //横向属性
    &.horizontal {
      padding: 5px 0;
    }
    //纵向属性-设置为块级元素，并设置上下间距
    &.vertical .el-radio {
      padding: 4px 0;
      display: block;
    }
    //radio选中字体不跟随变化（常规文字）-#606266
    .el-radio__input.is-checked + .el-radio__label {
      color: $--color-text-regular;
    }
    .el-radio__label {
      font-size: $--font-size-small;
      padding-left: 4px;
    }

    //radio由[实心白]改为[实心蓝]效果
    .el-radio__input.is-checked .el-radio__inner {
      background: #fff;
    }
    .el-radio__inner::after {
      width: 5px;
      height: 5px;
      background-color: $--color-primary;
    }
  }

  /*********checkbox复选框[start]*********/
  .eve-common-checkbox-group {
    //纵向属性
    &.vertical .el-checkbox {
      padding: 4px 0;
      display: block;
    }
    .el-checkbox__label {
      font-size: $--font-size-small;
      padding-left: 4px;
    }

    //checkbox由[白色勾]改为[蓝色勾]效果
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: #fff;
      //三级边框-#ebeef5
      border-color: 1px solid $--border-color-lighter;
    }
    .el-checkbox__inner::after {
      border-color: $--color-primary;
    }
    //checkbox选中字体不跟随变化
    .el-checkbox__input.is-checked + .el-checkbox__label {
      //常规文字-#606266
      color: $--color-text-regular;
    }
  }

  /*********select下拉框[start]*********/
  .eve-common-select {
    &.el-select {
      width: 100%;
      .el-input__inner {
        //input内边距
        padding: $eveCommonInputPadding;
        //input高度
        height: $eveCommonInputHeight;
        line-height: 1;
      }
    }
  }

  /*********select下拉复选框[start]*********/
  .eve-common-cascader {
    &.el-cascader {
      width: 100%;
      .el-input__inner {
        //input内边距
        padding: $eveCommonInputPadding;
        //input高度
        height: $eveCommonInputHeight;
        line-height: 1;
      }
    }
  }

  /*********slider滑块[start]*********/
  .eve-common-slider {
    &.el-slider {
      width: 100%;
      //减小滑块的边距
      .el-slider__runway {
        margin: 11px 0;
      }
    }
  }

  /*********upload图片上传[start]*********/
  .eve-common-upload {
    padding: 0px 0 12px 0;
    line-height: 1;
    .el-upload-list--picture .el-upload-list__item {
      //三级边框-#ebeef5
      border: 1px solid $--border-color-lighter;
    }
  }
}

/**********全局性修改[start]**********/

//超小版本下拉单选弹出框样式-高度和边距取input输入框的高度和边距变量
.el-select-dropdown__item {
  height: $eveCommonInputHeight;
  line-height: $eveCommonInputHeight;
  font-size: $--font-size-small;
  padding: $eveCommonInputPadding;
}
//超小版本下拉多选弹出框样式-高度和边距取input输入框的高度和边距变量
.el-cascader-node {
  height: $eveCommonInputHeight;
  line-height: $eveCommonInputHeight;
  font-size: $--font-size-small;
  padding: $eveCommonInputPadding;
  .el-cascader-node__label {
    padding: $eveCommonInputPadding;
  }
}

//表格th label新增必填项*号
.el-table th.must > .cell:before {
  content: '* ';
  color: $--color-danger;
}

/**********全局性修改[end]**********/
</style>
