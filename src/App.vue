<template>
  <div id="app">
    <transition :name="name" mode="out-in" ref='transition'>
      <router-view/>
      }
    </transition>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'App',
  data () {
    return {
      name: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      let toHistory = to.query.history || 0
      let fromHistory = from.query.history || 0
      parseInt(toHistory) >= parseInt(fromHistory) ? this.name = 'slide-left' : this.name = 'slide-right'
    }
  }
}
</script>

<style  lang='stylus' rel="stylesheet/stylus">
  @import 'common/stylus/index'
</style>
