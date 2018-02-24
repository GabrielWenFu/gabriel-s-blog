<template>
  <div class="gabriel-content">
    <GabrielMenu :menuData='menuData' ref='GabrielMenu'>qqqqqqqq</GabrielMenu>
    <GabrielHeader @showMenu='showmenu'></GabrielHeader>
  </div>
</template>
<script type='text/ecmascript-6'>
import GabrielHeader from 'components/gabriel-header/gabriel-header.vue'
import GabrielMenu from 'components/gabriel-menu/gabriel-menu.vue'
export default {
  components: {
    GabrielHeader,
    GabrielMenu
  },
  data () {
    return {
      node: 20,
      imgurl: null,
      base: null,
      menuData: [{
        name: '知识库'
      }, {
        name: '娱乐'
      }, {name: '个人爱好'
      }]
    }
  },
  methods: {
    showmenu () {
      this.$refs.GabrielMenu.show()
    }
  },
  mounted () {
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .gabriel-content
    position: fixed
    left: 0
    right: 0
    bottom: 0
    top: 0
    p
      display: inline-block
      width: 120px
      heigth: 36px
      border-radius: 6px
      background-color: #e3efd1
      text-align: center
      line-height: 36px
      cursor: pointer
</style>
