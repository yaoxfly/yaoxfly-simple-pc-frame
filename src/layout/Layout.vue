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
          :data="menuData"
          :collapse="collapse"
          :width="width"
          ref="menu"
        >
        </eve-menu>
      </section>

      <section class="right">
        <eve-breadcrumb ref="breadcrumd" :menu="menuData" class="bred">
        </eve-breadcrumb>
        <!-- <eve-tag-views ref="tagView" > </eve-tag-views> -->
        <eve-main>
          <router-view />
        </eve-main>
      </section>
    </div>
  </div>
</template>

<script>
import { routes } from '../router/index'
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
          value: require('@/assets/image/header/info.png')
        },
        {
          type: 'icon',
          value: require('@/assets/image/header/head_sculpture.png'),
          number: 99// 在图标右上方添加number
        },
        {
          value: '李四',
          dialog: true // 设置这个属性后,点击这个按钮会弹出对话框,默认是false
        }
      ],
      // 菜单数据
      menuData: [],
      // 菜单宽度
      width: 200,
      // 是否收缩
      collapse: false
    }
  },

  mounted () {
    this.getMenu()
    console.log(this.$store.state.test.modules)
  },

  methods: {
    rightContentButton (emit) {
      console.log(emit)
    },

    navButton (emit) {
      console.log(emit, 11)
    },

    // /** @description  根据路由获取菜单数据(only二级)
    //  * @author yx
    //  */
    // getMenu () {
    //   const arr = routes.filter(item => item.name === 'Layout')
    //   const route = JSON.parse(JSON.stringify(arr[0].children))
    //   const tempMenuData = []
    //   route.forEach(element => {
    //     const { meta: { menu } = {} } = element || {}
    //     const item = {
    //       icon: element.icon,
    //       text: element.text,
    //       type: 'item',
    //       path: element.path
    //     }
    //     if (menu) {
    //       console.log(menu, 55555)
    //       menu.children = menu.children || []
    //       menu.children.push(item)
    //       tempMenuData.push(menu)
    //     } else {
    //       tempMenuData.push(item)
    //     }
    //   })
    //   const keyMap = {}
    //   tempMenuData.forEach(el => {
    //     if (keyMap[el.text]) {
    //       keyMap[el.text].children.push(...el.children)
    //     } else {
    //       keyMap[el.text] = el
    //     }
    //   })
    //   const menuData = []
    //   Object.values(keyMap).forEach(el => [
    //     menuData.push(el)
    //   ])
    //   this.menuData = menuData
    // },

    /** @description  根据路由获取菜单数据(三级)
   * @author yx
   */
    getMenu () {
      const arr = routes.filter(item => item.name === 'Layout')
      const route = JSON.parse(JSON.stringify(arr[0].children))
      const tempMenuData = []
      let menuData = {}
      route.forEach(element => {
        const { meta: { menu } = {} } = element || {}
        const item = {
          icon: element.icon,
          text: element.text,
          type: 'item',
          path: element.path
        }
        if (menu) {
          if (menu.length > 1) {
            menuData = menu[0]
            menuData.children = menuData.children || []
            menu[1].children = menu[1].children || []
            menu[1].children.push(item)
            menuData.children.push(menu[1])
          } else {
            menuData = menu[0]
            menuData.children = menuData.children || []
            menuData.children.push(item)
          }
          tempMenuData.push(menuData)
        } else {
          tempMenuData.push(item)
        }
      })

      // console.log(tempMenuData, 111)
      // 二级处理 一级: { 二级: [], s级: [] }, 一级2: { 二级: [], e: [] }
      const keyMap = {}
      tempMenuData.forEach(el => {
        if (keyMap[el.text]) {
          keyMap[el.text].children.push(...el.children)
        } else {
          keyMap[el.text] = el
        }
      })

      // 新逻辑 明天改
      // tempMenuData.forEach(el => {
      //   if (keyMap[el.text]) {
      //     el.children.forEach(res => {
      //       console.log(res, 1, keyMap[el.text][res.text])
      //       // keyMap[el.text][res.text].push(...res.children)

      //       if (keyMap[el.text][res.text]) {
      //         keyMap[el.text][res.text].children.push(...res.children)
      //       } else {
      //         keyMap[el.text][res.text] = {}
      //         keyMap[el.text][res.text] = res
      //       }
      //     })
      //   } else {
      //     if (el.children) {
      //       keyMap[el.text] = el
      //       el.children.forEach(res => {
      //         // console.log(res, 333)
      //         keyMap[el.text][res.text] = keyMap[el.text][res.text] || {}
      //         keyMap[el.text][res.text] = res
      //       })
      //     } else {
      //       keyMap[el.text] = el
      //     }
      //   }
      // })

      // 变成菜单
      const menuDatas = []
      Object.values(keyMap).forEach(el => {
        menuDatas.push(el)
      })
      this.menuData = menuDatas
    }

  }
}

</script>
<style>
.layout__main {
  display: flex;
}
</style>
