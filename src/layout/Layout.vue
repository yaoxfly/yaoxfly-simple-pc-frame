<template>
  <div class="layout">
    <eve-header
      title="eve"
      sub-title="基础框架"
      :logo="require('@/assets/logo.png')"
      @nav-button="navButton"
      @right-content-button="rightContentButton"
      ref="header"
      :navigationButton="navigationButton"
      :right-content="rightContent"
    >
    </eve-header>

    <div class="layout__main">
      <section class="">
        <eve-menu
          @select="select"
          :data="data"
          :collapse="collapse"
          :width="width"
          ref="menu"
        >
        </eve-menu>
      </section>

      <section class="right">
        <eve-breadcrumb ref="breadcrumd" :menu="data" class="bred">
        </eve-breadcrumb>
        <!-- <eve-tag-views ref="tagView" @close="close"> </eve-tag-views> -->
        <eve-main>
          <router-view />
        </eve-main>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      // header中间按钮数据
      navigationButton: [{
        path: 'dialog', // 唯一key值
        type: 'item', // 最底层的菜单-没有子菜单的
        text: '主页'// 菜单名
      },
      {
        path: 'dialog1',
        type: 'item',
        text: '行政许可'
      },
      {
        path: 'dialog2',
        type: 'item',
        text: '市场监管'
      },
      {
        path: 'dialog3',
        type: 'item',
        text: '行政执法'
      },
      {
        path: 'dialog4',
        type: 'item',
        text: '知识产权'
      },
      {
        path: 'dialog5',
        type: 'item',
        text: '质量监管'
      },
      {
        path: 'http://www.baidu.com1',
        type: 'item',
        text: '业务应用'
      },
      {
        path: 'http://www.baidu.com测试3',
        type: 'submenu', // 有子菜单的
        text: '应用支撑',
        children: [
          {
            path: 'http://www.baidu.com3331',
            type: 'item',
            text: '测试1'

          },
          {
            path: 'http://www.baidu.com3332',
            type: 'item',
            text: '测试2'

          },
          {
            path: 'http://www.baidu.com3333',
            type: 'submenu',
            text: '测试3',
            children: [
              {
                path: 'http://www.baidu.com3331',
                type: 'item',
                text: '测试1'

              },
              {
                path: 'http://www.baidu.com3332',
                type: 'item',
                text: '测试2'

              },
              {
                path: 'http://www.baidu.com3333',
                type: 'item',
                text: '测试3'
              }
            ]
          }
        ]
      }],

      // 右边内容数据
      rightContent: [
        {
          type: 'icon',
          value: require('@/assets/image/header/help.png')
        },
        {
          type: 'icon',
          value: require('@/assets/image/header/info.png'),
          number: 8 // 在图标右上方添加number
        },
        {
          type: 'icon',
          value: require('@/assets/image/header/head_sculpture.png')
        },
        {
          value: '李四',
          dialog: true // 设置这个属性后,点击这个按钮会弹出对话框,默认是false
        }
      ],

      // 菜单数据
      data: [
        {
          type: 'submenu',
          text: '关于',
          icon: 'el-icon-location',
          children: [
            {
              path: 'about',
              type: 'item', // 子菜单
              icon: 'el-icon-location',
              text: '关于'
            }
          ]
        },
        {
          path: '/',
          type: 'item',
          icon: 'el-icon-location',
          text: '开始'
        },
        {

          type: 'submenu',
          text: '测试',
          icon: 'el-icon-location',
          children: [
            {

              type: 'submenu', // 子菜单
              icon: 'el-icon-location',
              text: '测试1-1',
              children: [
                {
                  path: '/home',
                  type: 'item', // 子菜单
                  icon: 'el-icon-location',
                  text: '主页'
                }
              ]
            }
          ]
        }
      ],
      // 菜单宽度
      width: 200,
      // 是否收缩
      collapse: false
    }
  },
  methods: {
    rightContentButton (emit) {
      console.log(emit)
    },
    navButton (emit) {
      console.log(emit, 11)
    },
    select () {

    },
    close () {

    }
  }
}
</script>

<style  >
.layout__main {
  display: flex;
}
</style>
