<template>
  <div class="portfolio-container">
    <back />
    <images :data="data"/>
  </div>
</template>

<script>
import Back from './components/back'
import Images from './components/images'
export default {
  name: 'Portfolio',
  components: {
    Back,
    Images
  },
  data() {
    return {
      portfolio: {
        xiaoweiCompany: {
          content: [
            {
              img: '/static/images/xiaowei-company/首页.jpg',
              text: `项目名称：小为公司官网\r\n技术栈：vue、vue-router、vue-meta、axios、element-ui、百度地图、预渲染。\r\n说明：官网由首页、小为产品、解决方案、商业合作、关于小为、联系我们几个部分组成。路由模式采用history，seo方案为预渲染。`
            },
            {
              img: '/static/images/xiaowei-company/产品-电梯.jpg'
            },
            {
              img: '/static/images/xiaowei-company/商务合作.jpg'
            },
            {
              img: '/static/images/xiaowei-company/联系我们.jpg',
              text: '用百度地图进行位置标记。'
            }
          ]
        },
        xiaoweiDataDisplayV4: {
          content: [
            {
              img: '/static/images/xiaowei-data-display-v4/总首页.png',
              text: `项目名称：小为数据展示平台（第四版）\r\n技术栈：vue、vuex、vue-router、axios、element-ui、vue-element-admin、echarts。\r\n说明：数据可视化项目，为了展示设备相关数据。项目结构为：总首页->场景首页->场景详情页。\r\n图片说明：这是总首页。周边图表的数据和地图选中地区是联动的。如果不选中，则显示整体数据，否则为特定点数据。图表是echarts绘制，地图采用echarts结合geojson绘制。`
            },
            {
              img: '/static/images/xiaowei-data-display-v4/电梯首页.png',
              text: `这是电梯场景的首页。与总首页一样，数据都是联动的。地图层级下钻，到最后一级（电梯：小区、饮用水：小区、地表水：区县、井盖：街道）的时候再点击则会进入详情页。`
            },
            {
              img: '/static/images/xiaowei-data-display-v4/电梯详情.png',
              text: `这是电梯详情页。左边为设备列表，右边为设备详情。列表部分可以在不同的状态间切换。详情部分由最新数据、场景信息、设备信息、数据分析、历史数据组成。`
            },
            {
              img: '/static/images/xiaowei-data-display-v4/电梯详情2.png',
              text: `这里的右侧就是数据分析和历史数据。`
            }
          ]
        },
        xiaoweiBackendV2: {
          content: [
            {
              img: '/static/images/xiaowei-backend-v2/菜单管理.png',
              text: `项目名称：小为设备管理系统（第二版）\r\n技术栈：vue、vuex、vue-router、axios、element-ui、vue-element-admin。\r\n项目说明：这个设备管理系统（或者说后台管理系统都可以）是为了管理第三方公司和设备的。\r\n图片说明：这是菜单管理。可以进行编辑新增的操作。权限部分分为两块：菜单和按钮。这两部分都和路由挂钩。菜单部分的唯一性识别码是name字段（和路由的name匹配），按钮的识别码是router字段（挂载到哪个路由下面）。`
            },
            {
              img: '/static/images/xiaowei-backend-v2/组织管理.png',
              text: `这里是组织管理。`
            },
            {
              img: '/static/images/xiaowei-backend-v2/组织管理功能授权.png',
              text: `对第三方组织（公司）进行功能授权。`
            },
            {
              img: '/static/images/xiaowei-backend-v2/组织管理设备授权.png',
              text: `给第三方组织分配设备。可以单个设备添加和移除，也可以批量操作。`
            },
            {
              img: '/static/images/xiaowei-backend-v2/账号管理.png'
            },
            {
              img: '/static/images/xiaowei-backend-v2/地区管理.png'
            }
          ]
        },
        vortexBackend: {
          content: [
            {
              img: '/static/images/vortex-backend/nav.jpg',
              text: `项目名称：全循环智能分类生态管理系统\r\n技术栈：react、dva、echarts、bizcharts、zrender等。\r\n项目说明：这个项目是纳故环保后台管理系统。系统包括一般curd、报表、看板等类型页面。\r\n图片说明：这是导航页面。指向系统内部十几个子系统。`
            },
            {
              img: '/static/images/vortex-backend/report.jpg',
              text: `这是一个报表页面。主要用到的是 echarts 和 antd 的表格组件。`
            },
            {
              img: '/static/images/vortex-backend/three-three-board.jpg',
              text: `这是个动态旋转的看板页面。通过 zrender 绘制图形。图形的位置则根据当前帧计算，然后将计算的结果给 zrender。`
            }
          ]
        },
        vortexWeapp: {
          content: [
            {
              img: '/static/images/vortex-weapp/home.jpg',
              text: `项目名称：掌尚垃分\r\n技术栈：微信小程序。\r\n项目说明：这个小程序是垃圾分类的居民端。居民可以在这个小程序里查看垃圾分类的情况，以及通过投放垃圾获取的积分购买商品。`
            },
            {
              img: '/static/images/vortex-weapp/answer.jpg',
              text: `居民可以参加分类闯关活动答题抽奖以获取积分。`
            },
            {
              img: '/static/images/vortex-weapp/dict.jpg',
              text: `根据居民所在位置呈现不同城市的垃圾分类标准。按住搜索框右侧录音按钮可以语音搜索。这里用到了小程序语音插件——WechatSI`
            },
            {
              img: '/static/images/vortex-weapp/mall.jpg',
              text: `这里是积分商城，包含总公司的商品和当地项目公司的商品。居民可以在此购买商品。`
            }
          ]
        },
        reader: {
          content: [
            {
              img: '/static/images/reader2/阅读页.jpg',
              text: `项目名称：享阅·阅读器\r\n技术栈：vue、element-ui、canvas、Web Worker、postMessage、axios、localforage、clipboard。\r\n项目说明：这是个用 canvas 实现的 txt 阅读器。分页排版是根据 measureText 测量结果计算的。`
            },
            {
              img: '/static/images/reader2/选择.jpg',
              text: `因为排版都是计算出来的，根据事件位置计算页面哪个部分需要被选中当然是可以的。`
            },
            {
              img: '/static/images/reader2/设置搜索目录.png',
              text: `支持文本设置、搜索、自动分章。`
            }
          ]
        },
        poemV3: {
          content: [
            {
              img: '/static/images/poem-v3/首页.png',
              text: `项目名称：诗词\r\n技术栈：vue、vue-meta、vue-router、axios。\r\n项目说明：这是个简洁的诗词网站。去芜存菁，只剩诗词。\r\n图片说明：这是首页。因为数据库里的诗词基本不会再增加，为了更好地展示，所以首页的诗词列表是从25万首诗词中随机选择的。右侧的作者也是。`
            },
            {
              img: '/static/images/poem-v3/搜索结果.png',
              text: `后台会根据关键字从三个维度检索--作者、标题、内容。当然，为了加快处理速度和节省流量，只会检索当前tab的内容。`
            },
            {
              img: '/static/images/poem-v3/诗词.png',
              text: `诗词详情页没有过多的内容，只有诗词内容本身。`
            }
          ]
        },
        ele: {
          content: [
            {
              img: '/static/images/ele/首页.jpg',
              text: `项目名称：饿了么(仿)\r\n技术栈：vue、vue-router、axios。\r\n项目说明：用vue开发的移动端项目，使用了flex弹性布局。实现了商品列表、评价、商家、优惠信息、商品详情等页面。`
            },
            {
              img: '/static/images/ele/优惠信息.jpg'
            },
            {
              img: '/static/images/ele/商品.jpg'
            },
            {
              img: '/static/images/ele/评论.jpg'
            },
            {
              img: '/static/images/ele/商家.jpg'
            }
          ]
        }
      }
    }
  },
  computed: {
    data() {
      let temp = []
      console.log(this.$route.params.project)
      switch (this.$route.params.project) {
        case 'xiaowei-company':
          temp = this.portfolio.xiaoweiCompany.content
          break
        case 'xiaowei-backend':
          temp = this.portfolio.xiaoweiBackendV2.content
          break
        case 'xiaowei-data-display':
          temp = this.portfolio.xiaoweiDataDisplayV4.content
          break
        case 'vortex-backend':
          temp = this.portfolio.vortexBackend.content
          break
        case 'vortex-weapp':
          temp = this.portfolio.vortexWeapp.content
          break
        case 'reader':
          temp = this.portfolio.reader.content
          break
        case 'poem':
          temp = this.portfolio.poemV3.content
          break
        case 'ele':
          temp = this.portfolio.ele.content
          break
        default:
          break
      }
      return temp
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-container {
  width: 100%;
  margin: 0 auto;
  min-height: 100%;
  background: seashell;
}
</style>
