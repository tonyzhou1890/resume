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
            :class="{'no-active':!work.codepen}"
          ><svg-icon icon-class="hook" class="svg" />
            Codepen
            <input
              type="checkbox"
              v-model="work.codepen"
            >
          </label>
          <label
            class="filter"
            :class="{'no-active':!work.github}"
          ><svg-icon icon-class="hook" class="svg" />
            Github
            <input
              type="checkbox"
              v-model="work.github"
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
          v-show="item.filter"
        >
          <a
            :href="item.href"
            target="_blank"
          >
            <img
              :src="item.pic"
            >
            <div
              :data-o="index % 2"
              :style="{
                backgroundColor: item.bgc
              }"
              :class="{'hidden': index % 2}">
              <p
                v-text="item.title"
              ></p>
            </div>

          </a>
        </li>
      </transition-group>
    </section>
    <p class="copyright">© 2018 Tony</p>
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
        github: true,
        codepen: true
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
          icon: 'vuejs',
          text: 'element-ui',
          filter: this.skill.lib
        },
        {
          icon: '',
          text: 'echarts',
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
          icon: 'less',
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
          ex: '就读于盐城师范学院物理系。',
          filter: this.experence.study
        },
        {
          title: '网站编辑',
          time: '2016.11-2018.2',
          location: '苏州志高装潢设计工程有限公司',
          ex: '1.负责网站及微信公众号文章的撰写和更新。<br />2.公司网站页面设计、开发及维护。',
          filter: this.experence.work
        },
        {
          title: '自学web前端',
          time: '2018.3-至今',
          location: '苏州',
          ex: '学习web前端相关知识。',
          filter: this.experence.study
        }
      ]
    },
    work_list: function() {
      return [
        {
          pic: require('@/assets/image/calculator.JPG'),
          location: 'codepen',
          filter: this.work.codepen,
          href: 'https://codepen.io/tonyzhou1890/full/YLByzW',
          bgc: 'purple',
          title: 'calculator'
        },
        {
          pic: require('@/assets/image/pomodoro clock.JPG'),
          location: 'codepen',
          filter: this.work.codepen,
          href: 'https://codepen.io/tonyzhou1890/full/WJPyer',
          bgc: 'green',
          title: 'pomodoro clock'
        },
        {
          pic: require('@/assets/image/simon game.JPG'),
          location: 'codepen',
          filter: this.work.codepen,
          href: 'https://codepen.io/tonyzhou1890/full/ELJEZO',
          bgc: 'darkgreen',
          title: 'simon game'
        },
        {
          pic: require('@/assets/image/twitchtv JSON API.JPG'),
          location: 'codepen',
          filter: this.work.codepen,
          href: 'https://codepen.io/tonyzhou1890/full/xjNgeo',
          bgc: 'gray',
          title: 'twitch.tv JSON API'
        },
        {
          pic: require('@/assets/image/诗词.jpg'),
          location: 'codepen',
          filter: this.work.github,
          href: 'https://github.com/tonyzhou1890/poem',
          bgc: 'orange',
          title: '诗词'
        },
        {
          pic: require('@/assets/image/爱家.jpg'),
          location: 'codepen',
          filter: this.work.github,
          href: 'https://github.com/tonyzhou1890/love-home',
          bgc: 'lightblue',
          title: '爱家'
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
        width: 33%;
        float: left;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
        div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          padding: 0;
          margin: 0;
          color: $white;
          font-size: 20px;
          font-weight: bold;
          transition: opacity .5s;
          p {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            font-size: 1.5rem;
            height: 2rem;
          }
        }
        .hidden {
          opacity: 0;
        }
        &:hover div[data-o="0"]{
          opacity: 0;
        }
        &:hover div[data-o="1"]{
          opacity: 1;
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
