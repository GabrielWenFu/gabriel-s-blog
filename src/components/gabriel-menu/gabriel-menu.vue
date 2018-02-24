<template>
  <div class="gabriel-menu" :class = "{ 'gabriel-menu-animate' : MenuStatus }">
    <div class="gabriel-menu-close" @click="hide">
    </div>
    <div class="gabriel-menu-Mask">
    </div>
    <ul class="gabirel-menu-content">
      <li v-for="(item, index ) in menuData" :key="index" ><span>{{ item.name }}</span></li>
    </ul>
  </div>
</template>
<script type='text/ecmascript-6'>
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
        return []
      }
    }
  },
  methods: {
    show () {
      this.MenuStatus = true
    },
    hide () {
      this.MenuStatus = false
    }
  }
}
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
</style>
