<template>
  <div class="body">
    <section class="skill">
      <div class="title">
        <h2><svg-icon icon-class="skill" class="svg" />Skill</h2>
        <div class="filter-list">
          <label
            class="filter"
            :class="{'no-active':!skill.lang}"
          >
            <svg-icon icon-class="hook" class="svg" />
            Language
            <input
              type="checkbox"
              v-model="skill.lang"
            >
          </label>
          <label
            class="filter"
            :class="{'no-active':!skill.lib}"
          >
            <svg-icon icon-class="hook" class="svg" />
            Library&Framework
            <input
              type="checkbox"
              v-model="skill.lib"
            >
          </label>
          <label
            class="filter"
            :class="{'no-active':!skill.tool}"
          >
            <svg-icon icon-class="hook" class="svg" />
            Tool
            <input
              type="checkbox"
              v-model="skill.tool"
            >
          </label>
        </div>
      </div>

      <transition-group
        name="skill-list"
        tag="ul"
        class="skill-list"
      >
        <li
          v-for="(item,index) in skill_list"
          :key="index + 1"
          v-show="item.filter"
        >
          <svg-icon :icon-class="item.icon" class="svg" /><span v-text="item.text" />
        </li>
      </transition-group>
    </section>
    <section class="experence">
      <div class="title">
        <h2><svg-icon icon-class="experence" class="svg" />Experence</h2>
        <div class="filter-list">
          <label
            class="filter"
            :class="{'no-active':!experence.work}"
          ><svg-icon icon-class="hook" class="svg" />
            Work
            <input
              type="checkbox"
              v-model="experence.work"
            >
          </label>
          <label
            class="filter"
            :class="{'no-active':!experence.study}"
          ><svg-icon icon-class="hook" class="svg" />
            Study
            <input
              type="checkbox"
              v-model="experence.study"
            >
          </label>
        </div>
      </div>
      <transition-group
        name="experence-list"
        tag="ul"
        class="experence-list"
      >
        <li
          v-for="(item,index) in experence_list"
          :key="index + 1"
          v-show="item.filter"
        >
          <header>
            <h3
              class="ex-title"
              v-text="item.title"
            ></h3>
            <p
              class="ex-time"
              v-text="item.time"
            ></p>
          </header>
          <hr>
          <p
            class="ex-location"
            v-text="item.location"
          ></p>
          <p
            class="ex-ex"
            v-html="item.ex"
          ></p>
        </li>
      </transition-group>
    </section>
    <section class="work">
      <div class="title">
        <h2><svg-icon icon-class="portfolio" class="svg" />Portfolio</h2>
        <div class="filter-list">
          <label
            class="filter"
            :class="{'no-active':!work.company}"
          ><svg-icon icon-class="hook" class="svg" />
            Company
            <input
              type="checkbox"
              v-model="work.company"
            >
          </label>
          <label
            class="filter"
            :class="{'no-active':!work.self}"
          ><svg-icon icon-class="hook" class="svg" />
            Self
            <input
              type="checkbox"
              v-model="work.self"
            >
          </label>
        </div>
      </div>
      <transition-group
        name="work-list"
        tag="ul"
        class="work-list"
      >
        <li
          v-for="(item,index) in work_list"
          :key="index + 1"
        >
          <header class="header">
            <h3 class="title">{{ item.title }}</h3>
            <span class="time">{{ item.time }}</span>
          </header>
          <hr />
          <p class="belong">{{ item.belong }}</p>
          <div class="content">
            <p class="item-name">项目描述：</p>
            <p class="item-content" v-html="item.description"></p>
          </div>
          <div class="content">
            <p class="item-name">责任描述：</p>
            <p class="item-content" v-html="item.duty"></p>
          </div>
        </li>
      </transition-group>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skill: {
        lang: true,
        tool: true,
        lib: true
      },
      experence: {
        work: true,
        study: true
      },
      work: {
        company: true,
        self: true
      }
    }
  },
  computed: {
    skill_list: function() {
      return [
        {
          icon: 'html5',
          text: 'HTML',
          filter: this.skill.lang
        },
        {
          icon: 'css3',
          text: 'CSS',
          filter: this.skill.lang
        },
        {
          icon: 'javascript',
          text: 'JavaScript',
          filter: this.skill.lang
        },
        {
          icon: 'jquery',
          text: 'jQuery',
          filter: this.skill.lib
        },
        {
          icon: 'vuejs',
          text: 'Vue',
          filter: this.skill.lib
        },
        {
          icon: 'element-ui',
          text: 'element-ui',
          filter: this.skill.lib
        },
        {
          icon: 'ECharts',
          text: 'ECharts',
          filter: this.skill.lib
        },
        {
          icon: 'react',
          text: 'React.js',
          filter: this.skill.lib
        },
        {
          icon: 'less',
          text: 'Less',
          filter: this.skill.tool
        },
        {
          icon: 'scss',
          text: 'Scss',
          filter: this.skill.tool
        },
        {
          icon: 'webpack',
          text: 'webpack',
          filter: this.skill.tool
        },
        {
          icon: 'github',
          text: 'git',
          filter: this.skill.tool
        },
        {
          icon: 'gimp',
          text: 'gimp',
          filter: this.skill.tool
        }
      ]
    },
    experence_list: function() {
      return [
        {
          title: '学生',
          time: '2012-2016',
          location: '盐城师范学院',
          ex: '就读于盐城师范学院物理系。其间自学html、css、JavaScript。',
          filter: this.experence.study
        },
        {
          title: '前端工程师',
          time: '2016.11-2018.7',
          location: '苏州志高装潢设计工程有限公司',
          ex: '公司网站页面设计、开发及维护。',
          filter: this.experence.work
        },
        {
          title: '前端工程师',
          time: '2018.8-2019.4',
          location: '小为智能科技有限公司',
          ex: '1. 官网的开发。<br />2. 数据展示平台的开发。<br />3. 后台管理系统的开发。',
          filter: this.experence.work
        }
      ]
    },
    work_list: function() {
      return [
        {
          title: '小为官网',
          time: '2019.03-2019.03',
          belong: '小为智能科技有限公司',
          description: `小为官方网站<br /><br />技术栈：vue、vue-router、vue-meta、axios、element-ui、百度地图、预渲染。<br /><br />官网由首页、小为产品、解决方案、商业合作、关于小为、联系我们几个部分组成。路由模式采用history，seo方案为预渲染。<br /><br />地址：www.xiaowei-tech.com`,
          duty: `负责项目框架的搭建、页面的编写、服务端nginx配置、预渲染。<br /><br />页面负责小为产品、商务合作、联系我们三个版块。`
        },
        {
          title: '小为数据展示平台',
          time: '2019.02-2019.03',
          belong: '小为智能科技有限公司',
          description: `技术栈：vue、vuex、vue-router、axios、element-ui、vue-element-admin、echarts。<br /><br />数据可视化项目，为了展示设备相关数据。项目结构为：总首页->场景首页->场景详情页。<br /><br />整个项目基本都是联动的。地图根据不同的场景可以下钻不同的层级，同时周边的图表根据地图层级和地点变化。首页和详情页的数据都通过轮询获取。大部分数据都使用 vuex 管理。`,
          duty: `负责框架的搭建、整体布局和部分页面的编写。<br /><br />页面包括头部导航栏、各场景地图、地图周边数据对接、详情页设备列表、历史数据、水质和井盖最新数据、设备信息、场景信息、数据分析等。`
        },
        {
          title: '设备管理系统',
          time: '2019.01-2019.02',
          belong: '小为智能科技有限公司',
          description: `技术栈：vue、vuex、vue-router、axios、element-ui、vue-element-admin。<br /><br />这个设备管理系统（或者说后台管理系统都可以）是为了管理第三方公司和设备的。`,
          duty: `负责框架的搭建、权限模块和部分页面的编写。<br /><br />页面包括菜单管理、组织管理、账号管理、角色管理、地区管理。`
        },
        {
          title: '个人简历',
          time: '2018.07-至今',
          belong: '个人',
          description: `技术栈：vue + vue-router<br /><br />地址： http://resume.tony93.top`,
          duty: `设计+前端开发`
        },
        {
          title: '诗词网站',
          time: '2018.06-至今',
          belong: '个人',
          description: `一个可以查看大量古典诗词（包括部分近现代）的网站。可以查看随机诗词，可以搜索标题、诗人、内容，可以查看诗人列表。<br /><br />网站兼容移动端和 ie9+。`,
          duty: `网站设计+前端开发+后端开发。`
        },
        {
          title: 'tiny-utils.js',
          time: '2019.01-至今',
          belong: '个人',
          description: `个人用代码库。<br /><br />地址：https://github.com/tonyzhou1890/tiny-utils.js`,
          duty: `base 部分——类型判定<br />string 部分——字符串方法<br />array 部分——数组方法<br />object 部分——对象方法<br >functions 部分——函数工具<br />date 部分——日期方法<br />validate 部分——验证方法<br />tree 部分——树方法<br />UI 部分——第三方库ui增强或自实现ui组件<br />directive 部分——vue指令`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$bgc: seashell;
$blue: rgb(84, 110, 226);
$lightBlue: rgb(119, 139, 233);
$lightGray: lightgray;
$white: white;
.body {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  color: #444;
  font-family: "Junction",Helvetica,Arial,sans-serif;
  ul {
    margin-top: 0;
  }
  .title {
    height: 4.7rem;
    line-height: 4.7rem;
  }
  h2 {
    font-size: 1.6rem;
    line-height: 2rem;
    color: $lightBlue;
    width: auto;
    display: inline-block;
    i, svg {
      font-size: 1.6rem;
      margin-right: 20px;
    }
  }
  .filter-list {
    float: right;
    display: none;
    .filter {
      background-color: $lightBlue;
      padding: 5px;
      cursor: pointer;
      margin-right: 5px;
      color: $white;
      transition: all .3s;
      position: relative;
      user-select: none;
      i, .svg {
        font-size: 1rem;
        color: $lightBlue;
        background-color: $white;
      }
      &:hover {
        background-color: $blue;
      }
      > input[type='checkbox'] {
        display: none;
      }
      &.no-active {
        background-color: $lightGray;
        i, .svg {
          color: $white;
        }
      }
    }
  }
  .skill {
    .skill-list {
      overflow: hidden;
      li {
        float: left;
        width: 33%;
        font-size: 1.25rem;
        height: 2.5rem;
        padding: 12px 0 0 0;
        i, .svg {
          font-size: 1.25rem;
          margin-right: 0.5rem;
        }
      }
      .skill-list-leave-to, .skill-list-enter {
        opacity: 0;
        padding-top: 0px;
        height: 1px;
      }
      .skill-list-enter-active {
        transition: opacity .5s .5s, padding-top .5s .5s, height .5s;
      }
      .skill-list-leave-active {
        transition: opacity .5s, padding-top .5s, height .5s .5s;
      }
    }
  }
  .experence {
    .experence-list {
      overflow: hidden;

      .ex-title {
        display: inline-block;
        margin: 16px 0 0 0;
        font-size: 1.2rem;
      }
      .ex-time {
        float: right;
        font-size: 1rem;
        line-height: 1.6rem;
        margin: 16px 0 0 0;
      }
      hr {
        margin: 4px 0;
      }
      .ex-location {
        margin: 0 0 16px 0;
        font-size: 1rem;
        font-weight: bold;
        color: $lightBlue;
      }
      .experence-list-leave-to, .experence-list-enter {
        opacity: 0;
        margin-top: -50px;
      }
      .experence-list-enter-active {
        transition: opacity .5s .3s, margin-top .3s;
      }
      .experence-list-leave-active {
        transition: opacity .5s, margin-top .5s .2s;
      }
    }
  }
  .work {
    .work-list {
      overflow: hidden;
      li {
        overflow: hidden;
        position: relative;
        padding: 0.2rem;
        border-radius: 0.4rem;
        box-sizing: border-box;
        .header {
          .title {
            display: inline-block;
            margin: 16px 0 0 0;
            font-size: 1.2rem;
            height: auto;
            line-height: initial;
          }
          .time {
            float: right;
            font-size: 1rem;
            line-height: 1.6rem;
            margin: 16px 0 0 0;
          }
        }
        hr {
          margin: 4px 0;
        }
        .belong {
          margin: 0 0 16px 0;
          font-size: 1rem;
          font-weight: bold;
          color: $lightBlue;
        }
        .content {
          .item-name {
            font-weight: bold;
          }
          .item-content {
            padding-left: 2rem;
          }
        }
      }
      .work-list-leave-to, .work-list-enter {
        opacity: 0;
        width: 0px;
      }
      .work-list-enter-active {
        transition: opacity .5s .5s, width .5s;
      }
      .work-list-leave-active {
        transition: opacity .5s, width .7s .5s;
      }
    }
  }
  .copyright {
    text-align: center;
    font-size: 1.6rem;
    color: $lightBlue;
    margin-top: 1.5rem;
  }
}

@media screen and (max-width: 800px) {
  .body {
    .work {
      .work-list {
        li {
          width: 50%;
        }
      }
    }
  }
}

@media screen and (max-width: 520px) {
  .body {
    .title {
      height: auto;
      line-height: normal;
      > h2 {
        display: block;
      }
      .filter-list {
        float: initial;
        .filter {
          display: inline-block;
          margin: 5px 5px 5px 0;
        }
      }
    }
    .work {
      .work-list {
        li {
          width: 100%;
        }
      }
    }
  }
}
</style>
