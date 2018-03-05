<template>
  <div class="gabriel-menu" :class = "{ 'gabriel-menu-animate' : MenuStatus }">
    <div class="gabriel-menu-close" @click="hide">
    </div>
    <div class="gabriel-menu-Mask" @click="hide">
    </div>
    <ul class="gabirel-menu-content">
      <li v-for="(item, index ) in menuData" :key="index" >
        <span @click="routerLink(item.linkName)">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script type='text/ecmascript-6'>
import { mapActions } from 'vuex'
import { SETTINGS_ROUTERSTATUS } from 'store'

export default {
  data () {
    return {
      MenuStatus: false
    }
  },
  props: {
    menuData: {
      type: Array,
      default: function () {
        return [ {
          name: '首页',
          link: '/',
          linkName: 'index'
        }, {
          name: '知识库',
          link: '/knowledge-base',
          linkName: 'KnowledgeBase'
        }, {
          name: '娱乐',
          link: '/entertainment',
          linkName: 'Entertainment'
        }, {
          name: '个人爱好',
          link: '/personal-hobby',
          linkName: 'PersonalHobby'
        }, {
          name: '关于我',
          link: '/about-me',
          linkName: 'AboutMe'
        }]
      }
    }
  },
  methods: {
    ...mapActions([SETTINGS_ROUTERSTATUS]),
    show () {
      this.MenuStatus = true
    },
    hide () {
      this.MenuStatus = false
    },
    routerLink (linkName) {
      let options = {
        routerstatus: linkName
      }
      let time = new Date().valueOf()
      this.SETTINGS_ROUTERSTATUS(options)
      this.$router.push({name: linkName, query: {'history': time}})
    }
  }
}
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.gabriel-menu
  width: 100%
  position: absolute
  font-size: 0.18rem
  left: -100%
  top: 0
  bottom: 0
  right: 0
  transition: left 0.5s
  .gabriel-menu-close
    width: 0.26rem
    height: 0.26rem
    position: absolute
    left: 1.8rem
    top: 0.1rem
    z-index: 99
    &:after,&:before
      content: ''
      display: inline-block
      width: 100%
      height: 0.04rem
      background-color: #202020
      position: absolute
      left: 0
      top: 0.11rem
    &:after
      transform: rotate(137deg)
    &:before
      transform: rotate(45deg)
  .gabriel-menu-Mask
    background-color: rgba(227,239,209,0.6)
    opacity: 0.6
    height: 100%
  ul
    position: absolute
    top: 0
    left: 0
    width: 2rem
    background-color: #d1e3db
    min-height: 80%
    padding: 0.4rem 0.15rem
    li
      padding: 0.04rem
      color: #e47542
      font-weight: 600
      span
        display: block
        width: max-content
        &:after
          content: ''
          display: block
          height: 0.04rem
          background-color: #a9987c
          width: 0
          margin-top: 0.04rem
        &:hover:after
          animation: hoverAfter 0.3s
.gabriel-menu-animate
  left: 0
@keyframes hoverAfter
  0%
    width: 0
    opacity: 0
  100%
    width: 100%
    opacity: 1
</style>
